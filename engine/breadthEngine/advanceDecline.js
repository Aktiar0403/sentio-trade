export function calculateBreadth(data) {
  let advance = 0;
  let decline = 0;

  data.forEach(stock => {
    // TEMP LOGIC (we improve later)
    if (stock.price > 3000) {
      advance++;
    } else {
      decline++;
    }
  });

  return {
    advance,
    decline,
    ratio: advance / (decline || 1)
  };
}