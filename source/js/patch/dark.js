function dark() {
    let isDark = localStorage.getItem('night');
    let switchBtn;

    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
        }
    }

    function findSwitchBtn() {
        switchBtn = document.getElementById('night-nav');
        if (!switchBtn) {
            setTimeout(findSwitchBtn, 100);
        } else {
            switchBtn.addEventListener('click', switchNight);
        }
    }

    function switchNight() {
        isDark = isDark ? isDark.toString() !== 'true' : true;
        applyNight(isDark);
        localStorage.setItem('night', isDark);
    }

    findSwitchBtn();
    if (isDark) applyNight(isDark);
    if (isDark === null) {
        // isDark not exist.
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        if (prefersDarkScheme.matches) {
            isDark = true;
        } else {
            isDark = false;
        }
    }
};


dark();