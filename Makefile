.PHONY: clean dev dist doc lint node_modules publish-api publish-npm release test

node_modules:
	@npm install

dev:
	@node_modules/.bin/rollup -c -w

dist:
	@node_modules/.bin/rollup -c

test:
	@node_modules/.bin/jest

watch:
	@node_modules/.bin/jest --watch

lint:
	@node_modules/.bin/standard

release: dist doc publish-api publish-npm

doc:
	@node_modules/.bin/documentation build src/** -f html -o doc

publish-api:
	@aws s3 sync ./doc/ s3://fkit.joshbassett.info/ --acl public-read --delete --cache-control 'max-age=300'

publish-npm:
	@npm publish

clean:
	@rm -rf dist doc node_modules
