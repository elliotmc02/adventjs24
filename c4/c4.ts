function createXmasTree(height: number, ornament: string): string {
  let tree: string[] = [];
  for (let i = 1; i <= height; i++) {
    const ornaments = ornament.repeat(i * 2 - 1);
    const spaces = '_'.repeat(height - i);
    tree.push(spaces + ornaments + spaces);
  }
  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  tree.push(trunk);
  tree.push(trunk);
  return tree.join('\n');
}
