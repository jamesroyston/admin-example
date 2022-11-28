import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addHospital } from "@src/reducers/hospitals/actions";
import { useDispatch } from "@src/store";
import { HOSPITALS } from "@src/reducers/constants";
import { DETAILS_PATH } from "@src/routes";

export const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showError, setShowError] = useState(false);

  // @ts-ignore
  const [dispatch] = useDispatch(HOSPITALS);

  const history = useHistory();

  const inputFields = [
    { key: "id", validationRequired: true },
    { key: "name", validationRequired: true },
    { key: "streetAddress", validationRequired: false },
    { key: "city", validationRequired: false },
    { key: "state", validationRequired: false },
    { key: "zipCode", validationRequired: false },
  ];

  const inputGetters = [id, name, streetAddress, city, stateCode, zipCode];

  const inputSetters = [
    setId,
    setName,
    setStreetAddress,
    setCity,
    setStateCode,
    setZipCode,
  ];

  const handleSubmit = () => {
    if (!id || !name) {
      setShowError(true);
      return;
    }
    dispatch(
      addHospital({
        id: parseInt(id),
        name,
        streetAddress,
        city,
        state: stateCode,
        zipCode: parseInt(zipCode || "0"),
      })
    );
    return history.push(`${DETAILS_PATH}/${id}`);
  };

  const renderError = (key: string) => (
    <div className="text-red-500 text-xs italic">
      {key} is a required field.
    </div>
  );

  return (
    <div className="pt-5 w-full max-w-xs">
      {showError && !id && renderError("Id")}
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
