document.addEventListener('DOMContentLoaded', () => {
    const saveContactBtn = document.getElementById('save-contact');

    saveContactBtn.addEventListener('click', () => {
        // Create a vCard
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Tu Nombre
ORG:Tu Empresa
TITLE:Tu Profesión
TEL;TYPE=WORK,VOICE:123456789
EMAIL:tu.email@example.com
URL:https://tu-website.com
END:VCARD`;

        // Create a blob from the vCard string
        const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'contacto.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

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
