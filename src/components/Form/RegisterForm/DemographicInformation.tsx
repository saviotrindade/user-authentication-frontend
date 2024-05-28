import { CustomInput } from '../../common/Inputs';
import { CustomButton } from '../../common/Buttons';
import React, { useState } from 'react';


type onButtonClickType = () => void;
type onInputChangeType = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void;

interface Props {
    onButtonClick: onButtonClickType,
    onInputChange: onInputChangeType
}

type DataType = {
    birthdate?: React.ChangeEvent<HTMLInputElement>,
    gender?: React.ChangeEvent<HTMLInputElement>,
}

export default function PersonID({ onButtonClick, onInputChange }: Props) {

    const [ data, setData ] = useState<DataType>()

    const [ birthdateInputStatus, setBirthdateInputStatus ] = useState<boolean | null>(null)
    const [ genderInputStatus, setGenderInputStatus ] = useState<boolean | null>(null)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
        setData(prevData => ({...prevData, [e.target.name]: e}))
    }

    function handleClick() {
        const birthdateIsValid = birthdateValidation()
        const genderIsValid = genderValidation()

        setBirthdateInputStatus(birthdateIsValid)
        setGenderInputStatus(genderIsValid)

        if (birthdateIsValid && genderIsValid && data?.birthdate && data?.gender) {
            onInputChange(data.birthdate);
            onInputChange(data.gender);
 
            return onButtonClick();
        }

        return
    }

    function genderValidation(): boolean {
        if (data?.gender && data.gender.target.value != "") {
            return true
        }
        return false
    }

    function birthdateValidation(): boolean {
        if (data?.birthdate) {
            const date = data.birthdate.target.value
            const today = new Date()
            const dd = today.getDate()
            const mm = today.getMonth()
            const yyyy = today.getFullYear() - 18;

            const ofLegalAge = `${yyyy}-${mm}-${dd}`;

            if (date > ofLegalAge) {
                return false
            }
            return true
        }
        return false
    }

    function handleInputFocus(e: React.FocusEvent<HTMLInputElement, Element> | React.FocusEvent<HTMLSelectElement, Element>) {
        if (e.currentTarget.name === e.target.name) {
            switch (e.target.name) {
                case "fname":
                    return setBirthdateInputStatus(null)
            
                case "lname":
                    return setGenderInputStatus(null)

                default:
                    break;
            }
        }
    }

    function genderInputError(): string {
        if (!genderInputStatus && genderInputStatus != null) {
            return "border-details border-2 rounded-lg"
        }
        return ""
    }

    return (
        <div key={"step-02"}>
            <div className='flex flex-col gap-4'>

                <div>
                    <p className='pb-2'>Digite sua data de nascimento:</p>
                    <CustomInput placeholder="Data de nascimento" name="birthdate" type="date" getValue={handleInputChange} status={birthdateInputStatus} onInputFocus={handleInputFocus}/>
                </div>

                <div>
                    <select defaultValue={""} className={`w-full h-12 rounded-lg bg-primary+1 text-sm font-bold ease-in-out pl-4 pr-4 sm:text-base ${genderInputError()}`} name='gender' onChange={handleInputChange} onFocus={(e) => handleInputFocus(e)}>
                        <option value="" disabled={true}>Selecione seu gênero...</option>
                        <option value="men">Masculino</option>
                        <option value="women">Feminino</option>
                        <option value="other">Outro</option>
                    </select>
                </div>
            </div>
            <div className=' pt-10'>
                <CustomButton onClick={handleClick} />
            </div>
        </div>
    )
}