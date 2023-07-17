const burgerIcon = document.querySelector('.burger-icon')
const navLinks = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-links a')

const closeMobileMenu = () => {}
const toggleMobileMenu = () => {
	navLinks.classList.toggle('mobile-menu')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navLinks.classList.remove('mobile-menu')
			document.body.style.overflow = 'scroll'
		})
	})

	if (navLinks.classList.contains('mobile-menu')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'scroll'
	}
}

burgerIcon.addEventListener('click', toggleMobileMenu)
