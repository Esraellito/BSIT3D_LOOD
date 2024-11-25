document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.querySelector('.profile-card h2');
    const profileCard = document.querySelector('.profile-card');

    profileName.addEventListener('click', () => {
        const quote = document.querySelector('.quote').textContent;
        alert(`Profile Quote: ${quote}`);
    });

    profileCard.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = 'Click the name to see the quote!';
        document.body.appendChild(tooltip);

        const cardRect = profileCard.getBoundingClientRect();
        tooltip.style.left = `${cardRect.left + (cardRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
        tooltip.style.top = `${cardRect.top - tooltip.offsetHeight - 10}px`;
    });

    profileCard.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
