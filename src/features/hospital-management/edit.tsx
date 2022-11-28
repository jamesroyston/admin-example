import React from "react";
import { last } from "lodash";
import { useLocation } from "react-router-dom";
import { HospitalForm } from "@src/features/hospital-management/hospital-form";
import { useGetById } from "@src/selectors/hospitals";
import { HOSPITALS } from "@src/reducers/constants";

export const Edit = () => {
  const id = last(location.pathname.split("/"));
  const hospital = useGetById(HOSPITALS, parseInt(id!));

  return <HospitalForm hospital={hospital} method="Edit" />;
};
