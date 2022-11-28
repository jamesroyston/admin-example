export const convertSnakeCaseToCamelCase = (argObject: {
  [key: string]: string;
}) => {
  const convertedObj: typeof argObject = {};
  for (const key in argObject) {
    if (key.includes("_")) {
      let convertedKey = key
        .split("_")
        .map((str, i) => {
          if (i === 0) {
            return str;
          }
          return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join("");
      // @ts-ignore
      convertedObj[convertedKey] =
        !isNaN(argObject[key]) && argObject[key]
          ? parseInt(argObject[key])
          : argObject[key];
    } else {
      convertedObj[key] = argObject[key];
    }
  }
  return convertedObj;
};

export const randomId = () => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return parseInt(result);
};
