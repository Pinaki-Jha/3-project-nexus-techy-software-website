import { useState } from "react";
import { useInView } from "react-intersection-observer";

function BookMeeting(){

    const [email, setEmail] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState()
    const [message,setMessage] = useState("")

    const {ref:divRef, inView: isDivRefInView} = useInView()

    async function bookMeet(event){
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/bookmeet",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
            }),

        })
        const data = await response.json()
        setMessage(data.message)

        
    }
    return(
        <section id="meeting" className="pb-32" style={{backgroundImage:"linear-gradient(#C3C9E9,#eef4ed)"}}>
            <div className="py-32 rounded-xl flex flex-col md:flex-row" style={{backgroundColor:"#0b2545", color:"#eef4ed"}}>
                <div ref={divRef} className={isDivRefInView? "fade-right md:w-1/2 flex flex-col justify-center border-r border-white px-10":" md:w-1/2 flex flex-col justify-center border-r border-white px-10"}>
                    <h1 className="heading-main text-5xl">Let's Talk.</h1>
                    <p className="heading-sub text-2xl">If you have a need, we have a solution. Book a free one on one session with us, and let's get to work!</p>
                </div>

                <div className="md:w-1/2">
                    <form onSubmit={bookMeet}>
                        <div className="flex flex-row mx-9 my-2">
                            <div className="flex flex-col justify-center text-center rounded-full w-10 h-10 mx-2" style={{backgroundColor:"#eef4ed", color:"#0b2545"}}>
                                <span className="material-symbols-outlined">face</span>
                            </div>
                            <div className="w-4/5">
                                <input type="text" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="flex flex-row mx-9 my-2">
                            <div className="flex flex-col justify-center text-center rounded-full w-10 h-10 mx-2" style={{backgroundColor:"#eef4ed", color:"#0b2545"}}>
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div className="w-4/5">
                                <input type="email" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="flex flex-row mx-9 my-2">
                            <div className="flex flex-col justify-center text-center rounded-full w-10 h-10 mx-2" style={{backgroundColor:"#eef4ed", color:"#0b2545"}}>
                                <span className="material-symbols-outlined">phone</span>
                            </div>
                            <div className="w-4/5">
                                <input type="tel" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={phone} placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                            </div>
                        </div>
                        <p className="text-center mt-10">{message}</p>
                        <div className="text-center">
                            <input type="Submit" value="Book Meeting" className="mx-auto bg-yellow-500 rounded-xl heading-sub text-xl text-center px-10 py-2 border-black border hover:drop-shadow-2xl hover:bg-yellow-600"/>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default BookMeeting