export default function Notice() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className=" flex flex-col items-center pb-4">
                <img className=" w-36" src="./icons/wpf_maintenance.svg" alt="" />
            </div>
            <p className=" text-center font-bold">**Estou em manutenção!**</p>
            <p className=" text-center">Peço desculpas pelo transtorno, mas estou trabalhando duro para melhorar a experiência do meu site. Em breve, estarei de volta com novidades incríveis. Agradeço a sua compreensão e paciência.</p>
            <p className=" text-center">Enquanto isso, siga-me nas redes sociais!</p>
            <div>
                <p className=" text-center">Atenciosamente,</p>
                <p className=" text-center">Sávio Trindade Bandeira</p>
            </div>

            <div className="flex gap-4 pt-6">
                <a href=""><img className=" w-12 ease-in-out duration-300 sm:hover:scale-105 active:scale-95" src="./icons/mdi_linkedin.svg" alt="" /></a>
                <a href=""><img className=" w-12 ease-in-out duration-300 sm:hover:scale-105 active:scale-95" src="./icons/ri_instagram-fill.svg" alt="" /></a>
                <a href=""><img className=" w-12 ease-in-out duration-300 sm:hover:scale-105 active:scale-95" src="./icons/mdi_github.svg" alt="" /></a>
            </div>

        </div>
    )
}