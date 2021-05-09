import { server } from "./server";

export const productService = async (payload) => {
  let res = {};
  try {
    res.response = await server.post(
      "/cheapest",
      {
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `${getState().auth.userData.token}`,
        },
      }
    );
  } catch (error) {
    res.error = error;
  }
  return res;
  // .then((json) => {
  //   return json;
  // })
  // .catch((err) => {
  //   if (!err.response) {
  //     console.log(err);
  //     // network error
  //   } else {
  //     // http status code
  //     const code = err.response.status;
  //     // response data
  //     const resp = err.response.data;
  //     console.log("Network error from axios handled somehow.");
  //     console.log(code);
  //     console.log(resp);
  //   }
  //   return err;
  // });
};
