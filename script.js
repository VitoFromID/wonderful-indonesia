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

    // === FITUR KLIK KARTU PRESIDEN ===
    const presidentData = {
        "Soekarno": {
            title: "Ir. Soekarno",
            image: "soekarno.jpg",
            year: "1945 – 1967",
            description: "Ir. Soekarno adalah Proklamator dan Presiden pertama Republik Indonesia. Beliau dikenal sebagai Bapak Bangsa yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945 bersama Mohammad Hatta. Soekarno adalah tokoh sentral dalam perjuangan kemerdekaan dan pembentukan negara Indonesia."
        },
        "Soeharto": {
            title: "Soeharto",
            image: "soeharto.jpg",
            year: "1967 – 1998",
            description: "Soeharto adalah Presiden kedua Indonesia yang memerintah selama 32 tahun. Beliau naik ke tampuk kekuasaan setelah peristiwa G30S/PKI. Masa pemerintahannya dikenal dengan Orde Baru yang fokus pada pembangunan ekonomi dan stabilitas politik, meskipun di akhir masa jabatannya terjadi krisis moneter yang berujung pada lengsernya."
        },
        "B.J. Habibie": {
            title: "B.J. Habibie",
            image: "habibie.jpg",
            year: "1998 – 1999",
            description: "B.J. Habibie adalah Presiden ketiga Indonesia, menggantikan Soeharto. Beliau dikenal sebagai 'Bapak Teknologi' Indonesia karena kontribusinya di bidang pesawat terbang (PT Dirgantara Indonesia). Habibie hanya menjabat selama 17 bulan, namun berhasil membawa Indonesia ke era Reformasi dan mengadakan pemilu yang demokratis."
        },
        "Abdurrahman Wahid": {
            title: "Abdurrahman Wahid",
            image: "gusdur.jpg",
            year: "1999 – 2001",
            description: "Abdurrahman Wahid (Gus Dur) adalah Presiden keempat Indonesia. Beliau sering dijuluki 'Pendekar Rakyat' karena sangat dekat dengan rakyat kecil dan memperjuangkan pluralisme serta toleransi antar umat beragama. Gus Dur adalah tokoh NU yang sangat berpengaruh dan dikenal dengan gaya kepemimpinan yang unik dan humoris."
        },
        "Megawati": {
            title: "Megawati Soekarnoputri",
            image: "megawati.jpg",
            year: "2001 – 2004",
            description: "Megawati Soekarnoputri adalah Presiden kelima Indonesia dan putri dari Soekarno. Beliau adalah presiden perempuan pertama di Indonesia. Megawati naik ke tampuk kekuasaan setelah Gus Dur dilengserkan. Masa pemerintahannya fokus pada pemulihan ekonomi pasca krisis dan melanjutkan proses demokrasi."
        },
        "SBY": {
            title: "Susilo Bambang Yudhoyono",
            image: "sby.jpg",
            year: "2004 – 2014",
            description: "Susilo Bambang Yudhoyono (SBY) adalah Presiden keenam Indonesia dan presiden pertama yang dipilih secara langsung oleh rakyat. Beliau memerintah selama dua periode (10 tahun). SBY dikenal dengan gaya kepemimpinan yang tenang dan fokus pada stabilitas politik serta pertumbuhan ekonomi."
        },
        "Joko Widodo": {
            title: "Joko Widodo",
            image: "jokowi.jpg",
            year: "2014 – 2024",
            description: "Joko Widodo (Jokowi) adalah Presiden ketujuh Indonesia. Beliau dikenal dengan gaya 'blusukan' dan dekat dengan rakyat. Jokowi adalah presiden pertama yang bukan berasal dari kalangan militer atau elite politik lama. Masa pemerintahannya fokus pada pembangunan infrastruktur besar-besaran di seluruh Indonesia."
        },
        "Prabowo Subianto": {
            title: "Prabowo Subianto",
            image: "prabowo.jpg",
            year: "2024 – Sekarang",
            description: "Prabowo Subianto adalah Presiden kedelapan Republik Indonesia. Beliau adalah mantan Danjen Kopassus dan Menteri Pertahanan. Prabowo terpilih pada Pemilu 2024 dan dilantik pada Oktober 2024. Beliau dikenal memiliki visi kuat untuk melanjutkan pembangunan dan memperkuat kedaulatan Indonesia."
        }
    };

    // Event listener untuk kartu presiden
    document.querySelectorAll('.president-card').forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            const nameElement = this.querySelector('.president-name');
            if (!nameElement) return;
            
            const name = nameElement.textContent.trim();
            const data = presidentData[name];
            
            if (data) {
                showPresidentModal(data);
            }
        });
    });

    // Fungsi modal untuk Presiden
    window.showPresidentModal = function(data) {
        const modal = document.getElementById('detail-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${data.title}</h2>
                <div style="color: #c8102e; font-weight: 600; margin-top: 4px;">${data.year}</div>
            </div>
            <div class="modal-body">
                <img src="${data.image}" alt="${data.title}" onerror="this.src='https://picsum.photos/id/1005/800/600'">
                <p>${data.description}</p>
            </div>
        `;
        
        modal.style.display = 'flex';
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
