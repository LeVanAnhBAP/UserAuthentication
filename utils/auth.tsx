import axios from 'axios';

const API_KEY = 'AIzaSyDHeeMFtMpcwU9l0zJ8SQQFZDIW1bv7xeE';

async function authenticate(mode: string, email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    const token = response.data.idToken;

    return token;
}

export function createUser(email: string, password: string) {
    return authenticate('signUp', email, password);
}

export function login(email: string, password: string) {
    return authenticate('signInWithPassword', email, password);
}