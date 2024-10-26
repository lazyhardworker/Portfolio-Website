const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(navLinkEl => {
    navLinkEl.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});