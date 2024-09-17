function CardDetail() {
    return (
        <div className = "bg-white min-h-screen w-full">
            <div className="flex flex-col items-center w-full h-full">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold text-black mt-10">
                        Hello
                    </h1>
                </div>
            </div>
            <div className = "flex">
                <img src="https://cdn.discordapp.com/attachments/626262617631227923/1285670645828419604/image.png?ex=66eb1d98&is=66e9cc18&hm=0bf5ab1ade7ac61719d48329bdf125cdd0afb84271cdcb5b028c428699fd363d&" alt=""  className ="w-64 ml-96 mt-28"/>
                <div className="w-[600px] h-[100px] p-[50px] mt-16 ml-10">
                    <span className = "text-black text-3xl font-bold">
                        พระอิศวร
                    </span>
                    <p className="text-justify text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab ex iste rerum et, quo quasi necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat? 
                        Exercitationem ex a minima rem ipsa nam!
                    </p>
                    <br />
                    <span className = "text-black text-3xl font-bold">
                        Effect
                    </span>
                    <p className="text-justify text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab ex iste rerum et, quo quasi necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat? 
                        Exercitationem ex a minima rem ipsa nam!
                    </p>
                    <div className = "flex mt-5">
                        <span className = "text-black text-3xl font-bold">
                            ATK
                        </span>
                        <span className = "text-black mt-2 ml-3">2300</span>
                        <span className = "text-black text-3xl font-bold ml-10">
                            DEF
                        </span>
                        <span className = "text-black mt-2 ml-3">2300</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;

