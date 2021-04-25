import { ORDER_FILTER, GET_ONE_ORDER, MODIFY_ORDER } from "./types";
import { server } from "./server";

export const balancePost = (payload) => async (dispatch, getState) => {
  const response = await server.post(
    "/user",
    {
      ...payload,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          sessionStorage.getItem("token") ||
          `${getState().auth.userData.token}`,
      },
    }
  );
  // dispatch({
  //   type: "XYZ123",
  //   method: payload.method,
  //   payload: {
  //     rows: response.data.data.rows,
  //     totalCount: response.data.data.count,
  //   },
  // });
  return response;
};
