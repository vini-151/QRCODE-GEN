import prompt from "prompt";
import PromptQRCode from "../../prompts/prompt-qrcode.js";
import handler from "./handle.js";

async function createQRcode() {
    prompt.get(PromptQRCode, handler);

    prompt.start();
}

export default createQRcode;