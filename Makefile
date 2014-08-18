.PHONY: test list unit

test: unit lint

lint:
	@node_modules/.bin/jshint src

unit:
	@node_modules/.bin/mocha
