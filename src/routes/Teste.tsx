import Maintenance from "../components/Form/Notice.tsx";

export default function Teste() {
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


              <Maintenance />




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