import { useInView } from "react-intersection-observer"

function ProductServices(){
    const {ref:headRef, inView:isHeadRefInView} = useInView()
    const {ref:divRef, inView:isDivRefInView} = useInView()
    const {ref:divRef2, inView:isDivRef2InView} = useInView()
    return(
        <section id="services" className="">
        <div className="py-32" style={{backgroundImage:"linear-gradient(#eef4ed,#C3C9E9)"}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div ref={headRef} className={isHeadRefInView?"fade-right flex-col flex justify-center":"flex-col flex justify-center"}>
                    <p className="text-xl heading-main">Our Services</p>
                    <hr className="w-1/2 border-white"/>
                    <h2 className="heading-sub text-5xl mt-3">Elevate Your Business.</h2>
                    <p className="heading-sub text-lg"> At Techy Software, innovation meets impact. Explore our range of cutting-edge services designed to transform your business. From market insights to website development, we've got you covered.</p>
                </div>
                <div ref={divRef} className={isDivRefInView?"fade-bottom grid grid-cols-1":"grid grid-cols-1"}>
                    <div className="bg-gray-200 mb-8 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                        <h3 className="text-xl heading-main mb-2">Market Insights</h3>
                        <p className="heading-sub">Unlock business potential with in-depth market analysis and research, gaining a strategic advantage in a dynamic landscape.</p>
                    </div>
                    <div className="bg-gray-200 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                        <h3 className="text-xl heading-main mb-2">Captivating Websites</h3>
                        <p className="heading-sub">Craft your digital presence with precision. Our expert developers design and develop websites that leave a lasting impression.</p>
                    </div>
                </div>
                </div>
                <div ref={divRef2} className={isDivRef2InView? "fade-bottom grid grid-cols-1 md:grid-cols-2 gap-8 p-8":"grid grid-cols-1 md:grid-cols-2 gap-8 p-8"}>
                <div  className="fade-bottom bg-gray-200 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                    <h3 className="text-xl heading-main mb-2 ">AI Solutions</h3>
                    <p className="heading-sub">Harness the power of artificial intelligence to streamline operations, optimize processes, and stay ahead of industry trends.</p>
                </div>
                <div className="bg-gray-200 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                    <h3 className="text-xl heading-main mb-2">Data Analytics</h3>
                    <p className="heading-sub">Turn your data into actionable insights. Our analytics solutions provide a roadmap for informed decision-making and business growth.</p>
                </div>
                <div className="bg-gray-200 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                    <h3 className="text-xl heading-main mb-2">Robust CyberSecurity</h3>
                    <p className="heading-sub">Safeguard your digital assets with our cutting-edge cybersecurity services, ensuring a robust defense against evolving threats.</p>
                </div>
                <div className="bg-gray-200 text-gray-700 p-6 rounded-lg shadow-md service border-v">
                    <h3 className="text-xl heading-main mb-2">Custom Solutions</h3>
                    <p className="heading-sub">Tailored to perfection. We create bespoke software solutions aligned with your business goals, delivering efficiency and innovation.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ProductServices