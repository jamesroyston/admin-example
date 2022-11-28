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
    <div>
      {hospital.name} --- {hospital.formattedAddress}
    </div>
  );
};
