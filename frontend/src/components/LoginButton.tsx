import { useActor } from "@/ic/Actors";
import { useInternetIdentity } from "ic-use-internet-identity";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginButton() {
  const navigate = useNavigate();
  const { login, loginStatus, identity } = useInternetIdentity();
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

  const disabled = loginStatus === "logging-in";
  const text =
    loginStatus === "logging-in"
      ? "Logging in..."
      : principal
      ? "Profile"
      : "Login";

  const handleClick = () => {
    if (principal) {
      navigate("/profile");
    } else {
      login();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="far fa-user-circle h-[45px] font-semibold w-[120px] rounded-[10px] bg-[#d9d9d940] flex justify-center items-center gap-2 hover:bg-[#89898930]"
    >
      {text}
    </button>
  );
}
