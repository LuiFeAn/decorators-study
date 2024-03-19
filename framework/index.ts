import { Fast } from "./lib/fast";
import { IsController } from "./lib/decorators";
import { controllerContainer } from "./lib/controller-container";

@IsController("/")
class HellWorldController {
  get() {
    return {
      name: "Luis Fernando",
      age: 23,
    };
  }
}

const fast = new Fast({
  controllerContainer,
});

const PORT_ = 3002;

fast.startServerOn(PORT_, () =>
  console.log(`Servidor Iniciado Na Porta ${PORT_}`)
);
