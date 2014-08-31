.PHONY: doc test list unit

test: unit lint

doc:
	@node_modules/.bin/jsdoc -c jsdoc.config.json src README.md

lint:
	@node_modules/.bin/jshint src

unit:
	@node_modules/.bin/mocha
