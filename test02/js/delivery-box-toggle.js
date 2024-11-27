const toggleButton = document.querySelector('.delivery-box .toggle-button');

const deliveryBox = document.querySelector('.delivery-box');

let isExpanded = deliveryBox.classList.contains('on') ? true : false;

function setAriaExpanded() {
  toggleButton.setAttribute('aria-expanded', !isExpanded);
  isExpanded = !isExpanded;
}

function toggleDeliveryBox() {
  setAriaExpanded();

  deliveryBox.classList.toggle('on');

  toggleButton.classList.toggle('on');
  toggleButton.textContent = deliveryBox.classList.contains('on')
    ? '접기'
    : '열기';
}

toggleButton.addEventListener('click', toggleDeliveryBox);
