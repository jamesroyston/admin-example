import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import { capitalize } from "lodash";

import { ALL_PATH, DETAILS_PATH } from "@src/routes";

export const Header = () => {
  const location = useLocation();
  let title = "";

  switch (true) {
    case !!matchPath(location.pathname, {
      path: [DETAILS_PATH],
    }):
      title = "Details";
      break;
    case !!matchPath(location.pathname, { path: [ALL_PATH] }):
    default:
      title = "Hospitals";
      break;
  }

  return <div className="text-3xl">{capitalize(title)}</div>;
};
