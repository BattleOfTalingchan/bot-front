export default function CardDetail() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="pt-10 text-5xl font-bold">Hello</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <img
          src="https://cdn.discordapp.com/attachments/626262617631227923/1285670645828419604/image.png?ex=66ee6958&is=66ed17d8&hm=9845b2e23ca7f50744c294f26d6d9e01233aa73e3aa4759c390e3217cb941825&"
          alt=""
          className="w-64 min-w-48"
        />
        <div className="p-[50px] md:w-[600px]">
          <span className="text-3xl font-bold sm:text-lg md:text-3xl">พระอิศวร</span>
          <p className="text-justify text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ex iste rerum et, quo quasi
            necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat?
            Exercitationem ex a minima rem ipsa nam! lorem
          </p>
          <br />
          <span className="text-3xl font-bold">เอฟเฟค</span>
          <p className="text-justify text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ex iste rerum et, quo quasi
            necessitatibus quis dignissimos praesentium ipsum, accusantium, itaque fugiat?
            Exercitationem ex a minima rem ipsa nam!
          </p>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">ATK</span>
              <span className="">2300</span>
              <span className="ml-10 text-3xl font-bold">DEF</span>
              <span className="">2300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
