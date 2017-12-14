name     = fkit
status  := $(shell git status --porcelain)
version := $(shell git describe --tags)
regex   := "s/\([\"\']version[\"\'][[:space:]]*:[[:space:]]*\)\([\"\'].*[\"\']\)/\1\"$(version)\"/g"

.PHONY: bump changelog clean dev doc lint publish publish-api publish-npm production release test unit

dev: node_modules
	@node_modules/.bin/webpack --colors --progress -w

production: node_modules
	@node_modules/.bin/webpack --colors --progress --optimize-minimize --env.NODE_ENV=production
	@node_modules/.bin/babel src --out-dir build

test: unit lint

release: production test publish

publish: bump changelog publish-api publish-npm

unpublish: delete-tag unpublish-npm

clean:
	@rm -rf doc node_modules

node_modules:
	@npm install

# Runs the unit tests.
unit: node_modules
	@node_modules/.bin/mocha

# Runs jslint.
lint: node_modules
	@node_modules/.bin/standard "*.js" "src/**/*.js" "test/**/*.js"

# Generates the API documentation.
doc: node_modules
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

delete-tag:
	@git tag --delete "v$(version)"
	@git push --delete origin "v$(version)"

# Publishes the API documentation.
publish-api: doc
	@test -z "$(status)"
	@git checkout gh-pages
	@git reset --hard origin/gh-pages
	@rsync -a --delete --exclude=".git*" --exclude=CNAME --exclude-from=.gitignore doc/ ./
	@git add --all .
	@git commit -m "Publish $(version)"
	@git push
	@git checkout master

# Publishes the npm package.
publish-npm:
	@npm publish

unpublish-npm:
	@npm unpublish "$(name)@$(version)"
