import { LogLevel } from '../logger/types';

export interface ConsumerVersionSelector {
  tag?: string;
  latest?: boolean;
  consumer?: string;
  deployedOrReleased?: boolean;
  deployed?: boolean;
  released?: boolean;
  environment?: string;
  fallbackTag?: string;
  branch?: string;
  mainBranch?: boolean;
  matchingBranch?: boolean;
}

export interface VerifierOptions {
  providerBaseUrl: string;
  provider?: string;
  pactUrls?: string[];
  pactBrokerUrl?: string;
  pactBrokerUsername?: string;
  pactBrokerPassword?: string;
  pactBrokerToken?: string;
  consumerVersionTags?: string | string[];
  providerVersionTags?: string | string[];
  providerStatesSetupUrl?: string;
  publishVerificationResult?: boolean;
  providerVersion?: string;
  enablePending?: boolean;
  includeWipPactsSince?: string;
  consumerVersionSelectors?: ConsumerVersionSelector[];
  timeout?: number;
  logLevel?: LogLevel;
  disableSslVerification?: boolean;
}

/** These are the deprecated verifier options, removed prior to this verison,
 * but it's useful to know what they were so we can potentially map or warn.
 */
type DeprecatedVerifierOptions = {
  format?: 'json' | 'xml' | 'progress' | 'RspecJunitFormatter';
  out?: string;
  customProviderHeaders?: string[];
  verbose?: boolean;
  monkeypatch?: string;
  logDir?: string;
};

/** Helper type for the mapper to reason about the options we want to be able to handle.
 * Not exposed, because we only want to expose the current VerifierOptions to the user
 * @internal */
export type InternalPactVerifierOptions = VerifierOptions &
  DeprecatedVerifierOptions;
