import negate from './negate';
import pipe from './pipe';

const boolean = pipe(negate, negate);

export default boolean;
