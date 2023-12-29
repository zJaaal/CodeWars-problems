//https://www.codewars.com/kata/58c5577d61aefcf3ff000081

function encodeRailFenceCipher(string, numberRails) {
  let rails = Array.from({ length: numberRails }, (_) =>
    Array.from({ length: string.length }, (_) => '__________')
  );

  let pointer = 0;

  let checkDirection = 'DOWN';

  for (let i = 0; i < string.length; i++) {
    rails[pointer][i] = string[i];

    if (pointer == numberRails - 1) checkDirection = 'UP';
    if (pointer == 0) checkDirection = 'DOWN';

    pointer = checkDirection == 'UP' ? pointer - 1 : pointer + 1;
  }

  return rails
    .map((rail) => rail.filter((char) => char != '__________').join(''))
    .join('');
}

function decodeRailFenceCipher(string, numberRails) {
  let stringArray = [...string];
  let spacesBetween = numberRails * 2 - 2;

  let getSpacesByIndex = (index) => {
    return Math.abs(index * 2 - spacesBetween);
  };

  let rails = Array.from({ length: numberRails }, (_, i) =>
    Array.from({ length: string.length }, (_, j) =>
      !i
        ? j % spacesBetween == 0
          ? stringArray.shift()
          : '__________'
        : '__________'
    )
  );

  rails = rails.map((rail, i) => {
    if (!i) return rail;

    let nextPosition = 0;
    let currentDirection = 'DOWN';

    rail = rail.reduce((acc, _, j) => {
      if (acc.length + i == string.length) return acc;

      let module =
        currentDirection == 'DOWN'
          ? getSpacesByIndex(i)
          : getSpacesByIndex(rails.length - 1 - i);

      if (nextPosition == j && stringArray.length) {
        acc.push(stringArray.shift());
        nextPosition += i == rails.length - 1 ? spacesBetween : module;
        currentDirection = currentDirection == 'DOWN' ? 'UP' : 'DOWN';
      } else acc.push('__________');

      return acc;
    }, []);

    rail.unshift(...Array.from({ length: i }, (_) => '__________'));
    return rail;
  });

  return rails[0].reduce(
    (acc, _, i) =>
      (acc += rails
        .map((rail) => (rail[i] != '__________' ? rail[i] : ''))
        .join('')),
    ''
  );
}
