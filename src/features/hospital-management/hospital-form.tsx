import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addHospital, editHospital } from "@src/reducers/hospitals/actions";
import { useDispatch } from "@src/store";
import { HOSPITALS } from "@src/reducers/constants";
import { DETAILS_PATH } from "@src/routes";
import { Hospital } from "@src/api/hospital/model";
import { randomId } from "@src/utils";

type Props = {
  hospital?: Hospital;
  method: string;
};

export const HospitalForm = ({ hospital: h, method }: Props) => {
  const [id, setId] = useState(h?.id || "");
  const [name, setName] = useState(h?.name || "");
  const [streetAddress, setStreetAddress] = useState(h?.streetAddress || "");
  const [city, setCity] = useState(h?.city || "");
  const [stateCode, setStateCode] = useState(h?.state || "");
  const [zipCode, setZipCode] = useState(h?.zipCode || "");
  const [showError, setShowError] = useState(false);

  // @ts-ignore
  const [dispatch] = useDispatch(HOSPITALS);
  const history = useHistory();
  const isEditing = method === "Edit";
  const isAdding = method === "Add";

  const inputFields = [
    { key: "name", validationRequired: true },
    { key: "streetAddress", validationRequired: false },
    { key: "city", validationRequired: false },
    { key: "state", validationRequired: false },
    { key: "zipCode", validationRequired: false },
  ];

  const inputGetters = [name, streetAddress, city, stateCode, zipCode];

  const inputSetters = [
    setName,
    setStreetAddress,
    setCity,
    setStateCode,
    setZipCode,
  ];

  const handleSubmit = () => {
    if (isAdding && !name) {
      setShowError(true);
      return;
    }

    let action: any;
    if (isEditing) {
      action = editHospital;
      dispatch(
        action({
          id: parseInt(id),
          name,
          streetAddress,
          city,
          state: stateCode,
          zipCode: parseInt(zipCode),
        })
      );
      return history.push(`${DETAILS_PATH}/${id}`);
    } else if (isAdding) {
      action = addHospital;
      let newId = randomId();
      dispatch(
        action({
          id: newId,
          name,
          streetAddress,
          city,
          state: stateCode,
          zipCode: parseInt(zipCode),
        })
      );
      return history.push(`${DETAILS_PATH}/${newId}`);
    }
  };

  const renderError = (key: string) => (
    <div className="text-red-500 text-xs italic">
      {key} is a required field.
    </div>
  );

  return (
    <div className="pt-5 w-full max-w-xs">
      {showError && !name && renderError("Name")}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {inputFields.map(({ key, validationRequired }, index) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {key}:
            </label>
            <input
              value={inputGetters[index]}
              // @ts-ignore
              onChange={(e) => inputSetters[index](e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={key === "id" || key === "zipCode" ? "number" : "text"}
              placeholder={key}
            />
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
