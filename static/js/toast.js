function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toastComponent) return;

    // Hapus semua class warna sebelumnya
    toastComponent.classList.remove(
        'bg-orange-50', 'border-orange-500', 'text-orange-600',
        'bg-orange-100', 'border-orange-600', 'text-orange-700',
        'bg-orange-200', 'border-orange-700', 'text-orange-800',
        'bg-white', 'border-gray-300', 'text-gray-800'
    );

    // Warna dasar
    const baseBg = 'bg-orange-50';
    const baseBorder = 'border-orange-500';
    const baseText = 'text-orange-700';

    // Default border oranye
    toastComponent.style.border = '1px solid #f97316';

    // Variasi berdasarkan tipe
    if (type === 'success') {
        toastComponent.classList.add(baseBg, baseBorder, baseText);
        toastIcon.textContent = '✅';
    } else if (type === 'error') {
        toastComponent.classList.add('bg-orange-100', 'border-orange-600', 'text-orange-800');
        toastIcon.textContent = '❌';
    } else if (type === 'info') {
        toastComponent.classList.add('bg-orange-50', 'border-orange-500', 'text-orange-700');
        toastIcon.textContent = 'ℹ️';
    } else if (type === 'warning') {
        toastComponent.classList.add('bg-orange-100', 'border-orange-600', 'text-orange-700');
        toastIcon.textContent = '⚠️';
    } else {
        toastComponent.classList.add('bg-white', 'border-orange-400', 'text-orange-700');
        toastIcon.textContent = '📢';
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Animasi slide + bounce
    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');
    toastComponent.style.transition = 'all 0.3s ease, transform 0.15s ease';

    setTimeout(() => {
        toastComponent.style.transform = 'translateY(-6px)';
        setTimeout(() => {
            toastComponent.style.transform = 'translateY(0)';
        }, 120);
    }, 50);

    // Hilangkan setelah durasi selesai
    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
        toastComponent.style.transform = '';
    }, duration);
}
