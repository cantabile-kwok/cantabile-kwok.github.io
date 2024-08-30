const english_vc_examples = document.querySelectorAll('.english_vc');
const eng_page = document.querySelectorAll('.eng_page');
english_vc_examples[0].classList.add('active');
eng_page[0].classList.add('active');
eng_page.forEach((page) => {
  page.addEventListener('click', () => {
    const pageNumber = page.getAttribute('data-page');

    // Hide all examples
    english_vc_examples.forEach((example) => {
      example.classList.remove('active');
    });
    eng_page.forEach((page) => {
      page.classList.remove('active');
    });

    english_vc_examples[pageNumber-1].classList.add('active');
    eng_page[pageNumber-1].classList.add('active');

  });
});
const cross_vc_examples = document.querySelectorAll('.cross_vc');
const cross_page = document.querySelectorAll('.cross_page');
cross_vc_examples[0].classList.add('active');
cross_page[0].classList.add('active');
cross_page.forEach((page) => {
  page.addEventListener('click', () => {
    const pageNumber = page.getAttribute('data-page');

    // Hide all examples
    cross_vc_examples.forEach((example) => {
      example.classList.remove('active');
    });
    cross_page.forEach((page) => {
      page.classList.remove('active');
    });

    cross_vc_examples[pageNumber-1].classList.add('active');
    cross_page[pageNumber-1].classList.add('active');

  });
});
