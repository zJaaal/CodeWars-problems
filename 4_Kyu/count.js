function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function () {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function () {
  let currentChunk;
  let fullFile = '';

  while ((currentChunk = this.reader.getChunk())) {
    fullFile += currentChunk;
  }

  fullFile.split('\n').forEach((line) => {
    this.lineCount += 1;
    this.charCount += line.length;
    let lineArray = line.trim().split(' ');
    this.wordCount += lineArray.filter((x) => x != '').length;
  });

  if (!fullFile.trim().length) {
    this.wordCount = 0;
    this.lineCount = 0;

    if (fullFile.length) this.lineCount = 1;
  }
};

function FileReaderSimulator(text) {
  var index = -1;
  this.getChunk = function () {
    index++;
    return index == text.length ? '' : text.charAt(index);
  };
}

var fileContent = `Once   upon a             time`,
  reader = new FileReaderSimulator(fileContent),
  parser = new DocumentParser(reader);

parser.parse();

console.log(parser.charCount, fileContent.replace('\n', '').length);
console.log(parser.wordCount, 4);
console.log(parser.lineCount, 1);
