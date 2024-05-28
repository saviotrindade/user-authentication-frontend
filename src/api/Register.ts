import axios, { AxiosResponse } from 'axios';


type DataType = {
    first_name: string,
    last_name: string,
    birthdate: string,
    gender: string,
    email: string,
    password: string,
}

export default async function register(data : DataType): Promise<void> {

    return await axios.post('http://127.0.0.1:8000/api/v1/users/add', {
        first_name: data.first_name,
        last_name: data.last_name,
        birthdate: data.birthdate,
        gender: data.gender,
        email: data.email,
        password: data.password,
    }).then((response) => {
        alert(response.data)
        alert(response.status)
        return response.data
    }).catch((error: AxiosResponse) => {
        alert(error.data)
        console.log(error)
        return false
    });
}