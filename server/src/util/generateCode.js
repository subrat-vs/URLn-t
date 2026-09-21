export const generateCode = () => {
  const string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortCode = "";

  for (let index = 0; index < 6; index++) {
    shortCode += string.charAt(Math.floor(Math.random() * string.length));
  }

  return shortCode;
};
