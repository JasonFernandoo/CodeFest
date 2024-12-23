import { useInView } from "react-intersection-observer";

const OverviewContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mt-4 md:mt-8">
      {/* Section Headers */}
      <div className="min-h-[30vh] w-full flex flex-col justify-center text-start mb-12 md:mb-16">
        <h1 className="text-2xl md:text-4xl font-bold">Know better about Aman</h1>
        <p className="text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          Aman is a Web3 platform that leverages blockchain technology to create
          secure, decentralized digital identity cards and manage critical
          assets like certificates, stamps, and seals. As a platform that
          enables the digitization of assets into Web3, Aman connects your data
          seamlessly to the blockchain, ensuring it is tamper-proof,
          transparent, and protected from hacking or unauthorized duplication.
          By empowering individuals to manage, verify, and control their
          identities and assets without intermediaries, Aman guarantees
          unparalleled security and reliability. It also provides flexibility
          for developers to build applications that enhance these capabilities,
          offering a future where your digital assets remain authentic, secure,
          and fully under your control.
        </p>
      </div>

      {/* Card Containers */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 mb-16 md:mb-24">
        {/* Card Component */}
        <div ref={ref}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">What is Aman?</h2>
            <p className="text-sm md:text-base">
              Aman is a blockchain-based platform for creating decentralized
              digital identities.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          <div className="w-full flex items-center justify-center">
            <button className="h-[40px] w-[95%] bg-[#b79ffc] rounded-[5px] text-white">
              What is Aman?
            </button>
          </div>
        </div>
        <div ref={ref}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">What is ICP?</h2>
            <p className="text-sm md:text-base">
              ICP is a decentralized platform for building secure, scalable
              applications.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          <div className="w-full flex items-center justify-center">
            <button className="h-[40px] w-[95%] bg-[#b79ffc] rounded-[5px] text-white">
              What is Aman?
            </button>
          </div>
        </div>
        <div ref={ref}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">What is Web3?</h2>
            <p className="text-sm md:text-base">
              Web3 is a decentralized internet powered by blockchain technology
              and cryptography.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          <div className="w-full flex items-center justify-center">
            <button className="h-[40px] w-[95%] bg-[#b79ffc] rounded-[5px] text-white">
              What is Aman?
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[30vh] flex flex-col justify-center text-start" 
        id="how-to-use-aman">
        <h1 className="text-[30px] font-bold">How do I use Aman?</h1>
        <p className="text-[18px] mt-[3%]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Orci tempus
          vehicula senectus risus tincidunt taciti molestie sollicitudin. At
          quis cubilia elementum magna luctus himenaeos sollicitudin viverra.
          Curabitur diam conubia condimentum aliquet quis ac litora ut magnis.
          Augue netus tortor blandit aenean parturient. Libero suscipit sapien
          malesuada arcu ligula iaculis.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row 
        justify-start md:justify-between items-start 
        gap-6 md:gap-8 ">
        <div ref={ref}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Find a wallet</h2>
            <p className="text-sm md:text-base">
              Discover wallets compatible with Web3 to securely store and manage
              your digital assets.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          
          <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] 
            rounded-[5px] text-white">
            What is Aman?
          </button>
        </div>

        <div ref={ref2}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">What is a wallet</h2>
            <p className="text-sm md:text-base">
              A wallet is a tool that helps you securely store, send, and
              receive cryptocurrencies or digital assets.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          
          <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] rounded-[5px] text-white">
            What is Aman?
          </button>
        </div>

        <div ref={ref2}
          className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
            border-[0.5px] dark:border-0 
            flex flex-col justify-between items-center 
            transition-transform duration-700 ease-out
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">ICP networks</h2>
            <p className="text-sm md:text-base">
              {" "}
              An introduction to Internet Computer Protocol (ICP) and its role
              in powering scalable decentralized applications.
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 mb-4"></div>
          
          <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] rounded-[5px] text-white">
            What is Aman?
          </button>
        </div>
      </div>
      <div className="w-full min-h-[30vh] flex flex-col justify-center text-start" 
        id="what-is-aman-used-for">
        <h1 className="text-[30px] font-bold">What is Aman use for?</h1>
        <p className="text-[18px] mt-[3%]">
          Aman has paved the way for the development of new products and
          services that can enhance various aspects of our lives. While we are
          still in the early stages, there’s plenty to look forward to.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row 
        justify-start md:justify-between items-start 
        gap-6 md:gap-8 ">
        <div ref={ref3}
            className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
              border-[0.5px] dark:border-0 
              flex flex-col justify-between items-center 
              transition-transform duration-700 ease-out
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Digital identity creation</h2>
              <p className="text-sm md:text-base">
                Aman allows users to create secure, blockchain-based digital
                identity cards, certification, and duty stamps.
              </p>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 mb-4"></div>
            
            <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] 
              rounded-[5px] text-white">
              What is digital identity?
            </button>
          </div>

          <div ref={ref3}
            className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
              border-[0.5px] dark:border-0 
              flex flex-col justify-between items-center 
              transition-transform duration-700 ease-out
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Secure verification</h2>
              <p className="text-sm md:text-base">
                It provides a tamper-proof way to verify identities without
                relying on centralized authorities.
              </p>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 mb-4"></div>
            
            <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] rounded-[5px] text-white">
              What is secure verification?
            </button>
          </div>

          <div ref={ref3}
            className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
              border-[0.5px] dark:border-0 
              flex flex-col justify-between items-center 
              transition-transform duration-700 ease-out
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">User Control</h2>
              <p className="text-sm md:text-base">
                Users have full control over their identity data, with the ability
                to manage access.
              </p>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 mb-4"></div>
            
            <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] rounded-[5px] text-white">
              What is user control?
            </button>
          </div>
        </div>

      <div className="w-full min-h-screen flex flex-col md:flex-row 
        justify-start md:justify-between items-start
        gap-6 md:gap-8 pt-20">
        <div ref={ref4}
            className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
              border-[0.5px] dark:border-0 
              flex flex-col justify-between items-center 
              transition-transform duration-700 ease-out
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Blockchain integration</h2>
              <p className="text-sm md:text-base">
                Aman leverages the ICP network for decentralized, transparent, and
                immutable identity management.
              </p>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 mb-4"></div>
            
            <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] 
              rounded-[5px] text-white">
              What is blockchain integration?
            </button>
          </div>

          <div ref={ref4}
            className={`w-full md:w-[30%] p-6 bg-[#ffffff40] rounded-lg 
              border-[0.5px] dark:border-0 
              flex flex-col justify-between items-center 
              transition-transform duration-700 ease-out
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <div className="flex flex-col text-start w-full md:w-[80%] mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Global access</h2>
              <p className="text-sm md:text-base">
                Aman enables users to access and use their digital identities
                globally, supporting cross-border authentication.
              </p>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 mb-4"></div>
            
            <button className="w-full py-3 bg-[#b79ffc] hover:bg-[#9d82e8] rounded-[5px] text-white">
              What is global access?
            </button>
          </div>
        </div>
        <div
          ref={ref4}
          className={`h-[90%] pt-[2.5%] pb-[1.5%] w-[30%] bg-gradient-to-l from-[#cc98fb] to-[#a1a6fc] rounded-[5px] border-[0.5px] dark:border-0 flex flex-col justify-center items-center transition-transform duration-700 ease-out ${
            inView4 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="flex flex-col text-start w-[80%] h-[35%]">
            <h1 className="font-bold text-[22px]">Emerging use cases</h1>
            <p>
              There are also other prominent industries being created or
              improved with ICP:
            </p>
          </div>
          
          <div className="w-[85%] h-[80%] flex justify-center text-start">
            <ul className="list-disc pl-5">
              <li>Decentralized Identity Verification</li>
              <li>Access Control and Authentication</li>
              <li>Digital Voting Systems</li>
              <li>Cross-Border Identity Management</li>
              <li>Decentralized Financial Services (DeFi)</li>
              <li>Supply Chain and Product Authenticity</li>
              <li>Healthcare and Medical Records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
