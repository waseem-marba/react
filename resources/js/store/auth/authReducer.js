import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from './authActionTypes'

const authInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLoading: false,
    isAuthenticated: false,
    error: '',
    token: '',
    user: {}
}

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                error: '',
                isLoading: true,
                isAuthenticated: false,
            }
            break;
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
                isAuthenticated: false,
            }
            break;
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                email: '',
                password: '',
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
            }
            break;
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: '',
                user: {},
            }
        case REGISTER:
            return {
                ...state,
                error: '',
                isLoading: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password
            }
            break;
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
            break;
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
            break;
    }
}