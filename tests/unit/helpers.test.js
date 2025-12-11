import { suite, test, expect, vi } from 'vitest';

import { yearsSinceString, getCurrentYear, getAssetsSiteUrl } from '@/utils/helpers.js';

suite('yearsSinceString() - Unit Tests', () => {

  // Sample of testing a function that throws an error.
  // The new version of yearsSinceString() no longer throws errors
  // so we don't need this anymore. Just keeping for reference.

  // test('yearsSinceString() - throws when month is not an integer', () => {
  //   expect(() => yearsSinceString('8', 2024))
  //     .toThrow('Invalid month or year. These values must be integersssss.');
  // });

  test('yearsSinceString() - console.error and fallback when month is not an integer', () => {
    // create a mock for console.error to track its calls
    // and prevent it from actually logging in the test suite
    const spy = vi.spyOn(console, 'error').mockImplementation(() => { return; });

    const fallback = 'fallback string';

    const result = yearsSinceString('8', 2024, fallback);

    // verify that a console.error was called with the correct message
    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      'yearsSinceString() - Invalid month or year. These values must be integers.',
    );

    // verify that the function returned the fallback string
    expect(result).toBe(fallback);
  });

  test('yearsSinceString() - console.error and fallback when year is not an integer', () => {
    // create a mock for console.error to track its calls
    // and prevent it from actually logging in the test suite
    const spy = vi.spyOn(console, 'error').mockImplementation(() => { return; });

    const fallback = 'fallback string';

    const result = yearsSinceString(8, '2024', fallback);

    // verify that a console.error was called with the correct message
    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      'yearsSinceString() - Invalid month or year. These values must be integers.',
    );

    // verify that the function returned the fallback string
    expect(result).toBe(fallback);
  });

  test.each([
    [0, 2024, true],
    [1, 2024, false],
    [5, 2024, false],
    [12, 2024, false],
    [13, 2024, true],
  ])('yearsSinceString() - console.error and fallback when month not between 1 and 12 - month=%d',
    (month, year, shouldFallback) => {
      // create a mock for console.error to track its calls
      // and prevent it from actually logging in the test suite
      const spy = vi.spyOn(console, 'error').mockImplementation(() => { return; });

      const fallback = 'fallback string';

      const result = yearsSinceString(month, year, fallback);

      if (shouldFallback) {
        // verify that a console.error was called with the correct message
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(
          'yearsSinceString() - Invalid month. The month must be between 1 and 12.',
        );

        // verify that the function returned the fallback string
        expect(result).toBe(fallback);
      }
      else {
        // verify that a console.error was not called
        expect(spy).not.toHaveBeenCalled();

        // verify that the function returned a non-fallback string
        expect(typeof result).toBe('string');
        expect(result).not.toBe(fallback);
      }
    });

  test('yearsSinceString() - computes the years since correctly - general case', () => {
    const fallback = 'fallback string';
    const words = [
      'less than a year', 'one year', 'two years', 'three years', 'four years',
      'five years', 'six years', 'seven years', 'eight years', 'nine years',
      'ten years', 'eleven years', 'twelve years', '13 years',
    ];

    // mock the system time for testing
    const mockTime = new Date(2000, 5, 1); // June 1, 2000

    vi.useFakeTimers();
    vi.setSystemTime(mockTime);

    // console.log(`getMockedSystemTime(): ${vi.getMockedSystemTime()}`);

    for (let i = 0; i < words.length; i++) {
      const result = yearsSinceString(5, 2000 - i, fallback); // May 2000 - i years

      expect(result).toBe(words[i]);
    }

    // restore the real system time for other tests
    vi.useRealTimers();
  });

  test('yearsSinceString() - given month larger than current month reduces year count by 1', () => {
    const fallback = 'fallback string';

    // mock the system time for testing
    const mockTime = new Date(2010, 5, 1); // June 1, 2010

    vi.useFakeTimers();
    vi.setSystemTime(mockTime);

    expect(yearsSinceString(4, 2008, fallback)).toBe('two years'); // April 2008
    expect(yearsSinceString(5, 2008, fallback)).toBe('two years'); // May 2008
    expect(yearsSinceString(6, 2008, fallback)).toBe('one year'); // June 2008
    expect(yearsSinceString(7, 2008, fallback)).toBe('one year'); // July 2008

    // restore the real system time for other tests
    vi.useRealTimers();
  });

  test(
    'yearsSinceString() - console.error and fallback when same year and month is in the future',
    () => {
      // create a mock for console.error to track its calls
      // and prevent it from actually logging in the test suite
      const spy = vi.spyOn(console, 'error').mockImplementation(() => { return; });

      // mock the system time for testing
      const mockTime = new Date(2000, 5, 1); // June 1, 2000

      vi.useFakeTimers();
      vi.setSystemTime(mockTime);

      const fallback = 'fallback string';

      const result = yearsSinceString(7, 2000, fallback); // July 2000,

      // verify that a console.error was called with the correct message
      expect(spy).toHaveBeenCalledOnce();
      expect(spy).toHaveBeenCalledWith(
        'yearsSinceString() - Could not compute years since. '
        + 'Either the provided year is not in the past, '
        + 'or the function failed to get the correct current date.',
      );

      // verify that the function returned the fallback string
      expect(result).toBe(fallback);

      // restore the real system time for other tests
      vi.useRealTimers();
    });

  test(
    'yearsSinceString() - console.error and fallback when year is in the future',
    () => {
      // create a mock for console.error to track its calls
      // and prevent it from actually logging in the test suite
      const spy = vi.spyOn(console, 'error').mockImplementation(() => { return; });

      // mock the system time for testing
      const mockTime = new Date(2000, 5, 1); // June 1, 2000

      vi.useFakeTimers();
      vi.setSystemTime(mockTime);

      const fallback = 'fallback string';

      const result = yearsSinceString(5, 2001, fallback); // May 2001,

      // verify that a console.error was called with the correct message
      expect(spy).toHaveBeenCalledOnce();
      expect(spy).toHaveBeenCalledWith(
        'yearsSinceString() - Could not compute years since. '
        + 'Either the provided year is not in the past, '
        + 'or the function failed to get the correct current date.',
      );

      // verify that the function returned the fallback string
      expect(result).toBe(fallback);

      // restore the real system time for other tests
      vi.useRealTimers();
    });

});

