import { Input } from "../commands";
import { AbstractAction } from "./abstract.action";

export class RunAction extends AbstractAction {
  public async handle(inputs?: Input[], options?: Input[]): Promise<void> {
    console.log("i am running");
  }
}
