/**
 * Base error for x402 protocol
 */
export class X402Error extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'X402Error';
    }
}

/**
 * Validation error
 */
export class ValidationError extends X402Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

/**
 * Provider not found error
 */
export class ProviderNotFoundError extends X402Error {
    constructor(api: string) {
        super(`No providers found for API: ${api}`);
        this.name = 'ProviderNotFoundError';
    }
}

/**
 * Payment error
 */
export class PaymentError extends X402Error {
    constructor(message: string) {
        super(message);
        this.name = 'PaymentError';
    }
}

/**
 * Timeout error
 */
export class TimeoutError extends X402Error {
    constructor(timeout: number) {
        super(`Request timed out after ${timeout}ms`);
        this.name = 'TimeoutError';
    }
}

/**
 * Insufficient funds error
 */
export class InsufficientFundsError extends X402Error {
    constructor(required: number, available: number) {
        super(`Insufficient funds: need ${required} USDC, have ${available} USDC`);
        this.name = 'InsufficientFundsError';
    }
}