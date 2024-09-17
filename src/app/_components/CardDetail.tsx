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
                <img src="https://www.konami.com/kde_cms/na_publish/uploads/slifer-the-sky-dragon.png" alt=""  className ="w-64 ml-96 mt-28"/>
                <div className="w-[600px] h-[100px] p-[50px] mt-16 ml-10">
                    <span className = "text-black text-3xl font-bold">
                        Osiris
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
