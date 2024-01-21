document.addEventListener('DOMContentLoaded', function() {
    const images = ['image1.png', 'image2.png', 'image3.png']; // Add paths to your images
    let currentImageIndex = 0;

    function showImage(index) {
        const imageSlider = document.getElementById('image-slider');
        imageSlider.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}">`;
        imageSlider.firstChild.style.display = 'block';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex); // Show the first image initially
    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Button shimmer effect
    const learnMoreButton = document.getElementById('learn-more');

    function shimmerEffect() {
        learnMoreButton.classList.add('shimmer');
        setTimeout(function() {
            learnMoreButton.classList.remove('shimmer');
        }, 1000); // Убираем класс shimmer через 1 секунду
    }

    setInterval(function() {
        shimmerEffect();
    }, 3000); // Применяем эффект блика каждые 3 секунды

    // Добавленный код для обработки клика на кнопке "LEARN MORE"
    learnMoreButton.addEventListener('click', function() {
        // Открыть указанный URL
        window.location.href = 'https://leanbliss24.com/text.php#aff=johnygreen';
    });

    // Для применения эффекта блика сразу после загрузки страницы
    setTimeout(shimmerEffect, 1000); // Запускаем эффект блика через 1 секунду после загрузки
});
