import Search from '../../../public/search.svg'

export default function NavBar() {
  return (
    <div className="left-0 right-0 top-0 z-50 h-28 w-screen content-center bg-black">
      <nav className="flex justify-between px-16 text-[20px] text-white">
        <div className="">
          <a href="">
            <img
              src="https://cdn.discordapp.com/attachments/1285740112868806657/1285740186453409863/logo.png?ex=66eb5e5c&is=66ea0cdc&hm=700889531d6e020e5af92e685bf291b530e3732b28af6cecec72130838eecc7f&"
              alt="Logo"
              className="w-20"
            />
          </a>
        </div>
        <div className="content-center">
          <div className="flex h-10 space-x-8">
            <a href="" className="content-center">
              รายชื่อการ์ด
            </a>
            <a href="" className="content-center">
              กฎกติกา
            </a>
            <span className="flex gap-3">
              <input type="text" className="w-48 px-2 text-black" placeholder="ค้นหา" />
              <div className="h-10 w-10 bg-zinc-900 p-[5px]">
                <button>
                  <Search />
                </button>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}
