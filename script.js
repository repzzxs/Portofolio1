function toggleDarkMode() {
    document.body.classList.toggle('dark');
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
                entry.target.classList.add("active");
        } else {
                entry.target.classList.remove("active");
        }
     });
    }, {
        threshold: 0.1  // elemen terlihat minimal 10% baru dianggap "masuk"
    });

document.querySelectorAll(".fade-scroll").forEach((el) => {
        observer.observe(el);
    });


document.getElementById("formKontak").addEventListener("submit", function(e) {
    e.preventDefault(); // cegah reload

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama && email && pesan) {
        document.getElementById("feedback").innerText = `Terima kasih, ${nama}! Pesanmu sudah kami terima.`;
        this.reset(); // bersihkan form
    } else {
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerText = "Mohon isi semua data dengan lengkap.";
    }
});
