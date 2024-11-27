const deliveryPopup = document.querySelector('.delivery-popup');
const closeButton = deliveryPopup.querySelector('.close-button');
const infoButton = document.querySelector('.delivery-info .info-button');

const openDeliveryPopup = () => {
  deliveryPopup.classList.add('on');
};

const closeDeliveryPopup = () => {
  deliveryPopup.classList.remove('on');
};

function clickOutside(e) {
  if (e.target.classList.contains('close-button')) return;

  if (!e.target.classList.contains('info-button')) {
    closeDeliveryPopup();
  }
}

const toggleDeliveryPopup = () => {
  if (deliveryPopup.classList.contains('on')) {
    return closeDeliveryPopup();
  }

  openDeliveryPopup();
  window.addEventListener('click', clickOutside);
};

infoButton.addEventListener('click', toggleDeliveryPopup);
closeButton.addEventListener('click', closeDeliveryPopup);
