// @flow

export function pluralize(noun: string, quantity: number): string {
  return noun + (quantity === 1 ? '' : 's');
}
