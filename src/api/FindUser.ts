import axios, { HttpStatusCode } from 'axios';

export default async function FindUser(username: string): Promise<HttpStatusCode> {
    return await axios.get(`http://127.0.0.1:8000/api/v1/users/${username}`)
    .then((response) => {
        return response.status
    })
    .catch((error) => {
        return error.response.status
    })
}