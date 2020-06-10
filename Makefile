NODE_MODULES_TOP = ./node_modules
NODE_BINS = $(NODE_MODULES_TOP)/.bin

.PHONY: all clean comb lint bundle page

all: clean comb lint bundle page

clean:
	rm -rf lib
	mkdir -p lib

comb:
	node ./build-tool csscomb && $(NODE_BINS)/prettier --write "./**/*.{js,ts,tsx,json,md,*rc}"

lint:
	$(NODE_BINS)/tsc --project tsconfig.json --noEmit && $(NODE_BINS)/eslint ./src/**/*.{ts,tsx}

bundle:
	node ./build-tool bundle

page:
	node ./build-tool html index.pug index.html
