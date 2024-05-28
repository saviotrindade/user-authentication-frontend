import React, { useState } from "react";
import PersonID from "./PersonID.tsx";
import AccessCredentials from "./AccessCredentials.tsx";
import DemographicInformation from "./DemographicInformation.tsx";
import Successfully from "./Successfully.tsx";
import Register from "../../../api/Register.ts";


type DataType = {
    first_name: string,
    last_name: string,
    birthdate: string,
    gender: string,
    email: string,
    password: string,
}

export default function RegisterForm() {
    const [step, setStep] = useState<number>(1)
    const [data, setData] = useState<DataType>({
        first_name: '',
        last_name: '',
        birthdate: '',
        gender: '',
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement> | undefined) => {
        if (e === undefined) return
        setData(prevData => ({...prevData, [e.target.name]: e.target.value}));
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    async function handleSubmit() {
        
        return await Register(data)
    }

    switch (step) {
        case 1:
            return (
                <PersonID onButtonClick={nextStep} onInputChange={handleChange}/>
            )
        case 2:
            return (
                <DemographicInformation onButtonClick={nextStep} onInputChange={handleChange}/>
            )
        case 3:
            return (
                <AccessCredentials onButtonClick={nextStep} onInputChange={handleChange} submit={handleSubmit}/>
            )
        case 4:
            return (
                <>
                    <Successfully />
                </>
            )
    }
}