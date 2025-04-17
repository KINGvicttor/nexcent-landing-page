import heroBg from "../assets/img/hero-image.png"

export const HeroSection = () => {
    return(
        <section className="w-full h-[calc(100vh-64px)]">
            <div className="container mx-auto h-full flex justify-between items-center border border-blue-500 ">
                <div className="w-[657px] h-[276px] border">

                </div>
                <img className="w-[391px] h-[407px]" src={heroBg.src} />
            </div>
        </section>
    )
}