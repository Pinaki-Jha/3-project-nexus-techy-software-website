import { useState } from "react"
import { useInView } from "react-intersection-observer"

function Feedback(){

    const [email, setEmail] = useState("")
    const [name,setName] = useState("")
    const [feedback,setFeedback] = useState()
    const [message,setMessage] = useState("")

    const {ref:divRef, inView: isDivRefInView} = useInView()

    async function sendFeedback(event){
        console.log("meeting has been booked.")
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/feedback",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name,
                email,
                feedback,
            }),

        })
        const data = await response.json()
        setMessage(data.message)

    }
    return(
        <section id="feedback" style={{backgroundImage:"linear-gradient(#eef4ed,#C3C9E9)"}}>
            <div ref={divRef} className={isDivRefInView? "fade-bottom pt-1 text-center":"pt-1 text-center"}>
                <p className="mt-5 heading-main text-xl">Your Feedback</p>
                <hr className="w-1/2 mx-auto"/>
                <h2 className="heading-sub text-5xl mt-3">Let Us Know Your Thoughts</h2>
                <p className="heading-sub text-xl md:mx-64 mx-10 mt-2">We at Techy Software value excellence. Your feedback is important for us to be able to maintain that excellence, and keep helping you achieve your goals faster every day. </p>
            </div>
            <div className="md:w-1/2 mx-auto pb-32">
                    <form onSubmit={sendFeedback}>
                        <div className="w-4/5 my-2 mx-auto">
                            <input type="text" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="w-4/5 my-2 mx-auto">
                            <input type="email" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="w-4/5 my-2 mx-auto">
                            <input type="text" className="w-full py-2 px-5 rounded-lg" style={{backgroundColor:"#eef4ed", color:"#0b2545"}} required value={feedback} placeholder="Your Feedback" onChange={(e)=>{setFeedback(e.target.value)}}/>
                        </div>

                        <p className="text-center mt-10">{message}</p>
                        <div className="text-center">
                            <input type="Submit" value="Submit"  className="px-10 py-3 heading-main border-v border-black service border-2 md:text-left"/>
                        </div>
                    </form>
                </div>
        </section>
    )
}

export default Feedback;