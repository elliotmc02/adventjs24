type Shoe = {
  type: 'I' | 'R';
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: number[] = [];
  const { I = [], R = [] } = Object.groupBy(shoes, ({ type }) => type);

  I.forEach((l: Shoe) => {
    const index = R.findIndex((r: Shoe) => r.size === l.size);
    if (index !== -1) {
      pairs.push(l.size);
      R.splice(index, 1);
    }
  });
  return pairs;
}
