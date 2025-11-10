import { Provider, APICall, DiscoveryRequest, CallOptions } from './types';
import { ValidationError } from './errors';

/**
 * Validate provider data
 */
export function validateProvider(provider: unknown): asserts provider is Provider {
    if (!provider || typeof provider !== 'object') {
        throw new ValidationError('Provider must be an object');
    }

    const p = provider as Partial<Provider>;

    if (!p.id || typeof p.id !== 'string') {
        throw new ValidationError('Provider.id must be a string');
    }

    if (!Array.isArray(p.apis) || p.apis.length === 0) {
        throw new ValidationError('Provider.apis must be a non-empty array');
    }

    if (!p.url || typeof p.url !== 'string') {
        throw new ValidationError('Provider.url must be a string');
    }

    if (!isValidUrl(p.url)) {
        throw new ValidationError('Provider.url must be a valid URL');
    }

    if (!p.wallet || typeof p.wallet !== 'string') {
        throw new ValidationError('Provider.wallet must be a string');
    }

    if (typeof p.price !== 'number' || p.price < 0) {
        throw new ValidationError('Provider.price must be a non-negative number');
    }

    if (typeof p.latency !== 'number' || p.latency < 0) {
        throw new ValidationError('Provider.latency must be a non-negative number');
    }

    if (typeof p.reputation !== 'number' || p.reputation < 0 || p.reputation > 100) {
        throw new ValidationError('Provider.reputation must be between 0-100');
    }
}

/**
 * Validate API call
 */
export function validateAPICall(call: unknown): asserts call is APICall {
    if (!call || typeof call !== 'object') {
        throw new ValidationError('APICall must be an object');
    }

    const c = call as Partial<APICall>;

    if (!c.api || typeof c.api !== 'string') {
        throw new ValidationError('APICall.api must be a string');
    }

    if (!c.params || typeof c.params !== 'object') {
        throw new ValidationError('APICall.params must be an object');
    }

    if (c.maxPrice !== undefined && (typeof c.maxPrice !== 'number' || c.maxPrice < 0)) {
        throw new ValidationError('APICall.maxPrice must be a non-negative number');
    }

    if (c.timeout !== undefined && (typeof c.timeout !== 'number' || c.timeout < 0)) {
        throw new ValidationError('APICall.timeout must be a non-negative number');
    }
}

/**
 * Validate discovery request
 */
export function validateDiscoveryRequest(request: unknown): asserts request is DiscoveryRequest {
    if (!request || typeof request !== 'object') {
        throw new ValidationError('DiscoveryRequest must be an object');
    }

    const r = request as Partial<DiscoveryRequest>;

    if (!r.api || typeof r.api !== 'string') {
        throw new ValidationError('DiscoveryRequest.api must be a string');
    }

    if (r.maxPrice !== undefined && (typeof r.maxPrice !== 'number' || r.maxPrice < 0)) {
        throw new ValidationError('DiscoveryRequest.maxPrice must be non-negative');
    }

    if (r.minReputation !== undefined && (typeof r.minReputation !== 'number' || r.minReputation < 0 || r.minReputation > 100)) {
        throw new ValidationError('DiscoveryRequest.minReputation must be 0-100');
    }

    if (r.maxLatency !== undefined && (typeof r.maxLatency !== 'number' || r.maxLatency < 0)) {
        throw new ValidationError('DiscoveryRequest.maxLatency must be non-negative');
    }

    if (r.limit !== undefined && (typeof r.limit !== 'number' || r.limit < 1)) {
        throw new ValidationError('DiscoveryRequest.limit must be positive');
    }
}

/**
 * Validate call options
 */
export function validateCallOptions(options: unknown): asserts options is CallOptions {
    if (!options || typeof options !== 'object') {
        throw new ValidationError('CallOptions must be an object');
    }

    const o = options as Partial<CallOptions>;

    if (o.maxPrice !== undefined && (typeof o.maxPrice !== 'number' || o.maxPrice < 0)) {
        throw new ValidationError('CallOptions.maxPrice must be non-negative');
    }

    if (o.minReputation !== undefined && (typeof o.minReputation !== 'number' || o.minReputation < 0 || o.minReputation > 100)) {
        throw new ValidationError('CallOptions.minReputation must be 0-100');
    }

    if (o.maxLatency !== undefined && (typeof o.maxLatency !== 'number' || o.maxLatency < 0)) {
        throw new ValidationError('CallOptions.maxLatency must be non-negative');
    }

    if (o.timeout !== undefined && (typeof o.timeout !== 'number' || o.timeout < 0)) {
        throw new ValidationError('CallOptions.timeout must be non-negative');
    }

    if (o.retries !== undefined && (typeof o.retries !== 'number' || o.retries < 0)) {
        throw new ValidationError('CallOptions.retries must be non-negative');
    }
}

/**
 * Check if string is valid URL
 */
function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}