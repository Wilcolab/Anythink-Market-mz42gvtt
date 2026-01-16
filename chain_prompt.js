/**
 * CHAIN PROMPT for Copilot:
 *
 * Step 1: Create a JavaScript function named toKebabCase(input) that converts a string into kebab-case.
 *
 * Step 2: Add robust input validation:
 *   - If input is undefined or null, throw an Error("Input must be a non-empty string")
 *   - If input is not a string, throw an Error("Input must be a string")
 *   - If input is an empty string or contains only whitespace, throw an Error("Input must be a non-empty string")
 *
 * Step 3: Implement kebab-case conversion rules:
 *   - Trim leading/trailing spaces
 *   - Convert all letters to lowercase
 *   - Replace spaces and underscores with hyphens
 *   - Insert hyphens between camelCase or PascalCase word boundaries (e.g., "helloWorld" -> "hello-world")
 *   - Remove all non-alphanumeric characters except hyphens
 *   - Collapse multiple consecutive hyphens into a single hyphen
 *   - Remove leading/trailing hyphens from the final output
 *
 * Step 4: Provide at least 8 test cases as console.log calls showing expected output, including:
 *   - "Hello World" -> "hello-world"
 *   - "hello_world" -> "hello-world"
 *   - "helloWorldTest" -> "hello-world-test"
 *   - "  Multiple   Spaces  " -> "multiple-spaces"
 *   - "Already-Kebab" -> "already-kebab"
 *   - invalid inputs (null, undefined, 123, "   ") should throw errors
 *
 * Now generate the complete implementation + test cases.
 */
