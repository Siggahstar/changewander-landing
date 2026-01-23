import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-inner">
            <h1>Helping local vendors accept payments effortlessly.</h1>
            <p>
              ChangeWander lets vendors onboard in minutes, generate QR codes,
              and receive payments directly through Stripe.
            </p>
            <div className="cta">
              <a href="#" className="primary">Follow the launch</a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="section">
          <div className="container">
            <h2>How it works</h2>
            <div className="steps">
              <div className="step">
                <h3>1. Vendor onboarding</h3>
                <p>Vendors sign up quickly without technical setup.</p>
              </div>
              <div className="step">
                <h3>2. Create services</h3>
                <p>Each service gets a checkout page and QR code automatically.</p>
              </div>
              <div className="step">
                <h3>3. Get paid</h3>
                <p>Customers pay via Stripe. Funds go straight to the vendor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <section id="status" className="section muted">
          <div className="container">
            <h2>Current Status</h2>
            <p>
              🚧 ChangeWander is currently in private launch.<br />
              We’re onboarding early vendors and preparing for public release.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
