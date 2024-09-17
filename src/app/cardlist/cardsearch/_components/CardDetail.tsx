export default  function CardDetail() {
    return (
        <div className = "flex flex-col gap-10">
            <div className="flex flex-col items-center">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold pt-10">
                        Hello
                    </h1>
                </div>
            </div>
            <div className = "flex flex-col md:flex-row justify-center items-center ">
                <img src="https://cdn.discordapp.com/attachments/626262617631227923/1285670645828419604/image.png?ex=66eb1d98&is=66e9cc18&hm=0bf5ab1ade7ac61719d48329bdf125cdd0afb84271cdcb5b028c428699fd363d&" alt=""  className ="w-64 min-w-48"/>
                <div className="md:w-[600px] p-[50px]">
                    <span className = "text-3xl sm:text-lg md:text-3xl font-bold ">
                        พระอิศวร
                    </span>
                    <p className="text-justify text-lg ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab ex iste rerum et, quo quasi necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat? 
                        Exercitationem ex a minima rem ipsa nam!
                        lorem
                    </p>
                    <br />
                    <span className = "text-3xl font-bold">
                        เอฟเฟค
                    </span>
                    <p className="text-justify ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab ex iste rerum et, quo quasi necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat? 
                        Exercitationem ex a minima rem ipsa nam!
                    </p>
                    <div className = "flex items-center">
                        <div className = "flex items-center gap-2">
                            <span className = " text-3xl font-bold">
                                ATK
                            </span>
                            <span className = "">2300</span>
                            <span>Mix</span>
                            <span className = " text-3xl font-bold ml-10">
                            DEF
                            </span>
                            <span className = "">2300</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}