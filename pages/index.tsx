import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GnB from "../components/GnB";
import styles from "../styles/Home.module.css";
import TextareaAutosize from "react-textarea-autosize";
import Translation from "../components/home/Translation";
import MainRowItem from "../components/home/MainRowItem";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import LanguageDirection from "../components/home/LanguageDirection";

const Home: NextPage = () => {
  const [tmpText, setTmpText] = useState("");
  const [srcText, setSrcText] = useState("");
  const [srcLang, setSrcLang] = useState("en");
  const [tgtLang, setTgtLang] = useState("ko");

  const onTextUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTmpText(e.target.value);
  };

  const onTranslationClick = () => {
    setSrcText(tmpText);
  };

  const onSwitchLang = () => {
    const curSrcLang = srcLang;
    const curTgtLang = tgtLang;
    setSrcLang(curTgtLang);
    setTgtLang(curSrcLang);
  };

  const onTextareaKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      setSrcText(tmpText);
    }
  };

  return (
    <div className="relative flex-col">
      <Head>
        <title>Translation Plaform</title>
        <meta
          name="description"
          content="Plaform to compare the translation results from multiple services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GnB />
      <main className="z-0 p-2 flex">
        <div className="w-full flex space-x-2">
          <MainRowItem
            title={
              <LanguageDirection
                srcLang={srcLang}
                tgtLang={tgtLang}
                onSwitchLang={onSwitchLang}
              />
            }
          >
            <TextareaAutosize
              className="w-full resize-none p-2"
              minRows={20}
              onChange={onTextUpdate}
              onKeyPress={onTextareaKeyPress}
            />
            <button
              className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-sm"
              onClick={onTranslationClick}
            >
              <span>번역하기</span>
            </button>
          </MainRowItem>
          <MainRowItem title="SR Translate">
            <Translation
              engine="sr-translate"
              srcLang={srcLang}
              tgtLang={tgtLang}
              srcText={srcText}
            />
          </MainRowItem>
          <MainRowItem title="Google">
            <Translation
              engine="sr-translate"
              srcLang="en"
              tgtLang="ko"
              srcText="hello"
            />
          </MainRowItem>
          <MainRowItem title="Papago">
            <Translation
              engine="sr-translate"
              srcLang="en"
              tgtLang="ko"
              srcText="hello"
            />
          </MainRowItem>
        </div>
      </main>
    </div>
  );
};

export default Home;
