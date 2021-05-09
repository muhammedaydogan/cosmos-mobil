const initial = {
  current: "Products",
  // current: "ProductDetails",
};

export const screens = (state = initial, action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return {
        ...state,
        current: action.screen,
      };
    default:
      return state;
  }
};
