function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {

        const toast = document.createElement('div');

        const appearTime = duration + 1000;
        const autoRemove = setTimeout(() => {
            main.removeChild(toast);
        }, appearTime);

        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        }

        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon" >
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body" >
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close" >
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);

    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Bạn đã đăng ký thành công.',
        type: 'success',
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Bạn chưa đăng ký thành công. Vui lòng thực hiện lại.',
        type: 'error',
        duration: 5000
    });
}

const successBtn = document.querySelector('.btn--success');
const errorBtn = document.querySelector('.btn--danger');

// errorBtn.addEventListener('click', showErrorToast);

successBtn.onclick = showSuccessToast;
errorBtn.onclick = showErrorToast;