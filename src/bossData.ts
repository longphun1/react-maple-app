const BOSS_DATA = [
    {
        title: 'Boss',
        items: [ 
            {
                id: 1,
                name: 'Hard Hilla',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/hilla.png',
                price: 56250000,
            },
            {
                id: 2,
                name: 'Chaos Pink Bean',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/pink_bean.png',
                price: 64000000,
            },
            {
                id: 3,
                name: 'Cygnus',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/cygnus.png',
                price: 72250000,
            },
            {
                id: 4,
                name: 'Chaos Zakum',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/zakum.png',
                price: 81000000,
            },
            {
                id: 5,
                name: 'Chaos Crimson Queen',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/crimson_queen.png',
                price: 81000000,
            },
            {
                id: 6,
                name: 'Chaos Pierre',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/pierre.png',
                price: 81000000,
            },
            {
                id: 7,
                name: 'Chaos Von Bon',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/von_bon.png',
                price: 81000000,
            },
            {
                id: 8,
                name: 'Princess No',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/princess_no.png',
                price: 81000000,
            },
            {
                id: 9,
                name: 'Hard Magnus',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/magnus.png',
                price: 95062500,
            },
            {
                id: 10,
                name: 'Chaos Vellum',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/vellum.png',
                price: 105062500,
            },
            {
                id: 11,
                name: 'Chaos Papulatus',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/papulatus.png',
                price: 132250000,
            },
            {
                id: 12,
                name: 'Akechi Mitsuhide',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/akechi_mitsuhide.png',
                price: 144000000,
            },
            {
                id: 13,
                name: 'Normal Lotus',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/lotus.png',
                price: 162562500,
            },
            {
                id: 14,
                name: 'Normal Damien',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/damien.png',
                price: 169000000,
            },
            {
                id: 15,
                name: 'Normal Guardian Angel Slime',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/guardian_angel_slime.png',
                price: 171610000,
            },
            {
                id: 16,
                name: 'Easy Lucid',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/lucid.png',
                price: 175562500,
            },
            {
                id: 17,
                name: 'Easy Will',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/will.png',
                price: 191275000,
            },
            {
                id: 18,
                name: 'Normal Lucid',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/lucid.png',
                price: 203062500,
            },
            {
                id: 19,
                name: 'Normal Will',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/will.png',
                price: 232562500,
            },
            {
                id: 20,
                name: 'Normal Gloom',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/gloom.png',
                price: 248062500,
            },
            {
                id: 21,
                name: 'Normal Darknell',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/guard_captain_darknell.png',
                price: 264062500,
            },
            {
                id: 22,
                name: 'Hard Lotus',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/lotus.png',
                price: 370562500,
            },
            {
                id: 23,
                name: 'Hard Damien',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/damien.png',
                price: 351562500,
            },
            {
                id: 24,
                name: 'Hard Lucid',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/lucid.png',
                price: 400000000,
            },
            {
                id: 25,
                name: 'Hard Will',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/will.png',
                price: 441000000,
            },
            {
                id: 26,
                name: 'Normal Verus Hilla',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/verus_hilla.png',
                price: 447600000,
            },
            {
                id: 27,
                name: 'Chaos Guardian Angel Slime',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/guardian_angel_slime.png',
                price: 451562500,
            },
            {
                id: 28,
                name: 'Chaos Gloom',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/gloom.png',
                price: 462250000,
            },
            {
                id: 29,
                name: 'Hard Darknell',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/guard_captain_darknell.png',
                price: 484000000,
            },
            {
                id: 30,
                name: 'Hard Verus Hilla',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/verus_hilla.png',
                price: 552250000,
            },
            {
                id: 31,
                name: 'Normal Chosen Seren',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/chosen_seren.png',
                price: 668437500,
            },
            {
                id: 32,
                name: 'Hard Chosen Seren',
                imageUrl: 'https://maplestory-boss-crystal-calculator-reboot.vercel.app/boss/chosen_seren.png',
                price: 756250000,
            },
            {
                id: 33,
                name: 'Chaos Kalos',
                imageUrl: 'https://i.imgur.com/JMSiagr.jpg',
                price: 1000000000,
            },
        ]
    }
]

export default BOSS_DATA;