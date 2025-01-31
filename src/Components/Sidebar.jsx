import "./sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="twitter-icon">
<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
</svg>
          {/* <svg viewBox="0 0 24 24" className="twitter-icon">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg> */}
        </div>
        <nav className="sidebar-menu">
          <a href="#" className="menu-item">
            Home
          </a>
          <a href="#" className="menu-item">
            Profile
          </a>
          <a href="#" className="menu-item">
            Notifications
          </a>
          <a href="#" className="menu-item">
            Messages
          </a>
          <a href="#" className="menu-item">
            Bookmarks
          </a>
          <a href="#" className="menu-item">
            Lists
          </a>
          <a href="#" className="menu-item">
            More
          </a>
        </nav>
        <button className="signout-btn">Sign Out</button>
      </div>
    </aside>
  );
}
