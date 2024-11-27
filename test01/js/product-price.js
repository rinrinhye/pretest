const priceNumbers = document.querySelectorAll('.price-number');

priceNumbers.forEach((span) => {
  const price = Number(span.textContent);
  span.textContent = price.toLocaleString();
});
