import axios from 'axios';


export default async function EmailValidation(username: string): Promise<boolean> {
    return await axios.post('http://127.0.0.1:8000/api/v1/users/email_validation', {
        username: username,
    }).then((response) => {
        return response.data
    }).catch(() => {
        return false
    });
}