import nexcentLogo from "../assets/img/nexcent-logo.png"

export const Header = () => {
    return(
        <header className="w-full h-[84px] text-black bg-white">
            <div className="container mx-auto w-full h-[84px] flex justify-between items-center">
                <div className="w-[154px] h-[40px] flex items-center">
                    <img src={nexcentLogo.src} />
                </div>
                <div className="w-[588px] h-[40px]">
                    <nav>
                        <ul className="w-full h-[40px] flex justify-between items-center">
                            <li className="text-lg border-b-4 border-green-500 cursor-pointer">Home</li>
                            <li className="text-lg border-b-4 border-transparent hover:border-green-500 cursor-pointer">Service</li>
                            <li className="text-lg border-b-4 border-transparent hover:border-green-500 cursor-pointer">Feature</li>
                            <li className="text-lg border-b-4 border-transparent hover:border-green-500 cursor-pointer">Product</li>
                            <li className="text-lg border-b-4 border-transparent hover:border-green-500 cursor-pointer">Testimonial</li>
                            <li className="text-lg border-b-4 border-transparent hover:border-green-500 cursor-pointer">FAQ</li>
                        </ul>
                    </nav>
                </div>
                <div className="w-[170px] h-[40px] flex items-center">
                    <button className="w-[77px] h-[40px] text-green-500 rounded-lg">Login</button>
                    <button className="w-[91px] h-[40px] bg-green-500 text-white rounded-lg">Sign up</button>
                </div>
            </div>
        </header>
    )
}