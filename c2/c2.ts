function createFrame(names: string[]): string {
  const maxLength: number = Math.max(...names.map(name => name.length));
  const width: number = maxLength + 4;
  const frame: string[] = ['*'.repeat(width)];
  for (const n of names) {
    frame.push(`* ${n.padEnd(maxLength, ' ')} *`);
  }
  frame.push('*'.repeat(width));
  return frame.join('\n');
}
