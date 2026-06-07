// === WONDERFUL INDONESIA - SCRIPT ===

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c[Wonderful Indonesia] Website loaded successfully.', 'color:#c8102e');
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // === DATA DETAIL PULAU ===
    const islandData = {
        "Sumatra": {
            title: "Sumatra",
            image: "images/sumatra.jpg",
            description: "Sumatra adalah pulau terbesar keenam di dunia dan pulau terbesar di Indonesia. Pulau ini terkenal dengan Danau Toba (danau vulkanik terbesar di dunia), hutan hujan tropis yang sangat luas, serta keanekaragaman hayati yang luar biasa termasuk harimau Sumatra dan orangutan. Sumatra juga memiliki kekayaan budaya yang beragam dari berbagai suku seperti Batak, Minangkabau, dan Aceh."
        },
        "Jawa": {
            title: "Jawa",
            image: "images/java.jpg",
            description: "Jawa adalah pulau terpadat di Indonesia dan menjadi pusat pemerintahan, ekonomi, dan budaya bangsa. Di sini terdapat Candi Borobudur dan Prambanan yang masuk dalam daftar Warisan Dunia UNESCO. Gunung Bromo, kawasan Dieng, dan kota-kota bersejarah seperti Yogyakarta dan Solo juga menjadi daya tarik utama pulau ini."
        },
        "Bali": {
            title: "Bali",
            image: "images/bali.jpg",
            description: "Bali dikenal sebagai Pulau Dewata dengan keindahan alam yang memukau, budaya Hindu yang sangat kental, dan keramahan penduduknya. Sawah terasering Tegallalang, pantai Kuta, Uluwatu, dan desa Ubud menjadi ikon pariwisata Bali. Pulau ini juga terkenal dengan seni tari, musik gamelan, dan upacara adat yang masih lestari hingga sekarang."
        },
        "Kalimantan": {
            title: "Kalimantan",
            image: "images/kalimantan.jpg",
            description: "Kalimantan (bagian Indonesia dari Pulau Borneo) adalah rumah bagi hutan hujan tropis terluas di Indonesia. Pulau ini terkenal dengan Taman Nasional Tanjung Puting yang menjadi habitat orangutan liar, serta kekayaan budaya suku Dayak yang unik. Kalimantan juga memiliki keindahan alam seperti Danau Sentarum dan Kepulauan Derawan."
        },
        "Sulawesi": {
            title: "Sulawesi",
            image: "images/sulawesi.jpg",
            description: "Sulawesi memiliki bentuk unik menyerupai huruf 'K'. Pulau ini terkenal dengan Tana Toraja yang memiliki tradisi pemakaman dan rumah adat Tongkonan yang sangat khas. Kepulauan Bunaken di Sulawesi Utara merupakan salah satu spot diving terbaik di dunia dengan terumbu karang yang sangat indah dan beragam."
        },
        "Papua": {
            title: "Papua",
            image: "images/papua.jpg",
            description: "Papua adalah wilayah paling timur Indonesia yang memiliki keanekaragaman hayati tertinggi di dunia. Raja Ampat di Papua Barat diakui sebagai salah satu spot diving terbaik di dunia. Selain itu, Papua juga memiliki Puncak Jaya (Cartensz Pyramid), gunung tertinggi di Indonesia yang diselimuti salju abadi."
        },
        "Nusa Tenggara": {
            title: "Nusa Tenggara",
            image: "images/nusa-tenggara.jpg",
            description: "Nusa Tenggara terkenal dengan Taman Nasional Komodo, satu-satunya tempat di dunia di mana Komodo (Varanus komodoensis) hidup di alam liar. Labuan Bajo menjadi gerbang utama menuju Pulau Komodo. Pulau ini juga memiliki pantai pink yang langka dan savana yang indah di Flores serta Lombok."
        },
        "Maluku": {
            title: "Maluku",
            image: "images/maluku.jpg",
            description: "Maluku dikenal sebagai 'Kepulauan Rempah-rempah' sejak zaman penjajahan. Pulau-pulau di Maluku memiliki pantai yang sangat indah dengan air laut yang jernih. Banda Neira dan Ambon adalah beberapa destinasi yang menawarkan keindahan alam bawah laut yang luar biasa serta sejarah rempah-rempah yang kaya."
        }
    };

    // Tambahkan event listener ke semua destination card
    document.querySelectorAll('.destination-card').forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            const titleElement = this.querySelector('h3');
            if (!titleElement) return;
            
            const title = titleElement.textContent.trim();
            const data = islandData[title];
            
            if (data) {
                showModal(data);
            }
        });
    });

    // Fungsi untuk menampilkan modal
    window.showModal = function(data) {
        const modal = document.getElementById('detail-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${data.title}</h2>
            </div>
            <div class="modal-body">
                <img src="${data.image}" alt="${data.title}" onerror="this.src='https://picsum.photos/id/1016/800/600'">
                <p>${data.description}</p>
            </div>
        `;
        
        modal.style.display = 'flex';
    };

    // Fungsi untuk menutup modal
    window.closeModal = function() {
        const modal = document.getElementById('detail-modal');
        modal.style.display = 'none';
    };

    // Tutup modal jika klik di luar konten
    document.getElementById('detail-modal').addEventListener('click', function(e) {
        if (e.target.id === 'detail-modal') {
            closeModal();
        }
    });

    // Keyboard escape untuk tutup modal
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            const modal = document.getElementById('detail-modal');
            if (modal.style.display === 'flex') {
                closeModal();
            }
        }
    });
});