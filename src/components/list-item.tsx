import React from "react";

export const ListItem: React.FC = (props: { children?: any }) => (
  <div className="border-b-2 border-b-neutral-200 flex-row justify-center align-middle py-3 px-2 mb-1">
    {props.children}
  </div>
);
