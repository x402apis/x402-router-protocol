export type Chain = 'solana' | 'ethereum' | 'base';

export interface ChainConfig {
    chain: Chain;
    rpcEndpoint: string;
    paymentToken: string; // USDC contract address or 'native'
}