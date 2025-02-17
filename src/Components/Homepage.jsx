import "./homepage.scss";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
export default function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Feed />
    </div>
  );
}
