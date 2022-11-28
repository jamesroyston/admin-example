import React from "react";
import { last } from "lodash";
import { useHistory, useLocation, matchPath } from "react-router-dom";
import { capitalize } from "lodash";

import {
  ADD_PATH,
  ALL_PATH,
  DETAILS_PATH,
  EDIT_PATH,
  ERROR_PATH,
} from "@src/routes";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  let title: string;
  let buttonText: string;
  let handleClick: () => void;

  switch (true) {
    case !!matchPath(location.pathname, {
      path: [DETAILS_PATH],
    }):
      const id = last(location.pathname.split("/"));
      title = "Details";
      buttonText = "Edit";
      // make fields editable
      handleClick = () => history.push(`${EDIT_PATH}/${id}`);
      break;
    case !!matchPath(location.pathname, { path: [ALL_PATH] }):
    default:
      title = "Hospitals";
      buttonText = "Add";
      handleClick = () => history.push(ADD_PATH);
      break;
  }

  const renderHeader = () => (
    <>
      <div className="text-3xl pb-3">{capitalize(title)}</div>
      <button
        onClick={handleClick}
        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {buttonText}
      </button>
    </>
  );

  if (
    [ADD_PATH, ERROR_PATH].includes(location.pathname) ||
    location.pathname.includes(EDIT_PATH)
  )
    return null;

  return renderHeader();
};
