function inBox(box: string[]): boolean {
  const topAndLast = /^#+$/;
  const checkPresent = /^#.*\*.*#$/;
  if (!topAndLast.test(box[0]) || !topAndLast.test(box[box.length - 1]))
    return false;
  return box.slice(1, -1).some(line => checkPresent.test(line));
}
