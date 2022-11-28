import React, { useState } from "react";
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
import { useDispatch } from "@src/store";
import { deleteHospital } from "@src/reducers/hospitals/actions";
import { HOSPITALS } from "@src/reducers/constants";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [dispatch] = useDispatch(HOSPITALS);

  let shouldShowDelete = false;
  let title: string;
  let buttonText: string;
  let handleClick: () => void = () => {};
  let handleDelete: () => void = () => {};

  switch (true) {
    case !!matchPath(location.pathname, {
      path: [DETAILS_PATH],
    }):
      const id = Number(last(location.pathname.split("/")));
      title = "Details";
      buttonText = "Edit";
      handleClick = () => history.push(`${EDIT_PATH}/${id}`);
      handleDelete = () => {
        dispatch(deleteHospital(id));
        return history.push(ALL_PATH);
      };
      shouldShowDelete = true;
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
      {shouldShowDelete && (
        <button
          onClick={handleDelete}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          Delete
        </button>
      )}
    </>
  );

  if (
    [ADD_PATH, ERROR_PATH].includes(location.pathname) ||
    location.pathname.includes(EDIT_PATH)
  )
    return null;

  return renderHeader();
};
