import { CustomInput } from '../../common/Inputs';
import { CustomButton } from '../../common/Buttons';
import { emailValidation, emailExists } from '../../../api';
import React, { useState } from 'react';


type onButtonClickType = () => void;
type onInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;


interface Props {
    onButtonClick: onButtonClickType,
    onInputChange: onInputChangeType,
    submit: onButtonClickType,
}

export default function PersonID({ onButtonClick, onInputChange, submit }: Props) {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');

    const [ emailInputStatus, setEmailInputStatus] = useState<boolean | null>(null);
    const [ passwordInputStatus, setPasswordInputStatus] = useState<boolean | null>(null);
    const [ confirmPasswordInputStatus, setConfirmPasswordInputStatus] = useState<boolean | null>(null);


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onInputChange(e)

        switch (e.target.name) {
            case "email": {
                setEmail(e.target.value)
                break;
            }
            case "password": {
                setPassword(e.target.value)
                break;
            }
            case "confirm_password": {
                setConfirmPassword(e.target.value)
                break;
            }
        }   
    }

    // function emailValidation() {
    //     const regex = new RegExp("^(([^<>()[\\]\\.,;:\\s@\"]+(\\.[^<>()[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
    //     const match = regex.exec(email);

    //     return match? true : false;
    // }

    function passwordValidation() {
        const regex = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(^.{8,20}$)");
        const match = regex.exec(password);

        return match? true : false;
    }

    function strongPassword() {
        const regexForUpperCase = new RegExp("(?=.*?[A-Z])");
        const matchForUpperCase = regexForUpperCase.exec(password);

        const regexForLowerCase = new RegExp("(?=.*?[a-z])");
        const matchForLowerCase = regexForLowerCase.exec(password);

        const regexForOneDigit = new RegExp("(?=.*?[0-9])");
        const matchForOneDigit = regexForOneDigit.exec(password);

        const regexForOneSpecialCharacter = new RegExp("(?=.*?[#?!@$%^&*-])");
        const matchForOneSpecialCharacter = regexForOneSpecialCharacter.exec(password);

        const regexForMinMaxLength = new RegExp("^.{8,20}$");
        const matchForMinMaxLength = regexForMinMaxLength.exec(password);
        return (
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${passwordInFocus? " h-40" : "h-0"}`}>
                <ul className={` pt-4 password_validation text-xs list-disc box-border ml-4 flex flex-col gap-2 `}>
                    <li className={`at_least_one_upper_case_english_letter ${matchForUpperCase ? " text-green-600" : "text-details"}`}>Pelo menos uma letra maiuscula.</li>
                    <li className={`at_least_one_lower_case_english_letter ${matchForLowerCase ? " text-green-600" : "text-details"}`}>Pelo menos uma letra minuscula.</li>
                    <li className={`at_least_one_digit ${matchForOneDigit ? " text-green-600" : "text-details"}`}>Pelo menos um digito.</li>
                    <li className={`at_least_one_special_character ${matchForOneSpecialCharacter ? " text-green-600" : "text-details"}`}>Pelo menos um caracter especial.</li>
                    <li className={`minimum_eight_in_length ${matchForMinMaxLength ? " text-green-600" : "text-details"}`}>Minimo 8 caracteres e no maximo 20 caracteres.</li>
                </ul>
            </div>
        );

    }

    function confirmPasswordValidation() {
        if (password === confirmPassword ) {
            return true;
        }   
        return false;
    }
    
    async function handleButtonClick() {
        if (!email && !password && !confirmPassword) return;

        
        // const emailIsValid = await emailValidation(email);
        const emailIsValid = await emailValidation(email)? !await emailExists(email) : false;
        const passwordIsValid = passwordValidation();
        const confirmPasswordIsValid = confirmPasswordValidation();
    
        setEmailInputStatus(emailIsValid);
        setPasswordInputStatus(passwordIsValid);
        setConfirmPasswordInputStatus(confirmPasswordIsValid);

        if (emailIsValid && passwordIsValid && confirmPasswordIsValid) {

            return onButtonClick(), submit();

        } else {
            alert("Algum campo não foi preenchido corretamente...")
            throw 500
        }
    }
    
    function placeInputError(inputName: string): JSX.Element | null {
        if (inputName === null) return null

        switch (inputName) {
            case "email":
                if (emailInputStatus != null && !emailInputStatus) {
                    return <p className=' text-details text-xs pt-2'>E-mail incorreto ou já está em uso.</p>;
                }
                return null

            case "confirm_password":
                if (confirmPasswordInputStatus != null && !confirmPasswordInputStatus) {
                    return <p className=' text-details text-xs pt-2'>As senhas não coincidem.</p>;
                }
                return null

            default:
                return null
        }
    }

    const [ passwordInFocus, setPasswordInFocus ] = useState<boolean>(false)

    function handleInputFocus(e: React.FocusEvent<HTMLInputElement, Element>) {
        if (e.currentTarget === e.target) {

            switch (e.target.name) {
                case "email":
                    emailInputStatus? null : setEmailInputStatus(null)
                    break;

                case "password": {
                    return setPasswordInFocus(true)
                }

                case "confirm_password":
                    return setConfirmPasswordInputStatus(null)
                
                default:
                    break;
            }
        }
    }

    function handleInputBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
        setPasswordInFocus(false)

        if (e.currentTarget === e.target) {

            switch (e.target.name) {
                case "email":
                    
                    break;
                
                case "password":
                    return passwordInputStatus? null : setPasswordInputStatus(null)
                
                case "confirm_password":

                    break;
            
                default:
                    break;
            }
        }
    }

    return (
        <div key={"step-03"}>
            <div className='flex flex-col gap-4'>
                {/* E-mail Input */}
                <div>
                    <p className='pb-2'>Digite seu melhor e-mail:</p>
                    <CustomInput placeholder="E-mail" name="email" type="email" getValue={handleChange} status={emailInputStatus} onInputFocus={handleInputFocus} onInputBlur={handleInputBlur}/>
                    {emailInputStatus? null : placeInputError("email")}
                </div>

                {/* Password Input */}
                <div>
                    <p className='pb-2'>Escolha uma senha:</p>
                    <CustomInput placeholder="Senha" name="password" type="password" getValue={handleChange} status={passwordInputStatus} onInputFocus={handleInputFocus} onInputBlur={handleInputBlur}/>
                    {strongPassword()}
                </div>

                {/* Confirm Password Input */}
                <div>
                    <CustomInput placeholder="Confirmar senha" name="confirm_password" type="password" getValue={handleChange} status={confirmPasswordInputStatus} onInputFocus={handleInputFocus} onInputBlur={handleInputBlur}/>
                    {confirmPasswordInputStatus? null : placeInputError("confirm_password")}
                </div>
            </div>
            <div className=' pt-10'>
                <CustomButton onClick={handleButtonClick} />
            </div>
        </div>
    )
}