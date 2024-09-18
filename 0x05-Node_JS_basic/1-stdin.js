process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const msg = process.stdin.read();
  if (msg !== null) {
    process.stdout.write(`Your name is: ${msg}`);
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
