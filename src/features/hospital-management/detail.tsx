import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetById } from "@src/selectors/hospitals";
import { HOSPITALS } from "@src/reducers/constants";
import { ERROR_PATH } from "@src/routes/";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const hospital = useGetById(HOSPITALS, parseInt(id));

  if (!hospital) {
    return <Redirect to={ERROR_PATH} />;
  }

  return (
    <div className="pt-3">
      <div>Name: {hospital.name}</div>
      <div>Address: {hospital.formattedAddress}</div>
      <div>Updated At: {hospital.formattedUpdatedAt}</div>
    </div>
  );
};
