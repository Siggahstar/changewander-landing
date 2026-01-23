import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h2>About ChangeWander</h2>
            <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              ChangeWander helps local vendors accept payments effortlessly. Our mission is
              to make onboarding, QR code generation, and payment collection seamless,
              so vendors can focus on growing their business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
