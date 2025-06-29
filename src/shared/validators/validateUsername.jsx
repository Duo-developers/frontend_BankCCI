export const validateUsername = (username) => {
  return username.length >= 3 && /^[a-zA-Z0-9_-]+$/.test(username);
};
