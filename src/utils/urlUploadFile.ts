export const getFileUrl = (file: File | string) => {
  if (!file) return "";
  return typeof file === "string"
    ? file
    : typeof file === "object"
    ? URL.createObjectURL(file)
    : "";
};

export const getFileName = (file: File | string) => {
  if (!file) return "";
  return typeof file === "string" ? file.split("/").pop() : file.name;
};
