status  := $(shell git status --porcelain)
version := $(shell git describe --tags)
regex   := "s/\([\"\']version[\"\'][[:space:]]*:[[:space:]]*\)\([\"\'].*[\"\']\)/\1\"$(version)\"/g"

.PHONY: all build bump clean doc lint release setup test unit

all: setup build

clean:
	@rm -rf build

setup:
	@npm install

build:
	@mkdir -p build
	@NODE_ENV=build webpack --colors --optimize-minimize --progress

test: unit lint

unit:
	@node_modules/.bin/mocha

lint:
	@node_modules/.bin/jshint src

doc:
	@test -z "$(status)"
	@node_modules/.bin/jsdoc -c jsdoc.config.json src README.md
	@git checkout gh-pages
	@rsync -a --delete --exclude=".git*" --exclude-from=.gitignore doc/ ./
	@git add --all .
	@git commit -m "Publish $(version)."
	@git push
	@git checkout master

bump:
	@sed -i "" $(regex) bower.json
	@sed -i "" $(regex) package.json

release: test build bump
	@git changelog -t "v$(version)"
	@git add --all .
	@git release "v$(version)"
	@npm publish
