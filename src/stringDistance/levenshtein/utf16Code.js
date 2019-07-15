import { curry } from 'ramda';

const utf16Code = curry((str, index) => str.charCodeAt(index));

export default utf16Code;
