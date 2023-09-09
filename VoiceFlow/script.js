const lj_examples = document.querySelectorAll('.lj_example');
const lj_pages = document.querySelectorAll('.lj_page');
lj_examples[0].classList.add('active');
lj_pages[0].classList.add('active');
lj_pages.forEach((page) => {
  page.addEventListener('click', () => {
    const pageNumber = page.getAttribute('data-page');

    // Hide all examples
    lj_examples.forEach((example) => {
      example.classList.remove('active');
    });
    lj_pages.forEach((page) => {
      page.classList.remove('active');
    });

    lj_examples[pageNumber-1].classList.add('active');
    lj_pages[pageNumber-1].classList.add('active');

  });
});

const libri_examples = document.querySelectorAll('.libri_example');
const libri_pages = document.querySelectorAll('.libri_page');
libri_examples[0].classList.add('active');
libri_pages[0].classList.add('active');
libri_pages.forEach((page) => {
  page.addEventListener('click', () => {
    const pageNumber = page.getAttribute('data-page');

    // Hide all examples
    libri_examples.forEach((example) => {
      example.classList.remove('active');
    });
    libri_pages.forEach((page) => {
      page.classList.remove('active');
    });

    libri_examples[pageNumber-1].classList.add('active');
    libri_pages[pageNumber-1].classList.add('active');
  });
});


const ablation_examples = document.querySelectorAll('.ablation_example');
const ablation_pages = document.querySelectorAll('.ablation_page');
ablation_examples[0].classList.add('active');
ablation_pages[0].classList.add('active');
ablation_pages.forEach((page) => {
  page.addEventListener('click', () => {
    const pageNumber = page.getAttribute('data-page');

    // Hide all examples
    ablation_examples.forEach((example) => {
      example.classList.remove('active');
    });
    ablation_pages.forEach((page) => {
      page.classList.remove('active');
    });

    ablation_examples[pageNumber-1].classList.add('active');
    ablation_pages[pageNumber-1].classList.add('active');
  });
});
