function formatString(string, maxLength = 40) {
  if (string.length <= maxLength) {
    return string;
  } else if (string.length > maxLength) {
    let shortened = string.split(``).slice(0, maxLength);
    shortened.push(`...`);
    return shortened.join(``);
  }
}

console.log(formatString('Curabitur ligula sapiens, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// // 'Vestibulum facilisis, purus ne...'
