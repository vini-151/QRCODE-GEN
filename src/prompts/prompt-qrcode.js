import chalk from "chalk";

const PromptQRCode = [

    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QR Code(1 - Normal 2 - terminal"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Erro, escolha entre 1 ou 2"),
        required: true,
    },

];

export default PromptQRCode;