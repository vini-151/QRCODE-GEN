import prompt from "prompt";
import mainPrompt from "./prompts/prompt_main.js";
import createQRcode from "./services/qrcode/create.js";


async function main(){
    prompt.get(mainPrompt, async (err, choice) => {
        if(choice.select == 1) await createQRcode();
        if(choice.select == 2) console.log("Senha selecionado");
    })

    prompt.start();

}



main();