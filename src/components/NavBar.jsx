import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import { useAppSelector } from "../redux/hooks";


export default function NavBar({setShowCart}) {
    
    const [menu, setMenu] = useState()
    const handleChange = () => {
        setMenu(!menu)
    }
    const closeMenu = () => {
        setMenu(false)
    }
    const cartCount = useAppSelector((state) => state.cartReducer.length)
    return (
        <header className="fixed w-full z-10">
            <section>
                {/*Destop menu section*/}
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div>
                        <Link to="home" smooth={true} spy={true} duration={500}>
                            <h1 className="text-2xl font-semibold text-ExtraDarkColor cursor-pointer">RoxyShop</h1>
                        </Link>
                    </div>
                    {/*Nav elements*/}
                    <nav className=" hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor">
                        <Link to="home" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>Home</Link>
                        <Link to="shop" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>Shop</Link>
                        <Link to="features" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>Features</Link>
                        <Link to="products" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>Products</Link>
                        <Link to="review" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>Review</Link>
                    </nav>
                    {/*Nav Icons*/}
                    <div className="flex items-center gap-5">
                        <FaUser size={25} className="text-ExtraDarkColor" />
                        <div className="text-ExtraDarkColor relative">
                            <FaShoppingCart size={25} className="cursor-pointer" />
                            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center" 
                            onClick={()=> setShowCart(true)}>
                                {cartCount}
                            </div>
                        </div>

                    </div>
                    {/*Menu Icon*/}
                    <div className="lg:hidden flex items-center">
                        {menu 
                        ? (<AiOutlineClose size={28} onClick={handleChange}/>)
                        : (<RiMenu2Line size={28} onClick={handleChange}/>)
                        }
                    </div>
                </div>
                {/*Mobile Menu section*/}
                <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden flex flex-col absolute bg-SecondaryColor text-black top-16 left-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="home" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer' onClick={closeMenu}>Home</Link>
                        <Link to="shop" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer' onClick={closeMenu}>Shop</Link>
                        <Link to="features" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer' onClick={closeMenu}>Features</Link>
                        <Link to="products" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer' onClick={closeMenu}>Products</Link>
                        <Link to="review" smooth={true} spy={true} duration={500} className='hover:text-black transition duration-300 ease-in-out cursor-pointer' onClick={closeMenu}>Review</Link>
                </div>

            </section>
        </header>
    )
}
