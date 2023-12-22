import axios from "axios";

const BASE_URL = 'http://localhost:3000'

const loginUserService = (data) => {
    return axios.post(`${BASE_URL}/login`, data)
}

const registerUserService = (data) => {
    return axios.post(`${BASE_URL}/register`, data)
}


const logoutUserService = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const getUser = (token) => {
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
    return axios.get(`${BASE_URL}/users/me`, config)
}

export {
    loginUserService,
    registerUserService,
    logoutUserService,
    getUser
}