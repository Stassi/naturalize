import { map, pipe } from 'ramda';
import utf16Code from './utf16Code';

const mapUTF16Code = pipe(utf16Code, map);

export default mapUTF16Code;
