import React, { useEffect, useState } from 'react';
import { backend } from 'declarations/backend';
import { useDarkMode } from '../DarkModeContext';
import { motion } from 'framer-motion';

type NFT = {
  token_id: bigint;
  metadata: [string, string][];
  image: Uint8Array;
};

const Collections: React.FC = () => {
  const { darkMode } = useDarkMode();
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    async function fetchNFTs() {
      const nftList = await backend.list_all_nfts();
      const formattedNFTs = nftList.map(([token_id, metadata, image]) => ({
        token_id,
        metadata,
        image: new Uint8Array(image),
      }));
      setNfts(formattedNFTs);
    }
    fetchNFTs();
  }, []);

  return (
    <div
      className={`max-w-full w-full flex flex-col justify-start items-center py-10 px-4 ${
        darkMode ? 'bg-black text-white text-3xl' : 'bg-white text-black text-3xl'
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold leading-tight mt-9 text-center"
      >
        NFT Collections
      </motion.h1>

      <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 px-4">
        {nfts.map((nft) => (
          <motion.div
            key={nft.token_id.toString()}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${
              darkMode ? 'bg-black text-white border-white' : 'bg-white text-black border-black'
            }`}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
              <img
                src={URL.createObjectURL(new Blob([nft.image], { type: 'image/png' }))}
                alt=""
                className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0"
              />
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
              style={{
                background: 'linear-gradient(to right, rgba(249,115,22,0.3), rgba(139,92,246,0.3))',
              }}
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                {nft.metadata.find(([key]) => key === 'name')?.[1] || 'NFT'}
              </h2>
              <p className="text-sm md:text-base">
                {nft.metadata.find(([key]) => key === 'description')?.[1] || 'No description'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collections;