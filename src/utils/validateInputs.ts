export const validateInputsUtil = (data: {
  [key: string | number]: unknown;
}) => {
  const datas = Object.entries(data);
  const errors: { [key: string | number]: unknown } = {};
  datas.forEach(([key, value]) => {
    if (!value) {
      errors[key] = `${key} is required`;
    }
  });
  return Object.keys(errors).length ? errors : null;
};
