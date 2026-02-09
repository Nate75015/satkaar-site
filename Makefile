.PHONY: install dev build start lint clean docker-build docker-run help

# Default target
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install       Install dependencies (npm install)"
	@echo "  dev           Start dev server (npm run dev)"
	@echo "  build         Build for production (npm run build)"
	@echo "  start         Start production server (npm run start)"
	@echo "  lint          Run ESLint (npm run lint)"
	@echo "  clean         Remove node_modules and .next"
	@echo "  docker-build  Build Docker image for Cloud Run"
	@echo "  docker-run    Run the app in Docker (port 3000)"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

clean:
	rm -rf node_modules .next

# Docker / Google Cloud Run
DOCKER_IMAGE ?= satkaar-site

docker-build:
	docker build -t $(DOCKER_IMAGE) .

docker-run:
	docker run -p 3000:3000 $(DOCKER_IMAGE)
