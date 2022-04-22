#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const y = chalk.yellow;
const g = chalk.green;
const b = chalk.bold;

const cardOptions = {
    padding: 1,
    margin: 1,
};

const content = `                       ${b("Giulio Ganci")}

${g("Job")}                Javascript Fullstack Developer
${g("Twitter")}            ${y("https://twitter.com/toriphes")}
${g("GitHub")}             ${y("https://github.com/toriphes")}
${g("LinkedIn")}           ${y("https://linkedin.com/in/giulioganci/")}`;

const card = boxen(content, cardOptions);

console.log(card);