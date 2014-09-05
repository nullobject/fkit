status  := $(shell git status --porcelain)
version := $(shell git describe --tags)

.PHONY: all clean doc lint production setup test unit

all: setup production

clean:
	@rm -rf build

setup:
	@npm install

production: build/fkit.js

build/fkit.js:
	@mkdir -p build
	@NODE_ENV=production webpack --colors --optimize-minimize --progress

test: unit lint

unit:
	@node_modules/.bin/mocha

lint:
	@node_modules/.bin/jshint src

doc:
	@test -z "$(status)"
	@node_modules/.bin/jsdoc -c jsdoc.config.json src README.md
	@git checkout gh-pages
	@rsync -a --delete --exclude='.git*' --exclude-from=.gitignore doc/ ./
	@git add --all .
	@git commit -m "Publish $(version)."
	@git push
	@git checkout master
