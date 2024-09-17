import Search from "../../../public/search.svg"

export default function NavBar() {
  return (
    <div className="bg-black h-28 fixed top-0 left-0 right-0 z-50">
      <div className="ml-16 mr-2">
        <nav className="text-white text-[20px] flex items-center justify-between m-10">
          <div>
            <a href=""><img src="" alt="Logo" /></a>
          </div>
          <div className="flex items-center space-x-8 pr-5">
            <a href="">รายชื่อการ์ด</a>
            <a href="">กฎกติกา</a>
            <a href=""><Search /></a>
          </div>
        </nav>
      </div>
    </div>
  )
}