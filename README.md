# @x402apis/protocol

Shared TypeScript types and utilities for the x402 API Router ecosystem.

## Installation
```bash
npm install @x402apis/protocol
```

## Usage
```typescript
import { Provider, selectBestProvider, validateProvider } from '@x402apis/protocol';

const providers: Provider[] = [
  { id: '1', apis: ['openai'], price: 0.045, latency: 200, reputation: 95, ... },
  { id: '2', apis: ['openai'], price: 0.03, latency: 300, reputation: 85, ... }
];

// Select best provider
const best = selectBestProvider(providers, { preferCheap: true });

// Validate provider data
validateProvider(someProviderData);
```

## API

### Types
- `Provider` - Provider node representation
- `APICall` - API request structure
- `CallOptions` - Request configuration
- `DiscoveryRequest` - Provider discovery params
- `Payment` - x402 payment details

### Functions
- `selectBestProvider()` - Choose optimal provider
- `calculateProviderScore()` - Score providers
- `filterProviders()` - Apply constraints
- `rankProviders()` - Sort by score
- `validate*()` - Type validation

### Errors
- `X402Error` - Base error
- `ValidationError` - Invalid input
- `ProviderNotFoundError` - No providers available
- `PaymentError` - Payment issues
- `TimeoutError` - Request timeout
- `InsufficientFundsError` - Low balance

## License

MIT