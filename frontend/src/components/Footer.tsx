import { useState, forwardRef } from "react";
import { useDarkMode } from "../DarkModeContext";
import defaultImage from "../assets/logo.png";

type ContactDetails = {
  email: string;
  instagram: string;
  github: string;
  link_instagram: string;
  link_github: string;
};

const contacts: Record<string, ContactDetails> = {
  "Farrel Natha Saskoro": {
    email: "farrel.saskoro@gmail.com",
    instagram: "farrel_ns",
    github: "fnathas",
    link_instagram: "https://instagram.com/farrel_ns",
    link_github: "https://github.com/fnathas",
  },
  "Jason Fernando": {
    email: "j450n.fernando@gmail.com",
    instagram: "jason.fernandoo",
    github: "JasonFernandoo",
    link_instagram: "https://instagram.com/jason.fernandoo",
    link_github: "https://github.com/JasonFernandoo",
  },
  "Jonathan Emmanuel Saragih": {
    email: "jonathan.srgh@gmail.com",
    instagram: "jonathan.srgh",
    github: "JonathanSaragih",
    link_instagram: "https://instagram.com/jonathan.srgh",
    link_github: "https://github.com/JonathanSaragih",
  },
  "Mohammad Andhika Fadillah": {
    email: "andhikafadhillah2211@gmail.com",
    instagram: "andhikafdh",
    github: "andhikafdh",
    link_instagram: "https://instagram.com/andhikafdh",
    link_github: "https://github.com/andhikafdh",
  },
  "Satriadhikara Panji Yudhistara": {
    email: "satriadhikara@gmail.com",
    instagram: "satriadhikara",
    github: "satriadhikara",
    link_instagram: "https://instagram.com/satriadhikara",
    link_github: "https://github.com/satriadhikara",
  },
};

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  const { darkMode } = useDarkMode();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const changeContactInfo = (contact: string) => {
    setSelectedContact(contact);
  };

  const selectedContactDetails = selectedContact ? contacts[selectedContact] : null;

  return (
    <footer ref={ref} className="min-h-[35vh] w-full">
      <div
        className={`w-full flex flex-col justify-center items-center py-8 
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="w-[95%] flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold">AMAN</h1>
            <p className="font-bold text-[#b79ffc] my-2 text-center md:text-left">
              DIGITAL CHAIN IDENTITY
            </p>
            <i className="fab fa-instagram text-xl md:text-2xl text-white p-2 rounded-full bg-[#b79ffc] hover:cursor-pointer"></i>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="w-full md:w-1/3">
              <h1 className="text-xl md:text-2xl font-bold text-center md:text-left mb-4">CONTACT US</h1>
              <ul className="text-[#898989] space-y-2 text-center md:text-left">
                {Object.keys(contacts).map((contact) => (
                  <li
                    key={contact}
                    className="hover:text-[#b79ffc] hover:cursor-pointer text-sm md:text-base"
                    onClick={() => changeContactInfo(contact)}
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Section */}
            <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start gap-4">
              {selectedContactDetails ? (
                <div className="flex flex-col items-center md:items-start">
                  <h1 className="text-xl text-[#b79ffc] text-center md:text-left">
                    {selectedContact}
                  </h1>
                  <div className="my-2 text-[#898989] text-center md:text-left">
                    <p className="text-sm md:text-base">Email: {selectedContactDetails.email}</p>
                    <p className="text-sm md:text-base">Instagram: {selectedContactDetails.instagram}</p>
                    <p className="text-sm md:text-base">Github: {selectedContactDetails.github}</p>
                  </div>
                  <div className="flex gap-4 text-[#b79ffc] text-2xl">
                    <a href={selectedContactDetails.link_instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram hover:cursor-pointer"></i>
                    </a>
                    <a href={selectedContactDetails.link_github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github hover:cursor-pointer"></i>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full"
                    src={defaultImage}
                    alt="Default"
                  />
                  <p className="text-sm md:text-base text-center md:text-left max-w-md">
                    AMAN is a trusted solution to transform your digital identity into a unique, 
                    secure, and easily accessible asset through blockchain technology.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`w-[95%] mt-8 pt-4 text-center border-t-[0.1px] text-sm md:text-base
          ${darkMode ? "border-white" : "border-gray-200"}`}
        >
         <p>&copy; 2024 Aman. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
