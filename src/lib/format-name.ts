/**
 * Formats a person's name consistently: "First Name LASTNAME".
 * Title-cases each word of the first name, uppercases the last name.
 */
export function formatName(firstName: string, lastName: string): string {
  const titleCase = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return `${titleCase(firstName)} ${lastName.trim().toUpperCase()}`;
}
