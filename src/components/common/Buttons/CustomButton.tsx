import React from "react";


type HandleType = () => void;

interface Props {
  onClick?: HandleType,
}

export default function CustomButton({ onClick }: Props) : React.ReactElement {

  return (
    <>
      <div className="">
        <button 
          onClick={onClick}
          type="submit" 
          className=" w-full h-12 rounded-lg border-details border-2 text-details font-bold ease-in-out duration-300 sm:hover:scale-105 active:scale-95"
        >
          Continuar
        </button>
      </div>
    </>
  )
}