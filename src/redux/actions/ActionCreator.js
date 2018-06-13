export const loginAction = (dataUser) => {
    return {
        type: 'LOG_IN',
        dataUser
    }
}

export const logoutAction = () => ({
    type: 'LOG_OUT'
});