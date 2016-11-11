// @flow

export function pluralize(noun: string, quantity: number): string {
  return noun + (quantity === 1 ? '' : 's');
}

export function thumbnailLink(thumbnail: string): ?string {
  return thumbnail !== 'default' && thumbnail !== 'self' ? thumbnail : null;
}
