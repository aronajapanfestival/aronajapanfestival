.PHONY: help dev build build-dev lint preview install clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make build-dev  - Build for development"
	@echo "  make lint       - Run ESLint"
	@echo "  make preview    - Preview production build"
	@echo "  make install    - Install dependencies"
	@echo "  make clean      - Remove node_modules and build artifacts"

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Build for development
build-dev:
	npm run build:dev

# Run linter
lint:
	npm run lint

# Preview production build
preview:
	npm run preview

# Install dependencies
install:
	npm install

# Clean build artifacts and dependencies
clean:
	rm -rf node_modules dist
	@echo "Cleaned node_modules and dist directories"
