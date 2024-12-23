import { useParams } from "react-router-dom";
import { useActor } from "@/ic/Actors";
import { useEffect, useState } from "react";

const Show = () => {
  const { actor: backend } = useActor();
  let params = useParams();
  if (!params.id) {
    return <div>Token ID not found</div>;
  }

  const [nft, setNft] = useState<string | null>(null);

  useEffect(() => {
    const fetchNft = async () => {
      const result = await backend?.icrc7_get_image(
        params.id ? BigInt(params.id) : 0n
      );
      if (result) {
        const blob = new Blob([new Uint8Array(result)], { type: "image/png" });
        setNft(URL.createObjectURL(blob));
      }
    };
    fetchNft();
  }, [backend, params.id]);

  if (!nft) {
    return <div className="text-black">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-32 mb-10">
      <img src={nft} alt="NFT" />
    </div>
  );
};

export default Show;
