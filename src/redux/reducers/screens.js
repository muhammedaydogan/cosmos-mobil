const initial = {
  current: "ProductDetails",
  product: {},

};

export const screens = (state = initial, action) => {
  console.log("REDUCER--" ,action.screen )
  console.log("REDUCER_!" ,state)
  switch (action.type) {
    case "CHANGE_SCREEN":

      return {
        ...state,
        current: action.screen,
      };
    case "SET_PRORUDCT":
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};
