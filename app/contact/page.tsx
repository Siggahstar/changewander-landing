import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2>Contact Us</h2>
            <p>
              Have questions or want to get in touch? We’d love to hear from you.
            </p>

            {/* Simple email link */}
            <p style={{ marginTop: "1.5rem" }}>
              📧 <a href="mailto:hello@changewander.com">hello@changewander.com</a>
            </p>

            {/* Optional form (commented for now) */}
            {/*
            <form action="https://formspree.io/f/your-form-id" method="POST" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" name="name" placeholder="Your Name" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
              <input type="email" name="email" placeholder="Your Email" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
              <textarea name="message" placeholder="Your Message" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', minHeight: '120px' }}></textarea>
              <button type="submit" style={{ padding: '0.875rem', borderRadius: '10px', background: '#360185', color: '#fff', fontWeight: '500', cursor: 'pointer' }}>Send Message</button>
            </form>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
