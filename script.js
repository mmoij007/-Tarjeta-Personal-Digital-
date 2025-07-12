document.addEventListener('DOMContentLoaded', () => {
    // Generate QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    if (qrcodeContainer) {
        // Clear previous QR code if any
        qrcodeContainer.innerHTML = "";
        const qrcode = new QRCode(qrcodeContainer, {
            text: window.location.href,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});
