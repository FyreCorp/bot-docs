// @ts-check
const testimonials = [
    {
        message: "Fyre is a great bot. Really fun to use, lots of features, and tons of quality of life improvements for you and your server. I highly recommend this gorgeous bot.",
        author: {
            name: "Fallen",
            avatar: "https://cdn.discordapp.com/avatars/738746238874419220/a_b8d713e5a47e2026fe3b3d4cc30215e5.gif",
            position: "Server Administrator"
        },
        guild: {
            name: "Fyre Hub",
            icon: "https://cdn.discordapp.com/icons/1370922624397606952/d256f11d947495281740da772f62b8fa.webp"
        }
    }
];

let index = 0;
let intervalId = 0;

function renderTestimonial(index = 0) {
    const testimonial = testimonials[index];

    const indexElement = document.getElementById('testimonial-index');
    const messageElement = document.getElementById('testimonial-message');

    if (indexElement) indexElement.textContent = `${index + 1}/${testimonials.length}`;
    if (messageElement) messageElement.textContent = `"${testimonial.message}"`;

    const guildIcon = document.getElementById('testimonial-guild-icon');
    const guildName = document.getElementById('testimonial-guild-name');

    // @ts-expect-error
    if (guildIcon) guildIcon.src = testimonial.guild.icon;
    if (guildName) guildName.textContent = testimonial.guild.name;

    const authorNameElement = document.getElementById('testimonial-author-name');
    const authorAvatarElement = document.getElementById('testimonial-author-avatar');
    const authorPositionElement = document.getElementById('testimonial-author-position');

    // @ts-expect-error
    if (authorAvatarElement) authorAvatarElement.src = testimonial.author.avatar;
    if (authorPositionElement) authorPositionElement.textContent = testimonial.author.position;
    if (authorNameElement) authorNameElement.textContent = testimonial.author.name;
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

setTimeout(() => {
    document.getElementById('prev-testimonial')?.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
    });

    document.getElementById('next-testimonial')?.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
    });
    
    renderTestimonial(0);
}, 250);

startAutoSlide();
