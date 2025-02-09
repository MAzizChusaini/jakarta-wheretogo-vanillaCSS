window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const bukaPopupBtn = document.querySelector('.popup-btn'); 
    const tutupPopupBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    bukaPopupBtn.addEventListener('click', () => {
        popup.classList.add('active');
    });

    tutupPopupBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tombolDropdown = document.querySelector('.dropbtn');
    const kontenDropdown = document.querySelector('.dropdown-content');
  
    tombolDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        kontenDropdown.style.display = kontenDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !kontenDropdown.contains(event.target)) {
            kontenDropdown.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tautanDropdown = document.querySelectorAll('.dropdown-content a');
    const foto = document.querySelectorAll('.photo img');

    tautanDropdown.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const filter = e.target.getAttribute('data-filter');

            foto.forEach(photo => {
                const kategori = photo.getAttribute('data-category');
                if (filter === "all" || kategori === filter) {
                    photo.parentElement.style.display = 'block';
                } else {
                    photo.parentElement.style.display = 'none';
                }
            });
        });
    });

    foto.forEach(photo => {
        photo.parentElement.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tombolSubmit = document.querySelector('.submit-btn');
    const tautanDropdown = document.querySelectorAll('.dropdown-content a');
    const gambar = document.querySelectorAll('.column img');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');

    const tampilkanGambarAcak = () => {
        gambar.forEach(img => img.style.display = 'none');

        const indeksAcak = Math.floor(Math.random() * gambar.length);
        const gambarAcak = gambar[indeksAcak];

        gambarAcak.style.display = 'block'; 
        gambarAcak.style.width = '250px'; 
        gambarAcak.style.height = 'auto'; 
        gambarAcak.style.position = 'absolute'; 
        gambarAcak.style.top = '50%'; 
        gambarAcak.style.left = '50%'; 
        gambarAcak.style.transform = 'translate(-50%, -50%)';
        gambarAcak.style.zIndex = '-9999';
    };

    document.getElementById('all-link').addEventListener('click', function(event) {
        event.preventDefault();
        location.reload();
    });

    tombolSubmit.addEventListener('click', () => {
        tampilkanGambarAcak();
        popup.classList.remove('active');
    });

    tautanDropdown.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const filter = e.target.getAttribute('data-filter');

            if (filter === "all") {
                showAllImages();
            } else {
                gambar.forEach(img => {
                    if (img.getAttribute('data-category') === filter) {
                        img.style.display = 'block';
                    } else {
                        img.style.display = 'none';
                    }
                });
            }
        });
    });

    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
    });
});