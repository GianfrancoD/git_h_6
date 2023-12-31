import { slice } from './utils';
import differenceBy from '../src/differenceBy';

describe('differenceBy', () => {
    it('should accept an `iteratee`', () => {
        let actual = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        expect(actual).toEqual([1.2]);

        actual = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
        expect(actual).toEqual([{ x: 2 }]);
    });

    it('should provide correct `iteratee` arguments', () => {
        let args;

        differenceBy([2.1, 1.2], [2.3, 3.4], function () {
            args || (args = slice.call(arguments));
        });

        expect(args).toEqual([2.3]);
    });
});
