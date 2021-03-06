export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	// As the name implies, Breeding Variants are part of the evolutionary family.
	goodra: {
		inherit: true,
		otherFormes: ["goodraflame"],
	  },
	goodraflame: {
		num: 706,
		name: "Goodra-Flame",
		baseSpecies: "Goodra",
		breedingVariant: "Charizard",
		forme: "Flame",
		formeLetter: "F",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 90},
		abilities: {0: "Sap Sipper", 1: "Solar Power", H: "Gooey"},
		heightm: 1.8,
		weightkg: 120.5,
		color: "Red",
		prevo: "sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
	  },
	electivire: {
		inherit: true,
		otherFormes: ["electivirekungfu"],
	  },
	electivirekungfu: {
		num: 466,
		name: "Electivire-Kung-Fu",
		baseSpecies: "Electivire",
		breedingVariant: "Infernape",
		forme: "Kung-Fu",
		formeLetter: "K",
		types: ["Electric", "Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 101},
		abilities: {0: "Motor Drive", 1: "Iron Fist", H: "Vital Spirit"},
		heightm: 1.5,
		weightkg: 96.8,
		color: "Brown",
		prevo: "electabuzz",
		evoLevel: 30,
		eggGroups: ["Human-Like"],
	  },
	flygon: {
		inherit: true,
		otherFormes: ["flygonbuzz"],
	  },
	flygonbuzz: {
		num: 330,
		name: "Flygon-Buzz",
		baseSpecies: "Flygon",
		breedingVariant: "Venomoth",
		forme: "Buzz",
		formeLetter: "B",
		types: ["Ground", "Bug"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 85, spd: 80, spe: 100},
		abilities: {0: "Levitate", H: "Compound Eyes"},
		heightm: 1.7,
		weightkg: 47.2,
		color: "Purple",
		prevo: "vibrava",
		evoLevel: 45,
		eggGroups: ["Bug"],
	  },
	// banette: {
		// inherit: true,
		// otherFormes: ["banettemega", "banetteblademaster"],
	  // },
	// banetteblademaster: {
		// num: 354,
		// name: "Banette-Blademaster",
		// baseSpecies: "Banette",
		// forme: "Blademaster",
		// formeLetter: "B",
		// types: ["Ghost", "Fighting"],
		// baseStats: {hp: 64, atk: 115, def: 65, spa: 83, spd: 89, spe: 65},
		// abilities: {0: "Insomnia", 1: "Frisk", H: "Justified"},
		// heightm: 1.3,
		// weightkg: 32.2,
		// color: "White",
		// prevo: "shuppet",
		// evoLevel: 37,
		// eggGroups: ["Amorphous"],
		// otherFormes: ["banetteblademastermega"],
	  // },
	// banettemegablademaster: {
		// num: 354,
		// name: "Banette-Mega-Blademaster",
		// baseSpecies: "Banette-Blademaster",
		// forme: "Mega",
		// formeLetter: "M",
		// types: ["Ghost", "Fighting"],
		// baseStats: {hp: 64, atk: 165, def: 75, spa: 93, spd: 109, spe: 65},
		// abilities: {0: "Prankster"},
		// heightm: 1.4,
		// weightkg: 32.7,
		// color: "White",
		// eggGroups: ["Amorphous"],
	  // },
	kingdra: {
		inherit: true,
		otherFormes: ["kingracamo"],
	  },
	kingdracamo: {
		num: 230,
		name: "Kingdra-Camo",
		baseSpecies: "Kingdra",
		breedingVariant: "Greninja",
		forme: "Camo",
		formeLetter: "C",
		types: ["Water", "Dark"],
		baseStats: {hp: 75, atk: 95, def: 95, spa: 99, spd: 95, spe: 85},
		abilities: {0: "Protean", 1: "Sniper", H: "Damp"},
		heightm: 1.6,
		weightkg: 96,
		color: "Blue",
		prevo: "seadra",
		evoLevel: 32,
		eggGroups: ["Water 1"],
	  },
	vikavolt: {
		inherit: true,
		otherFormes: ["vikavolttotem", "vikavoltmigale"],
	  },
	vikavoltmigale: {
		num: 738,
		name: "Vikavolt-Migale",
		baseSpecies: "Vikavolt",
		breedingVariant: "Galvantula",
		forme: "Migale",
		formeLetter: "M",
		types: ["Bug", "Electric"],
		baseStats: {hp: 70, atk: 77, def: 90, spa: 145, spd: 75, spe: 75},
		abilities: {0: "Levitate", H: "Compound Eyes"},
		heightm: 1.1,
		weightkg: 29.6,
		color: "Yellow",
		prevo: "charjabug",
		evoLevel: 21,
		eggGroups: ["Bug"],
	  },
	// typhlosion: {
		// inherit: true,
		// otherFormes: ["typhlosioncinder"],
	  // },
	// typhlosioncinder: {
		// num: 157,
		// name: "Typhlosion-Cinder",
		// baseSpecies: "Typhlosion",
		// forme: "Cinder",
		// formeLetter: "C",
		// types: ["Fire", "Ground"],
		// genderRatio: {m: 0.875, F: 0.125},
		// baseStats: {hp: 78, atk: 84, def: 98, spa: 109, spd: 85, spe: 100},
		// abilities: {0: "Blaze", 1: "Sand Stream", H: "Flash Fire"},
		// heightm: 1.8,
		// weightkg: 64.5,
		// color: "Brown",
		// prevo: "quilava",
		// evoLevel: 36,
		// eggGroups: ["Field"],
	  // },
	flareon: {
		inherit: true,
		otherFormes: "flareonocean",
	  },
	flareonocean: {
		num: 136,
		name: "Flareon-Ocean",
		baseSpecies: "Flareon",
		breedingVariant: "Wailord",
		forme: "Ocean",
		formeLetter: "O",
		types: ["Fire", "Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 118, atk: 130, def: 60, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Flash Fire", 1: "Pressure", H: "Guts"},
		heightm: 7.7,
		weightkg: 211.5,
		color: "Blue",
		prevo: "eevee",
		evoLevel: 1,
		eggGroups: ["Field"],
	  },
	lapras: {
		inherit: true,
		otherFormes: "laprasangry",
	  },
	laprasangry: {
		num: 131,
		name: "Lapras-Angry",
		baseSpecies: "Lapras",
		breedingVariant: "Drampa",
		forme: "Angry",
		formeLetter: "A",
		types: ["Water", "Dragon"],
		baseStats: {hp: 130, atk: 85, def: 80, spa: 110, spd: 95, spe: 60},
		abilities: {0: "Water Absorb", 1: "Berserk", H: "Hydration"},
		heightm: 2.7,
		weightkg: 202,
		color: "White",
		eggGroups: ["Monster"],
	  },
	exploud: {
		inherit: true,
		otherFormes: ["exploudmeow"],
	  },
	exploudmeow: {
		num: 295,
		name: "Exploud-Meow",
		baseSpecies: "Exploud",
		breedingVariant: "Persian",
		forme: "Meow",
		formeLetter: "M",
		types: ["Normal"],
		baseStats: {hp: 104, atk: 91, def: 63, spa: 91, spd: 73, spe: 91},
		abilities: {0: "Soundproof", 1: "Technician", H: "Scrappy"},
		heightm: 1.2,
		weightkg: 58,
		color: "Yellow",
		prevo: "loudred",
		evoLevel: 40,
		eggGroups: ["Field"],
	  },
	butterfree: {
		inherit: true,
		otherFormes: ["butterfreearmor"],
	  },
	butterfreearmor: {
		num: 12,
		name: "Butterfree-Armor",
		baseSpecies: "Butterfree",
		breedingVariant: "Shuckle",
		forme: "Armor",
		formeLetter: "A",
		types: ["Bug", "Rock"],
		baseStats: {hp: 60, atk: 45, def: 140, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Compound Eyes", 1: "Sturdy", H: "Tinted Lens"},
		heightm: 0.8,
		weightkg: 26.2,
		color: "Yellow",
		prevo: "metapod",
		evoLevel: 10,
		eggGroups: ["Bug"],
	  },
	espeon: {
		inherit: true,
		otherFormes: ["espeondusk"],
	  },
	espeondusk: {
		num: 196,
		name: "Espeon-Dusk",
		baseSpecies: "Espeon",
		breedingVariant: "Umbreon",
		forme: "Dusk",
		formeLetter: "D",
		types: ["Psychic", "Dark"],
		genderRatio: {m: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 65, def: 85, spa: 130, spd: 95, spe: 110},
		abilities: {0: "Synchronize", 1: "Inner Focus", H: "Magic Bounce"},
		heightm: 0.9,
		weightkg: 26.7,
		color: "Black",
		prevo: "eevee",
		evoLevel: 2,
		eggGroups: ["Field"],
	  },
	avalugg: {
		inherit: true,
		otherFormes: ["avaluggshield"],
	  },
	avaluggshield: {
		num: 713,
		name: "Avalugg-Shield",
		baseSpecies: "Avalugg",
		breedingVariant: "Bastiodon",
		forme: "Shield",
		formeLetter: "S",
		types: ["Ice", "Steel"],
		baseStats: {hp: 95, atk: 117, def: 184, spa: 44, spd: 92, spe: 28},
		abilities: {0: "Soundproof", 1: "Ice Body", H: "Sturdy"},
		heightm: 1.6,
		weightkg: 327.2,
		color: "Gray",
		prevo: "bergmite",
		evoLevel: 37,
		eggGroups: ["Monster"],
	  },
	dusclops: {
		inherit: true,
		otherFormes: ["dusclopsgastric"],
	  },
	dusclopsgastric: {
		num: 356,
		name: "Dusclops-Gastric",
		baseSpecies: "Dusclops",
		breedingVariant: "Gastrodon",
		forme: "Gastric",
		formeLetter: "G",
		types: ["Ghost", "Water"],
		baseStats: {hp: 75, atk: 70, def: 130, spa: 60, spd: 130, spe: 25},
		abilities: {0: "Pressure", 1: "Sticky Hold", H: "Frisk"},
		heightm: 1.2,
		weightkg: 30.2,
		color: "Purple",
		prevo: "duskull",
		evos: ["dusknoir"],
		evoLevel: 37,
		eggGroups: ["Amorphous"],
	},
	// delphox: {
		// inherit: true,
		// otherFormes: ["delphoxlazy"],
	// },
	// delphoxlazy: {
		// num: 655,
		// name: "Delphox-Lazy",
		// baseSpecies: "Delphox",
		// forme: "Lazy",
		// formeLetter: "L",
		// types: ["Fire", "Normal"],
		// genderRatio: {M: 0.875, F: 0.125},
		// baseStats: {hp: 75, atk: 114, def: 72, spa: 114, spd: 100, spe: 104},
		// abilities: {0: "Blaze", 1: "Truant", H: "Magician"},
		// heightm: 1.7,
		// weightkg: 84.7,
		// color: "Brown",
		// prevo: "braixen",
		// evoLevel: 36,
		// eggGroups: ["Field"],
	// },
	lurantis: {
		inherit: true,
		otherFormes: ["lurantistotem", "lurantisnut"],
	},
	lurantisnut: {
		num: 754,
		name: "Lurantis-Nut",
		baseSpecies: "Lurantis",
		breedingVariant: "Exeggutor-Alola",
		forme: "Nut",
		formeLetter: "N",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 75, atk: 105, def: 90, spa: 102, spd: 90, spe: 45},
		abilities: {0: "Leaf Guard", 1: "Frisk", H: "Contrary"},
		heightm: 5.9,
		weightkg: 217,
		color: "Yellow",
		prevo: "fomantis",
		evoLevel: 34,
		eggGroups: ["Grass"],
	},
	sylveon: {
		inherit: true,
		otherFormes: ["sylveonprotector"],
	},
	sylveonprotector: {
		num: 700,
		name: "Sylveon-Protector",
		baseSpecies: "Sylveon",
		breedingVariant: "Rhyperior",
		forme: "Protector",
		formeLetter: "P",
		types: ["Fairy", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 98, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Cute Charm", 1: "Solid Rock", H: "Pixilate"},
		heightm: 1.7,
		weightkg: 153.1,
		color: "Gray",
		prevo: "eevee",
		evoLevel: 2,
		eggGroups: ["Field"],
	},
	skarmory: {
		inherit: true,
		otherFormes: ["skarmoryprimordial"],
	},
	skarmoryprimordial: {
		num: 227,
		name: "Skarmory-Primordial",
		baseSpecies: "Skarmory",
		breedingVariant: "Archeops",
		forme: "Primordial",
		formeLetter: "P",
		types: ["Steel", "Flying"],
		baseStats: {hp: 65, atk: 110, def: 140, spa: 40, spd: 70, spe: 70},
		abilities: {0: "Defeatist", 1: "Sturdy", H: "Weak Armor"},
		heightm: 1.5,
		weightkg: 41.2,
		color: "Yellow",
		eggGroups: ["Flying"],
	},
	// infernape: {
		// inherit: true,
		// otherFormes: ["infernapebugout"],
	// },
	// infernapebugout: {
		// num: 392,
		// name: "Infernape-Bugout",
		// baseSpecies: "Infernape",
		// forme: "Bugout",
		// formeLetter: "B",
		// types: ["Fire", "Bug"],
		// genderRatio: {M: 0.875, F: 0.125},
		// baseStats: {hp: 76, atk: 104, def: 75, spa: 104, spd: 78, spe: 108},
		// abilities: {0: "Blaze", 1: "Tinted Lens", H: "Iron Fist"},
		// heightm: 0.9,
		// weightkg: 36.3,
		// color: "Purple",
		// prevo: "monferno",
		// evoLevel: 36,
		// eggGroups: ["Human-Like"],
	  // },
	// breloom: {
		// inherit: true,
		// otherFormes: ["breloomluau"],
	// },
	// breloomluau: {
		// num: 286,
		// name: "Breloom-Luau",
		// baseSpecies: "Breloom",
		// forme: "Luau",
		// formeLetter: "L",
		// types: ["Fighting", "Fairy"],
		// baseStats: {hp: 70, atk: 130, def: 80, spa: 60, spd: 60, spe: 85},
		// abilities: {0: "Triage", 1: "Poison Heal", H: "Technician"},
		// heightm: 0.6,
		// weightkg: 19.7,
		// color: "Green",
		// prevo: "shroomish",
		// evoLevel: 23,
		// eggGroups: ["Grass"],
	// },
	leafeon: {
		inherit: true,
		otherFormes: ["leafeoncutlass"],
	},
	leafeoncutlass: {
		num: 470,
		name: "Leafeon-Cutlass",
		baseSpecies: "Leafeon",
		breedingVariant: "Lucario",
		forme: "Cutlass",
		formeLetter: "C",
		types: ["Grass", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 110, def: 130, spa: 87, spd: 65, spe: 95},
		abilities: {0: "Leaf Guard", 1: "Justified", H: "Chlorophyll"},
		heightm: 1.1,
		weightkg: 39.7,
		color: "Blue",
		prevo: "eevee",
		evoLevel: 2,
		eggGroups: ["Field"],
	  },
	froslass: {
		inherit: true,
		otherFormes: ["froslassgunwoman"],
	  },
	froslassgunwoman: {
		num: 478,
		name: "Froslass-Gunwoman",
		baseSpecies: "Froslass",
		breedingVariant: "Golem-Alola",
		forme: "Gunwoman",
		formeLetter: "G",
		types: ["Ice", "Electric"],
		gender: "F",
		baseStats: {hp: 70, atk: 100, def: 70, spa: 80, spd: 70, spe: 110},
		abilities: {0: "Snow Cloak", 1: "Galvanize", H: "Cursed Body"},
		heightm: 1.5,
		weightkg: 171.3,
		color: "Gray",
		prevo: "snorunt",
		evoLevel: 1,
		eggGroups: ["Mineral"],
	  },
	mantine: {
		inherit: true,
		otherFormes: ["mantinespiny"],
	  },
	mantinespiny: {
		num: 226,
		name: "Mantine-Spiny",
		baseSpecies: "Mantine",
		breedingVariant: "Toxapex",
		forme: "Spiny",
		formeLetter: "S",
		types: ["Flying", "Poison"],
		baseStats: {hp: 85, atk: 40, def: 111, spa: 80, spd: 140, spe: 70},
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Merciless"},
		heightm: 1.4,
		weightkg: 117.2,
		color: "Blue",
		prevo: "mantyke",
		evoLevel: 1,
		eggGroups: ["Water 1"],
	  },
	// dodrio: {
		// inherit: true,
		// otherFormes: ["dodriomystical"],
	// },
	// dodriomystical: {
		// num: 85,
		// name: "Dodrio-Mystical",
		// baseSpecies: "Dodrio",
		// forme: "Mystical",
		// formeLetter: "M",
		// types: ["Normal", "Flying"],
		// baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 70, spe: 110},
		// abilities: {0: "Run Away", 1: "Magic Guard", H: "Tangled Feet"},
		// heightm: 1.6,
		// weightkg: 49.6,
		// color: "Black",
		// prevo: "doduo",
		// evoLevel: 31,
		// eggGroups: ["Flying"],
	  // }, 
	rapidashgalar: {
		inherit: true,
		otherFormes: ["rapidashgalarmeow"],
	  },
	rapidashgalarmeow: {
		num: 78,
		name: "Rapidash-Galar-Meow",
		breedingVariant: "Perrserker",
		forme: "Meow",
		baseSpecies: "Rapidash-Galar",
		types: ["Fairy", "Steel"],
		baseStats: {hp: 65, atk: 100, def: 85, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Tough Claws", 1: " Pastel Veil", H: " Anticipation"},
	},
	mrrime: {
		inherit: true,
		otherFormes: ["mrrimespoon"],
	},
	mrrimespoon: {
		num: 866,
		name: "Mr. Rime-Spoon",
		forme: "Spoon",
		baseSpecies: "Mr. Rime",
		breedingVariant: "Alakazam",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 95},
		abilities: {0: "Magic Guard", 1: " Screen Cleaner", H: " Ice Body"},
	},
	thievul: {
		inherit: true,
		otherFormes: ["thievulbananas"],
	},
	thievulbananas: {
		num: 828,
		name: "Thievul-Bananas",
		baseSpecies: "Thievul",
		forme: "Bananas",
		breedingVariant: "Darmanitan-Galar",
		types: ["Dark", "Ice"],
		baseStats: {hp: 70, atk: 99, def: 58, spa: 87, spd: 92, spe: 90},
		abilities: {0: "Gorilla Tactics", 1: " Unburden", H: " Stakeout"},
		height: 1.2,
		weightkg: 19.9,
		prevo: "nickit",
		eggGroups: ["Field"],
	},
	stonjourner: {
		inherit: true,
		otherFormes: ["stonjournercastle"],
	},
	stonjournercastle: {
		num: 874,
		name: "Stonjourner-Castle",
		baseSpecies: "Stonjourner",
		forme: "Castle",
		breedingVariant: "Crustle",
		types: ["Rock", "Bug"],
		baseStats: {hp: 100, atk: 125, def: 135, spa: 20, spd: 48, spe: 70},
		abilities: {0: "Weak Armor"},
		height: 2.5,
		weightkg: 520,
		eggGroups: ["Mineral"],
	},
	copperajah: {
		inherit: true,
		otherFormes: ["copperajahforge"],
	},
	copperajahforge: {
		num: 879,
		name: "Copperajah-Forge",
		baseSpecies: "Copperajah",
		breedingVariant: "Coalossal",
		forme: "Forge",
		types: ["Steel", "Fire"],
		baseStats: {hp: 122, atk: 130, def: 95, spa: 80, spd: 69, spe: 30},
		abilities: {0: "Sheer Force", H: "Flash Fire"},
		weightkg: 650,
		prevo: "cufant",
		eggGroups: ["Field", "Mineral"],
	},
	grapploct: {
		inherit: true,
		otherFormes: ["grapploctray"],
	},
	grapploctray: {
		num: 853,
		name: "Grapploct-Ray",
		baseSpecies: "Grapploct",
		breedingVariant: "Mantine",
		forme: "Ray",
		types: ["Fighting", "Water"],
		baseStats: {hp: 80, atk: 118, def: 90, spa: 70, spd: 110, spe: 42},
		abilities: {0: "Limber", 1: " Water Veil", H: " Technician"},
		height: 1.6,
		weightkg: 39,
		prevo: "clobbopus",
		eggGroups: ["Water1", "Human-Like"],
	},
	appletun: {
		inherit: true,
		otherFormes: ["appletunburned"],
	},
	appletunburned: {
		num: 842,
		name: "Appletun-Burned",
		baseSpecies: "Appletun",
		breedingVariant: "Turtonator",
		forme: "Burned",
		types: ["Grass", "Fire"],
		baseStats: {hp: 110, atk: 85, def: 107, spa: 100, spd: 80, spe: 30},
		abilities: {0: "Ripen", 1: " Gluttony", H: " Shell Armor"},
		height: 0.4,
		weightkg: 13,
		prevo: "applin",
		eggGroups: ["Grass", "Dragon"],
	},
	vespiquen: {
		inherit: true,
		otherFormes: ["vespiquenterra"],
	},
	vespiquenterra: {
		num: 416,
		name: "Vespiquen-Terra",
		baseSpecies: "Vespiquen",
		breedingVariant: "Gliscor",
		forme: "Terra",
		types: ["Bug", "Ground"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 67},
		abilities: {0: "Pressure", 1: " Poison Heal", H: "Unnerve"},
		height: 1.2,
		weightkg: 38.5,
		prevo: "combee",
		eggGroups: ["Bug"],
	},
	cursola: {
		inherit: true,
		otherFormes: ["cursolashock"],
	},
	cursolashock: {
		num: 864,
		name: "Cursola-Shock",
		baseSpecies: "Cursola",
		breedingVariant: "Stunfisk",
		forme: "Shock",
		types: ["Ghost", "Electric"],
		baseStats: {hp: 85, atk: 95, def: 50, spa: 145, spd: 130, spe: 30},
		abilities: {0: "Static", 1: " Perish Body", H: "Perish Body"},
		height: 1,
		weightkg: 0.4,
		prevo: "corsolagalar",
		eggGroups: ["Water1", "Water3"],
	},
	machamp: {
		inherit: true,
		otherFormes: ["machamplucha"],
	},
	machamplucha: {
		num: 68,
		name: "Machamp-Lucha",
		baseSpecies: "Machamp",
		breedingVariant: "Hawlucha",
		forme: "Lucha",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 86},
		abilities: {0: "Guts", 1: " No Guard", H: " Mold Breaker"},
		height: 1.6,
		weightkg: 130,
		prevo: "machoke",
		eggGroups: ["Human-Like"],
	},
	roserade: {
		inherit: true,
		otherFormes: ["roseradescarfed"],
	},
	roseradescarfed: {
		num: 407,
		name: "Roserade-Scarfed",
		baseSpecies: "Roserade",
		breedingVariant: "Ribombee",
		forme: "Scarfed",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 107},
		abilities: {0: "Natural Cure", 1: " Shield Dust", H: " Technician"},
		height: 0.9,
		weightkg: 14.5,
		prevo: "roselia",
		eggGroups: ["Fairy", "Grass"],
	},
	marowakhalberd: {
		num: 29,
		name: "Marowak-Halberd",
		baseSpecies: "Marowak",
		breedingVariant: "Haxorus",
		forme: "Halberd",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 71},
		abilities: {0: "Rock Head", 1: "Mold Breaker", H: "Battle Armor"},
		heightm: 1,
		weightkg: 45,
		color: "Brown",
	},
	slowkingexplosive: {
		num: 199,
		name: "Slowking-Explosive",
		baseSpecies: "Slowking",
		breedingVariant: "Turtonator",
		forme: "Explosive",
		types: ["Water", "Fire"],
		baseStats: {hp: 95, atk: 75, def: 107, spa: 100, spd: 110, spe: 30},
		abilities: {0: "Oblivious", 1: "Shell Armor", H: "Regenerator"},
		heightm: 2,
		weightkg: 79.5,
		color: "Pink",
	},
	rapidashmule: {
		num: 78,
		name: "Rapidash-Mule",
		baseSpecies: "Rapidash",
		breedingVariant: "Mudsdale",
		forme: "Mule",
		types: ["Fire", "Ground"],
		baseStats: {hp: 65, atk: 112, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Flame Body", 1: "Flash Fire", H: "Stamina"},
		weightkg: 95,
	},
	dusknoircake: {
		num: 477,
		name: "Dusknoir-Cake",
		baseSpecies: "Dusknoir",
		breedingVariant: "Alcremie",
		forme: "Cake",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 54, atk: 100, def: 135, spa: 65, spd: 135, spe: 45},
		abilities: {0: "Pressure", H: "Sweet Veil"},
		weightkg: 106.6,
	},
	drampaschrodinger: {
		num: 780,
		name: "Drampa-Schr??dinger",
		baseSpecies: "Drampa",
		breedingVariant: "Dragapult",
		forme: "Schr??dinger",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 78, atk: 60, def: 85, spa: 135, spd: 91, spe: 89},
		abilities: {0: "Berserk", 1: "Sap Sipper", H: "Infiltrator"},
		weightkg: 185,
	},
	espeonaura: {
		num: 196,
		name: "Espeon-Aura",
		baseSpecies: "Espeon",
		breedingVariant: "Lucario",
		forme: "Aura",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 68, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
		abilities: {0: "Magic Bounce", H: "Inner Focus"},
		weightkg: 26.5,
	},
	sirfetchdarcher: {
		num: 865,
		name: "Sirfetchd-Archer",
		baseSpecies: "Sirfetchd",
		breedingVariant: "Decidueye",
		forme: "Archer",
		types: ["Fighting", "Ghost"],
		baseStats: {hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 67},
		abilities: {0: "Scrappy", H: "Long Reach"},
		weightkg: 117,
	},
	weezingdoctor: {
		num: 110,
		name: "Weezing-Doctor",
		baseSpecies: "Weezing",
		breedingVariant: "Reuniclus",
		forme: "Doctor",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 87, atk: 90, def: 120, spa: 85, spd: 70, spe: 60},
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "Regenerator"},
		weightkg: 9.5,
	},
};