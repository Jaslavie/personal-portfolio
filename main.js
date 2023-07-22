// toggle for drop down
const toggleButton = document.querySelector('.toggle-button')
            const toggleButtonIcon = document.querySelector('.toggle-button i')
            const dropDownMenu = document.querySelector('.dropdown-nav')
        
            toggleButton.onclick = function() {
                dropDownMenu.classList.toggle('open')
                const isOpen = dropDownMenu.classList.contains('open')
        
                toggleButtonIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }