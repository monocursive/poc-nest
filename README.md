## Installation and run in dev

Every app (or workspace) resides in ./apps.
Each app is a full featured nest application with its own package.json and dockerfile.

The ./lib folder contains the commons libs. It's managed by lerna and every package is ready to be deployed to npm. Although we don't need to publish them in order to run the app in prod.

```bash
cd accounts
```

```bash
npm install
```

## Running the app

```bash
# watch mode
npm run start:dev
```
