document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav ul li a');
    let sections = document.querySelectorAll('main > section');
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-content');

    // Function to show the appropriate section based on the hash
    function showSection() {
        let hash = window.location.hash.substring(1);
        if (!hash) {
            hash = 'home';
        }

        sections.forEach(section => {
            if (section.id === hash) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        if (hash === 'services') {
            let currentTab = localStorage.getItem('currentTab') || 'tab-1';
            showTab(currentTab);
        }
    }

    // Function to show the appropriate tab in the services section
    function showTab(tabId) {
        tabLinks.forEach(link => {
            if (link.dataset.tab === tabId) {
                link.classList.add('current');
            } else {
                link.classList.remove('current');
            }
        });

        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('current');
            } else {
                content.classList.remove('current');
            }
        });

        localStorage.setItem('currentTab', tabId);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            window.location.hash = targetId;
            showSection();
        });
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            let tabId = this.dataset.tab;
            showTab(tabId);
        });
    });

    // Show the correct section and tab on page load
    showSection();
});
