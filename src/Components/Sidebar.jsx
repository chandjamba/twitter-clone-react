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
          <a href="#" className="menu-item">
            <Home className="item-logo" />
            <Link className="menu-text">Home</Link>
          </a>
          <a href="#" className="menu-item">
            <User className="item-logo" />
            <Link className="menu-text">Profile</Link>
          </a>
          <a href="#" className="menu-item">
            <Bell className="item-logo" />
            <Link className="menu-text">Notifications</Link>
          </a>
          <a href="#" className="menu-item">
            <Mail className="item-logo" />
            <Link className="menu-text">Messages</Link>
          </a>

          <a href="#" className="menu-item">
            <MoreHorizontal className="item-logo" />
            <Link className="menu-text">More</Link>
          </a>
        </nav>
        <button className="tweet-btn">
          <Feather size={18} className="item-logo" />
          <span className="tweet-btn-text">Tweet</span>
        </button>
      </div>
    </aside>
  );
}
