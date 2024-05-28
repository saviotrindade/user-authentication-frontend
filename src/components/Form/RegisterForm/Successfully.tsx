import { CustomButton } from "../../common/Buttons";
import { useNavigate } from "react-router-dom"

export default function Successfully() {
    const navigate = useNavigate()
    const handleClick = () => navigate("/login")
    return (
        <div>
            <div className=" flex flex-col items-center pb-4">
                <img className=" w-36" src="./icons/material-symbols_verified.svg" alt="" />
            </div>
            <p className=" text-center">Parabéns! Você agora faz parte da nossa comunidade. Explore todas as funcionalidades e aproveite ao máximo!</p>
            <div className=" pt-16">
                <CustomButton onClick={handleClick}/>
            </div>
  
        </div>
    )
}