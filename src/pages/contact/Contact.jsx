import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="breadcrumb">
        <span className="text-gray">Home / </span>
        <span className="text-black">Contact</span>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div style={{ marginBottom: "2rem" }}>
            <div className="info-header">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.14-3.84-6.736-6.736l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3>Call To Us</h3>
            </div>
            <p className="info-text">We are available 24/7, 7 days a week.</p>
            <p className="info-text" style={{ marginBottom: 0 }}>
              Phone: +8801611112222
            </p>
          </div>

          <hr className="divider" />

          <div>
            <div className="info-header">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3>Write To US</h3>
            </div>
            <p className="info-text">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="info-text">Emails: customer@exclusive.com</p>
            <p className="info-text" style={{ marginBottom: 0 }}>
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Your Name *"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="form-input"
                required
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={8}
              className="form-input"
              required
            ></textarea>

            <div className="submit-btn-wrapper">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
