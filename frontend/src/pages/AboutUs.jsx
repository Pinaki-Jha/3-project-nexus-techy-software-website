import innovation from "../assets/innovation.png"
import strategy from "../assets/strategy.png"
import statistics from "../assets/statistics.png"
import { useInView } from "react-intersection-observer"

function AboutUs(){

    const {ref:headRef, inView: isHeadRefInView} = useInView()
    return(
        <section id="about" style={{backgroundImage:"linear-gradient(#C3C9E9,#eef4ed)"}}>
            <div ref={headRef} className={isHeadRefInView? "fade-bottom px-10 pt-32 pb-12 border-r text-center border-black":"px-10 pt-32 pb-12 border-r text-center border-black"}>
                    <p className="mt-5 heading-main text-xl">About Us</p>
                    <hr className="w-1/2 mx-auto"/>
                    <h2 className="heading-sub text-5xl mt-3">Innovate. Excel. Lead.</h2>
                    <div className="flex md:flex-row flex-col my-10">
                        <div className="md:border-x md:border-y-0 border-y pt-10 md:pt-3 pb-10 md:w-1/3">
                            <img className="rounded-full mx-auto border p-5 h-32 w-32" src={innovation}/>
                            <h2 className="text-xl pt-2 heading-main">Innovative Solutions</h2>
                            <p className="px-5 heading-sub">Redefine the possibilities with our cutting-edge software solutions, driven by the latest in AI and machine learning technologies.</p>
                        </div>
                        <div className="md:border-x md:border-y-0 border-y pt-10 md:pt-3 pb-10 md:w-1/3">
                            <img className="rounded-full mx-auto border p-5 h-32 w-32" src={strategy}/>
                            <h2 className="text-xl pt-2 heading-main">Strategic Insights</h2>
                            <p className="px-5 heading-sub">Gain a competitive edge through actionable insights, helping you navigate complex business landscapes with confidence.</p>
                        </div>
                        <div className="md:border-x md:border-y-0 border-y pt-10 md:pt-3 pb-10 md:w-1/3">
                            <img className="rounded-full mx-auto border p-5 h-32 w-32" src={statistics}/>
                            <h2 className="text-xl pt-2 heading-main">Efficiency Redefined</h2>
                            <p className="px-5 heading-sub">Our commitment to excellence extends to streamlining operations, enhancing productivity, and propelling your success to new heights.</p>
                        </div>
                        

                    </div>
            </div>
                
        </section>
    )
}

export default AboutUs