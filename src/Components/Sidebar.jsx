import { Link } from "react-router-dom";
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
          <Link  to={"/"} className="menu-item">
            <Home className="item-logo" />
            <span className="menu-text">Home</span>
          </Link>
          <Link to={"/"} className="menu-item">
            <User className="item-logo" />
            <span className="menu-text">Profile</span>
          </Link>
          <Link to={"/"} className="menu-item">
            <Bell className="item-logo" />
            <span className="menu-text">Notifications</span>
          </Link>
          <Link to={"/"} className="menu-item">
            <Mail className="item-logo" />
            <span className="menu-text">Messages</span>
          </Link>

          <Link to={"/"} className="menu-item">
            <MoreHorizontal className="item-logo" />
            <span className="menu-text">More</span>
          </Link>
        </nav>
        <button className="tweet-btn">
          <Feather size={18} className="item-logo" />
          <span className="tweet-btn-text">Tweet</span>
        </button>
      </div>
    </aside>
  );
}
