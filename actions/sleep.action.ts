import { Input } from "../commands";
import { AbstractAction } from "./abstract.action";

export class SleepAction extends AbstractAction {
  public async handle(inputs?: Input[], options?: Input[]): Promise<void> {
    console.log("i am sleeping");
  }
}
