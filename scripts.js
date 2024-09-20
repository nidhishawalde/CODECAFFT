const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Liked!';
        button.disabled = true;
        button.style.backgroundColor = '#218838';
    });
});
