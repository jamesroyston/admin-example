import React, { useState } from "react";
import cx from "classnames";
import { useHistory } from "react-router-dom";
import { capitalize } from "lodash";
import { HOSPITALS } from "@src/reducers/constants";
import { ALL_PATH } from "@src/routes";

export const Tabs = () => {
  const history = useHistory();
  const [selected, setSelected] = useState<null | number>(0);

  const tabs = [
    {
      title: capitalize(HOSPITALS),
      path: ALL_PATH,
    },
    {
      title: capitalize("Example"),
      path: ALL_PATH,
    },
    {
      title: capitalize("Example"),
      path: ALL_PATH,
    },
  ];

  const containerClassNames = cx(
    `cursor-pointer hover:underline font-medium text-xl py-3 border-b-2`
  );

  return (
    <div className="border-t-2">
      {tabs.map((tab, index) => (
        <div
          key={`${tab.title}_${index}`}
          className={`${containerClassNames} ${cx(
            selected !== index ? "text-neutral-600" : "text-emerald-500"
          )}`}
          onClick={() => {
            setSelected(index);
            history.push(tab.path);
          }}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};
