import React, { useState } from "react"; 
import "./About.css";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Line, RiSecurePaymentFill } from "react-icons/ri";

function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    { icon: "s", value: "10.5k", label: "Sellers active our site" },
    { icon: "$", value: "33k", label: "Monthly Product Sale" },
    { icon: "C", value: "45.5k", label: "Customer active in our site" },
    { icon: "B", value: "25k", label: "Annual gross sale in our site" },
  ];

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      img: "/imgs/Frame 874.svg",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      img: "/imgs/Frame 875.svg",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      img: "/imgs/Frame 876.svg",
    },
  ];

  return (
    <div className="about-container">
      <section className="story-section">
        <div className="story-text">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          <img src="/imgs/Side Image.svg" alt="Shopping" />
        </div>
      </section>

      <section className="stats-container">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${hoveredIndex === index ? "active" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="icon-bg">{stat.icon}</div>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        ))}
      </section>

      <section className="features-container">
        <div className="feature-item">
          <div className="icon-bg"><GrDeliver /></div> 
          <h4 style={{ fontWeight: "bold" }}>FREE AND FAST DELIVERY</h4>
          <p style={{ fontSize: "0.8rem" }}>
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-bg"><RiCustomerService2Line /></div>
          <h4 style={{ fontWeight: "bold" }}>24/7 CUSTOMER SERVICE</h4>
          <p style={{ fontSize: "0.8rem" }}>Friendly 24/7 customer support</p>
        </div>
        <div className="feature-item">
          <div className="icon-bg"><RiSecurePaymentFill /></div>
          <h4 style={{ fontWeight: "bold" }}>MONEY BACK GUARANTEE</h4>
          <p style={{ fontSize: "0.8rem" }}>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
}

export default About;
