import React, { ReactNode } from "react";

type IProps = {
  title: string | ReactNode;
};

const MainRowItem: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="w-[480px] border p-2 space-y-2 shadow-md">
      <div className="text-xl border-b p-2">{title}</div>
      {children}
    </div>
  );
};

export default MainRowItem;