suite('getCurrentYear() - Unit Tests', () => {

  test('getCurrentYear() - returns current year correctly - general case', () => {
    // create mocks for console.error and console.warn to track its calls
    // and prevent it from actually logging in the test suite
    const spyError = vi.spyOn(console, 'error').mockImplementation(() => { return; });
    const spyWarn = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

    const currentYear = 2007;
    const fallback = 2000;

    // mock the system date for testing
    const mockDate = new Date(currentYear, 5, 29); // June 29, 2007

    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    const result = getCurrentYear(fallback);

    expect(result).toBe(currentYear);

    // no errors logged on happy path
    expect(spyError).not.toHaveBeenCalled();
    expect(spyWarn).not.toHaveBeenCalled();

    // restore the real system time for other tests
    vi.useRealTimers();
  });

  test.each([
    [2023, 2024, true], // uses fallback
    [1950, 1949, false], // uses computed year
    [2010, 2010, false], // uses computed year
  ])('getCurrentYear() - returns fallback if computed current year is smaller - cur=%d, fal=%d',
    (currentYear, fallback, returnsFallback) => {
      // create mocks for console.error and console.warn to track its calls
      // and prevent it from actually logging in the test suite
      const spyError = vi.spyOn(console, 'error').mockImplementation(() => { return; });
      const spyWarn = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

      // mock the system date for testing
      const mockDate = new Date(currentYear, 0, 1); // January 1, currentYear

      vi.useFakeTimers();
      vi.setSystemTime(mockDate);

      const result = getCurrentYear(fallback);

      expect(result).toBe(returnsFallback ? fallback : currentYear);

      // no errors logged on happy path
      expect(spyError).not.toHaveBeenCalled();
      expect(spyWarn).not.toHaveBeenCalled();

      // restore the real system time for other tests
      vi.useRealTimers();
    });

  test('getCurrentYear() - returns undefined and logs error when fallback is not a number', () => {
    // create mocks for console.error and console.warn to track its calls
    // and prevent it from actually logging in the test suite
    const spyError = vi.spyOn(console, 'error').mockImplementation(() => { return; });
    const spyWarn = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

    const currentYear = 2007;
    const fallback1 = '2000'; // invalid fallback. String is not a number.
    const fallback2 = 2000.5; // invalid fallback. Float is not an integer.

    // mock the system date for testing
    const mockDate = new Date(currentYear, 5, 29); // June 29, 2007

    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    // TEST 1: fallback is a string
    const result1 = getCurrentYear(fallback1);

    expect(result1).toBeUndefined();

    // log error when fallback is not a number
    expect(spyError).toHaveBeenCalledOnce();
    expect(spyError).toHaveBeenCalledWith(
      'getCurrentYear() - Invalid fallback value. This value must be a number.',
    );

    expect(spyWarn).not.toHaveBeenCalled();

    // clear all mock call counts
    spyError.mockClear();
    spyWarn.mockClear();

    // TEST 2: fallback is a float
    const result2 = getCurrentYear(fallback2);

    expect(result2).toBeUndefined();

    // log error when fallback is not a number
    expect(spyError).toHaveBeenCalledOnce();
    expect(spyError).toHaveBeenCalledWith(
      'getCurrentYear() - Invalid fallback value. This value must be a number.',
    );

    expect(spyWarn).not.toHaveBeenCalled();

    // restore the real system time for other tests
    vi.useRealTimers();
  });

  test('getCurrentYear() - returns fallback and logs warning when date function fails', () => {
    // create mocks for console.error and console.warn to track its calls
    // and prevent it from actually logging in the test suite
    const spyError = vi.spyOn(console, 'error').mockImplementation(() => { return; });
    const spyWarn = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

    // mock the getFullYear() function to throw an error when called
    const spyDateGetFullYear = vi.spyOn(Date.prototype, 'getFullYear')
      .mockImplementation(() => {
        throw new Error('Mocked getFullYear() error');
      });

    const fallback = 2000;

    const result = getCurrentYear(fallback);

    expect(result).toBe(fallback);

    expect(spyDateGetFullYear).toHaveBeenCalledOnce();

    // no errors logged as fallback is valid
    expect(spyError).not.toHaveBeenCalled();

    // verify that a console.warn was called with the correct message
    expect(spyWarn).toHaveBeenCalledOnce();
    expect(spyWarn).toHaveBeenCalledWith(
      'getCurrentYear() - Could not compute the current year. Using provided fallback.',
      expect.objectContaining({ message: 'Mocked getFullYear() error' }),
    );
  });

});

suite('getAssetsSiteUrl() - Unit Tests', () => {

  test('getAssetsSiteUrl() - returns env variable when set', () => {
    // mock the Vite environment variable
    vi.stubEnv('VITE_ASSETS_SITE_URL', 'https://example.com');

    const result = getAssetsSiteUrl();

    expect(result).toBe('https://example.com');

    // restore the original environment variables
    vi.unstubAllEnvs();
  });

  test(
    'getAssetsSiteUrl() - returns dynamically created url and console.warn when env var not set',
    () => {
      // mock the Vite environment variable as not set
      vi.stubEnv('VITE_ASSETS_SITE_URL', undefined);
      // mock window.location.hostname for testing
      vi.stubGlobal('location', { hostname: 'test12345.com' });

      // create a mock for console.error to track its calls
      // and prevent it from actually logging in the test suite
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

      const result = getAssetsSiteUrl();

      expect(result).toBe('https://assets.test12345.com');

      // verify that a console.warn was called
      expect(spy).toHaveBeenCalledOnce();

      // restore the original environment variables
      vi.unstubAllEnvs();
      // restore the original global variables (i.e. window.location)
      vi.unstubAllGlobals();
    });

});
