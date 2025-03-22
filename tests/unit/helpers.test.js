import { suite, test, expect, vi } from 'vitest';

import { yearsSinceString, getAssetsSiteUrl } from '@/utils/helpers.js';

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
