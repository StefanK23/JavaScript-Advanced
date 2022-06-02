function focused() {
    const fields = Array.from(document.getElementsByTagName('input')).forEach(f => {


        f.addEventListener('focus', onfocus);
        f.addEventListener('blur', onBlur);
    });

    function onfocus(ev) {
        ev.target.parentNode.className = 'focused';

    }

    function onBlur(ev) {

        ev.target.parentNode.className = '';
    }
}