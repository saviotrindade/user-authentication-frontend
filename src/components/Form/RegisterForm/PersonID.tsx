import { CustomInput } from '../../common/Inputs';
import { CustomButton } from '../../common/Buttons';
import React, { useState } from 'react';


type onButtonClickType = () => void;
type onInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface Props {
    onButtonClick: onButtonClickType,
    onInputChange: onInputChangeType
}

type DataType = {
    first_name?: React.ChangeEvent<HTMLInputElement>,
    last_name?: React.ChangeEvent<HTMLInputElement>,
}

export default function PersonID({ onButtonClick, onInputChange }: Props) {

    const [ data, setData ] = useState<DataType>();

    const [ firstNameInputStatus, setFirstNameInputStatus ] = useState<boolean | null>(null);
    const [ lastNameInputStatus, setLastNameInputStatus ] = useState<boolean | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData(prevData => ({...prevData, [e.target.name]: e}));
    }

    function placeInputError(inputName: string): JSX.Element | null {
        if (inputName === null) return null;

        switch (inputName) {
            case "fname":
                if (firstNameInputStatus != null && !firstNameInputStatus) {
                    return <p className=' text-details text-xs pt-2'>Informe seu nome</p>;
                }
                return null;

            case "lname":
                if (lastNameInputStatus != null && !lastNameInputStatus) {
                    return <p className=' text-details text-xs pt-2'>Informe seu sobrenome</p>;
                }
                return null;

            default:
                return null;
        }
    }

    function inputValidation() {
        if (!data?.first_name) {
            setFirstNameInputStatus(false);
        }
        if (!data?.last_name) {
            setLastNameInputStatus(false);
        }
        return
    }

    function handleClick() {
        if (data?.first_name && data?.last_name) {
            onInputChange(data.first_name);
            onInputChange(data.last_name);

            return onButtonClick();
        } else {
            return inputValidation();
        }
    }

    function handleInputFocus(e: React.FocusEvent<HTMLInputElement, Element>) {
        if (e.currentTarget.name === e.target.name) {
            switch (e.target.name) {
                case "first_name":
                    return setFirstNameInputStatus(null)
            
                case "last_name":
                    return setLastNameInputStatus(null)

                default:
                    break;
            }
        }
    }

    return (
        <div key={"step-01"}>
            <div className='flex flex-col gap-4'>
                <div>
                    <p className='pb-2'>Insira seu nome:</p>
                    <CustomInput placeholder="Nome" name="first_name" type="text" getValue={handleChange} status={firstNameInputStatus} onInputFocus={handleInputFocus}/>
                    {firstNameInputStatus? null : placeInputError("first_name")}
                </div>

                <div>
                    <CustomInput placeholder="Sobrenome" name="last_name" type="text" getValue={handleChange} status={lastNameInputStatus} onInputFocus={handleInputFocus}/>
                    {lastNameInputStatus? null : placeInputError("last_name")}
                </div>
            </div>
            <div className=' pt-10'>
                <CustomButton onClick={handleClick} />
            </div>
        </div>
    )
}