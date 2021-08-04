import { RunAction } from "./../actions/run.action";
import { SleepAction } from "./../actions/sleep.action";
import { SleepCommand } from "./sleep.command";
import { RunCommand } from "./run.command";
import { Command } from "commander";

export class CommandLoader {
  public static load(program: Command): void {
    new RunCommand(new RunAction()).load(program);
    new SleepCommand(new SleepAction()).load(program);
  }
}
