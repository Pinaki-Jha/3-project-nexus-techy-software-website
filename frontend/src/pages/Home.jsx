import { useInView } from "react-intersection-observer"
import logo from "/logo.png"
import homeImage from "../assets/home_img.jpg"


function Home(){

    const {ref:divRef, inView: isDivRefInView} = useInView()

    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <section id="home" className="flex flex-col" style={{backgroundImage:"linear-gradient(#eef4ed,#C3C9E9)"}}>
            <div className="flex md:flex-row flex-col my-10">
                <div ref={divRef} className={isDivRefInView? "fade-right md:w-1/2 px-10 my-16 pb-10 border-black text-center md:text-left" : " md:w-1/2 px-10 my-16 pb-10 border-black text-center md:text-left"}>
                    <p className="heading-main md:mx-0 mx-auto text-4xl md:text-5xl">Building The Future, One Line of Code At A Time</p>
                    <p className="my-3 heading-sub">AI-driven solutions that redefine business excellence, providing strategic insights to propel your enterprise forward.</p>
                    <button className="px-10 py-5 heading-main border-v border-black service border-2 md:text-left" onClick={() => scrollToSection('meeting')}>Book a Meeting</button>
                    <button className="mx-6 heading-sub text-xl hover:underline" onClick={() => scrollToSection('services')}>Learn More</button>
                </div>
                <div className=" px-10 mb-2 mt-10 md:mt-0 mx-auto flex flex-col items-center justify-center">
                    <img className="absolute logo-hero" src={logo} alt="company logo" style={{}}/>
                    <div className="rounded-full z-10 bg-black md:h-96 md:w-96 h-72 w-72">
                        {/*<img className="absolute h-96 w-96 opacity-20" src={logo}/>*/}
                        <img className="md:w-96 md:h-96 h-72 w-72 object-cover rounded-full" alt="employees coding together" src={homeImage}/>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Home

//<p className="my-3 heading-sub">Discover efficiency and innovation at Cybermesh. Our AI-driven solutions redefine business excellence, providing strategic insights to propel your enterprise forward. Stay ahead with Cybermesh – where technology meets success.</p>