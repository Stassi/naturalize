import { map, pipe } from 'ramda';
import utf16CodeAt from './utf16CodeAt';

const mapUTF16CodeAt = pipe(utf16CodeAt, map);

export default mapUTF16CodeAt;
