import { useParams } from "react-router-dom";
// import { useActor } from "@/ic/Actors";
// import { useEffect, useState } from "react";

const Show = () => {
  // const { actor: backend } = useActor();
  let { id } = useParams();
  if (!id) {
    return <div>Token ID not found</div>;
  }

  // const [nft, setNft] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchNft = async () => {
  //     const result = await backend?.icrc7_get_image(BigInt(id));
  //     if (result) {
  //       const blob = new Blob([new Uint8Array(result)], { type: "image/png" });
  //       setNft(URL.createObjectURL(blob));
  //     }
  //   };
  //   fetchNft();
  // }, [backend, id]);

  // if (!nft) {
  //   return <div className="text-black">Loading...</div>;
  // }

  return (
    <div>
      <h1>hello</h1>
      {/* <img src={nft} alt="NFT" /> */}
      <p>
        Token ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default Show;
