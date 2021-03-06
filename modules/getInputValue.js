import { pathOr, pipe, trim } from 'ramda';

const getInputValue = pipe(
  pathOr('', ['target', 'value']),
  trim
);


//whenever im bored I will create templates 