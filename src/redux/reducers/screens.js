const initial = {
  current: "Feed",

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
    default:
      return state;
  }
};
