import { Fast } from "./lib/fast";
import "./infra/controllers/hello-world.controller";

function start() {
  const PORT_ = 3002;

  const fast = new Fast({
    cors: {
      origin: "*",
    },
  });

  fast.startServerOn(PORT_, () =>
    console.log(`Servidor Iniciado Na Porta ${PORT_}`)
  );
}

start();
