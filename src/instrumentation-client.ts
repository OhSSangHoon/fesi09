// src/instrumentation-client.ts

import * as Sentry from '@sentry/nextjs';

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://ee8454b2430001c4b74533dd4f1ff516@o4509173918007296.ingest.us.sentry.io/4509173922004992',

    // Add optional integrations for additional features
    integrations: [Sentry.replayIntegration()],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
