import Search from '../../../public/search.svg'

export default function NavBar() {
  return (
    <div className="left-0 right-0 top-0 z-50 h-28 w-screen content-center bg-black">
      <nav className="flex justify-between px-[60px] text-[20px] text-white">
        <div className="">
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/1285740112868806657/1285740186453409863/logo.png?ex=66f0a45c&is=66ef52dc&hm=73d9c5a9d7f2d7ee9d7020bd0c97c5bfa051a0e521692b36f588519580819fc4&"
              alt="Logo"
              className="w-[70px]"
            />
          </a>
        </div>
        <div className="content-center">
          <div className="flex h-10 space-x-8">
            <a href="/cardlist" className="content-center">
              รายชื่อการ์ด
            </a>
            <a href="" className="content-center">
              กฎกติกา
            </a>
            <span className="flex content-center">
              <form className="flex gap-3" action="/cardlist/cardsearch" method="post">
                <input type="text" className="flex w-[180px] px-2 text-black" placeholder="ค้นหา" />
                <button className="flex h-[40px] w-[40px] bg-zinc-900 p-[5px]">
                  <Search />
                </button>
              </form>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}
