import {useDispatch} from 'react-redux'
export const changeScreen = (screen) => {
  const dispatch = useDispatch()
  console.log("CHANGING SCREEN ",screen)
  dispatch({
    type: "CHANGE_SCREEN",
    screen,
  });
};
