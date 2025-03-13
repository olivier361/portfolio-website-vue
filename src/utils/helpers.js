// This file contains useful helper functions to be used in the application.

/**
 * returns a string word "X years" of how many years it has been
 * from the given month and year to now.
 * @param {number} month an integer between 1 and 12.
 * @param {number} year a valid year integer.
 * @returns {string} A string "X years" refering to
 * the number of years since the given month and year.
 */
export function yearsSinceString(month, year) {
  // Throw if the month and year are not integers
  if (!Number.isInteger(month) || !Number.isInteger(year)) {
    throw new TypeError('Invalid month or year. These values must be integers.');
  }

  // Throw if the month is not between 1 and 12
  if (month < 1 || month > 12) {
    throw new RangeError('Invalid month. The month must be between 1 and 12.');
  }

  const pastDate = new Date(year, month - 1);
  const now = new Date();

  console.log(pastDate);
  console.log(now);

  // compute the difference in years between the two dates
  let yearDiff = now.getFullYear() - pastDate.getFullYear();

  // If the current month is less than the pastDate month, then we substract a year.
  const monthDiff = now.getMonth() - pastDate.getMonth();

  if (monthDiff <= 0) {
    yearDiff--;
  }

  if (yearDiff < 0) {
    throw new Error('Could not compute years since. Either the provided year is not in the past, '
      + 'or the function failed to get the correct current date.');
  }

  switch (yearDiff) {
    case 0:
      return 'less than a year';
    case 1:
      return 'one year';
    case 2:
      return 'two years';
    case 3:
      return 'three years';
    case 4:
      return 'four years';
    case 5:
      return 'five years';
    case 6:
      return 'six years';
    case 7:
      return 'seven years';
    case 8:
      return 'eight years';
    case 9:
      return 'nine years';
    case 10:
      return 'ten years';
    case 11:
      return 'eleven years';
    case 12:
      return 'twelve years';
    default:
      return `${yearDiff} years`;
  }
}
