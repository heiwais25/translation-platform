import React from "react";
import useTranslation from "../../hooks/useTranslation";

type IProps = {
  engine: string;
  srcText: string;
  srcLang: string;
  tgtLang: string;
};

const Translation: React.FC<IProps> = ({
  engine,
  srcLang,
  srcText,
  tgtLang,
}) => {
  const { tgtText, loading } = useTranslation({
    engine,
    srcLang,
    tgtLang,
    srcText,
  });
  console.log({ loading });
  return (
    <div className="flex flex-col p-2">
      <div className="whitespace-pre">{tgtText}</div>
      {loading && <div>로딩...</div>}
    </div>
  );
};

export default Translation;
