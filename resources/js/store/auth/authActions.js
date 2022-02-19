import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from './authActionTypes'

export const login = (email, password) => {
    return {
        type: LOGIN,
        payload: {
            email, password
        }
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const login_failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error
        }
    }
}

export const login_success = (user, token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user, token
        }
    }
}

export const register = (firstName, lastName, email, password) => {
    return {
        type: REGISTER,
        payload: {
            firstName, lastName, email, password
        }
    }
}

export const register_failure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: {
            error
        }
    }
}

export const register_success = () => {
    return {
        type: REGISTER_SUCCESS
    }
}