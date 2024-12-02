function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const width = maxLength + 4;
    const frame = ['*'.repeat(width)];
    for (const n of names) {
        frame.push(`* ${n.padEnd(maxLength, ' ')} *`);
    }
    frame.push('*'.repeat(width));
    return frame.join('\n');
}
