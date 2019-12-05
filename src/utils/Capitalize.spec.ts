import {
  capitalizeFirstLetter,
  capitalizeFirstLetterAndJoin
} from './Capitalize';

describe('Utils', () => {
  it('should capitalize the first letter', () => {
    const str = capitalizeFirstLetter('pikachu')

    expect(typeof str).toEqual('string');
    expect(str).toEqual('Pikachu');
  });

  it('should capitalize the first letter and add a -', () => {
    const str = capitalizeFirstLetterAndJoin('special-attack')

    expect(typeof str).toEqual('string');
    expect(str).toEqual('Special-Attack');
  });
});