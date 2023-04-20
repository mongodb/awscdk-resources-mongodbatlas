.PHONY: lint
lint: ## Run linter
	npx projen eslint
	actionlint -verbose -color

.PHONY: devtools
devtools:  ## Install dev tools
	@echo "==> Installing dev tools..."
	bash <(curl https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
	npm install projen
	npm install publib 
	npm install npx

.PHONY: build
build:
	npx projen build
