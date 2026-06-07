// ============================================
// Wonderful Indonesia - Interactive Script
// ============================================

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Language Switcher
let currentLang = 'id';

const translations = {
    id: {
        // Hero
        heroTitle: "WONDERFUL<br>INDONESIA",
        heroSubtitle: "Jelajahi keindahan, kekayaan budaya, dan cita rasa Nusantara",
        ctaExplore: "Mulai Jelajah",
        ctaFood: "Lihat Kuliner Khas",
        
        // Section titles
        wisataTitle: "Destinasi Wisata Unggulan",
        budayaTitle: "Kekayaan Budaya Nusantara",
        pulauTitle: "Keindahan Pulau-pulau Indonesia",
        tokohTitle: "Tokoh Inspiratif Indonesia",
        kulinerTitle: "Kuliner Nusantara",
    },
    en: {
        // Hero
        heroTitle: "WONDERFUL<br>INDONESIA",
        heroSubtitle: "Discover the beauty, rich culture, and flavors of the Archipelago",
        ctaExplore: "Start Exploring",
        ctaFood: "Explore Local Cuisine",
        
        // Section titles
        wisataTitle: "Top Tourist Destinations",
        budayaTitle: "Cultural Heritage of Nusantara",
        pulauTitle: "Beautiful Islands of Indonesia",
        tokohTitle: "Inspirational Indonesian Figures",
        kulinerTitle: "Nusantara Cuisine",
    }
};

function switchLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    
    // Update active button styles
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Update hero content
    const heroTitle = document.querySelector('.hero-text h1');
    const heroSubtitle = document.querySelector('.hero-text p');
    
    if (heroTitle) heroTitle.innerHTML = translations[lang].heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;
    
    // Update section headings
    const headings = {
        'wisata': translations[lang].wisataTitle,
        'budaya': translations[lang].budayaTitle,
        'pulau': translations[lang].pulauTitle,
        'tokoh': translations[lang].tokohTitle,
        'kuliner': translations[lang].kulinerTitle
    };
    
    Object.keys(headings).forEach(section => {
        const headingEl = document.querySelector(`#${section} h2`);
        if (headingEl) headingEl.textContent = headings[section];
    });
    
    // Update CTA buttons text
    const ctaButtons = document.querySelectorAll('.hero-text button, .hero-text a');
    if (ctaButtons.length > 0) {
        ctaButtons[0].innerHTML = `<span>${translations[lang].ctaExplore}</span> <i class="fa-solid fa-arrow-right"></i>`;
        if (ctaButtons[1]) ctaButtons[1].textContent = translations[lang].ctaFood;
    }
    
    // Show toast notification
    showToast(lang === 'id' ? 'Bahasa diubah ke Indonesia' : 'Language switched to English');
}

