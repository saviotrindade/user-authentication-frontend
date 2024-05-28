import axios from 'axios';


export default async function emailExists(username: string): Promise<boolean> {
    return await axios.get('http://127.0.0.1:8000/api/v1/users/email_exists', {
        params: {
            username: username
        }
    }).then((response) => {
        return response.data
    }).catch(() => {
        return false
    });
}