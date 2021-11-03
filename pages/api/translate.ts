import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { translateText } from "../../server/translator/google";

type Data = {
  tgtText: string;
};

type SrTranslateResponse = {
  result: string;
  error: string;
  errorMessage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    console.error("Invalid method");
    return;
  }

  const { engine, srcLang, tgtLang, srcText } = req.body;
  let tgtText: string = "";

  if (engine === "sr-translate") {
    const result = await axios.post<SrTranslateResponse>(
      "https://translate.samsung.com/utrans/apis/v1/translate",
      {
        source: srcLang,
        target: tgtLang,
        type: "utrans_homepage",
        profile: "universal",
        id: "e738e108-5f6e-4969-a7aa-ad2a3b23330f",
        query: srcText,
      }
    );

    tgtText = result.data.result;
  } else if (engine === "google") {
    const result = await translateText({ srcLang, tgtLang, srcText });

    tgtText = result;
  }

  res.status(200).json({ tgtText });
}
