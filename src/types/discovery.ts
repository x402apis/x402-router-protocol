import { Provider } from './provider';

/**
 * Provider discovery request
 */
export interface DiscoveryRequest {
    /** API to discover providers for */
    api: string;

    /** Maximum price filter */
    maxPrice?: number;

    /** Minimum reputation filter */
    minReputation?: number;

    /** Maximum latency filter in ms */
    maxLatency?: number;

    /** Limit number of results */
    limit?: number;
}

/**
 * Provider discovery response
 */
export interface DiscoveryResponse {
    /** Matching providers */
    providers: Provider[];

    /** Total providers available (before filtering) */
    total: number;

    /** Response timestamp */
    timestamp: Date;

    /** Cache TTL in seconds */
    cacheTTL: number;
}

/**
 * Cached provider data
 */
export interface CachedProviders {
    providers: Provider[];
    timestamp: number;
    expiresAt: number;
}