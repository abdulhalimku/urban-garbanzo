/**
 * CYBER GEM HUNTERS - CHARACTER DATABASE
 * File ini berisi struktur data lengkap untuk ketiga karakter dewi oriental
 * Seraphina (Step 1), Kaida (Step 2), dan Sakura (Step 3)
 */

const CHARACTERS_DATA = {
    1: {
        // SERAPHINA - CELESTIAL GODDESS
        id: 1,
        step: 1,
        name: 'Seraphina',
        displayName: 'Putri Salju Anggun',
        costume: 'Celestial Goddess',
        emoji: '🤍',
        price: 2.00,
        multiplier: 1.2,
        profitPerGame: 0.12,
        
        // Visual Attributes
        visual: {
            style: 'Divine / Noble, Ethereal, Heavenly',
            primaryColors: ['#f8fafc', '#fbbf24', '#e8f4f8'],
            accentColor: '#fbbf24',
            hairColor: '#334155',
            outfitColor: '#f8fafc',
            gownStyle: 'White silk halter gown with high split, intricate gold embroidery',
            accessories: [
                'Flowing transparent sleeves',
                'Delicate gold headdress',
                'Soft, serene expression',
                'Golden jewelry'
            ],
            auraEffect: 'Ethereal white-gold glow'
        },

        // Environment Context
        environment: {
            setting: 'Midnight palace courtyard',
            backgroundColor: '#051015',
            mood: 'Serene, Mystical, Moonlit',
            ambiance: [
                'Full bright moon',
                'Dark pagoda architecture (high contrast)',
                'Warm golden lighting from palace lanterns',
                'Ethereal mist effect'
            ]
        },

        // Stats & Abilities
        stats: {
            speed: 85,
            jumpHeight: 90,
            agility: 95,
            specialAbility: 'Ethereal Dash - Faster movement for 3 seconds',
            healthBonus: 1.1
        },

        // Description
        description: {
            id: 'Dewi rembulan bergaun sutra putih-emas bersinar dengan aura ethereal lincah.',
            en: 'Celestial moon goddess in luminous white-gold silk gown with ethereal grace.',
            ru: 'Небесная богиня луны в бело-золотом шелковом платье с сияющей аурой.',
            es: 'Diosa celestial de la luna en vestido de seda blanco y dorado luminoso.',
            pt: 'Deusa celestial da lua em vestido de seda branco e dourado com graça etérea.',
            zh: '白月光仙子，飘逸白金金丝羽衣，散发以太光晕。'
        },

        // Image URLs (Placeholder - dapat diganti dengan URL sesungguhnya)
        imageUrl: 'https://via.placeholder.com/600x800?text=Seraphina+Celestial+Goddess',
        thumbnailUrl: 'https://via.placeholder.com/200x250?text=Seraphina',
        
        // Unlock Requirements
        requirements: {
            minBalance: 0,
            minPreviousCharacter: 0,
            priceUSD: 2.00,
            paymentMethod: 'BNB/GRAM'
        },

        // Meta Information
        meta: {
            releaseDate: '2025-01-01',
            rarity: 'Common',
            tier: 'Beginner',
            popularity: 'High'
        }
    },

    2: {
        // KAIDA - CRIMSON WARRIOR
        id: 2,
        step: 2,
        name: 'Kaida',
        displayName: 'Pejuang Crimson Night',
        costume: 'Crimson Warrior',
        emoji: '⚔️',
        price: 3.50,
        multiplier: 1.8,
        profitPerGame: 0.18,

        // Visual Attributes
        visual: {
            style: 'Honorable Warrior, Brave, Fiery',
            primaryColors: ['#1e293b', '#dc2626', '#fbbf24'],
            accentColor: '#fbbf24',
            hairColor: '#1e293b',
            outfitColor: '#dc2626',
            gownStyle: 'Structured black and crimson leather armor with gold detailing',
            accessories: [
                'High-split armored skirt',
                'Black thigh-high boots',
                'Hair tied in high ponytail with gold clasp',
                'Ornate sword with red tassels',
                'Combat-ready stance'
            ],
            auraEffect: 'Fiery crimson-gold aura with combat intensity'
        },

        // Environment Context
        environment: {
            setting: 'Dramatic sunset battlefield',
            backgroundColor: '#1a1a2e',
            mood: 'Intense, Warrior-like, Sunset Drama',
            ambiance: [
                'Orange and red sunset sky',
                'Ruins and battlefield remnants',
                'Smoke and fire effects',
                'Golden hour lighting'
            ]
        },

        // Stats & Abilities
        stats: {
            speed: 90,
            jumpHeight: 85,
            agility: 88,
            specialAbility: 'Warrior\'s Strike - Temporary shield against one obstacle',
            healthBonus: 1.5
        },

        // Description
        description: {
            id: 'Pendekar bergaun armor merah-hitam berani berhiaskan pedang emas agung.',
            en: 'Brave warrior in crimson-black dragon armor with golden sword and fierce spirit.',
            ru: 'Воительница в красно-черных доспехах с золотым мечом и огненным боевым духом.',
            es: 'Guerrera valiente en armadura roja y negra con espada dorada y espíritu feroz.',
            pt: 'Guerreira corajosa em armadura vermelha e preta com espada dourada e espírito feroz.',
            zh: '红颜女将，红黑龙鳞战甲佩金纹佩剑，骁勇善战。'
        },

        // Image URLs
        imageUrl: 'https://via.placeholder.com/600x800?text=Kaida+Crimson+Warrior',
        thumbnailUrl: 'https://via.placeholder.com/200x250?text=Kaida',

        // Unlock Requirements
        requirements: {
            minBalance: 0,
            minPreviousCharacter: 1,
            priceUSD: 3.50,
            paymentMethod: 'BNB/GRAM'
        },

        // Meta Information
        meta: {
            releaseDate: '2025-01-15',
            rarity: 'Uncommon',
            tier: 'Intermediate',
            popularity: 'Very High'
        }
    },

    3: {
        // SAKURA - LAVENDER EMPRESS
        id: 3,
        step: 3,
        name: 'Sakura',
        displayName: 'Penyihir Sakura Ungu',
        costume: 'Lavender Empress',
        emoji: '🪭',
        price: 5.00,
        multiplier: 2.5,
        profitPerGame: 0.25,

        // Visual Attributes
        visual: {
            style: 'Mystical, Enchanting, Ethereal, Magical',
            primaryColors: ['#c084fc', '#e0aaff', '#f0e7ff', '#a78bfa'],
            accentColor: '#f472b6',
            hairColor: '#0f172a',
            outfitColor: '#c084fc',
            gownStyle: 'Layered high-split dress in purple-blue transparency with lilac floral decoration',
            accessories: [
                'Purple sakura flower headdress',
                'Mystical ornamental fan',
                'Flowing transparent layers',
                'Silver and lilac jewelry',
                'Enchanting expression'
            ],
            auraEffect: 'Magical purple-pink glow with cherry blossom particles'
        },

        // Environment Context
        environment: {
            setting: 'Midnight sakura garden',
            backgroundColor: '#0a0e27',
            mood: 'Mystical, Enchanting, Magical, Serene',
            ambiance: [
                'Falling cherry blossom petals',
                'Warm lantern lights in distance',
                'Night sky with stars',
                'Glowing magical effect'
            ]
        },

        // Stats & Abilities
        stats: {
            speed: 95,
            jumpHeight: 95,
            agility: 98,
            specialAbility: 'Mystic Flight - Extra high jump for 5 seconds',
            healthBonus: 1.3
        },

        // Description
        description: {
            id: 'Dewi bunga bergaun ungu lavender berkipas sakura. Memberikan profit maksimal!',
            en: 'Mystical lavender empress with cherry blossom fan. Maximum profit multiplier!',
            ru: 'Мистическая императрица в лавандовом платье с веером сакуры. Максимальный множитель прибыли!',
            es: 'Emperatriz mística en vestido lavanda con abanico de sakura. ¡Multiplicador de ganancia máximo!',
            pt: 'Imperatriz mística em vestido de lavanda com leque de sakura. Multiplicador de lucro máximo!',
            zh: '紫月帝女，梦幻紫罗兰羽衣手持樱花扇。最高利润倍数！'
        },

        // Image URLs
        imageUrl: 'https://via.placeholder.com/600x800?text=Sakura+Lavender+Empress',
        thumbnailUrl: 'https://via.placeholder.com/200x250?text=Sakura',

        // Unlock Requirements
        requirements: {
            minBalance: 0,
            minPreviousCharacter: 2,
            priceUSD: 5.00,
            paymentMethod: 'BNB/GRAM'
        },

        // Meta Information
        meta: {
            releaseDate: '2025-02-01',
            rarity: 'Legendary',
            tier: 'Advanced',
            popularity: 'Extreme'
        }
    }
};

/**
 * Fungsi Helper untuk mengakses data karakter
 */

function getCharacter(characterId) {
    return CHARACTERS_DATA[characterId] || null;
}

function getAllCharacters() {
    return Object.values(CHARACTERS_DATA);
}

function getCharacterDescription(characterId, lang = 'id') {
    const char = CHARACTERS_DATA[characterId];
    if (!char) return 'Character not found';
    return char.description[lang] || char.description['en'];
}

function getCharacterStats(characterId) {
    const char = CHARACTERS_DATA[characterId];
    if (!char) return null;
    return {
        name: char.name,
        multiplier: char.multiplier,
        price: char.price,
        stats: char.stats,
        profitPerGame: char.profitPerGame
    };
}

/**
 * Export untuk penggunaan dalam HTML game
 * (Uncomment jika menggunakan ES6 modules)
 * export { CHARACTERS_DATA, getCharacter, getAllCharacters, getCharacterDescription, getCharacterStats };
 */
