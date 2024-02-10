import { useState } from "react";
import logo from "/logo.png"
function Header(){
    const [navVis, setNavVis] = useState("hidden");
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

      function toggleNavVis(){
        if (navVis=="hidden"){
            setNavVis("block");
        }else{
            setNavVis("hidden");
        }
      }

    return(
        <div>
        <div className="fixed z-50 w-full" style={{backgroundColor:"#eef4ed", height:"6rem"}}>
            <div className="flex flex-row mx-auto text-center py-4 justify-center">
                <div className="md:w-1/3 flex flex-row">
                    <img src={logo} className="h-16 mx-5"/>
                    <h1 className="my-auto text-3xl heading-main">Techy Software</h1>
                </div>
                <nav className="my-auto text-xl py-2 heading-sub hidden md:block">
                    <button className="mx-6 hover:underline" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="mx-6 hover:underline" onClick={() => scrollToSection('about')}>About Us</button>
                    <button className="mx-6 hover:underline" onClick={() => scrollToSection('services')}>Our Services</button>
                    <button className="mx-6 hover:underline" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    <button className="px-10 py-3 heading-main border-2 border-v border-black service" onClick={() => scrollToSection('meeting')}>Book a Meeting</button>
                </nav>
                <div className="block md:hidden w-1/4" onClick={toggleNavVis}>
                    <div className="border w-12 h-12 mx-auto flex flex-col justify-center  border-black">
                        <hr className="my-1.5 mt-1.5  w-11/12 mx-auto border border-black"/>
                        <hr className="my-1.5 w-11/12 mx-auto border border-black"/>
                        <hr className="my-1.5 w-11/12 mx-auto border border-black"/>
                    </div>
                </div>
            
            </div>

            <div className={navVis + " md:hidden"}>
                <nav className="my-auto text-xl py-2 heading-sub" style={{backgroundColor:"#eef4ed"}} >
                    <button className="mx-6 my-1 hover:underline block" onClick={() => scrollToSection('home')}>Home</button>
                    <hr/>
                    <button className="mx-6 my-1 hover:underline block" onClick={() => scrollToSection('about')}>About Us</button>
                    <hr/>
                    <button className="mx-6 my-1 hover:underline block" onClick={() => scrollToSection('services')}>Our Services</button>
                    <hr/>
                    <button className="mx-6 my-1 hover:underline block" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    <hr/>
                    <button className="px-10 mx-5 my-1 py-3 heading-main border-2 border-v border-black service" onClick={() => scrollToSection('meeting')}>Book a Meeting</button>
                    <hr/>
                </nav>
            </div>

        </div>
        </div>

    )
}

export default Header