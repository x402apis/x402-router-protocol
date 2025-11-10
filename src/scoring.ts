import { Provider, ProviderRanking, CallOptions } from './types';
import { SCORING_WEIGHTS } from './constants';

/**
 * Calculate provider score based on price, latency, and reputation
 */
export function calculateProviderScore(
    provider: Provider,
    options: CallOptions = {}
): ProviderRanking {
    const weights = options.preferCheap
        ? { price: 0.6, latency: 0.2, reputation: 0.2 }
        : SCORING_WEIGHTS;

    // Normalize scores (0-1 range)
    const priceScore = normalizePrice(provider.price, options.maxPrice);
    const latencyScore = normalizeLatency(provider.latency);
    const reputationScore = provider.reputation / 100;

    // Weighted total
    const score =
        priceScore * weights.price +
        latencyScore * weights.latency +
        reputationScore * weights.reputation;

    return {
        provider,
        score,
        breakdown: {
            priceScore,
            latencyScore,
            reputationScore,
        },
    };
}

/**
 * Normalize price to 0-1 score (lower price = higher score)
 */
function normalizePrice(price: number, maxPrice?: number): number {
    if (price === 0) return 1; // Free = perfect score

    const reference = maxPrice || 1.0; // Default reference: $1
    const normalized = 1 - Math.min(price / reference, 1);

    return Math.max(normalized, 0);
}

/**
 * Normalize latency to 0-1 score (lower latency = higher score)
 */
function normalizeLatency(latency: number): number {
    const maxAcceptable = 5000; // 5s max
    const normalized = 1 - Math.min(latency / maxAcceptable, 1);

    return Math.max(normalized, 0);
}

/**
 * Select best provider from list
 */
export function selectBestProvider(
    providers: Provider[],
    options: CallOptions = {}
): Provider {
    if (providers.length === 0) {
        throw new Error('No providers available');
    }

    // Filter by constraints
    const filtered = filterProviders(providers, options);

    if (filtered.length === 0) {
        throw new Error('No providers match criteria');
    }

    // Score and rank
    const rankings = filtered.map(p => calculateProviderScore(p, options));
    rankings.sort((a, b) => b.score - a.score);

    return rankings[0].provider;
}

/**
 * Filter providers by options
 */
export function filterProviders(
    providers: Provider[],
    options: CallOptions
): Provider[] {
    return providers.filter(provider => {
        if (options.maxPrice && provider.price > options.maxPrice) {
            return false;
        }

        if (options.minReputation && provider.reputation < options.minReputation) {
            return false;
        }

        if (options.maxLatency && provider.latency > options.maxLatency) {
            return false;
        }

        return true;
    });
}

/**
 * Sort providers by score
 */
export function rankProviders(
    providers: Provider[],
    options: CallOptions = {}
): ProviderRanking[] {
    const rankings = providers.map(p => calculateProviderScore(p, options));
    return rankings.sort((a, b) => b.score - a.score);
}