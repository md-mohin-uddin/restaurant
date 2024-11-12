import React from "react";
import bgImg from "../images/footer.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 px-8 lg:px-24"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10">
        <div className="container w-full mx-auto text-center">
          <h1 className="title uppercase text-2xl md:text-4xl font-bold mb-8 text-white">
            We ready to have you the best dining experiences
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="space-y-2 text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl"
                style={{ color: "#febf00" }}
              />
              <h2 className="text-lg font-semibold">Opening Hours</h2>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl"
                style={{ color: "#febf00" }}
              />
              <h2 className="text-lg font-semibold">Let's Talk</h2>
              <p>Phone: 1-800-222-4545</p>
              <p>Fax: 1-800-222-4545</p>
            </div>

            {/* Email Info */}
            <div className="space-y-2 text-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl"
                style={{ color: "#febf00" }}
              />
              <h2 className="text-lg font-semibold">Book a Table</h2>
              <p>Email: demo@website.com</p>
              <p>Support: support@website.com</p>
            </div>

            {/* Address */}
            <div className="space-y-2 text-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl"
                style={{ color: "#febf00" }}
              />
              <h2 className="text-lg font-semibold">Our Address</h2>
              <p>123 Street, New York City</p>
              <p>United States Of America</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://github.com/md-mohin-uddin"
              className="border border-gray-500 rounded-full p-3 text-lg hover:bg-yellow-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://x.com/M_Mohin_Uddin"
              className="border border-gray-500 rounded-full p-3 text-lg hover:bg-yellow-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/md__mohin__uddin"
              className="border border-gray-500 rounded-full p-3 text-lg hover:bg-yellow-500"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/mdmohinuddin/"
              className="border border-gray-500 rounded-full p-3 text-lg hover:bg-yellow-500"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* Footer Bottom Text */}
          <div className="text-sm space-y-1 mt-6">
            <p>&copy; 2024 Restaurant. All Rights Reserved.</p>
            <p>1234 Street Address, City, Country</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
