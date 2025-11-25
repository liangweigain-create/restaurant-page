export default function handleSelect(e) {
    if (e.target.tagName !== 'BUTTON') return 'ERROR'
    const selectedBtn = e.target;
    const preSelected = document.querySelector('.selected');
    preSelected.classList.remove('selected');
    selectedBtn.classList.add('selected');
    return true;
}