export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          © {new Date().getFullYear()} ChangeWander
        </div>
        <div className="footer-right">
          <a href="https://x.com" target="_blank">X</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://youtube.com" target="_blank">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
