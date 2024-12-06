// @ts-ignore (for duplicate function)
function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts)].sort((a, b) => a - b);
}
