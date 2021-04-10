
const initial = {
    current:'Login'
}

export default (state=initial, action) =>{

    switch (action.type) {
        case 'CHANGE_SCREEN':
            return {
                ...state,
                current: action.screen
            }
        default:
            return state;
    }


}