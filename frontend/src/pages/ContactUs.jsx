import Header from "../components/Header"
import logo from "/logo.png"
function ContactUs(){
    return(
        <section id="contact" className="" style={{backgroundImage:"linear-gradient(#C3C9E9,#0b2545)"}}>
            <div className="flex flex-col md:flex-row" style={{backgroundColor:"#0b2545", color:"#eef4ed"}}>
                <div className="md:w-1/2 py-16 px-12 rounded-xl heading-sub" style={{backgroundColor:"#0b2545", color:"#eef4ed"}}>
                    <div className="flex flex-row justify-items-center">
                        <h2 className="text-3xl heading-main">Contact</h2>
                        <a className="border border-white mx-2 ml-3 flex pt-2 px-2 hover:bg-slate-400" href="https://www.facebook.com/"><ion-icon name="logo-facebook" ></ion-icon></a>
                        <a className="border border-white mx-2 flex pt-2 px-2 hover:bg-slate-400" href="https://www.instagram.com/"><ion-icon name="logo-instagram" ></ion-icon></a>
                        <a className="border border-white mx-2 flex pt-2 px-2 hover:bg-slate-400" href="https://www.linkedin.com/feed/"><ion-icon name="logo-linkedin" ></ion-icon></a>
                    </div>
                    <hr className="mt-3"/>
                    <p className="my-2">Somewhere on the planet, Earth</p>
                    <p className="my-2">dummyemail.techy@gmail.com</p>
                    <p className="my-2">+91 1234567890</p>
                </div>
                <div className="md:w-1/2">
                    <img src={logo} className=" my-16 h-20 md:h-52 mx-auto" alt="company logo"/>
                </div>
            </div>
        </section>
    )
}

export default ContactUs