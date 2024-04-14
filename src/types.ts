export interface ICoin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  explorers: string[];
}

export interface ICrypto {
  [index: number]: ICoin;
}

export interface IAssets {
  amount: number;
  date: Date;
  grow?: boolean;
  growPercent?: number;
  id: string;
  price: number;
  totalAmount?: number;
  totalProfit?: number;
}
