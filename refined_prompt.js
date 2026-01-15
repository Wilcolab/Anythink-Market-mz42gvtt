/**
 * Implement a function addNumbers(a, b) that returns the sum of two numbers.
 *
 * ✅ Expected behavior:
 * - addNumbers(5, 3) should return 8
 * - addNumbers(-2, 10) should return 8
 * - addNumbers(0, 0) should return 0
 * - addNumbers(1.5, 2.5) should return 4
 *
 * ❌ Error handling / invalid inputs:
 * - The function must NOT coerce types (do not convert "5" to 5).
 * - Both inputs must be of type "number" and must be finite numbers.
 * - Use Number.isFinite() to ensure the values are not NaN, Infinity, or -Infinity.
 * - If inputs are invalid, throw an Error (do NOT return null/undefined).
 *
 * The function should throw with a descriptive message in these cases:
 * - addNumbers('5', 3) -> throw Error (invalid type for a)
 * - addNumbers(5, '3') -> throw Error (invalid type for b)
 * - addNumbers(undefined, 3) -> throw Error (missing/undefined a)
 * - addNumbers(null, 3) -> throw Error (null a is invalid)
 * - addNumbers(NaN, 3) -> throw Error (a must be finite)
 * - addNumbers(5, Infinity) -> throw Error (b must be finite)
 *
 * Error message guideline:
 * - Must clearly mention which argument is invalid ("a" or "b")
 * - Must mention that a finite number was expected
 *
 * Example error format:
 * Error: Invalid input: a must be a finite number
 */
function addNumbers(a, b) {
  // TODO: implement
}
