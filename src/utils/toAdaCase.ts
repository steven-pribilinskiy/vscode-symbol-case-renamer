const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

export function toAdaCase(word: string): string {
  const result = word
    .replace(SPLIT_LOWER_UPPER_RE, '$1 $2')
    .replace(SPLIT_UPPER_UPPER_RE, '$1 $2')
    .replace(DEFAULT_STRIP_REGEXP, ' ');

  return result
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('_');
}
