// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://26e9480dbcec89b7fd7a2b4e48974085@o4509314574647296.ingest.de.sentry.io/4509314653618256",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  beforeSend: (event, hint) => {
    const error = hint.originalException;
    if(error instanceof Error && error.message.includes("정확한 이메일 형식을 지켜주세요.")) {
      return null;
    }
    return event;
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;