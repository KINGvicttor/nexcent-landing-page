import nexcentLogo from "../assets/img/nexcent-logo.png"

export const Header = () => {
    return( 
        <header className="w-[1440px] h-[84px] text-black bg-gray-100">
            <div className="container mx-auto h-[84px] flex justify-between items-center">
                <div className="w-[154px] h-[24px]">
                    <img src={nexcentLogo.src} alt="nexcent logo" />
                </div>
                <div className="w-[588px] h-[24px]">
                    <ul className="flex justify-between">
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>Home</li></a>
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>Service</li></a>
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>Feature</li></a>
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>Product</li></a>
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>Testimonial</li></a>
                        <a href="" className="font-semibold border-b-4 border-transparent hover:border-primary"><li>FAQ</li></a>
                    </ul>
                </div>
                <div className="w-[182px] h-[40px] flex justify-between">
                    <button className="w-[77px] h-[40px] rounded-lg text-primary cursor-pointer">Login</button>
                    <button className="w-[91px] h-[40px] rounded-lg text-white bg-primary cursor-pointer">Sign up</button>
                </div>
            </div>
        </header>
    )
}