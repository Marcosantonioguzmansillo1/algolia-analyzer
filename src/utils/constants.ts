export const urlPattern = new URLPattern({
  hostname: '{*.}(algolianet.com|algolia.net|algolia.io)',
});
export const urlPattern2 = new URLPattern({
  hostname: '(merchandising-staging|analytics|automation|query-categorization).*.algolia.com',
});
export const requestHeaderFilter = 'x-algolia-';
