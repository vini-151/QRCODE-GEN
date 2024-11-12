import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - Qrcode 2 - Gerador de senha)"),
        pattern: /^[1-2]+$/, //regex (regular expression) que permite ao user escolher entre um ou dois
        message: chalk.red.italic("Escolha uma opção válida"),
        required: true,
    },
];

export default mainPrompt;