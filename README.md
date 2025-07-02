# schedule

GPP Schedule is the app that allows QCs to interact with the (Automated Scheduler)[https://github.com/gemini-hlsw/scheduler]

## Start local development environment

### Node installation

An installation of Node.js version 22 is required.

For Linux and macOS the following steps can be used

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.17.0".
nvm current # Should print "v22.17.0".
# Download and install pnpm:
corepack enable pnpm
# Verify pnpm version:
pnpm -v
```

### Environmental Variables

The UI can connect to any running scheduler server, local or cloud. By default it will try to connect to the `heroku` running instance.

To connect a local server running on the port 8000 (default server value), create an `.env` file with the following content on this repository root directory.

```bash
VITE_API_URL=http://localhost:8000/graphql
```

You should be able to see the `.env` file in the same level of the `package.json` file, like in the following tree.

```
.
├── codegen.yml
├── .env
├── .gitignore
├── index.html
├── package.json
...
└── src
```

### Install web dependencies

Open a terminal in the root directory of this repository and run

```bash
pnpm install
```

### Start web server

As the previous step, in the root directory of the repository run

```bash
pnpm dev
```
