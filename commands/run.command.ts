import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";

export class RunCommand extends AbstractCommand {
  public load(program: Command): void {
    program.command("run").action(() => {
      this.action.handle();
    });
  }
}
