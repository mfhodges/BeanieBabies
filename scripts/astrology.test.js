


import { dateToSign, findCompatibleSign, findIncompatibleSign } from './astrology';

test('blah b;ah blah', () => {
    expect(dateToSign(11,12)).toBe("Scorpio");
  });



  test('Aries Compatiblity', () => {
    expect(findCompatibleSign("Aries")).toEqual(["Leo", "Sagittarius", "Gemini", "Aquarius"]);
  });

  test('Aries Incompatiblity', () => {
    expect(findIncompatibleSign("Aries")).toEqual(["Cancer","Capricorn"]);
  });


