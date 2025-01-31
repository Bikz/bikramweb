// /app/lib/utils.ts (or /lib/utils.ts)

export function cx(
    ...classNames: Array<string | undefined | null | false>
  ): string {
    return classNames.filter(Boolean).join(' ')
  }