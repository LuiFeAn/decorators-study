import { Fast } from "./lib/fast";
import "./modules/controllers/hello-world.controller";

function start() {
  const PORT_ = 3002;

  const fast = new Fast();

  fast.startServerOn(PORT_, () =>
    console.log(`Servidor Iniciado Na Porta ${PORT_}`)
  );
}

start();
