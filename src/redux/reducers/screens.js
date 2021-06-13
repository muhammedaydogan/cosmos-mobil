const initial = {
  current: "Login",
  product: {
    brand: "Makeuptime",
    currency: "TL",
    freeShipping: false,
    imageLinks: [
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210420/20/81703143/70739699/1/1_org.jpg",
    ],
    name: "Ayran kebabi",
    price: 18,
    website: "trendyol",
  },
};

export const screens = (state = initial, action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      console.log("REDUCER--" ,action.screen )
      console.log("REDUCER_!" ,state)

      return {
        ...state,
        current: action.screen,
      };
    case "SET_PRODUCT":
      console.log("SET0000000000000000000000000000000000")
      console.log(action.product)
      console.log("-SET0000000000000000000000000000000000")
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};
