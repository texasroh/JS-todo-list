(() => {
    const USER_KEY = "user";
    const HIDDEN_CLASSNAME = "hidden";

    const loginForm = document.querySelector('#login-form');
    const loginInput = loginForm.querySelector('input');
    const personalInfo = document.querySelector("#personal-info");
    const greeting = document.querySelector('#greeting');

    function onLoginSubmit(e) {
        e.preventDefault();
        const username = loginInput.value;
        loginInput.value = '';
        if (!username) {
            return
        }
        localStorage.setItem(USER_KEY, username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        personalInfo.classList.remove(HIDDEN_CLASSNAME);
        paintGreeting(username);
    }

    function logOut() {
        personalInfo.classList.add(HIDDEN_CLASSNAME);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    }

    function paintGreeting(username) {
        greeting.innerText = `Hello ${username}`;
    }

    const savedUser = localStorage.getItem(USER_KEY);
    if (savedUser === null) {
        loginForm.addEventListener('submit', onLoginSubmit);
        personalInfo.classList.add(HIDDEN_CLASSNAME);
    } else {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreeting(savedUser);
    }
})();