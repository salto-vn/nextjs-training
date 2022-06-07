import FeedContent from "component/FeedContent"
import Sidebar from "component/Sidebar"

export default function Feed() {
  return (
    <>
      <div className="container-fluid p-0 feed">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6">
            <FeedContent />
          </div>
          <div className="col-3">jfak;djsakdaskl</div>
        </div>
      </div>
    </>
  )
}
