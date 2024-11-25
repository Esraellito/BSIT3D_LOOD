document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const platform = link.querySelector('i').classList.contains('fa-facebook-square') 
                ? 'Facebook' 
                : link.querySelector('i').classList.contains('fa-instagram') 
                ? 'Instagram' 
                : 'TikTok';
            alert(`You are being redirected to ${platform}.`);

            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);
        });
    });
});
