document.addEventListener('DOMContentLoaded', function () {
    const sizeSelect = document.getElementById('size');
    const textInput = document.getElementById('text-input');
    const qrCodeImage = document.getElementById('qrcode');

    sizeSelect.addEventListener('change', generateQRCode);
    textInput.addEventListener('input', generateQRCode);

    function generateQRCode() {
        const size = sizeSelect.value;
        const text = textInput.value || 'Default Text';

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
        qrCodeImage.src = qrCodeUrl;
    }

    generateQRCode();
});