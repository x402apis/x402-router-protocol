import { Chain, ChainConfig } from "./types/chain";

/**
 * Default registry URL
 */
export const DEFAULT_REGISTRY_URL = 'https://registry.x402apis.io';

/**
 * Default scoring weights
 */
export const SCORING_WEIGHTS = {
    price: 0.3,
    latency: 0.3,
    reputation: 0.4,
};

/**
 * Default call options
 */
export const DEFAULT_CALL_OPTIONS = {
    timeout: 30000, // 30s
    retries: 2,
    minReputation: 50,
};

/**
 * Cache TTL in milliseconds
 */
export const CACHE_TTL = 30000; // 30s

/**
 * Provider health check interval
 */
export const HEALTH_CHECK_INTERVAL = 60000; // 1min

/**
 * Maximum providers to return in discovery
 */
export const MAX_DISCOVERY_RESULTS = 20;

/**
 * Minimum provider uptime percentage
 */
export const MIN_UPTIME = 95;

export const CHAIN_CONFIGS: Record<Chain, ChainConfig> = {
    solana: {
        chain: 'solana',
        rpcEndpoint: 'https://api.mainnet-beta.solana.com',
        paymentToken: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
    },
    ethereum: {
        chain: 'ethereum',
        rpcEndpoint: 'https://eth-mainnet.g.alchemy.com/v2/...',
        paymentToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
    },
    base: {
        chain: 'base',
        rpcEndpoint: 'https://mainnet.base.org',
        paymentToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
    },
};

export const DEFAULT_CHAIN: Chain = 'solana';