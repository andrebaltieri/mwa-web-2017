export class Ui {
    lock(element) {
        document.getElementById(element).classList.add('is-loading');
        document.getElementById(element).setAttribute('disabled', 'disabled');
    }

    unlock(element) {
        document.getElementById(element).classList.remove('is-loading');
        document.getElementById(element).removeAttribute('disabled');
    }

    setActive(element) {
        document.getElementById(element).classList.add('is-active');
    }
    
    setInactive(element) {
        document.getElementById(element).classList.remove('is-active');
    }
}