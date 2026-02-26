// @ts-check

const testimonials = [
    {
        author: 'Fallen',
        position: 'Server Administrator',
        message: 'Fyre is a super duper cool bot that I really love and it has good features, good commands, shit yes yes lol.'
    },
    {
        author: 'Fallen 2',
        position: 'Server Administrator',
        message: 'Fyre 2 is a super duper cool bot that I really love and it has good features, good commands, shit yes yes lol.'
    },
    {
        author: 'Fallen 3',
        position: 'Server Administrator',
        message: 'Fyre 3 is a super duper cool bot that I really love and it has good features, good commands, shit yes yes lol.'
    }
];

let index = 0;
let intervalId = 0;

function renderTestimonial(index = 0) {
    const testimonial = testimonials[index];

    const authorElement = document.getElementById('testimonial-author');
    const messageElement = document.getElementById('testimonial-message');
    const positionElement = document.getElementById('testimonial-position');

    if (authorElement) authorElement.textContent = testimonial.author;
    if (messageElement) messageElement.textContent = `"${testimonial.message}"`;
    if (positionElement) positionElement.textContent = testimonial.position;
};

function startAutoSlide() {
    intervalId = setInterval(nextTestimonial, 15_000);
};

function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
};

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(index);
};

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    renderTestimonial(index);
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    document.getElementById('prev-testimonial')?.addEventListener('click', () => {
        console.log('a');
        prevTestimonial();
        resetAutoSlide();
    });

    document.getElementById('next-testimonial')?.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
    });
});

renderTestimonial(index);
startAutoSlide();
