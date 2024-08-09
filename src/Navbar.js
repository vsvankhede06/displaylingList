import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Vandana Blog</h1>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/new-blog">New Blog</a>
        </li>
      </ul>
    </nav>
  );
}
