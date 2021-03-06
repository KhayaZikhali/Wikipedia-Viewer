import { concat } from 'ramda';

const getWikipediaSearchUrlFor = concat(
  'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='
);