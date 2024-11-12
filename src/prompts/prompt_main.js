const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - Qrcode 2 - Gerador de senha)",
        pattern: "/^[1-2]+$/", //regex (regular expression) que permite ao user escolher entre um ou dois
        message: "Escolha uma opção váilida",
        required: true,
    },
];

export default mainPrompt;