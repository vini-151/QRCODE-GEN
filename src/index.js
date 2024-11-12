import prompt from "prompt";
import mainPrompt from "./prompts/prompt_main";


async function main(){
    prompt.get(mainPrompt, async (err, choice) => {
        if(choice.select == 1) console.log("QRCODE selecionado");
        if(choice.select == 2) console.log("Senha selecionado");
    })

    prompt.start();

}



main();