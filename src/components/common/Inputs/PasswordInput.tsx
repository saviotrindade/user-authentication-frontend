import React from "react";

interface TextTyping{
    value: string;
    inputState: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function PasswordInput({value, setValue, inputState}: TextTyping) {
    return (
        <div className={inputState}>
            <label htmlFor="password" className="relative">
                <span className=" absolute top-0 bottom-0 ml-4 gap-2 flex items-center focus:top-0 focus:scale-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.00004 18.3333C4.54171 18.3333 4.14948 18.1703 3.82337 17.8442C3.49726 17.5181 3.33393 17.1256 3.33337 16.6667V8.33333C3.33337 7.875 3.49671 7.48277 3.82337 7.15666C4.15004 6.83055 4.54226 6.66722 5.00004 6.66666H5.83337V5C5.83337 3.84722 6.23976 2.86472 7.05254 2.0525C7.86532 1.24027 8.84782 0.833884 10 0.833329C11.1523 0.832773 12.135 1.23916 12.9484 2.0525C13.7617 2.86583 14.1678 3.84833 14.1667 5V6.66666H15C15.4584 6.66666 15.8509 6.83 16.1775 7.15666C16.5042 7.48333 16.6673 7.87555 16.6667 8.33333V16.6667C16.6667 17.125 16.5037 17.5175 16.1775 17.8442C15.8514 18.1708 15.4589 18.3339 15 18.3333H5.00004ZM10 14.1667C10.4584 14.1667 10.8509 14.0036 11.1775 13.6775C11.5042 13.3514 11.6673 12.9589 11.6667 12.5C11.6662 12.0411 11.5031 11.6489 11.1775 11.3233C10.852 10.9978 10.4595 10.8344 10 10.8333C9.5406 10.8322 9.14837 10.9956 8.82337 11.3233C8.49837 11.6511 8.33504 12.0433 8.33337 12.5C8.33171 12.9567 8.49504 13.3492 8.82337 13.6775C9.15171 14.0058 9.54393 14.1689 10 14.1667ZM7.50004 6.66666H12.5V5C12.5 4.30555 12.257 3.71527 11.7709 3.22916C11.2848 2.74305 10.6945 2.5 10 2.5C9.3056 2.5 8.71532 2.74305 8.22921 3.22916C7.7431 3.71527 7.50004 4.30555 7.50004 5V6.66666Z" fill="#767676"/>
                    </svg>
                </span>
            </label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                className=" w-full h-12 rounded-lg bg-primary+1 text-sm font-bold ease-in-out pl-12 pr-4 sm:text-base" 
                placeholder="Password"
                value={value}
                onChange={e => setValue(e.target.value)}
            />

        </div>
    )
}