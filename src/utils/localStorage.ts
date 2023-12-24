export const setLocalStorage = (key: string, value: unknown) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? "");
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
