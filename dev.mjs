import { spawn } from "node:child_process";
import { createServer } from "node:net";

function startProcess(label, command, args, env) {
  const child = spawn(command, args, {
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  child.on("error", (error) => {
    console.error(`[${label}] Failed to start`, error);
    shutdown(1);
  });

  child.on("exit", (code, signal) => {
    if (shutdownInitiated) {
      return;
    }

    if (code !== 0) {
      console.error(
        `[${label}] exited with ${code ?? signal ?? "unknown"}, stopping the remaining processes.`,
      );
      shutdown(code ?? 1);
    }
  });

  return child;
}

async function findAvailablePort() {
  const probe = createServer();

  await new Promise((resolve, reject) => {
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", resolve);
  });

  const address = probe.address();
  const port = typeof address === "object" && address ? address.port : undefined;

  await new Promise((resolve, reject) => {
    probe.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

  if (!port) {
    throw new Error("Could not determine an available port.");
  }

  return port;
}

let shutdownInitiated = false;
let children = [];

function shutdown(exitCode) {
  if (shutdownInitiated) {
    return;
  }

  shutdownInitiated = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill("SIGINT");
    }
  }

  process.exit(exitCode);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

process.env.NODE_ENV = "development";

const apiPort = await findAvailablePort();
const webPort = Number(process.env.PORT ?? 21113);

const apiEnv = {
  ...process.env,
  PORT: String(apiPort),
};

const webEnv = {
  ...process.env,
  PORT: String(webPort),
  BASE_PATH: process.env.BASE_PATH ?? "/",
  API_PORT: String(apiPort),
};

console.log(`[dev] API server: http://127.0.0.1:${apiPort}`);
console.log(`[dev] Portfolio:   http://127.0.0.1:${webPort}`);

const apiProcess = startProcess(
  "api-server",
  "pnpm",
  ["--filter", "@workspace/api-server", "run", "dev"],
  apiEnv,
);
const webProcess = startProcess(
  "portfolio",
  "pnpm",
  ["--filter", "@workspace/portfolio", "run", "dev"],
  webEnv,
);

children = [apiProcess, webProcess];
