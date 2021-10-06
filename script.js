const question = document.querySelectorAll('.help-question'),
      answer = document.querySelectorAll('.help-answer');

const closeAnswers = () => {
    answer.forEach(item => {
        item.style.display = 'none';
    });
};

closeAnswers();

question.forEach(item => {
    item.addEventListener('click', () => {
        closeAnswers();

        if (item.classList.contains('open')) {
            item.classList.remove('open');
            item.nextElementSibling.style.display = 'none';
        } else {
            item.classList.add('open');
            item.nextElementSibling.style.display = 'block';
        }
    });
});
