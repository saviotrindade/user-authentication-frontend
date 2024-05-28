import RegisterForm from '../components/Form/RegisterForm/index.tsx'


export default function Register() {
  return (
    <>
    {/* Define as propriedades basicas na parte mais exeterna */}
      <div className='bg-primary min-w-screen min-h-screen flex flex-col items-center sm:items-stretch'>
        {/* Define o width maximo para 320px com um padding de 24px no eixo X */}
        <div className='sm:px-0 sm:pl-8 sm:grid sm:grid-cols-[1fr,_auto] sm:auto-cols-min sm:gap-8'>
          {/* Cria uma altura padrão para que o Footer fique no final do eixo Y */}
          <div className='flex flex-col items-center min-h-screen'>

            {/* Aqui se define o Header e o Content */}
            <div className=' max-w-xs w-screen px-6 flex flex-col flex-grow flex-shrink justify-center pb-20'>

              <div className=' flex flex-col gap-2 pt-12 pb-20'>
                <h1 className=' text-center text-4xl font-bold sm:text-5xl'>Registre-se</h1>
              </div>

              <div className=''>
                <RegisterForm />


                <div className=' pt-4 text-center text-sm sm:text-base'>
                  <a href="/login">
                      Já possui uma conta? faça <span className=' font-bold'>Login</span>
                  </a>
                </div>
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
