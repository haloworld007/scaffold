import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";

export class SleepCommand extends AbstractCommand {
  public load(program: Command): void {
    program.command("sleep").action(() => {
      this.action.handle();
    });
  }
}
