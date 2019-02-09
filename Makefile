.PHONY: clean dev dist doc lint node_modules publish-api publish-npm release test

node_modules:
	@npm install

dev:
	@npx rollup -c -w

dist:
	@npx rollup -c

test:
	@npx jest

watch:
	@npx jest --watch

lint:
	@npx standard

release: dist doc publish-api publish-npm

doc:
	@npx documentation build src/** -f html -o docs

publish-api:
	@aws s3 sync ./docs/ s3://fkit.joshbassett.info/ --acl public-read --delete --cache-control 'max-age=300'

publish-npm:
	@npm publish

clean:
	@rm -rf dist doc node_modules
