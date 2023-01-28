function toUnderscore(string) {
  return isNaN(string)
    ? string.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase()).slice(1)
    : '' + string;
}
