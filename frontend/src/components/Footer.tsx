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

  const selectedContactDetails = selectedContact
    ? contacts[selectedContact]
    : null;

  return (
    <footer ref={ref} className={`h-[35vh] w-[100vw]`}>
      <div
        className={`h-full w-full flex flex-col justify-center items-center ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="h-[80%] w-[97.5%] flex justify-center items-center">
          <div className="h-[85%] w-[25%] flex flex-col items-start">
            <h1 className="text-[32px] font-bold">AMAN</h1>
            <p className="font-bold text-[#b79ffc] mt-[-2%] mb-[7%]">
              DIGITAL CHAIN IDENTITY
            </p>
            <i className="fab fa-instagram mt-[2.5%] text-[22px] text-white p-[10px] rounded-[50%] bg-[#b79ffc] hover:cursor-pointer"></i>
          </div>
          <div className="h-full w-[60%] ml-[10%] flex justify-between items-center">
            <div className="h-[85%] w-[30%] flex flex-col">
              <h1 className="text-start text-[20px] font-bold">CONTACT US</h1>
              <ul className="text-start text-[#898989]">
                {Object.keys(contacts).map((contact) => (
                  <li
                    key={contact}
                    className="hover:text-[#b79ffc] hover:cursor-pointer"
                    onClick={() => changeContactInfo(contact)}
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[95%] w-[60%] flex">
              {selectedContactDetails ? (
                <>
                  <div className="flex flex-col text-start ml-[5%]">
                    <h1 className="w-[400px] text-start text-[20px] text-[#b79ffc]">
                      {selectedContact}
                    </h1>
                    <div className="my-[3%] text-[#898989]">
                      <p>Email: {selectedContactDetails.email}</p>
                      <p>Instagram: {selectedContactDetails.instagram}</p>
                      <p>Github: {selectedContactDetails.github}</p>
                    </div>
                    <div className="flex text-[#b79ffc] gap-2 text-[26px]">
                      <a
                        href={selectedContactDetails.link_instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram hover:cursor-pointer"></i>
                      </a>
                      <a
                        href={selectedContactDetails.link_github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github hover:cursor-pointer"></i>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col">
                  <img
                    className="w-[90px] h-[90px] rounded-full"
                    src={defaultImage}
                    alt="Default"
                  />
                  <p className="w-[400px] ml-[5%] text-start">
                    AMAN is a trusted solution to transform your digital
                    identity into a unique, secure, and easily accessible asset
                    through blockchain technology.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`h-[20%] w-[97.5%] flex justify-center items-center border-t-[0.1px] ${
            darkMode ? "border-white" : ""
          }`}
        >
         <p>&copy; 2024 Aman. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
