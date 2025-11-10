import { Chain } from "./chain";

/**
 * Represents a provider node in the x402 network
 */
export interface Provider {
    /** Unique provider identifier */
    id: string;

    /** APIs this provider serves */
    apis: string[];

    /** Public endpoint URL */
    url: string;

    /** Solana wallet address for payments */
    wallet: string;

    acceptedChains: Chain[];  // Add this

    /** Price per request in USDC */
    price: number;

    /** Average response time in milliseconds */
    latency: number;


    /** Reputation score (0-100) */
    reputation: number;

    /** Uptime percentage */
    uptime: number;

    /** Total requests served */
    totalServed: number;

    /** Last seen timestamp */
    lastSeen: Date;

    /** Optional metadata */
    metadata?: Record<string, unknown>;
}

/**
 * Provider registration payload
 */
export interface ProviderRegistration {
    id: string;
    apis: string[];
    url: string;
    wallet: string;
    price: number;
    metadata?: Record<string, unknown>;
}

/**
 * Provider health status
 */
export interface ProviderHealth {
    providerId: string;
    latency: number;
    requestsServed: number;
    errors: number;
    timestamp: Date;
}

/**
 * Provider ranking criteria
 */
export interface ProviderRanking {
    provider: Provider;
    score: number;
    breakdown: {
        priceScore: number;
        latencyScore: number;
        reputationScore: number;
    };
}