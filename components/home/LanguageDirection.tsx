import React from "react";
import { MdCompareArrows } from "react-icons/md";

type IProps = {
  srcLang: string;
  tgtLang: string;
  onSwitchLang: () => void;
};

const getLanguageMap = (code: string): string => {
  if (code === "en") {
    return "영어";
  } else {
    return "한국어";
  }
};

const LanguageDirection: React.FC<IProps> = ({
  srcLang,
  tgtLang,
  onSwitchLang,
}) => {
  return (
    <div className="grid grid-cols-3">
      <span className="flex justify-center">{getLanguageMap(srcLang)}</span>
      <button onClick={onSwitchLang} className="flex justify-center">
        <MdCompareArrows />
      </button>
      <span className="flex justify-center">{getLanguageMap(tgtLang)}</span>
    </div>
  );
};

export default LanguageDirection;
