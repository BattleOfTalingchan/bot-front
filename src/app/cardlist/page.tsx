import NavBar from "../_components/NavBar"
export const dynamic = 'force-dynamic'

export default function CardListPage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[610px] gap-4">
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
          <img src="https://shorturl.at/EGmFC" alt="" className="w-28 min-w-48" />
        </div>
      </div>
    </div>
  )
}
