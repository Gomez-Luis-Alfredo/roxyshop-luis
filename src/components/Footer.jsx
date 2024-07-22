import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { Link } from "react-scroll";


export default function Footer() {
  return (
    <footer className="bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
            <div>
                <h1 className="font-semibold text-3xl pb-4">RoxyShop</h1>
                <div className="flex gap-5 ml-3">
                    <FaFacebook size={32} className="hover:scale-100 cursor-pointer transition duration-300 ease-in-out"/>
                    <RiTwitchLine size={32} className="hover:scale-100 cursor-pointer transition duration-300 ease-in-out"/>
                    <RiInstagramFill size={32} className="hover:scale-100 cursor-pointer transition duration-300 ease-in-out"/>
                </div>
            </div>
            <div>
                <h1 className="font-medium text-lg pb-4 pt-5 md:pt-0">Shop</h1>
                <div className="flex flex-col gap-2">
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Products</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Overview</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Pricing</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Products</Link>
                </div>                
            </div>
            <div>
                <h1 className="font-medium text-lg pb-4 pt-5 md:pt-0">Company</h1>
                <div className="flex flex-col gap-2">
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">About us</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Contact</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">New</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out">Support</Link>
                </div>                
            </div>
            <div className="w-full md:w-1/4">
                <h1 className="font-medium text-lg pb-4 pt-5 md:pt-0">Contact Us</h1>
                <div className="flex flex-col gap-2">
                <Link to="/" spy={true} smooth={true} duration={500} >123 Elm Street, Suite 456 Springfield, IL 62701 United States</Link>
                <Link to="/" spy={true} smooth={true} duration={500} >fashion@style.com</Link>
                <Link to="/" spy={true} smooth={true} duration={500} >+123-456-7890</Link>
                </div>
               
            </div>
        </div>
        <div >
            <p className="text-center py-4 ">@copyright developer <span className="text-black">Luis Gomez</span>  | All rights reserved</p>
        </div>
    </footer>
  )
}
