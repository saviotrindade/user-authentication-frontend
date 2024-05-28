import React from "react"

export default function ButtonFacebook() : React.ReactElement {
    return (
      <>
        <div className="">
          <button 
            type="submit" 
            className=" flex justify-center items-center gap-2 w-full h-12 rounded-lg border-2 border-details ease-in-out duration-300 sm:hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36" fill="none">
                <g clip-path="url(#clip0_40_2)">
                    <path d="M36 31C36 33.762 33.762 36 31 36H5C2.239 36 0 33.762 0 31V5C0 2.238 2.239 0 5 0H31C33.762 0 36 2.238 36 5V31Z" fill="#3F51B5"/>
                    <path d="M28.368 19H25V32H20V19H17V15H20V12.59C20.002 9.082 21.459 7 25.592 7H29V11H26.713C25.104 11 25 11.6 25 12.723V15H29L28.368 19Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_40_2">
                    <rect width="36" height="36" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            <p className=" text-sm">login com o Facebook</p>
          </button>
        </div>
      </>
    )
  }