const initial = {
  miner_address: "16591f93ae0bd4b4a3c0cf049200885cde7d0c76",
};

export const auth = (state = initial, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }

  return state;
};
