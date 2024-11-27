const percentSpans = document.querySelectorAll('.delivery-box .percent');
const fills = document.querySelectorAll('.progress-bar .fill');

percentSpans.forEach((percent, index) => {
  const percentNumber = percent.textContent.replace('%', '');
  fills[index].style.width = percentNumber + '%';
});
