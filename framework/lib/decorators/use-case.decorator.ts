import {
  UseCaseTypeConstructor,
  useCaseContainer,
} from "../containers/use-case-container";

function IsUseCase<T extends UseCaseTypeConstructor>() {
  return function (target: T) {
    const instanceOfUseCase = new target();
    useCaseContainer.push(target.name, instanceOfUseCase);
  };
}

export { IsUseCase };
