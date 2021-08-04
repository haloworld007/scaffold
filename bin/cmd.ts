#!/usr/bin/env node
import { Command } from "commander";
import { CommandLoader } from "./../commands/command.loader";

const bootstrap = () => {
  const program = new Command();
  program
    .version(
      require("../package.json").version,
      "-v, --version",
      "Output the current version."
    )
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

  CommandLoader.load(program);
  // 解析参数
  program.parse(process.argv);
  // 如果没有参数，输出help信息
  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
