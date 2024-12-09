const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style


const textsToChange = document.querySelectorAll('[data-value]')

const changeLenguage = async (language) => {
    const requestjson = await fetch(`/languages/${language}.json`)
    const text = await requestjson.json()
    
    for (const textToChange of textsToChange){
        const value = textToChange.dataset.value
        
        textToChange.innerHTML = text[value];
    }
}


toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = '/assets/icons/sun.svg'
        toggleText.textContent = 'Light Mode'
    } else {
        toggleIcon.src = '/assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode'
    }
})

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});