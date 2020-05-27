## Installation and run in dev

Every app (or workspace) resides in ./apps.
Each app is a full featured nest application with its own package.json and dockerfile.

The ./lib folder contains the commons libs. It's managed by lerna and every package is ready to be deployed to npm. Although we don't need to publish them in order to run the app in prod.

```bash
cd apps/accounts
npm install
```

## Running the app

```bash
cd apps/accounts
# watch mode
npm run start:dev
```

```bash
# Build the image from the monorepo root folder, we need this to have libs in the docker build context
docker build -f apps/accounts/Dockerfile .
```
