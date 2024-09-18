import Search from "../../../public/search.svg"
import logo from "../../../public/logo.png"

export default function NavBar() {
  return (
    <div className="bg-black h-28 top-0 left-0 right-0 z-50 content-center w-screen">
        <nav className="text-white text-[20px] flex justify-between px-[60px]">
          <div className="">
            <a href=""><img src="https://cdn.discordapp.com/attachments/1285740112868806657/1285740186453409863/logo.png?ex=66eb5e5c&is=66ea0cdc&hm=700889531d6e020e5af92e685bf291b530e3732b28af6cecec72130838eecc7f&" alt="Logo" className="w-20"/></a>
          </div>
          <div className="content-center">
            <div className="flex space-x-8 h-10">
            <a href="" className="content-center">รายชื่อการ์ด</a>
            <a href="" className="content-center">กฎกติกา</a>
            <span className="gap-3 flex">
              <input 
                type="text" 
                className="w-[180px] text-black px-2"
                placeholder="ค้นหา"
              />
              <div className="w-[40px] h-[40px] bg-zinc-900 p-[5px]"><button><Search /></button></div>
            </span>
          </div>
          </div>
        </nav>
    </div>
  )
}