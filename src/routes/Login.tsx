import { ButtonFacebook, ButtonGoogle } from '../components/common/Buttons'
import LoginForm from '../components/Form/LoginForm'

export default function Login() {
  return (
    <>
    {/* Define as propriedades basicas na parte mais exeterna */}
      <div className='bg-primary min-w-screen min-h-screen flex flex-col items-center sm:items-stretch'>
        {/* Define o width maximo para 320px com um padding de 24px no eixo X */}
        <div className='sm:px-0 sm:pl-8 sm:grid sm:grid-cols-[1fr,_auto] sm:auto-cols-min sm:gap-8'>
          {/* Cria uma altura padrão para que o Footer fique no final do eixo Y */}
          <div className='flex flex-col items-center min-h-screen'>

            {/* Aqui se define o Header e o Content */}
            <div className=' max-w-xs flex flex-col flex-grow flex-shrink justify-center'>
              <div className='flex flex-col gap-2 pt-12 pb-8'>
                <h1 className=' text-center text-4xl font-bold sm:text-5xl'>BEM VINDO!</h1>
                <p className=' text-center text-sm font-light sm:text-base'>Para continuar é necessario fazer login.</p>
              </div>

              <LoginForm/>


              <div className=' pt-4 text-center text-sm sm:text-base'>
                <a href="/register">
                    Ainda não possui uma conta? <span className=' font-bold'>Registre-se</span>
                </a>
              </div> 

              <div className='flex flex-col gap-4 py-4'>
                <ButtonGoogle />
                <ButtonFacebook />
              </div>
            </div>
            {/* Aqui se define o Footer */}
            <div>
              <p className=' pb-4 text-xs text-center font-light'>designed&developed by <span className=' font-bold underline'>Sávio Bandeira</span></p>
            </div>
          </div>

          <div className=' hidden w-48 h-full bg-wallpaper bg-cover bg-[bottom_right_25%] sm:block xl:w-[30rem]'></div>
          
        </div>
      </div>
    </>
  )
}
