import { useDarkMode } from "../DarkModeContext";
import { useActor } from "@/ic/Actors";
import { useInternetIdentity } from "ic-use-internet-identity";
import { useEffect, useState } from "react";

const Profile = () => {
  const { darkMode } = useDarkMode();
  const { identity, clear } = useInternetIdentity();
  const { actor: backend } = useActor();
  const [principal, setPrincipal] = useState<string>();

  // Clear the principal when the identity is cleared
  useEffect(() => {
    if (!identity) setPrincipal(undefined);
  }, [identity]);

  // Get the principal from the backend when an identity is available
  useEffect(() => {
    if (identity && backend && !principal) {
      backend.whoami().then((p) => setPrincipal(p));
    }
  }, [backend, identity, principal]);

  return (
    <div
      className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-[40px] font-bold mb-[1%]">PROFILE</h1>
      <div
        className={`p-[10px] flex bg-[#ffffff50] border-[1px] rounded-[10px] ${
          darkMode ? "border-white" : ""
        }`}
      >
        {/* Label Section */}
        <div className="text-start flex flex-col gap-5">
          <p className="flex h-[40px] w-[150px] items-center">Principal</p>
        </div>

        {/* Data Section */}
        <div className="flex flex-col gap-5">
          <p className="flex justify-center items-center">
            :{" "}
            <span className="h-[40px] bg-[#e8e8e860] rounded-[5px] ml-[20px] flex items-center pl-[15px] pr-4">
              {principal}
            </span>
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-[1%]">
        {principal && (
          <button
            className="h-[45px] w-[25.5vw] rounded-[5px] bg-[#b79ffc] text-white"
            onClick={clear}
          >
            LOGOUT
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
