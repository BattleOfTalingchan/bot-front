export default  function CardDetail() {
    return (
        
        <div className = "flex flex-col gap-10">
            <div className="flex flex-col items-center w-full h-full">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold pt-10">
                        Hello
                    </h1>
                </div>
            </div>
            <div className = "flex justify-center">
                <img src="https://www.konami.com/kde_cms/na_publish/uploads/slifer-the-sky-dragon.png" alt=""  className =" w-64"/>
                <div className="w-[600px] h-[100px] p-[50px]">
                    <span className = "text-3xl font-bold">
                        Osiris
                    </span>
                    <p className="text-justify ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab ex iste rerum et, quo quasi necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat? 
                        Exercitationem ex a minima rem ipsa nam!
                    </p>
                    <br />
                    <span className = "text-3xl font-bold">
                        Effect
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