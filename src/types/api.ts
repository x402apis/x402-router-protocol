/**
 * API call request
 */
export interface APICall {
    /** API identifier (e.g., 'openai.chat') */
    api: string;

    /** API-specific parameters */
    params: Record<string, unknown>;

    /** Maximum price willing to pay in USDC */
    maxPrice?: number;

    /** Request timeout in milliseconds */
    timeout?: number;

    /** Additional headers */
    headers?: Record<string, string>;
}

/**
 * API call options
 */
export interface CallOptions {
    /** Maximum price willing to pay */
    maxPrice?: number;

    /** Prefer cheaper providers over quality */
    preferCheap?: boolean;

    /** Request timeout in milliseconds */
    timeout?: number;

    /** Minimum reputation score required */
    minReputation?: number;

    /** Maximum acceptable latency in ms */
    maxLatency?: number;

    /** Require multiple providers to verify result */
    requireConsensus?: boolean;

    /** Number of retry attempts */
    retries?: number;
}

/**
 * API call response
 */
export interface APIResponse<T = unknown> {
    /** Response data */
    data: T;

    /** Provider that served the request */
    providerId: string;

    /** Actual cost in USDC */
    cost: number;

    /** Response time in milliseconds */
    latency: number;

    /** Response timestamp */
    timestamp: Date;

    /** Payment transaction signature */
    paymentSignature?: string;
}

/**
 * API call error
 */
export interface APIError {
    code: string;
    message: string;
    providerId?: string;
    details?: Record<string, unknown>;
}