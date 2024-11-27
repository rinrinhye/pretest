const boxes = document.querySelectorAll('.section-smile .box');

boxes.forEach((box) => {
  const categoryList = box.querySelector('.product-category-list');
  const categoryItems = box.querySelectorAll('.product-category-item');
  const productLists = box.querySelectorAll('.product-list');
  const linkButtonSpan = box.querySelector('.section-more-link span');

  categoryList.addEventListener('click', (e) => {
    const clickedCategoryButton = e.target.closest(
      '.product-category-item button'
    );

    if (clickedCategoryButton === null) return;
    const clickedCategoryItem = clickedCategoryButton.parentElement;
    const categoryText = clickedCategoryItem.dataset.category;

    categoryItems.forEach((item) => {
      const button = item.querySelector('button');
      item.classList.remove('on');
      button.setAttribute('aria-pressed', 'false');
    });

    clickedCategoryItem.classList.add('on');
    clickedCategoryButton.setAttribute('aria-pressed', 'true');

    productLists.forEach((list) => list.classList.remove('on'));

    const targetProductList = Array.from(productLists).find(
      (list) => list.dataset.category === categoryText
    );
    targetProductList.classList.add('on');
    linkButtonSpan.textContent = `${categoryText} 상품 더보기`;
  });
});
