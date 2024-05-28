import { CustomInput } from "../common/Inputs";
import { CustomButton } from "../common/Buttons";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../api";
import React from "react";

type DataType = {
  username?: React.ChangeEvent<HTMLInputElement>,
  password?: React.ChangeEvent<HTMLInputElement>
}

export default function LoginForm() {
    const [inputStatus, setInputStatus] = useState<boolean | null>(null);

    const [ data, setData ] = useState<DataType>();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData(prevData => ({...prevData, [e.target.name]: e}));
    }

    const navigate = useNavigate()
    async function handleClick() {
      if (!data?.username || !data?.password) return

      const response: AxiosResponse = await Auth(data?.username.target.value, data?.password.target.value)
      
      if (response.status === 200) {
        setInputStatus(true)
        document.cookie = response.data

        return navigate("/Maintenance")
      }
      setInputStatus(false)
    }

    return(
        <>
            <form>
                {/* Inputs necessarios para autentificação */}
                <div className=' flex flex-col gap-4'>
                  {/* <UsernameInput value={userText} setValue={setUserText} inputState={inputState()} />
                  <PasswordInput value={passText} setValue={setPassText} inputState={inputState()}/> */}
                  <CustomInput placeholder={"Username"} name="username" type="email" status={inputStatus} getValue={handleChange} />
                  <div>
                    <CustomInput placeholder={"Password"} name="password" type="password" status={inputStatus} />
                    {inputStatus === false? <p className="pt-2 text-details">Username e/ou password incorreto(s).</p> : null}
                  </div>
                  
                </div>
                {/* Botão de envio do formulario */}
                <div className=' pt-10'>
                  <CustomButton onClick={handleClick}/>
                </div>
            </form>
        </>
    )
}