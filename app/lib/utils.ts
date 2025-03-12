/**
 * utils.ts
 * Title: Utility Functions
 * Description: Collection of small utility helpers like cx for conditionally joining class names.
 */

export function cx(
    ...classNames: Array<string | undefined | null | false>
  ): string {
    return classNames.filter(Boolean).join(' ')
  }