export const getCurrentPath = () => {
  const url = new URL(window.location.href);
  return url.pathname;
};
