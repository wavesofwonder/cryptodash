'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { SUPPORTED_CHAINS } from '../lib/chains';

interface NFTGalleryProps {
  address: string;
  selectedChain: number | null;
}

interface NFTData {
  tokenId: string;
  name: string;
  description?: string;
  image?: string;
  collection: {
    name: string;
    symbol: string;
    address: string;
  };
  chain: string;
}

export function NFTGallery({ address, selectedChain }: NFTGalleryProps) {
  const [data, setData] = useState<NFTData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNFTData = async () => {
      setIsLoading(true);
      try {
        // Mock data for now - will be replaced with actual Blockscout MCP calls
        const mockData: NFTData[] = [
          {
            tokenId: '1',
            name: 'Cool NFT #1',
            description: 'A really cool NFT from the collection',
            image: 'https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=NFT+1',
            collection: {
              name: 'Cool Collection',
              symbol: 'COOL',
              address: '0x1234567890123456789012345678901234567890',
            },
            chain: 'Ethereum',
          },
          {
            tokenId: '42',
            name: 'Awesome NFT #42',
            description: 'Another awesome NFT',
            image: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=NFT+42',
            collection: {
              name: 'Awesome Collection',
              symbol: 'AWESOME',
              address: '0x2345678901234567890123456789012345678901',
            },
            chain: 'Base',
          },
          {
            tokenId: '1337',
            name: 'Epic NFT #1337',
            description: 'An epic NFT for the collection',
            image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=NFT+1337',
            collection: {
              name: 'Epic Collection',
              symbol: 'EPIC',
              address: '0x3456789012345678901234567890123456789012',
            },
            chain: 'Arbitrum',
          },
        ];
        
        setData(mockData);
      } catch (error) {
        console.error('Error loading NFT data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNFTData();
  }, [address, selectedChain]);

  if (isLoading) {
    return (
      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                <div className="h-48 bg-gray-700 rounded mb-3"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">NFT Collection</h3>
      
      {data.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">No NFTs found</div>
          <div className="text-sm text-gray-500">Your NFT collection will appear here</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((nft, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-colors">
              <div className="aspect-square bg-gray-700 relative">
                {nft.image ? (
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x300/6B7280/FFFFFF?text=NFT';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {nft.chain}
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm font-medium mb-1">{nft.name}</div>
                <div className="text-xs text-gray-400 mb-2">{nft.collection.name}</div>
                {nft.description && (
                  <div className="text-xs text-gray-500 line-clamp-2">{nft.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {data.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-800">
          <button className="text-sm text-blue-400 hover:text-blue-300">
            View all NFTs →
          </button>
        </div>
      )}
    </div>
  );
}
