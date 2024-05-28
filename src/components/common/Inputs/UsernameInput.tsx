import React from "react";

interface TextTyping{
    value: string;
    inputState: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function UsernameInput({value, setValue, inputState}: TextTyping): JSX.Element {
    return (
        <div className={inputState}>
            <label htmlFor="username" className="relative">
                <span className=" absolute top-0 bottom-0 ml-4 gap-2 flex items-center focus:top-0 focus:scale-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.0414 17.1875C17.9865 17.2825 17.9076 17.3614 17.8125 17.4163C17.7175 17.4711 17.6097 17.5 17.5 17.5H2.49997C2.39031 17.4999 2.28262 17.4709 2.18769 17.416C2.09277 17.3611 2.01396 17.2822 1.95918 17.1872C1.9044 17.0922 1.87558 16.9845 1.87561 16.8748C1.87564 16.7652 1.90452 16.6575 1.95934 16.5625C3.14919 14.5055 4.98278 13.0305 7.12263 12.3312C6.06416 11.7011 5.2418 10.741 4.78183 9.59827C4.32187 8.45554 4.24972 7.19343 4.57649 6.00574C4.90325 4.81805 5.61085 3.77045 6.59061 3.02384C7.57038 2.27722 8.76815 1.87286 9.99997 1.87286C11.2318 1.87286 12.4296 2.27722 13.4093 3.02384C14.3891 3.77045 15.0967 4.81805 15.4235 6.00574C15.7502 7.19343 15.6781 8.45554 15.2181 9.59827C14.7581 10.741 13.9358 11.7011 12.8773 12.3312C15.0172 13.0305 16.8508 14.5055 18.0406 16.5625C18.0956 16.6574 18.1246 16.7652 18.1247 16.8749C18.1249 16.9846 18.0961 17.0924 18.0414 17.1875Z" fill="#767676"/>
                    </svg>
                </span>
            </label>
            <input 
                type="email" 
                name="username" 
                id="username" 
                className=" w-full h-12 rounded-lg bg-primary+1 text-sm font-bold ease-in-out pl-12 pr-4 sm:text-base" 
                placeholder="Username"
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}