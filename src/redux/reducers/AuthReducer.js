const initialAuthState = {
    //userToken: "",
    dataUser: {}
}

const auth = (state = initialAuthState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                dataUser: action.dataUser
            }
        case "LOG_OUT":
            return {
                ...state,
                dataUser: {}
            }
        default:
            return state;
    }
}

export default auth;