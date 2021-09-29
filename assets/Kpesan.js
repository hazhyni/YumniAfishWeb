const btnKirim = document.getElementById("btn-kirim");
const btnLoading = document.getElementById("btn-Loading");
const myAlert = document.getElementById("my-alert");
myAlert.classList.add("d-none");
btnLoading.classList.add("d-none");

btnKirim.addEventListener("click", function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxNsq5MVOLuvooyVf2mlCal5JRgXX5KM9V9nscFAPyl/dev';
    const form = document.forms['nasweb-contact-form'];
    btnKirim.classList.add("d-none");
    btnLoading.classList.remove("d-none");
    myAlert.classList.remove("d-none")

    form.addEventListener('submit', e => {
        e.preventDefault();
        // ketika tombol sumit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                form.reset();
                btnLoading.classList.add("d-none");
                btnKirim.classList.remove("d-none");
                myAlert.classList.add("d.none");
            })
            .catch(error => console.error('Error!', error.message))
    });
});