import { spawnSync } from "node:child_process";
import { createServer } from "node:net";

process.env.NODE_ENV = "development";

async function getAvailablePort() {
  const server = createServer();

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  const port = typeof address === "object" && address ? address.port : undefined;

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

  if (!port) {
    throw new Error("Could not determine an available development port.");
  }

  return port;
}

process.env.PORT ??= String(await getAvailablePort());

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: process.env,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(process.execPath, ["./build.mjs"]);
run(process.execPath, ["--enable-source-maps", "./dist/index.mjs"]);
