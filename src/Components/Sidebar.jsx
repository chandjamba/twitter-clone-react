import "./sidebar.scss";
import {
  Home,
  User,
  Bell,
  Mail,
  MoreHorizontal,
  Twitter,
  Feather,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <Twitter size={30} color="#1da1f2" />
        </div>
        <nav className="sidebar-menu">
          <a href="#" className="menu-item">
            <Home />
            <span className="menu-text">Home</span>
          </a>
          <a href="#" className="menu-item">
            <User />
            <span className="menu-text">Profile</span>
          </a>
          <a href="#" className="menu-item">
            <Bell />
            <span className="menu-text">Notifications</span>
          </a>
          <a href="#" className="menu-item">
            <Mail />
            <span className="menu-text">Messages</span>
          </a>

          <a href="#" className="menu-item">
            <MoreHorizontal />
            <span className="menu-text">More</span>
          </a>
        </nav>
        <button className="tweet-btn">
          <Feather size={18} />
          <span className="tweet-btn-text">Tweet</span>
        </button>
      </div>
    </aside>
  );
}
