export const objectToQueryParams = (object: {
  [key: string | number]: unknown;
}) => {
  const objectEntries = Object.entries(object);
  if (!objectEntries.length) return "";
  let queryParams = "?";
  objectEntries.forEach(([key, value], i) => {
    queryParams += `${key}=${value}${i < objectEntries.length - 1 ? "&" : ""}`;
  });
  return queryParams;
};
