"use client"; // required for usePathname if highlighting current page

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo">ChangeWander</div>

        <nav className="nav-links">
          <a href="/" className={pathname === "/" ? "active" : ""}>Home</a>
          <a href="/about" className={pathname === "/about" ? "active" : ""}>About</a>
          <a href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</a>
          <a href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
