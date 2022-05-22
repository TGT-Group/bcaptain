## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Create a new migration

```bash
# First time
$ npm run typeorm migration:create -- -n InitialDev -d src/migrations

# Create a new migration from existing schema
$ npm run typeorm migration:generate -- -n UserImpl -d src/migrations
```


