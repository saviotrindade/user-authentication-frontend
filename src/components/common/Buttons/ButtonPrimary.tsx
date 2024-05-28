import React from "react";
import { Auth, FindUser } from "../../../api"
import { HttpStatusCode } from "axios";


interface InputValues {
  username: string,
  password: string,
  setResponse: React.Dispatch<React.SetStateAction<HttpStatusCode | null>>,
}

export default function ButtonPrimary({username, password, setResponse}: InputValues) : React.ReactElement {
  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    let HTTPStatus = await FindUser(username);
    setResponse(HTTPStatus)

    if (HTTPStatus == 200) {
      const userAuth = await Auth(username, password)
      if (userAuth.status == 200)
        document.cookie = userAuth.data.access_token
        console.log("Usuario logado \nToken registrado: " + userAuth.data.access_token)

      HTTPStatus = userAuth.status
    } else if (HTTPStatus == 404) {
      alert('Usuario não registrado')
    } else {
      alert("Internal Server Error.")
    }
  }
  return (
    <>
      <div className="">
        <button 
          type="submit" 
          onClick={e => { handleSubmit(e) }}
          className=" w-full h-12 rounded-lg bg-details text-primary font-bold ease-in-out duration-300 sm:hover:scale-105 active:scale-95"
        >
          Continuar
        </button>
      </div>
    </>
  )
}