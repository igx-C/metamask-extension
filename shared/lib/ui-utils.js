// no destructuring as process.env detection stops working
// eslint-disable-next-line prefer-destructuring
export const SUPPORT_LINK = process.env.SUPPORT_LINK;

export const COINGECKO_LINK = 'https://www.coingecko.com/';
export const CRYPTOCOMPARE_LINK = 'https://www.cryptocompare.com/';
export const PRIVACY_POLICY_LINK = 'https://consensys.net/privacy-policy/';

// TODO make sure these links are correct
export const ETHERSCAN_PRIVACY_LINK = 'https://etherscan.io/privacyPolicy';
export const CONSENSYS_PRIVACY_LINK = 'https://consensys.net/privacy-policy/';
export const AUTO_DETECT_TOKEN_LEARN_MORE_LINK =
  'https://consensys.net/privacy-policy/';
export const CONSENSYS_TERMS_OF_USE = 'https://consensys.io/terms-of-use';

///: BEGIN:ONLY_INCLUDE_IN(blockaid)
export const BLOCKAID_TERMS_OF_USE =
  'https://blockaid.io/legal/metamask-ppom-privacy-policy/';
///: END:ONLY_INCLUDE_IN
export const OPENSEA_TERMS_OF_USE = 'https://opensea.io/securityproviderterms';
