status := $(shell git status --porcelain)
version := $(shell git describe --tags)

.PHONY: doc test list unit

test: unit lint

doc:
	@test -z "$(status)"
	@node_modules/.bin/jsdoc -c jsdoc.config.json src README.md
	@git checkout gh-pages
	@rsync -a --delete --exclude='.git*' --exclude-from=.gitignore doc/ ./
	@git add .
	@git commit -m "Publish $(version)."
	@git push
	@git checkout master

lint:
	@node_modules/.bin/jshint src

unit:
	@node_modules/.bin/mocha
