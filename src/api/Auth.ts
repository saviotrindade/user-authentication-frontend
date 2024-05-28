import axios, { AxiosResponse } from 'axios';

type AuthResponse = {
    access_token: string, 
    refresh_token: string
  }
export default async function Auth(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    const params = new URLSearchParams();
    params.append('username', username)
    params.append('password', password)

    return await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
        username: username,
        password: password
    }).then((response) => {
        return response
    }).catch((error: AxiosResponse) => {
        return error
    });
}
