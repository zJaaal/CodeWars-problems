console.clear();
function wrapping(gifts) {
  let dictionary = new Map();
  return gifts.map((gift) => {
    if (!dictionary.get(gift))
      dictionary.set(gift, '*'.repeat(gift.length + 2));

    return `${dictionary.get(gift)}\n*${gift}*\n${dictionary.get(gift)}`;
  });
}

console.log(wrapping(['book', 'game', 'socks']));
