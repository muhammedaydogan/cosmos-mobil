export const onLogin = (username) => {
  return {
    type: "LOGIN",
    username,
  };
};
