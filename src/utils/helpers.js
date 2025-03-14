// This file contains useful helper functions to be used in the application.

/**
 * returns a string word "X years" of how many years it has been
 * from the given month and year to now.
 * @param {number} month an integer between 1 and 12.
 * @param {number} year a valid year integer.
 * @param {string} fallbackString a string to return if the years since cannot be computed.
 * @returns {string} A string "X years" refering to
 * the number of years since the given month and year.
 */
export function yearsSinceString(month, year, fallbackString) {
  // Log error and return fallback if the month and year are not integers
  if (!Number.isInteger(month) || !Number.isInteger(year)) {
    console.error('yearsSinceString() - Invalid month or year. These values must be integers.');
    return fallbackString;
  }

  // Log error and return fallback if the month is not between 1 and 12
  if (month < 1 || month > 12) {
    console.error('yearsSinceString() - Invalid month. The month must be between 1 and 12.');
    return fallbackString;
  }

  const pastDate = new Date(year, month - 1);
  const now = new Date();

  // compute the difference in years between the two dates
  let yearDiff = now.getFullYear() - pastDate.getFullYear();

  // If the current month is less than the pastDate month, then we substract a year.
  const monthDiff = now.getMonth() - pastDate.getMonth();

  if (monthDiff <= 0) {
    yearDiff--;
  }

  // if the result is negative, log an error and return the fallback string
  if (yearDiff < 0) {
    console.error(
      'yearsSinceString() - Could not compute years since. '
      + 'Either the provided year is not in the past, '
      + 'or the function failed to get the correct current date.',
    );
    return fallbackString;
  }

  const words = [
    'less than a year', 'one year', 'two years', 'three years', 'four years',
    'five years', 'six years', 'seven years', 'eight years', 'nine years',
    'ten years', 'eleven years', 'twelve years',
  ];

  return yearDiff < words.length ? words[yearDiff] : `${yearDiff} years`;
}
