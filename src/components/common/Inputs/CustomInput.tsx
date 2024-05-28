import React from "react";


interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    status?: boolean | null;
    getValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    onInputBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}


export default function CustomInput({ placeholder, type, name, status = null, getValue, onInputFocus, onInputBlur}: InputProps) {
    // Virifica se o input esta incorreto...
    
    function errorStyle() {
        if (status === null) return ""
        return status? "" : "border-details border-2 rounded-lg";
    }

    return (
        <div className={errorStyle()}>
            <label htmlFor={name}>
                <input 
                    type={type} 
                    name={name} 
                    id={name} 
                    className=" w-full h-12 rounded-lg bg-primary+1 text-sm font-bold ease-in-out pl-4 pr-4 sm:text-base"
                    onChange={e => getValue?.(e)}
                    placeholder={placeholder}
                    onFocus={e => onInputFocus?.(e)}
                    onBlur={e => onInputBlur?.(e)}
                />
            </label>
        </div>
    )
}