import TranslateLibs from "@google-cloud/translate";
import { TranslatorInput } from "./translator";

const { Translate } = TranslateLibs.v2;
const translate = new Translate({ key: process.env.GOOGLE_API_KEY });

export async function translateText({
  srcLang,
  srcText,
  tgtLang,
}: TranslatorInput): Promise<string> {
  let [translations] = await translate.translate(srcText, {
    from: srcLang,
    to: tgtLang,
  });
  console.log(translations);

  return translations;
}
