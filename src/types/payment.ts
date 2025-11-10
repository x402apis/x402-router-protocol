import { Chain } from "./chains";

/**
 * x402 payment details
 */
export interface Payment {
    /** Payment token */
    token: string;

    /** Recipient wallet address */
    to: string;

    /** Amount in USDC */
    amount: number;

    /** Resource being paid for */
    resource: string;

    chain: Chain;  // Add this

    /** Payment signature */
    signature?: string;

    /** Payment timestamp */
    timestamp: Date;
}

/**
 * Payment verification result
 */
export interface PaymentVerification {
    /** Whether payment is valid */
    valid: boolean;

    /** Payment details */
    payment?: Payment;

    /** Error message if invalid */
    error?: string;
}

/**
 * Payment configuration
 */
export interface PaymentConfig {
    /** Wallet keypair path */
    walletPath: string;

    /** RPC endpoint */
    rpcEndpoint?: string;

    /** Payment timeout in milliseconds */
    timeout?: number;
}