// Simple toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm shadow-xl z-[200] flex items-center gap-x-2`;
    toast.innerHTML = `
        <i class="fa-solid fa-check-circle text-emerald-400"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// Recipe Data
const recipes = {
    nasigoreng: {
        name: "Nasi Goreng",
        subtitle: "Hidangan Nasional Indonesia",
        ingredients: [
            "2 piring nasi putih (lebih enak kalau nasi semalam)",
            "2 butir telur",
            "3 siung bawang putih, cincang halus",
            "4 siung bawang merah, iris tipis",
            "2 sdm kecap manis",
            "1 sdt terasi (opsional)",
            "Garam, merica, dan cabe rawit sesuai selera",
            "Pelengkap: kerupuk, timun, dan telur mata sapi"
        ],
        steps: [
            "Panaskan minyak, tumis bawang putih dan bawang merah sampai harum.",
            "Masukkan telur, orak-arik hingga matang.",
            "Tambahkan nasi putih, aduk rata dengan bumbu.",
            "Bumbui dengan kecap manis, garam, merica, dan terasi jika pakai.",
            "Aduk terus sampai nasi berubah warna menjadi kecoklatan dan harum.",
            "Angkat dan sajikan dengan kerupuk, timun, serta telur mata sapi di atasnya."
        ]
    },
    rendang: {
        name: "Rendang",
        subtitle: "Masakan Padang Paling Terkenal",
        ingredients: [
            "1 kg daging sapi (bagian paha atau sandung lamur)",
            "1 liter santan kental",
            "10 siung bawang merah",
            "6 siung bawang putih",
            "5 butir kemiri sangrai",
            "3 cm lengkuas, geprek",
            "3 lembar daun salam & daun jeruk",
            "Garam, gula merah, dan cabe merah sesuai selera"
        ],
        steps: [
            "Haluskan bumbu: bawang merah, bawang putih, kemiri, cabe, dan lengkuas.",
            "Tumis bumbu halus sampai benar-benar harum dan tidak langu.",
            "Masukkan daging, aduk hingga berubah warna.",
            "Tuang santan, tambahkan daun salam dan daun jeruk.",
            "Masak dengan api kecil sambil sesekali diaduk (sekitar 3-4 jam).",
            "Terus masak hingga santan mengering dan daging berwarna hitam kecoklatan serta bumbu meresap sempurna."
        ]
    },
    sate: {
        name: "Sate Ayam",
        subtitle: "Dengan Bumbu Kacang Legendaris",
        ingredients: [
            "500 gr daging ayam fillet, potong dadu",
            "10 sdm bumbu kacang (bisa beli atau buat sendiri)",
            "5 sdm kecap manis",
            "2 sdm minyak wijen",
            "Bawang merah & bawang putih untuk bumbu marinasi",
            "Tusuk sate secukupnya"
        ],
        steps: [
            "Marinasi ayam dengan bawang putih, bawang merah, kecap, dan minyak wijen minimal 30 menit.",
            "Tusuk ayam ke tusuk sate (jangan terlalu padat).",
            "Bakar di atas arang atau grill pan sambil diolesi bumbu marinasi.",
            "Buat bumbu kacang: tumis bumbu halus, masukkan kacang tanah yang sudah dihaluskan + air.",
            "Sajikan sate dengan bumbu kacang, lontong, dan acar."
        ]
    },
    gadogado: {
        name: "Gado-Gado",
        subtitle: "Salad Indonesia dengan Bumbu Kacang",
        ingredients: [
            "Sayuran: kangkung, tauge, kacang panjang, kol, wortel (rebus)",
            "Tahu & tempe goreng",
            "Kentang rebus & telur rebus",
            "Bumbu kacang: kacang tanah goreng, cabe, bawang putih, gula merah, air asam",
            "Kerupuk untuk pelengkap"
        ],
        steps: [
            "Rebus semua sayuran hingga matang tapi tetap renyah.",
            "Goreng tahu dan tempe hingga kecoklatan.",
            "Haluskan semua bahan bumbu kacang, lalu masak hingga mengental.",
            "Susun sayuran, tahu, tempe, kentang, dan telur di piring.",
            "Siram dengan bumbu kacang yang masih hangat.",
            "Taburi dengan kerupuk dan sajikan segera."
        ]
    },
    pempek: {
        name: "Pempek",
        subtitle: "Khas Palembang dengan Cuko Pedas Manis",
        ingredients: [
            "500 gr ikan tenggiri giling halus",
            "250 gr tepung sagu",
            "1 butir telur",
            "200 ml air es",
            "Garam dan penyedap secukupnya",
            "Bahan cuko: air, gula merah, cabe rawit, bawang putih, cuka"
        ],
        steps: [
            "Campur ikan giling dengan air es, garam, dan telur hingga kalis.",
            "Masukkan tepung sagu sedikit demi sedikit sambil diaduk.",
            "Bentuk adonan sesuai selera (lenjer, kapal selam, atau adaan).",
            "Rebus pempek dalam air mendidih hingga mengapung, lalu angkat.",
            "Goreng pempek hingga kecoklatan jika ingin versi goreng.",
            "Buat cuko: rebus semua bahan hingga kental, sajikan bersama pempek."
        ]
    }
};

// Show Recipe Modal
function showRecipeModal(dishKey) {
    const modal = document.getElementById('recipe-modal');
    const recipe = recipes[dishKey];
    
    if (!recipe) return;
    
    // Set content
    document.getElementById('modal-dish-name').textContent = recipe.name;
    document.getElementById('modal-dish-subtitle').textContent = recipe.subtitle;
    
    // Ingredients
    const ingredientsList = document.getElementById('modal-ingredients');
    ingredientsList.innerHTML = recipe.ingredients.map(item => 
        `<li class="flex items-start gap-x-2">
            <i class="fa-solid fa-check text-emerald-500 mt-1.5 text-xs"></i> 
            <span>${item}</span>
         </li>`
    ).join('');
    
    // Steps
    const stepsList = document.getElementById('modal-steps');
    stepsList.innerHTML = recipe.steps.map((step, index) => 
        `<li class="flex gap-x-3">
            <span class="font-bold text-[#C8102E] min-w-[22px]">${index + 1}.</span> 
            <span>${step}</span>
         </li>`
    ).join('');
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Hide Recipe Modal
function hideRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

// Keyboard support for modal
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        const modal = document.getElementById('recipe-modal');
        if (!modal.classList.contains('hidden')) {
            hideRecipeModal();
        }
    }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active language button
    document.getElementById('lang-id').classList.add('active');
    
    // Optional: Add subtle animation to cards on scroll (simple version)
    const cards = document.querySelectorAll('.group');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0.95';
        observer.observe(card);
    });
    
    // Easter egg: Click logo to scroll to top
    const logo = document.querySelector('nav .flex.items-center');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    console.log('%c[Wonderful Indonesia] Website siap! 🇮🇩', 'color:#C8102E; font-size: 10px');
});
