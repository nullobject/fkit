status  := $(shell git status --porcelain)
version := $(shell git describe --tags)
regex   := "s/\([\"\']version[\"\'][[:space:]]*:[[:space:]]*\)\([\"\'].*[\"\']\)/\1\"$(version)\"/g"

.PHONY: all build bump changelog clean doc lint publish-api publish-npm release test unit

all: setup build

test: unit lint

release: build test bump changelog publish-api publish-npm

clean:
	@rm -rf doc node_modules

node_modules:
	@npm install

# Builds a production version of libarary.
build: node_modules
	@NODE_ENV=production webpack --colors --optimize-minimize --progress

# Runs the unit tests.
unit:
	@node_modules/.bin/mocha

# Runs jslint.
lint:
	@node_modules/.bin/jshint src

# Generates the API documentation.
doc:
	@node_modules/.bin/jsdoc -c jsdoc.config.json src README.md

# Bumps the version of the bower and npm packages.
bump:
	@sed -i "" $(regex) bower.json
	@sed -i "" $(regex) package.json

# Updates the changelog and tags the release.
changelog:
	@git changelog -t "v$(version)"
	@git add --all .
	@git release "v$(version)"

# Publishes the API documentation.
publish-api: doc
	@test -z "$(status)"
	@git checkout gh-pages
	@rsync -a --delete --exclude=".git*" --exclude-from=.gitignore doc/ ./
	@git add --all .
	@git commit -m "Publish $(version)."
	@git push
	@git checkout master

# Publishes the npm package.
publish-npm:
	@npm publish
