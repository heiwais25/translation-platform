import axios from "axios";
import { useEffect, useState } from "react";

type IParams = {
  engine: string;
  srcLang: string;
  tgtLang: string;
  srcText: string;
};

const useTranslation = ({ engine, srcLang, tgtLang, srcText }: IParams) => {
  const [tgtText, setTgtText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log({ srcText: srcText.split("\n") });
    if (srcText.length === 0) {
      setTgtText("");
      return;
    }
    setLoading(true);
    const srcTextList = srcText.split("\n");
    Promise.all(
      srcTextList.map((text) =>
        axios.post<{ tgtText: string }>("/api/translate", {
          engine,
          srcLang,
          tgtLang,
          srcText: text,
        })
      )
    )
      .then((resList) => resList.map((res) => res.data.tgtText))
      .then((tgtTextList) => setTgtText(tgtTextList.join("\n")))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [setLoading, engine, srcLang, tgtLang, srcText]);

  return { tgtText, loading };
};

export default useTranslation;
