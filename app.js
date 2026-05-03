/* ═══════════════════════════════════════════════════════════════════════
   MuEditor Pro v2 — Monster Set Base Editor
   Season 6 • SSeMU / MuEmu Compatible
   ═══════════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────
// MONSTER DATABASE (from real Monster.txt)
// ─────────────────────────────────────────
const MONSTERS = {
    0:   { name: "Bull Fighter",                   level: 6 },
    1:   { name: "Hound",                          level: 9 },
    2:   { name: "Budge Dragon",                   level: 4 },
    3:   { name: "Spider",                         level: 2 },
    4:   { name: "Elite Bull Fighter",             level: 12 },
    5:   { name: "Hell Hound",                     level: 38 },
    6:   { name: "Lich",                           level: 14 },
    7:   { name: "Giant",                          level: 17 },
    8:   { name: "Poison Bull Fighter",            level: 46 },
    9:   { name: "Thunder Lich",                   level: 44 },
    10:  { name: "Dark Knight",                    level: 48 },
    11:  { name: "Ghost",                          level: 32 },
    12:  { name: "Larva",                          level: 25 },
    13:  { name: "Hell Spider",                    level: 40 },
    14:  { name: "Skeleton",                       level: 19 },
    15:  { name: "Skeleton Archer",                level: 34 },
    16:  { name: "Chief Skeleton Warrior",         level: 42 },
    17:  { name: "Cyclops",                        level: 28 },
    18:  { name: "Gorgon",                         level: 55 },
    19:  { name: "Yeti",                           level: 30 },
    20:  { name: "Elite Yeti",                     level: 36 },
    21:  { name: "Assassin",                       level: 26 },
    22:  { name: "Ice Monster",                    level: 22 },
    23:  { name: "Hommerd",                        level: 24 },
    24:  { name: "Worm",                           level: 20 },
    25:  { name: "Ice Queen",                      level: 52 },
    26:  { name: "Goblin",                         level: 3 },
    27:  { name: "Chain Scorpion",                 level: 5 },
    28:  { name: "Beetle Monster",                 level: 10 },
    29:  { name: "Hunter",                         level: 13 },
    30:  { name: "Forest Monster",                 level: 15 },
    31:  { name: "Agon",                           level: 16 },
    32:  { name: "Stone Golem",                    level: 18 },
    33:  { name: "Elite Goblin",                   level: 8 },
    34:  { name: "Cursed Wizard",                  level: 54 },
    35:  { name: "Death Gorgon",                   level: 64 },
    36:  { name: "Shadow",                         level: 47 },
    37:  { name: "Devil",                          level: 60 },
    38:  { name: "Balrog",                         level: 66 },
    39:  { name: "Poison Shadow",                  level: 50 },
    40:  { name: "Death Knight",                   level: 62 },
    41:  { name: "Death Cow",                      level: 57 },
    42:  { name: "Red Dragon",                     level: 47 },
    43:  { name: "Golden Budge Dragon",            level: 15 },
    44:  { name: "Dragon",                         level: 60 },
    45:  { name: "Bahamut",                        level: 43 },
    46:  { name: "Vepar",                          level: 45 },
    47:  { name: "Valkyrie",                       level: 46 },
    48:  { name: "Lizard King",                    level: 70 },
    49:  { name: "Hydra",                          level: 74 },
    51:  { name: "Great Bahamut",                  level: 66 },
    52:  { name: "Silver Valkyrie",                level: 68 },
    53:  { name: "Golden Titan",                   level: 53 },
    54:  { name: "Golden Soldier",                 level: 46 },
    55:  { name: "Death King",                     level: 30 },
    56:  { name: "Death Bone",                     level: 24 },
    57:  { name: "Iron Wheel",                     level: 80 },
    58:  { name: "Tantalos",                       level: 83 },
    59:  { name: "Zaikan",                         level: 90 },
    60:  { name: "Bloody Wolf",                    level: 76 },
    61:  { name: "Beam Knight",                    level: 84 },
    62:  { name: "Mutant",                         level: 72 },
    63:  { name: "Death Beam Knight",              level: 93 },
    64:  { name: "Ogre Archer",                    level: 70 },
    65:  { name: "Elite Ogre",                     level: 74 },
    66:  { name: "Cursed King",                    level: 86 },
    67:  { name: "Metal Balrog",                   level: 77 },
    69:  { name: "Alquamos",                       level: 75 },
    70:  { name: "Queen Rainier",                  level: 82 },
    71:  { name: "Mega Crust",                     level: 78 },
    72:  { name: "Phantom Knight",                 level: 96 },
    73:  { name: "Drakan",                         level: 86 },
    74:  { name: "Alpha Crust",                    level: 92 },
    75:  { name: "Great Drakan",                   level: 100 },
    76:  { name: "Phoenix Darkness Shield",        level: 106 },
    77:  { name: "Phoenix of Darkness",            level: 108 },
    78:  { name: "Golden Goblin",                  level: 20 },
    79:  { name: "Golden Derkon",                  level: 80 },
    80:  { name: "Golden Lizard King",             level: 83 },
    81:  { name: "Golden Vepar",                   level: 61 },
    82:  { name: "Golden Tantalos",                level: 90 },
    83:  { name: "Golden Wheel",                   level: 77 },
    84:  { name: "Chief Skeleton Warrior",         level: 33 },
    85:  { name: "Chief Skeleton Archer",          level: 37 },
    86:  { name: "Dark Skull Soldier",             level: 41 },
    87:  { name: "Giant Ogre",                     level: 44 },
    88:  { name: "Red Skeleton Knight",            level: 47 },
    89:  { name: "Magic Skeleton",                 level: 51 },
    90:  { name: "Chief Skeleton Warrior",         level: 49 },
    91:  { name: "Chief Skeleton Archer",          level: 53 },
    92:  { name: "Dark Skull Soldier",             level: 56 },
    93:  { name: "Giant Ogre",                     level: 60 },
    94:  { name: "Red Skeleton Knight",            level: 64 },
    95:  { name: "Magic Skeleton",                 level: 69 },
    96:  { name: "Chief Skeleton Warrior",         level: 56 },
    97:  { name: "Chief Skeleton Archer",          level: 61 },
    98:  { name: "Dark Skull Soldier",             level: 66 },
    99:  { name: "Giant Ogre",                     level: 70 },
    100: { name: "Lance",                          level: 80 },
    101: { name: "Iron Stick",                     level: 80 },
    102: { name: "Fire",                           level: 80 },
    103: { name: "Meteorite",                      level: 90 },
    104: { name: "Trap",                           level: 2 },
    105: { name: "Canon Trap",                     level: 80 },
    106: { name: "Laser Trap",                     level: 80 },
    111: { name: "Red Skeleton Knight",            level: 74 },
    112: { name: "Magic Skeleton",                 level: 79 },
    113: { name: "Chief Skeleton Warrior",         level: 64 },
    114: { name: "Chief Skeleton Archer",          level: 69 },
    115: { name: "Dark Skull Soldier",             level: 75 },
    116: { name: "Giant Ogre",                     level: 79 },
    117: { name: "Red Skeleton Knight",            level: 82 },
    118: { name: "Magic Skeleton",                 level: 84 },
    119: { name: "Chief Skeleton Warrior",         level: 70 },
    120: { name: "Chief Skeleton Archer",          level: 75 },
    121: { name: "Dark Skull Soldier",             level: 80 },
    122: { name: "Giant Ogre",                     level: 85 },
    123: { name: "Red Skeleton Knight",            level: 87 },
    124: { name: "Magic Skeleton",                 level: 90 },
    125: { name: "Chief Skeleton Warrior",         level: 76 },
    126: { name: "Chief Skeleton Archer",          level: 81 },
    127: { name: "Dark Skull Soldier",             level: 86 },
    128: { name: "Giant Ogre",                     level: 90 },
    129: { name: "Red Skeleton Knight",            level: 94 },
    130: { name: "Magic Skeleton",                 level: 99 },
    131: { name: "Castle Gate",                    level: 2 },
    132: { name: "Statue of Saint",                level: 2 },
    133: { name: "Statue of Saint",                level: 2 },
    134: { name: "Statue of Saint",                level: 2 },
    135: { name: "White Wizard",                   level: 87 },
    136: { name: "Destructive Ogre Soldier",       level: 70 },
    137: { name: "Destructive Ogre Archer",        level: 74 },
    138: { name: "Chief Skeleton Warrior",         level: 85 },
    139: { name: "Chief Skeleton Archer",          level: 87 },
    140: { name: "Dark Skull Soldier",             level: 90 },
    141: { name: "Giant Ogre",                     level: 93 },
    142: { name: "Red Skeleton Knight",            level: 98 },
    143: { name: "Magic Skeleton",                 level: 102 },
    144: { name: "Death Angel",                    level: 24 },
    145: { name: "Death Centurion",                level: 33 },
    146: { name: "Blood Soldier",                  level: 21 },
    147: { name: "Aegis",                          level: 17 },
    148: { name: "Rogue Centurion",                level: 19 },
    149: { name: "Necron",                         level: 28 },
    150: { name: "Bali",                           level: 52 },
    151: { name: "Soldier",                        level: 58 },
    160: { name: "Schriker",                       level: 40 },
    161: { name: "Illusion of Kundun",             level: 52 },
    174: { name: "Death Angel",                    level: 40 },
    175: { name: "Death Centurion",                level: 48 },
    176: { name: "Blood Soldier",                  level: 37 },
    177: { name: "Aegis",                          level: 32 },
    178: { name: "Rogue Centurion",                level: 34 },
    179: { name: "Necron",                         level: 44 },
    180: { name: "Schriker",                       level: 53 },
    181: { name: "Illusion of Kundun",             level: 65 },
    182: { name: "Death Angel",                    level: 53 },
    183: { name: "Death Centurion",                level: 63 },
    184: { name: "Blood Soldier",                  level: 50 },
    185: { name: "Aegis",                          level: 46 },
    186: { name: "Rogue Centurion",                level: 48 },
    187: { name: "Necron",                         level: 58 },
    188: { name: "Schriker",                       level: 69 },
    189: { name: "Illusion of Kundun",             level: 81 },
    190: { name: "Death Angel",                    level: 74 },
    191: { name: "Death Centurion",                level: 83 },
    192: { name: "Blood Soldier",                  level: 70 },
    193: { name: "Aegis",                          level: 62 },
    194: { name: "Rogue Centurion",                level: 66 },
    195: { name: "Necron",                         level: 78 },
    196: { name: "Schriker",                       level: 88 },
    197: { name: "Illusion of Kundun",             level: 100 },
    200: { name: "Soccer Ball",                    level: 12 },
    226: { name: "Trainer",                        level: 2 },
    229: { name: "Marlon",                         level: 2 },
    230: { name: "Wandering Merchant Alex",        level: 2 },
    231: { name: "Thompson Kenel",                 level: 2 },
    232: { name: "Archangel",                      level: 2 },
    233: { name: "Messenger of Archangel",         level: 2 },
    234: { name: "Pet Trainer",                    level: 2 },
    235: { name: "Sebina the Priest",              level: 2 },
    236: { name: "Golden Archer",                  level: 2 },
    237: { name: "Charon",                         level: 2 },
    238: { name: "Chaos Goblin",                   level: 2 },
    239: { name: "Arena Guard",                    level: 2 },
    240: { name: "Safety Guardian",                level: 2 },
    241: { name: "Royal Guard Captain Lorence",    level: 2 },
    242: { name: "Elf Lala",                       level: 2 },
    243: { name: "Eo the Craftsman",               level: 2 },
    244: { name: "Caren the Barmaid",              level: 2 },
    245: { name: "Wizard Izabel",                  level: 2 },
    246: { name: "Weapons Merchant Zienna",        level: 20 },
    247: { name: "Guard",                          level: 90 },
    248: { name: "Wandering Merchant Martin",      level: 20 },
    249: { name: "Guard",                          level: 90 },
    250: { name: "Wandering Merchant",             level: 20 },
    251: { name: "Hanzo the Blacksmith",           level: 20 },
    253: { name: "Potion Girl Amy",                level: 2 },
    254: { name: "Pasi the Mage",                  level: 2 },
    255: { name: "Lumen the Barmaid",              level: 2 },
    256: { name: "Lahap",                          level: 2 },
    257: { name: "Shadow Phantom Soldier",         level: 2 },
    258: { name: "Luke the Helper",                level: 90 },
    259: { name: "Oracle Layla",                   level: 2 },
    260: { name: "Death Angel",                    level: 88 },
    261: { name: "Death Centurion",                level: 98 },
    262: { name: "Blood Soldier",                  level: 85 },
    263: { name: "Aegis",                          level: 79 },
    264: { name: "Rogue Centurion",                level: 82 },
    265: { name: "Necron",                         level: 93 },
    266: { name: "Schriker",                       level: 105 },
    267: { name: "Illusion of Kundun",             level: 117 },
    268: { name: "Death Angel",                    level: 105 },
    269: { name: "Death Centurion",                level: 114 },
    270: { name: "Blood Soldier",                  level: 101 },
    271: { name: "Aegis",                          level: 95 },
    272: { name: "Rogue Centurion",                level: 98 },
    273: { name: "Necron",                         level: 109 },
    274: { name: "Schriker",                       level: 119 },
    275: { name: "Kundun",                         level: 147 },
    277: { name: "Castle Gate",                    level: 2 },
    278: { name: "Life Stone",                     level: 2 },
    283: { name: "Guardian Statue",                level: 2 },
    285: { name: "Guardian",                       level: 2 },
    286: { name: "Archer",                         level: 100 },
    287: { name: "Spearman",                       level: 100 },
    288: { name: "Canon Tower",                    level: 200 },
    290: { name: "Lizard Warrior",                 level: 78 },
    291: { name: "Fire Golem",                     level: 102 },
    292: { name: "Queen Bee",                      level: 92 },
    293: { name: "Poison Golem",                   level: 84 },
    294: { name: "Ax Warrior",                     level: 75 },
    295: { name: "Erohim",                         level: 128 },
    300: { name: "Hero Mutant",                    level: 82 },
    301: { name: "Omega Wing",                     level: 102 },
    302: { name: "Axl Hero",                       level: 85 },
    303: { name: "Gigas Golem",                    level: 94 },
    304: { name: "Witch Queen",                    level: 94 },
    305: { name: "Blue Golem",                     level: 84 },
    306: { name: "Death Rider",                    level: 78 },
    307: { name: "Forest Orc",                     level: 74 },
    308: { name: "Death Tree",                     level: 72 },
    309: { name: "Hell Maine",                     level: 98 },
    310: { name: "Hammer Scout",                   level: 97 },
    311: { name: "Lance Scout",                    level: 97 },
    312: { name: "Bow Scout",                      level: 97 },
    313: { name: "Werewolf",                       level: 118 },
    314: { name: "Scout (Hero)",                   level: 123 },
    315: { name: "Werewolf (Hero)",                level: 127 },
    316: { name: "Balram",                         level: 132 },
    317: { name: "Soram",                          level: 134 },
    331: { name: "Aegis",                          level: 111 },
    332: { name: "Rogue Centurion",                level: 114 },
    333: { name: "Blood Soldier",                  level: 117 },
    334: { name: "Death Angel",                    level: 121 },
    335: { name: "Necron",                         level: 125 },
    336: { name: "Death Centurion",                level: 130 },
    337: { name: "Schriker",                       level: 135 },
    338: { name: "Illusion of Kundun",             level: 140 },
    340: { name: "Dark Elf",                       level: 135 },
    341: { name: "Soram",                          level: 134 },
    344: { name: "Balram",                         level: 134 },
    345: { name: "Death Spirit",                   level: 134 },
    348: { name: "Tanker",                         level: 133 },
    349: { name: "Balgass",                        level: 135 },
    350: { name: "Berserker",                      level: 100 },
    351: { name: "Splinter Wolf",                  level: 80 },
    352: { name: "Iron Rider",                     level: 82 },
    353: { name: "Satyros",                        level: 85 },
    354: { name: "Blade Hunter",                   level: 88 },
    355: { name: "Kentauros",                      level: 93 },
    356: { name: "Gigantis",                       level: 98 },
    357: { name: "Genocider",                      level: 105 },
    358: { name: "Persona",                        level: 118 },
    359: { name: "Twin Tale",                      level: 117 },
    360: { name: "Dreadfear",                      level: 119 },
    361: { name: "Nightmare",                      level: 135 },
    362: { name: "Maya Hand L",                    level: 135 },
    363: { name: "Maya Hand R",                    level: 135 },
    364: { name: "Maya",                           level: 111 },
    365: { name: "Pouch of Blessing",              level: 100 },
    367: { name: "Gateway Machine",                level: 20 },
    368: { name: "Elpis",                          level: 20 },
    369: { name: "Osbourne",                       level: 20 },
    370: { name: "Jerridon",                       level: 20 },
    371: { name: "Leo the Helper",                 level: 90 },
    372: { name: "Elite Skull Soldier",            level: 10 },
    373: { name: "Jack Olantern",                  level: 10 },
    374: { name: "Santa",                          level: 10 },
    375: { name: "Chaos Card Master",              level: 10 },
    376: { name: "Pamela the Supplier",            level: 20 },
    377: { name: "Angela the Supplier",            level: 20 },
    378: { name: "GameMaster",                     level: 2 },
    379: { name: "Natasha the Firecracker Merchant", level: 2 },
    406: { name: "Apostle Devin",                  level: 2 },
    407: { name: "Werewolf Quarel",                level: 2 },
    408: { name: "Gatekeeper",                     level: 2 },
    409: { name: "Balram",                         level: 117 },
    410: { name: "Death Spirit",                   level: 118 },
    411: { name: "Soram",                          level: 119 },
    412: { name: "Dark Elf",                       level: 128 },
    418: { name: "Strange Rabbit",                 level: 4 },
    419: { name: "Hideous Rabbit",                 level: 19 },
    420: { name: "Werewolf",                       level: 24 },
    421: { name: "Polluted Butterfly",             level: 13 },
    422: { name: "Cursed Lich",                    level: 30 },
    423: { name: "Totem Golem",                    level: 36 },
    424: { name: "Grizzly",                        level: 43 },
    425: { name: "Captain Grizzly",                level: 48 },
    434: { name: "Gigantis",                       level: 105 },
    435: { name: "Berserker",                      level: 106 },
    436: { name: "Balram",                         level: 117 },
    437: { name: "Soram",                          level: 119 },
    438: { name: "Persona",                        level: 121 },
    439: { name: "Dreadfear",                      level: 123 },
    440: { name: "Dark Elf",                       level: 135 },
    441: { name: "Sapi-Unus",                      level: 95 },
    442: { name: "Sapi-Duo",                       level: 96 },
    443: { name: "Sapi-Tres",                      level: 102 },
    444: { name: "Shadow Pawn",                    level: 98 },
    445: { name: "Shadow Knight",                  level: 100 },
    446: { name: "Shadow Look",                    level: 104 },
    447: { name: "Thunder Napin",                  level: 97 },
    448: { name: "Ghost Napin",                    level: 106 },
    449: { name: "Blaze Napin",                    level: 107 },
    452: { name: "Seed Master",                    level: 2 },
    453: { name: "Seed Researcher",                level: 2 },
    454: { name: "Ice Walker",                     level: 102 },
    455: { name: "Giant Mammoth",                  level: 112 },
    456: { name: "Ice Giant",                      level: 122 },
    457: { name: "Coolutin",                       level: 132 },
    458: { name: "Iron Knight",                    level: 142 },
    459: { name: "Selupan",                        level: 145 },
    465: { name: "Santa Claus",                    level: 149 },
    466: { name: "Cursed Goblin",                  level: 70 },
    478: { name: "Delgado",                        level: 2 },
    479: { name: "Doorkeeper Titus",               level: 10 },
    480: { name: "Zombie Fighter",                 level: 90 },
    481: { name: "Zombie Fighter",                 level: 120 },
    482: { name: "Resurrected Gladiator",          level: 93 },
    483: { name: "Resurrected Gladiator",          level: 121 },
    484: { name: "Ash Slaughterer",                level: 100 },
    485: { name: "Ash Slaughterer",                level: 122 },
    486: { name: "Blood Assassin",                 level: 107 },
    487: { name: "Cruel Blood Assassin",           level: 109 },
    488: { name: "Cruel Blood Assassin",           level: 123 },
    489: { name: "Burning Lava Giant",             level: 111 },
    490: { name: "Ruthless Lava Giant",            level: 113 },
    491: { name: "Ruthless Lava Giant",            level: 124 },
    492: { name: "Moss",                           level: 2 },
    493: { name: "Golden Dark Knight",             level: 60 },
    494: { name: "Golden Devil",                   level: 72 },
    495: { name: "Golden Stone Golem",             level: 84 },
    496: { name: "Golden Crust",                   level: 92 },
    497: { name: "Golden Satyros",                 level: 108 },
    498: { name: "Golden Twin Tail",               level: 130 },
    499: { name: "Golden Iron Knight",             level: 145 },
    500: { name: "Golden Napin",                   level: 112 },
    501: { name: "Great Golden Dragon",            level: 142 },
    502: { name: "Golden Rabbit",                  level: 40 },
    504: { name: "Gaion Kharein",                  level: 1 },
    522: { name: "Jerint the Assistant",           level: 2 },
    540: { name: "Lugard",                         level: 2 },
    543: { name: "Gens Duprian Steward",           level: 2 },
    544: { name: "Gens Vanert Steward",            level: 2 },
    545: { name: "Christine the General Goods Merchant", level: 2 },
    546: { name: "Jeweler Raul",                   level: 2 },
    547: { name: "Market Union Member Julia",      level: 2 },
    549: { name: "Bloody Orc",                     level: 114 },
    550: { name: "Bloody Death Rider",             level: 115 },
    551: { name: "Bloody Golem",                   level: 117 },
    552: { name: "Bloody Witch Queen",             level: 120 },
    553: { name: "Berserker Warrior",              level: 123 },
    554: { name: "Kentauros Warrior",              level: 126 },
    555: { name: "Gigantis Warrior",               level: 128 },
    556: { name: "Genocider Warrior",              level: 129 },
    557: { name: "Sapi Queen",                     level: 131 },
    558: { name: "Ice Napin",                      level: 135 },
    559: { name: "Shadow Master",                  level: 137 },
    560: { name: "Sapi Queen",                     level: 141 },
    561: { name: "Medusa",                         level: 175 },
    562: { name: "Dark Mammoth",                   level: 140 },
    563: { name: "Dark Giant",                     level: 143 },
    564: { name: "Dark Coolutin",                  level: 145 },
    565: { name: "Dark Iron Knight",               level: 148 },
    566: { name: "Mercenary Guild Manager Tercia", level: 2 },
    567: { name: "Priestess Veina",                level: 2 },
    568: { name: "Wandering Merchant Zyro",        level: 2 },
    569: { name: "Venomous Chain Scorpion",        level: 99 },
    570: { name: "Bone Scorpion",                  level: 103 },
    571: { name: "Orcus",                          level: 105 },
    572: { name: "Gollock",                        level: 108 },
    573: { name: "Crypta",                         level: 111 },
    574: { name: "Crypos",                         level: 114 },
    575: { name: "Condra",                         level: 117 },
    576: { name: "Narcondra",                      level: 120 },
    577: { name: "Leina the General Goods Merchant", level: 2 },
    578: { name: "Weapons Merchant Bolo",          level: 2 },
    579: { name: "David",                          level: 2 },
};

// Build sorted array for search
const MONSTER_LIST = Object.entries(MONSTERS)
    .map(([id, m]) => ({ id: parseInt(id), ...m }))
    .sort((a, b) => a.id - b.id);

// ─────────────────────────────────────────
// MAPS DATABASE (from MonsterSetBase files)
// ─────────────────────────────────────────
const MAPS = {
    0:  "Lorencia",
    1:  "Dungeon",
    2:  "Devias",
    3:  "Noria",
    4:  "Lost Tower",
    6:  "Stadium",
    7:  "Atlans",
    8:  "Tarkan",
    10: "Icarus",
    30: "Castle Siege",
    31: "Land of Trials",
    33: "Aida",
    34: "Crywolf",
    37: "Kanturu 1",
    38: "Kanturu 2",
    39: "Kanturu 3",
    40: "Silent",
    41: "Barracks",
    42: "Refuge",
    51: "Elbeland",
    56: "Swamp of Calmness",
    57: "Raklion 1",
    58: "Raklion 2",
    62: "Santa Town",
    63: "Vulcanus",
    64: "Duel Arena",
    79: "Loren Market",
    80: "Karutan 1",
    81: "Karutan 2",
    82: "Arkania",
};

// ─────────────────────────────────────────
// APPLICATION STATE
// ─────────────────────────────────────────
const state = {
    spawns: [],
    selectedIds: new Set(),
    editingId: null,
    currentFile: null,
    fileHandle: null,  // File System Access API handle
    modified: false,
    sortField: null,
    sortDir: 'asc',
    nextId: 1,
};

// ─────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────
function pad(num, len = 3) {
    return String(num).padStart(len, '0');
}

function getMonsterName(id) {
    const m = MONSTERS[id];
    return m ? m.name : `Unknown (${id})`;
}

function getMonsterLevel(id) {
    const m = MONSTERS[id];
    return m ? m.level : '?';
}

function getMapName(id) {
    return MAPS[id] || `Map ${id}`;
}

function generateId() {
    return state.nextId++;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ─────────────────────────────────────────
// PARSER — MonsterSetBase format
// ─────────────────────────────────────────
function parseMonsterSetBase(text, detectedMapId = null) {
    const lines = text.split(/\r?\n/);
    const spawns = [];
    let currentSection = -1;

    for (let i = 0; i < lines.length; i++) {
        const raw = lines[i];
        const trimmed = raw.trim();

        // Skip empty lines and comments
        if (!trimmed || trimmed.startsWith('//') || trimmed.toLowerCase() === 'end') continue;

        // Section marker: a standalone number (0, 1, or 2)
        if (/^[012]$/.test(trimmed)) {
            currentSection = parseInt(trimmed);
            continue;
        }

        // Skip non-data lines
        if (currentSection < 0) continue;

        // Extract comment
        let comment = '';
        let dataLine = trimmed;
        const commentIdx = trimmed.indexOf('//');
        if (commentIdx >= 0) {
            comment = trimmed.substring(commentIdx + 2).trim();
            dataLine = trimmed.substring(0, commentIdx).trim();
        }

        // Split data
        const parts = dataLine.split(/\s+/).filter(p => p.length > 0);
        if (parts.length < 6) continue;

        const mobId = parseInt(parts[0]);
        const mapId = parseInt(parts[1]);
        const range = parts[2];

        if (currentSection === 1 && parts.length >= 9) {
            // Section 1: MobID MapID Range BeginX BeginY EndX EndY Direction Quantity
            spawns.push({
                _id: generateId(),
                section: 1,
                mobId,
                mapId: detectedMapId !== null ? detectedMapId : mapId,
                range,
                beginX: parseInt(parts[3]),
                beginY: parseInt(parts[4]),
                endX: parseInt(parts[5]),
                endY: parseInt(parts[6]),
                direction: parts[7],
                quantity: parseInt(parts[8]),
                comment: comment || getMonsterName(mobId),
            });
        } else if (currentSection === 0 || currentSection === 2) {
            // Section 0 & 2: MobID MapID Range PosX PosY Direction
            spawns.push({
                _id: generateId(),
                section: currentSection,
                mobId,
                mapId: detectedMapId !== null ? detectedMapId : mapId,
                range,
                posX: parseInt(parts[3]),
                posY: parseInt(parts[4]),
                direction: parts[5],
                quantity: 1,
                comment: comment || getMonsterName(mobId),
            });
        }
    }

    return spawns;
}

// ─────────────────────────────────────────
// GENERATOR — MonsterSetBase format
// ─────────────────────────────────────────
function generateMonsterSetBase(spawns) {
    const section0 = spawns.filter(s => s.section === 0);
    const section1 = spawns.filter(s => s.section === 1);
    const section2 = spawns.filter(s => s.section === 2);

    let output = '';

    // Header
    output += '//=========================================================================================================================================\n';
    output += '// NPCS\n';
    output += '//=========================================================================================================================================\n';
    output += '0\n';
    output += '//Monster      MapNumber      Range      PositionX      PositionY      Direction      Comment\n';

    for (const s of section0) {
        const mobStr = pad(s.mobId);
        const mapStr = pad(s.mapId, 2);
        const rangeStr = String(s.range).padStart(2, '0');
        const posX = pad(s.posX);
        const posY = pad(s.posY);
        const dir = String(s.direction).padStart(2, '0');
        const cmt = s.comment || getMonsterName(s.mobId);
        output += `${mobStr}            ${mapStr}             ${rangeStr}         ${posX}            ${posY}         ${dir}             //${cmt}\n`;
    }

    output += 'end\n\n';

    // Section 1
    output += '\n//=========================================================================================================================================\n';
    output += '// SPOTS\n';
    output += '//=========================================================================================================================================\n';
    output += '1\n';
    output += '//Monster      MapNumber      Range      BeginPosX      BeginPosY      EndPosX      EndPosY      Direction      Quantity      Comment\n';

    for (const s of section1) {
        const mobStr = pad(s.mobId);
        const mapStr = pad(s.mapId, 2);
        const rangeStr = String(s.range).padStart(2, '0');
        const bx = pad(s.beginX);
        const by = pad(s.beginY);
        const ex = pad(s.endX);
        const ey = pad(s.endY);
        const dir = String(s.direction).padStart(2, s.direction === '-1' ? 0 : '0');
        const qty = String(s.quantity).padStart(2, '0');
        const cmt = s.comment || getMonsterName(s.mobId);
        output += `${mobStr}            ${mapStr}             ${rangeStr}         ${bx}            ${by}          ${ex}       ${ey}       ${dir}             ${qty}            //${cmt}\n`;
    }

    output += 'end\n\n';

    // Section 2
    output += '//=========================================================================================================================================\n';
    output += '// MONSTERS\n';
    output += '//=========================================================================================================================================\n';
    output += '2\n';
    output += '//Monster      MapNumber      Range      PositionX      PositionY      Direction      Comment\n';

    for (const s of section2) {
        const mobStr = pad(s.mobId);
        const mapStr = pad(s.mapId, 2);
        const rangeStr = String(s.range).padStart(2, '0');
        const posX = pad(s.posX);
        const posY = pad(s.posY);
        const dir = String(s.direction).padStart(2, s.direction === '-1' ? 0 : '0');
        const cmt = s.comment || getMonsterName(s.mobId);
        output += `${mobStr}            ${mapStr}             ${rangeStr}         ${posX}            ${posY}            ${dir}             //${cmt}\n`;
    }

    output += 'end\n';

    return output;
}

// ─────────────────────────────────────────
// UI RENDERING
// ─────────────────────────────────────────
function updateStats() {
    const s0 = state.spawns.filter(s => s.section === 0).length;
    const s1 = state.spawns.filter(s => s.section === 1).length;
    const s2 = state.spawns.filter(s => s.section === 2).length;
    document.getElementById('statNpcs').textContent = s0;
    document.getElementById('statSpots').textContent = s1;
    document.getElementById('statMonsters').textContent = s2;
    document.getElementById('statTotal').textContent = state.spawns.length;
}

function updateFileInfo() {
    const nameEl = document.getElementById('currentFileName');
    const badgeEl = document.getElementById('fileBadge');
    const clearBtn = document.getElementById('btnClearFile');
    nameEl.textContent = state.currentFile || 'Sin archivo cargado';
    clearBtn.style.display = state.currentFile ? 'flex' : 'none';
    if (state.modified) {
        badgeEl.style.display = 'inline';
        badgeEl.textContent = 'Modificado';
        badgeEl.style.background = 'var(--orange-dim)';
        badgeEl.style.color = 'var(--orange)';
    } else {
        badgeEl.style.display = state.currentFile ? 'inline' : 'none';
        badgeEl.textContent = 'Guardado';
        badgeEl.style.background = 'var(--green-dim)';
        badgeEl.style.color = 'var(--green)';
    }

    // Show linked icon if connected to original file
    if (state.fileHandle) {
        nameEl.textContent = '🔗 ' + (state.currentFile || 'Sin archivo');
    }

    // Update save button label
    const exportLabel = document.getElementById('exportLabel');
    if (exportLabel) {
        exportLabel.textContent = state.fileHandle ? 'Guardar' : 'Descargar';
    }
}

function clearAll() {
    if (state.spawns.length > 0 && !confirm('¿Limpiar todo y empezar de cero?')) return;
    state.spawns = [];
    state.selectedIds.clear();
    state.currentFile = null;
    state.fileHandle = null;
    state.modified = false;
    state.editingId = null;
    localStorage.removeItem('mueditor_spawns');
    localStorage.removeItem('mueditor_file');
    populateMapFilter();
    renderTable();
    showToast('🆕 Editor limpiado — listo para empezar de cero', 'info');
}

function getFilteredSpawns() {
    let filtered = [...state.spawns];
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const sectionFilter = document.getElementById('filterSection').value;
    const mapFilter = document.getElementById('filterMap').value;

    if (sectionFilter !== 'all') {
        filtered = filtered.filter(s => s.section === parseInt(sectionFilter));
    }

    if (mapFilter !== 'all') {
        filtered = filtered.filter(s => s.mapId === parseInt(mapFilter));
    }

    if (search) {
        filtered = filtered.filter(s => {
            const name = getMonsterName(s.mobId).toLowerCase();
            const idStr = String(s.mobId);
            const comment = (s.comment || '').toLowerCase();
            const posStr = s.section === 1 
                ? `${s.beginX},${s.beginY} ${s.endX},${s.endY}` 
                : `${s.posX},${s.posY}`;
            return name.includes(search) || idStr.includes(search) || comment.includes(search) || posStr.includes(search);
        });
    }

    // Sort
    if (state.sortField) {
        filtered.sort((a, b) => {
            let va, vb;
            switch (state.sortField) {
                case 'section': va = a.section; vb = b.section; break;
                case 'mobId': va = a.mobId; vb = b.mobId; break;
                case 'name': va = getMonsterName(a.mobId); vb = getMonsterName(b.mobId); break;
                case 'mapId': va = a.mapId; vb = b.mapId; break;
                case 'quantity': va = a.quantity || 1; vb = b.quantity || 1; break;
                default: return 0;
            }
            if (typeof va === 'string') {
                const cmp = va.localeCompare(vb);
                return state.sortDir === 'asc' ? cmp : -cmp;
            }
            return state.sortDir === 'asc' ? va - vb : vb - va;
        });
    }

    return filtered;
}

function renderTable() {
    const tbody = document.getElementById('spawnTableBody');
    const filtered = getFilteredSpawns();

    // Show/hide welcome vs table
    // Show table if spawns exist OR if a file is loaded (even if empty)
    const showTable = state.spawns.length > 0 || state.currentFile !== null;
    document.getElementById('welcomeScreen').style.display = showTable ? 'none' : 'flex';
    document.getElementById('contentWrapper').style.display = showTable ? 'flex' : 'none';

    // Update count
    document.getElementById('tableCount').textContent = `${filtered.length} de ${state.spawns.length} spawns`;

    // Build rows
    tbody.innerHTML = '';
    for (const spawn of filtered) {
        const tr = document.createElement('tr');
        tr.dataset.id = spawn._id;
        if (state.selectedIds.has(spawn._id)) tr.classList.add('selected');

        // Position display
        let posHtml;
        if (spawn.section === 1) {
            posHtml = `<span class="pos-cell">${spawn.beginX},${spawn.beginY}<span class="pos-arrow">→</span>${spawn.endX},${spawn.endY}</span>`;
        } else {
            posHtml = `<span class="pos-cell">${spawn.posX || 0}, ${spawn.posY || 0}</span>`;
        }

        // Quantity
        const qtyHtml = spawn.section === 1
            ? `<span class="qty-cell" style="color:var(--orange)">${spawn.quantity}</span>`
            : `<span class="qty-cell" style="color:var(--text-muted)">1</span>`;

        tr.innerHTML = `
            <td class="col-check"><input type="checkbox" class="row-check" ${state.selectedIds.has(spawn._id) ? 'checked' : ''}></td>
            <td class="col-section"><span class="section-badge section-badge-${spawn.section}">${spawn.section}</span></td>
            <td class="col-id"><span class="mob-id-cell">${pad(spawn.mobId)}</span></td>
            <td class="col-name"><span class="mob-name-cell" title="${getMonsterName(spawn.mobId)}">${getMonsterName(spawn.mobId)}</span></td>
            <td class="col-map"><span class="map-cell"><span class="map-cell-id">${pad(spawn.mapId, 2)}</span> ${getMapName(spawn.mapId)}</span></td>
            <td class="col-range"><span class="pos-cell">${spawn.range}</span></td>
            <td class="col-pos">${posHtml}</td>
            <td class="col-dir"><span class="pos-cell">${spawn.direction}</span></td>
            <td class="col-qty">${qtyHtml}</td>
            <td class="col-actions">
                <div class="row-actions">
                    <button class="row-btn btn-edit" title="Editar" data-action="edit">✏️</button>
                    <button class="row-btn btn-dup" title="Duplicar" data-action="duplicate">📋</button>
                    <button class="row-btn btn-del" title="Eliminar" data-action="delete">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    }

    updateStats();
    updateFileInfo();
    updatePreview();
    updateSelectionButtons();
    if (typeof MapViewer !== 'undefined') MapViewer.drawSpawns();
}

function updatePreview() {
    const el = document.getElementById('previewContent');
    if (state.spawns.length === 0) {
        el.textContent = '// Sin datos';
        return;
    }
    el.textContent = generateMonsterSetBase(state.spawns);
}

function updateSelectionButtons() {
    const hasSelection = state.selectedIds.size > 0;
    document.getElementById('btnDeleteSelected').disabled = !hasSelection;
    document.getElementById('btnDuplicate').disabled = !hasSelection;
}

function populateMapFilter() {
    const select = document.getElementById('filterMap');
    select.innerHTML = '<option value="all">Todos los mapas</option>';
    const mapIds = [...new Set(state.spawns.map(s => s.mapId))].sort((a, b) => a - b);
    for (const id of mapIds) {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = `${pad(id, 2)} — ${getMapName(id)}`;
        select.appendChild(opt);
    }
}

function populateMapSelect() {
    const select = document.getElementById('inputMapId');
    select.innerHTML = '';
    for (const [id, name] of Object.entries(MAPS).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = `${pad(parseInt(id), 3)} — ${name}`;
        select.appendChild(opt);
    }
}

function markModified() {
    state.modified = true;
    const badgeEl = document.getElementById('fileBadge');
    badgeEl.style.display = 'inline';
    badgeEl.textContent = 'Modificado';
    badgeEl.style.background = 'var(--orange-dim)';
    badgeEl.style.color = 'var(--orange)';
    saveToLocal();
}

function saveToLocal() {
    try {
        localStorage.setItem('mueditor_spawns', JSON.stringify(state.spawns));
        localStorage.setItem('mueditor_file', state.currentFile || '');
        localStorage.setItem('mueditor_nextId', state.nextId);
    } catch (e) { /* silently fail */ }
}

function loadFromLocal() {
    try {
        const data = localStorage.getItem('mueditor_spawns');
        if (data) {
            state.spawns = JSON.parse(data);
            state.currentFile = localStorage.getItem('mueditor_file') || null;
            state.nextId = parseInt(localStorage.getItem('mueditor_nextId') || '1');
            if (state.nextId <= 0) state.nextId = 1;
            // Ensure all spawns have valid _id
            const maxId = state.spawns.reduce((max, s) => Math.max(max, s._id || 0), 0);
            if (state.nextId <= maxId) state.nextId = maxId + 1;
            return true;
        }
    } catch (e) { /* silently fail */ }
    return false;
}

// ─────────────────────────────────────────
// MODAL: ADD / EDIT SPAWN
// ─────────────────────────────────────────
let currentMobId = null;
let searchHighlight = -1;

function openSpawnModal(spawn = null) {
    const modal = document.getElementById('modalSpawn');
    const title = document.getElementById('modalTitle');
    
    state.editingId = spawn ? spawn._id : null;
    title.textContent = spawn ? '✏️ Editar Spawn' : '➕ Agregar Spawn';

    // Reset
    currentMobId = null;
    document.getElementById('mobSearch').value = '';
    document.getElementById('mobSearch').style.display = 'block';
    document.getElementById('mobSearchResults').style.display = 'none';
    document.getElementById('selectedMob').style.display = 'none';

    if (spawn) {
        // Fill form with existing data
        setActiveSection(spawn.section);
        selectMob(spawn.mobId);
        document.getElementById('inputMapId').value = spawn.mapId;
        document.getElementById('inputRange').value = spawn.range;
        document.getElementById('inputDirection').value = spawn.direction;

        if (spawn.section === 1) {
            document.getElementById('inputBeginX').value = spawn.beginX;
            document.getElementById('inputBeginY').value = spawn.beginY;
            document.getElementById('inputEndX').value = spawn.endX;
            document.getElementById('inputEndY').value = spawn.endY;
            document.getElementById('inputQuantity').value = spawn.quantity;
        } else {
            document.getElementById('inputPosX').value = spawn.posX || 0;
            document.getElementById('inputPosY').value = spawn.posY || 0;
        }

        document.getElementById('inputComment').value = spawn.comment || '';
    } else {
        // Default values for new spawn
        setActiveSection(1);
        document.getElementById('inputRange').value = '30';
        document.getElementById('inputDirection').value = '-1';
        document.getElementById('inputPosX').value = '128';
        document.getElementById('inputPosY').value = '128';
        document.getElementById('inputBeginX').value = '100';
        document.getElementById('inputBeginY').value = '100';
        document.getElementById('inputEndX').value = '200';
        document.getElementById('inputEndY').value = '200';
        document.getElementById('inputQuantity').value = '10';
        document.getElementById('inputComment').value = '';

        // Default map from spawns
        if (state.spawns.length > 0) {
            document.getElementById('inputMapId').value = state.spawns[0].mapId;
        }
    }

    modal.style.display = 'flex';
    setTimeout(() => document.getElementById('mobSearch').focus(), 100);
}

function closeSpawnModal() {
    document.getElementById('modalSpawn').style.display = 'none';
    state.editingId = null;
    currentMobId = null;
}

function getActiveSection() {
    const btn = document.querySelector('.section-btn.active');
    return parseInt(btn?.dataset.section || '1');
}

function setActiveSection(section) {
    document.querySelectorAll('.section-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.section-btn[data-section="${section}"]`)?.classList.add('active');

    const isSpot = section === 1;
    document.getElementById('positionFields').style.display = isSpot ? 'none' : 'block';
    document.getElementById('areaFields').style.display = isSpot ? 'block' : 'none';
    document.getElementById('quantityGroup').style.display = isSpot ? 'block' : 'none';

    // Adjust default direction
    const dirSelect = document.getElementById('inputDirection');
    if (section === 0 && dirSelect.value === '-1') dirSelect.value = '03';
    if (section === 1 && dirSelect.value !== '-1') dirSelect.value = '-1';
    if (section === 2 && dirSelect.value !== '-1') dirSelect.value = '-1';

    // Adjust default range
    const rangeInput = document.getElementById('inputRange');
    if (section === 0) rangeInput.value = '00';
    if (section === 1) rangeInput.value = '30';
    if (section === 2) rangeInput.value = '30';
}

function selectMob(mobId) {
    currentMobId = mobId;
    document.getElementById('mobSearch').value = '';
    document.getElementById('mobSearch').style.display = 'none';
    document.getElementById('mobSearchResults').style.display = 'none';
    document.getElementById('selectedMob').style.display = 'flex';
    document.getElementById('selectedMobId').textContent = pad(mobId);
    document.getElementById('selectedMobName').textContent = getMonsterName(mobId);
    document.getElementById('selectedMobLevel').textContent = `Lv.${getMonsterLevel(mobId)}`;
    
    // Auto-fill comment
    const commentInput = document.getElementById('inputComment');
    if (!commentInput.value || commentInput.value.startsWith('//')) {
        commentInput.value = getMonsterName(mobId);
    }
}

function clearMobSelection() {
    currentMobId = null;
    document.getElementById('mobSearch').value = '';
    document.getElementById('mobSearch').style.display = 'block';
    document.getElementById('selectedMob').style.display = 'none';
    document.getElementById('mobSearch').focus();
}

function handleMobSearch(query) {
    const resultsEl = document.getElementById('mobSearchResults');

    let matches;
    if (!query || query.length < 1) {
        // Show ALL monsters when empty — so user can browse the full list
        matches = MONSTER_LIST;
    } else {
        const q = query.toLowerCase();
        matches = MONSTER_LIST.filter(m => {
            return m.name.toLowerCase().includes(q) || String(m.id).includes(q);
        });
    }

    if (matches.length === 0) {
        resultsEl.innerHTML = '<div class="mob-result" style="color:var(--text-muted);cursor:default;justify-content:center">No se encontraron resultados</div>';
        resultsEl.style.display = 'block';
        return;
    }

    searchHighlight = -1;
    resultsEl.innerHTML = '';

    // Show count header
    const header = document.createElement('div');
    header.className = 'mob-results-header';
    header.textContent = query ? `${matches.length} resultados` : `${MONSTER_LIST.length} monstruos — escribe para filtrar`;
    resultsEl.appendChild(header);

    for (const m of matches) {
        const div = document.createElement('div');
        div.className = 'mob-result';
        div.dataset.id = m.id;
        div.innerHTML = `
            <span class="mob-result-id">${pad(m.id)}</span>
            <span class="mob-result-name">${m.name}</span>
            <span class="mob-result-level">Lv.${m.level}</span>
        `;
        div.addEventListener('click', () => selectMob(m.id));
        resultsEl.appendChild(div);
    }

    resultsEl.style.display = 'block';
}

function showFullMobList() {
    if (currentMobId !== null) return; // Already selected
    handleMobSearch('');
}

function closeMobDropdown(e) {
    const container = document.getElementById('mobSearchResults');
    const searchInput = document.getElementById('mobSearch');
    if (container && !container.contains(e?.target) && e?.target !== searchInput) {
        container.style.display = 'none';
    }
}

function saveSpawn() {
    if (currentMobId === null) {
        showToast('Selecciona un monstruo o NPC', 'warning');
        return;
    }

    const section = getActiveSection();
    const mapId = parseInt(document.getElementById('inputMapId').value);
    const range = document.getElementById('inputRange').value || '00';
    const direction = document.getElementById('inputDirection').value;
    const comment = document.getElementById('inputComment').value || getMonsterName(currentMobId);

    const spawn = {
        _id: state.editingId || generateId(),
        section,
        mobId: currentMobId,
        mapId,
        range,
        direction,
        comment,
    };

    if (section === 1) {
        spawn.beginX = parseInt(document.getElementById('inputBeginX').value) || 0;
        spawn.beginY = parseInt(document.getElementById('inputBeginY').value) || 0;
        spawn.endX = parseInt(document.getElementById('inputEndX').value) || 0;
        spawn.endY = parseInt(document.getElementById('inputEndY').value) || 0;
        spawn.quantity = parseInt(document.getElementById('inputQuantity').value) || 1;
    } else {
        spawn.posX = parseInt(document.getElementById('inputPosX').value) || 0;
        spawn.posY = parseInt(document.getElementById('inputPosY').value) || 0;
        spawn.quantity = 1;
    }

    if (state.editingId) {
        const idx = state.spawns.findIndex(s => s._id === state.editingId);
        if (idx >= 0) state.spawns[idx] = spawn;
        showToast('Spawn actualizado correctamente', 'success');
    } else {
        state.spawns.push(spawn);
        showToast(`${getMonsterName(currentMobId)} agregado a ${getMapName(mapId)}`, 'success');
    }

    markModified();
    populateMapFilter();
    renderTable();
    closeSpawnModal();
    if (typeof MapViewer !== 'undefined') MapViewer.render();
}

// ─────────────────────────────────────────
// IMPORT
// ─────────────────────────────────────────
function openImportModal() {
    document.getElementById('modalImport').style.display = 'flex';
    document.getElementById('pasteInput').value = '';
}

function closeImportModal() {
    document.getElementById('modalImport').style.display = 'none';
}

function detectMapIdFromFilename(filename) {
    const match = filename.match(/^(\d+)/);
    if (match) return parseInt(match[1]);
    return null;
}

function doImport(text, filename, fileHandle) {
    const detectMap = document.getElementById('importDetectMap').checked;
    const replace = document.getElementById('importReplace').checked;

    let mapId = null;
    if (detectMap && filename) {
        mapId = detectMapIdFromFilename(filename);
    }

    const newSpawns = parseMonsterSetBase(text, mapId);

    // Allow empty files (e.g. Stadium) — just set up the file with 0 spawns
    if (replace) {
        state.spawns = newSpawns;
    } else {
        state.spawns = [...state.spawns, ...newSpawns];
    }

    state.currentFile = filename || 'Datos importados';
    state.fileHandle = fileHandle || null;
    state.modified = false;

    populateMapFilter();
    renderTable();
    closeImportModal();

    // Auto-select map for visualizer
    if (typeof MapViewer !== 'undefined' && mapId !== null) {
        MapViewer.render(mapId);
        document.getElementById('mapNameDisplay').textContent = `Mapa: ${getMapName(mapId)}`;
    }

    if (newSpawns.length === 0) {
        showToast(`📂 Archivo vacío: ${filename} — listo para agregar spawns`, 'info');
    } else {
        showToast(`✅ ${newSpawns.length} spawns importados desde ${filename || 'texto'}`, 'success');
    }

    if (fileHandle) {
        showToast('🔗 Conectado: los cambios se guardarán directamente en el archivo original', 'success');
    }
}

// Import using File System Access API (Chrome/Edge) for direct save
async function handleFileImportFSA() {
    try {
        const [handle] = await window.showOpenFilePicker({
            types: [{ description: 'MonsterSetBase', accept: { 'text/plain': ['.txt'] } }],
            multiple: false,
        });
        const file = await handle.getFile();
        const text = await file.text();
        doImport(text, file.name, handle);
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.warn('FSA not available, falling back to file input');
            handleFileImportLegacy();
        }
    }
}

// Fallback for Firefox and older browsers
function handleFileImportLegacy() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => doImport(ev.target.result, file.name, null);
        reader.readAsText(file);
    };
    input.click();
}

function handleFileImport(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        doImport(e.target.result, file.name, null);
    };
    reader.readAsText(file);
}

// ─────────────────────────────────────────
// EXPORT / SAVE
// ─────────────────────────────────────────
async function exportFile() {
    const content = generateMonsterSetBase(state.spawns);

    // Generate filename from map
    let filename = 'MonsterSetBase.txt';
    if (state.spawns.length > 0) {
        const mapId = state.spawns[0].mapId;
        const mapName = getMapName(mapId);
        filename = `${pad(mapId)} - ${mapName}.txt`;
    }

    // If we have a file handle, save directly
    if (state.fileHandle) {
        try {
            const writable = await state.fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            state.currentFile = state.fileHandle.name;
            state.modified = false;
            updateFileInfo();
            showToast(`💾 Guardado directo: ${state.fileHandle.name}`, 'success');
            return;
        } catch (err) {
            console.warn('Direct save failed, falling back to download', err);
        }
    }

    // Fallback: download file
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);

    state.currentFile = filename;
    state.modified = false;
    updateFileInfo();
    showToast(`💾 Archivo descargado: ${filename}`, 'success');
}

// ─────────────────────────────────────────
// ROW ACTIONS
// ─────────────────────────────────────────
function deleteSpawn(id) {
    state.spawns = state.spawns.filter(s => s._id !== id);
    state.selectedIds.delete(id);
    markModified();
    renderTable();
    showToast('Spawn eliminado', 'info');
}

function duplicateSpawn(id) {
    const original = state.spawns.find(s => s._id === id);
    if (!original) return;
    const copy = { ...original, _id: generateId() };
    const idx = state.spawns.findIndex(s => s._id === id);
    state.spawns.splice(idx + 1, 0, copy);
    markModified();
    renderTable();
    showToast(`📋 ${getMonsterName(copy.mobId)} duplicado`, 'success');
}

function deleteSelected() {
    const count = state.selectedIds.size;
    if (count === 0) return;
    if (!confirm(`¿Eliminar ${count} spawn(s) seleccionados?`)) return;
    state.spawns = state.spawns.filter(s => !state.selectedIds.has(s._id));
    state.selectedIds.clear();
    markModified();
    renderTable();
    showToast(`🗑️ ${count} spawn(s) eliminados`, 'info');
}

function duplicateSelected() {
    const copies = [];
    for (const id of state.selectedIds) {
        const original = state.spawns.find(s => s._id === id);
        if (original) {
            copies.push({ ...original, _id: generateId() });
        }
    }
    state.spawns.push(...copies);
    state.selectedIds.clear();
    markModified();
    renderTable();
    showToast(`📋 ${copies.length} spawn(s) duplicados`, 'success');
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
function initEvents() {
    // Toolbar
    document.getElementById('btnNewFile').addEventListener('click', clearAll);
    document.getElementById('btnClearFile').addEventListener('click', clearAll);
    document.getElementById('btnImport').addEventListener('click', openImportModal);
    document.getElementById('btnWelcomeImport').addEventListener('click', openImportModal);
    document.getElementById('btnExport').addEventListener('click', exportFile);
    document.getElementById('btnAddSpawn').addEventListener('click', () => openSpawnModal());
    document.getElementById('btnWelcomeNew').addEventListener('click', () => openSpawnModal());
    document.getElementById('btnDeleteSelected').addEventListener('click', deleteSelected);
    document.getElementById('btnDuplicate').addEventListener('click', duplicateSelected);

    // Help modal
    document.getElementById('btnHelp').addEventListener('click', () => {
        document.getElementById('modalHelp').style.display = 'flex';
    });
    document.getElementById('helpClose').addEventListener('click', () => {
        document.getElementById('modalHelp').style.display = 'none';
    });
    document.getElementById('btnHelpClose').addEventListener('click', () => {
        document.getElementById('modalHelp').style.display = 'none';
    });
    document.getElementById('modalHelp').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
    });

    // Search & Filters
    document.getElementById('searchInput').addEventListener('input', debounce(() => renderTable(), 200));
    document.getElementById('searchClear').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        renderTable();
    });
    document.getElementById('filterSection').addEventListener('change', renderTable);
    document.getElementById('filterMap').addEventListener('change', renderTable);

    // Sort
    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sort;
            if (state.sortField === field) {
                state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortField = field;
                state.sortDir = 'asc';
            }
            document.querySelectorAll('th.sortable').forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
            th.classList.add(state.sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
            renderTable();
        });
    });

    // Select All
    const selectAllHandler = (e) => {
        const checked = e.target.checked;
        const filtered = getFilteredSpawns();
        if (checked) {
            filtered.forEach(s => state.selectedIds.add(s._id));
        } else {
            state.selectedIds.clear();
        }
        document.getElementById('selectAll').checked = checked;
        document.getElementById('selectAllHead').checked = checked;
        renderTable();
    };
    document.getElementById('selectAll').addEventListener('change', selectAllHandler);
    document.getElementById('selectAllHead').addEventListener('change', selectAllHandler);

    // Table row events (delegated)
    document.getElementById('spawnTableBody').addEventListener('click', (e) => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        const id = parseInt(tr.dataset.id);

        // Checkbox
        if (e.target.classList.contains('row-check')) {
            if (e.target.checked) {
                state.selectedIds.add(id);
            } else {
                state.selectedIds.delete(id);
            }
            tr.classList.toggle('selected', e.target.checked);
            updateSelectionButtons();
            return;
        }

        // Action buttons
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (action === 'edit') {
            const spawn = state.spawns.find(s => s._id === id);
            if (spawn) openSpawnModal(spawn);
        } else if (action === 'duplicate') {
            duplicateSpawn(id);
        } else if (action === 'delete') {
            deleteSpawn(id);
        }
    });

    // Double-click to edit
    document.getElementById('spawnTableBody').addEventListener('dblclick', (e) => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        const id = parseInt(tr.dataset.id);
        const spawn = state.spawns.find(s => s._id === id);
        if (spawn) openSpawnModal(spawn);
    });

    // Spawn Modal
    document.getElementById('modalClose').addEventListener('click', closeSpawnModal);
    document.getElementById('btnCancelSpawn').addEventListener('click', closeSpawnModal);
    document.getElementById('btnSaveSpawn').addEventListener('click', saveSpawn);
    document.getElementById('clearMob').addEventListener('click', clearMobSelection);

    // Section selector
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveSection(parseInt(btn.dataset.section));
        });
    });

    // Monster search — show full list on focus/click
    document.getElementById('mobSearch').addEventListener('input', (e) => {
        handleMobSearch(e.target.value);
    });

    document.getElementById('mobSearch').addEventListener('focus', () => {
        showFullMobList();
    });

    document.getElementById('mobSearch').addEventListener('click', () => {
        showFullMobList();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        closeMobDropdown(e);
    });

    document.getElementById('mobSearch').addEventListener('keydown', (e) => {
        const results = document.querySelectorAll('.mob-result');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            searchHighlight = Math.min(searchHighlight + 1, results.length - 1);
            results.forEach((r, i) => r.classList.toggle('highlighted', i === searchHighlight));
            if (results[searchHighlight]) results[searchHighlight].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            searchHighlight = Math.max(searchHighlight - 1, 0);
            results.forEach((r, i) => r.classList.toggle('highlighted', i === searchHighlight));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (searchHighlight >= 0 && results[searchHighlight]) {
                const mobId = parseInt(results[searchHighlight].dataset.id);
                selectMob(mobId);
            }
        }
    });

    // Import Modal
    document.getElementById('importClose').addEventListener('click', closeImportModal);
    document.getElementById('btnCancelImport').addEventListener('click', closeImportModal);

    // Import tabs
    document.querySelectorAll('.import-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.import-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('importFile').style.display = tab.dataset.tab === 'file' ? 'block' : 'none';
            document.getElementById('importPaste').style.display = tab.dataset.tab === 'paste' ? 'block' : 'none';
        });
    });

    // Drop zone
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('click', () => {
        // Try File System Access API first (Chrome/Edge)
        if (window.showOpenFilePicker) {
            handleFileImportFSA();
        } else {
            fileInput.click();
        }
    });
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (e.dataTransfer.files.length) handleFileImport(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFileImport(e.target.files[0]);
    });

    // Confirm import (paste)
    document.getElementById('btnConfirmImport').addEventListener('click', () => {
        const activeTab = document.querySelector('.import-tab.active').dataset.tab;
        if (activeTab === 'paste') {
            const text = document.getElementById('pasteInput').value.trim();
            if (!text) {
                showToast('Pega el contenido del archivo primero', 'warning');
                return;
            }
            doImport(text, 'Texto pegado');
        } else {
            showToast('Arrastra o selecciona un archivo .txt', 'warning');
        }
    });

    // Copy preview
    document.getElementById('btnCopyPreview').addEventListener('click', () => {
        const content = document.getElementById('previewContent').textContent;
        navigator.clipboard.writeText(content).then(() => {
            showToast('📋 Contenido copiado al portapapeles', 'success');
        });
    });

    // Preview panel toggle
    let previewVisible = false;
    const previewPanel = document.getElementById('previewPanel');
    const toolbarToggle = document.getElementById('btnTogglePreviewToolbar');

    function togglePreview(show) {
        previewVisible = show !== undefined ? show : !previewVisible;
        previewPanel.style.display = previewVisible ? 'flex' : 'none';
        toolbarToggle.classList.toggle('btn-preview-active', previewVisible);
        if (previewVisible) updatePreview();
    }

    toolbarToggle.addEventListener('click', () => togglePreview());
    document.getElementById('btnHidePreview').addEventListener('click', () => togglePreview(false));

    // Vertical resize
    const resizeHandle = document.getElementById('previewResizeHandle');
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeHandle.classList.add('dragging');
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const mainRect = document.getElementById('mainContent').getBoundingClientRect();
        const newHeight = mainRect.bottom - e.clientY;
        const clamped = Math.max(80, Math.min(window.innerHeight * 0.5, newHeight));
        previewPanel.style.height = clamped + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizeHandle.classList.remove('dragging');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Prevent during input
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
            if (e.key === 'Escape') {
                closeSpawnModal();
                closeImportModal();
            }
            return;
        }

        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            openSpawnModal();
        } else if (e.ctrlKey && e.key === 'o') {
            e.preventDefault();
            openImportModal();
        } else if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            exportFile();
        } else if (e.key === 'Escape') {
            closeSpawnModal();
            closeImportModal();
        } else if (e.key === 'Delete') {
            if (state.selectedIds.size > 0) deleteSelected();
        }
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeSpawnModal();
                closeImportModal();
            }
        });
    });
}

// Debounce utility
function debounce(fn, ms) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}

// ─────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────
function init() {
    populateMapSelect();
    loadFromLocal();
    populateMapFilter();
    renderTable();
    initEvents();
    initMonsterStats();
    initBossDrops();

    if (state.spawns.length > 0) {
        showToast(`📂 Sesión restaurada: ${state.spawns.length} spawns`, 'info');
    }
}

// Start
document.addEventListener('DOMContentLoaded', init);

// ═══════════════════════════════════════════════════════════════════════
// MONSTER STATS EDITOR
// ═══════════════════════════════════════════════════════════════════════

const monsterState = {
    monsters: [],
    fileHandle: null,
    fileName: null,
    modified: false,
    sortField: 'index',
    sortDir: 'asc',
    editingIndex: null,
};

// ─────────────────────────────────────────
// TAB SWITCHING
// ─────────────────────────────────────────
function initTabs() {
    document.querySelectorAll('.editor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            // Update tab buttons
            document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Hide all tabs
            document.getElementById('tabSpawns').style.display = 'none';
            document.getElementById('tabSpawns').classList.remove('active');
            document.getElementById('tabMonsterStats').style.display = 'none';
            document.getElementById('tabMonsterStats').classList.remove('active');
            document.getElementById('tabBossDrops').style.display = 'none';
            document.getElementById('tabBossDrops').classList.remove('active');

            // Show selected tab
            if (target === 'spawns') {
                document.getElementById('tabSpawns').style.display = 'flex';
                document.getElementById('tabSpawns').classList.add('active');
            } else if (target === 'monster-stats') {
                document.getElementById('tabMonsterStats').style.display = 'flex';
                document.getElementById('tabMonsterStats').classList.add('active');
            } else if (target === 'boss-drops') {
                document.getElementById('tabBossDrops').style.display = 'flex';
                document.getElementById('tabBossDrops').classList.add('active');
            }
        });
    });
}

// ─────────────────────────────────────────
// PARSE Monster.txt
// ─────────────────────────────────────────
function parseMonsterTxt(text) {
    const monsters = [];
    const lines = text.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//')) continue;

        // Extract name in quotes
        const nameMatch = trimmed.match(/"([^"]+)"/);
        if (!nameMatch) continue;

        const name = nameMatch[1];
        const beforeName = trimmed.substring(0, trimmed.indexOf('"')).trim();
        const afterName = trimmed.substring(trimmed.lastIndexOf('"') + 1).trim();

        const pre = beforeName.split(/\s+/).filter(p => p.length > 0);
        const post = afterName.split(/\s+/).filter(p => p.length > 0);

        if (pre.length < 2 || post.length < 23) continue;

        monsters.push({
            index: parseInt(pre[0]),
            rate: parseInt(pre[1]),
            name: name,
            level: parseInt(post[0]),
            maxLife: parseInt(post[1]),
            maxMana: parseInt(post[2]),
            damageMin: parseInt(post[3]),
            damageMax: parseInt(post[4]),
            defense: parseInt(post[5]),
            magicDefense: parseInt(post[6]),
            attackRate: parseInt(post[7]),
            defenseRate: parseInt(post[8]),
            moveRange: parseInt(post[9]),
            attackType: parseInt(post[10]),
            attackRange: parseInt(post[11]),
            viewRange: parseInt(post[12]),
            moveSpeed: parseInt(post[13]),
            attackSpeed: parseInt(post[14]),
            regenTime: parseInt(post[15]),
            attribute: parseInt(post[16]),
            itemRate: parseInt(post[17]),
            moneyRate: parseInt(post[18]),
            maxItemLevel: parseInt(post[19]),
            monsterSkill: parseInt(post[20]),
            resistance1: parseInt(post[21]),
            resistance2: parseInt(post[22]),
            resistance3: parseInt(post[23]),
            resistance4: parseInt(post[24]) || 0,
        });
    }

    return monsters;
}

// ─────────────────────────────────────────
// GENERATE Monster.txt
// ─────────────────────────────────────────
function generateMonsterTxt(monsters) {
    let output = '//Index   Rate   Name                                 Level   MaxLife   MaxMana   DamageMin   DamageMax   Defense   MagicDefense   AttackRate   DefenseRate   MoveRange   AttackType   AttackRange   ViewRange   MoveSpeed   AttackSpeed   RegenTime   Attribute   ItemRate   MoneyRate   MaxItemLevel   MonsterSkill   Resistance1   Resistance2   Resistance3   Resistance4\n';

    for (const m of monsters) {
        const idx = String(m.index).padStart(1);
        const rate = String(m.rate).padStart(1);
        const name = `"${m.name}"`;
        const namePad = name.padEnd(37);

        output += `${idx.padEnd(10)}${rate.padEnd(7)}${namePad}${String(m.level).padEnd(8)}${String(m.maxLife).padEnd(10)}${String(m.maxMana).padEnd(10)}${String(m.damageMin).padEnd(12)}${String(m.damageMax).padEnd(12)}${String(m.defense).padEnd(10)}${String(m.magicDefense).padEnd(15)}${String(m.attackRate).padEnd(13)}${String(m.defenseRate).padEnd(14)}${String(m.moveRange).padEnd(12)}${String(m.attackType).padEnd(13)}${String(m.attackRange).padEnd(14)}${String(m.viewRange).padEnd(12)}${String(m.moveSpeed).padEnd(10)}${String(m.attackSpeed).padEnd(14)}${String(m.regenTime).padEnd(12)}${String(m.attribute).padEnd(12)}${String(m.itemRate).padEnd(11)}${String(m.moneyRate).padEnd(10)}${String(m.maxItemLevel).padEnd(15)}${String(m.monsterSkill).padEnd(15)}${String(m.resistance1).padEnd(14)}${String(m.resistance2).padEnd(14)}${String(m.resistance3).padEnd(14)}${String(m.resistance4)}\n`;
    }

    return output;
}

// ─────────────────────────────────────────
// FORMAT REGEN TIME
// ─────────────────────────────────────────
function formatRegenTime(seconds) {
    if (seconds < 60) return seconds + 's';
    if (seconds < 3600) return Math.round(seconds / 60) + 'min';
    return Math.round(seconds / 3600) + 'h';
}

function regenClass(seconds) {
    if (seconds <= 30) return 'regen-fast';
    if (seconds <= 600) return 'regen-medium';
    return 'regen-slow';
}

// ─────────────────────────────────────────
// RENDER MONSTER TABLE
// ─────────────────────────────────────────
function getFilteredMonsters() {
    let filtered = [...monsterState.monsters];

    // Search
    const search = document.getElementById('monsterSearchInput').value.toLowerCase().trim();
    if (search) {
        filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(search) ||
            String(m.index).includes(search)
        );
    }

    // Level filter
    const lvlFilter = document.getElementById('filterMonsterLevel').value;
    if (lvlFilter !== 'all') {
        const [min, max] = lvlFilter.split('-').map(Number);
        filtered = filtered.filter(m => m.level >= min && m.level <= max);
    }

    // Sort
    const field = monsterState.sortField;
    const dir = monsterState.sortDir === 'asc' ? 1 : -1;
    filtered.sort((a, b) => {
        if (typeof a[field] === 'string') return a[field].localeCompare(b[field]) * dir;
        return (a[field] - b[field]) * dir;
    });

    return filtered;
}

function renderMonsterTable() {
    const tbody = document.getElementById('monsterTableBody');
    const filtered = getFilteredMonsters();
    const hasData = monsterState.monsters.length > 0;

    document.getElementById('monsterWelcome').style.display = hasData ? 'none' : 'flex';
    document.getElementById('monsterTableContainer').style.display = hasData ? 'flex' : 'none';

    document.getElementById('monsterTableCount').textContent = `${filtered.length} de ${monsterState.monsters.length} monstruos`;

    tbody.innerHTML = '';

    for (const m of filtered) {
        const tr = document.createElement('tr');
        tr.dataset.idx = m.index;
        tr.innerHTML = `
            <td class="col-id">${m.index}</td>
            <td class="col-name"><strong>${m.name}</strong></td>
            <td class="col-num">${m.level}</td>
            <td class="col-num">${m.maxLife.toLocaleString()}</td>
            <td class="col-num">${m.damageMin}</td>
            <td class="col-num">${m.damageMax}</td>
            <td class="col-num">${m.defense}</td>
            <td class="col-num">${m.magicDefense}</td>
            <td class="col-num">${m.attackSpeed}</td>
            <td class="col-num">${m.moveSpeed}</td>
            <td class="col-regen"><span class="regen-badge ${regenClass(m.regenTime)}">${formatRegenTime(m.regenTime)}</span></td>
            <td class="col-num">${m.itemRate}</td>
            <td class="col-num">${m.moneyRate}</td>
            <td class="col-actions-m">
                <button class="monster-edit-btn" title="Editar" data-action-m="edit">✏️ Editar</button>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

// ─────────────────────────────────────────
// MONSTER EDIT MODAL
// ─────────────────────────────────────────
function openMonsterEdit(index) {
    const m = monsterState.monsters.find(x => x.index === index);
    if (!m) return;

    monsterState.editingIndex = index;
    document.getElementById('monsterModalTitle').textContent = `✏️ Editar: ${m.name} (ID ${m.index})`;

    document.getElementById('mEditIndex').value = m.index;
    document.getElementById('mEditRate').value = m.rate;
    document.getElementById('mEditName').value = m.name;
    document.getElementById('mEditLevel').value = m.level;
    document.getElementById('mEditMaxLife').value = m.maxLife;
    document.getElementById('mEditMaxMana').value = m.maxMana;
    document.getElementById('mEditDmgMin').value = m.damageMin;
    document.getElementById('mEditDmgMax').value = m.damageMax;
    document.getElementById('mEditDefense').value = m.defense;
    document.getElementById('mEditMagicDef').value = m.magicDefense;
    document.getElementById('mEditAtkRate').value = m.attackRate;
    document.getElementById('mEditDefRate').value = m.defenseRate;
    document.getElementById('mEditMoveRange').value = m.moveRange;
    document.getElementById('mEditAtkType').value = m.attackType;
    document.getElementById('mEditAtkRange').value = m.attackRange;
    document.getElementById('mEditViewRange').value = m.viewRange;
    document.getElementById('mEditMoveSpd').value = m.moveSpeed;
    document.getElementById('mEditAtkSpd').value = m.attackSpeed;
    document.getElementById('mEditRegenTime').value = m.regenTime;
    document.getElementById('mEditAttribute').value = m.attribute;
    document.getElementById('mEditItemRate').value = m.itemRate;
    document.getElementById('mEditMoneyRate').value = m.moneyRate;
    document.getElementById('mEditMaxItemLvl').value = m.maxItemLevel;
    document.getElementById('mEditMonsterSkill').value = m.monsterSkill;
    document.getElementById('mEditRes1').value = m.resistance1;
    document.getElementById('mEditRes2').value = m.resistance2;
    document.getElementById('mEditRes3').value = m.resistance3;
    document.getElementById('mEditRes4').value = m.resistance4;

    updateRegenHint();
    document.getElementById('modalMonster').style.display = 'flex';
}

function closeMonsterEdit() {
    document.getElementById('modalMonster').style.display = 'none';
    monsterState.editingIndex = null;
}

function saveMonsterEdit() {
    const idx = monsterState.editingIndex;
    const m = monsterState.monsters.find(x => x.index === idx);
    if (!m) return;

    m.rate = parseInt(document.getElementById('mEditRate').value) || 1;
    m.name = document.getElementById('mEditName').value;
    m.level = parseInt(document.getElementById('mEditLevel').value) || 0;
    m.maxLife = parseInt(document.getElementById('mEditMaxLife').value) || 0;
    m.maxMana = parseInt(document.getElementById('mEditMaxMana').value) || 0;
    m.damageMin = parseInt(document.getElementById('mEditDmgMin').value) || 0;
    m.damageMax = parseInt(document.getElementById('mEditDmgMax').value) || 0;
    m.defense = parseInt(document.getElementById('mEditDefense').value) || 0;
    m.magicDefense = parseInt(document.getElementById('mEditMagicDef').value) || 0;
    m.attackRate = parseInt(document.getElementById('mEditAtkRate').value) || 0;
    m.defenseRate = parseInt(document.getElementById('mEditDefRate').value) || 0;
    m.moveRange = parseInt(document.getElementById('mEditMoveRange').value) || 0;
    m.attackType = parseInt(document.getElementById('mEditAtkType').value) || 0;
    m.attackRange = parseInt(document.getElementById('mEditAtkRange').value) || 0;
    m.viewRange = parseInt(document.getElementById('mEditViewRange').value) || 0;
    m.moveSpeed = parseInt(document.getElementById('mEditMoveSpd').value) || 0;
    m.attackSpeed = parseInt(document.getElementById('mEditAtkSpd').value) || 0;
    m.regenTime = parseInt(document.getElementById('mEditRegenTime').value) || 0;
    m.attribute = parseInt(document.getElementById('mEditAttribute').value) || 0;
    m.itemRate = parseInt(document.getElementById('mEditItemRate').value) || 0;
    m.moneyRate = parseInt(document.getElementById('mEditMoneyRate').value) || 0;
    m.maxItemLevel = parseInt(document.getElementById('mEditMaxItemLvl').value) || 0;
    m.monsterSkill = parseInt(document.getElementById('mEditMonsterSkill').value) || 0;
    m.resistance1 = parseInt(document.getElementById('mEditRes1').value) || 0;
    m.resistance2 = parseInt(document.getElementById('mEditRes2').value) || 0;
    m.resistance3 = parseInt(document.getElementById('mEditRes3').value) || 0;
    m.resistance4 = parseInt(document.getElementById('mEditRes4').value) || 0;

    monsterState.modified = true;
    renderMonsterTable();
    closeMonsterEdit();
    showToast(`✅ ${m.name} actualizado`, 'success');
}

function updateRegenHint() {
    const val = parseInt(document.getElementById('mEditRegenTime').value) || 0;
    const hint = document.getElementById('regenHint');
    if (val < 60) hint.textContent = `= ${val} seg`;
    else if (val < 3600) hint.textContent = `= ${Math.round(val/60)} min`;
    else hint.textContent = `= ${(val/3600).toFixed(1)} horas`;
}

// ─────────────────────────────────────────
// IMPORT / EXPORT Monster.txt
// ─────────────────────────────────────────
async function importMonsterTxt() {
    try {
        if (window.showOpenFilePicker) {
            const [handle] = await window.showOpenFilePicker({
                types: [{ description: 'Monster.txt', accept: { 'text/plain': ['.txt'] } }],
            });
            const file = await handle.getFile();
            const text = await file.text();
            monsterState.monsters = parseMonsterTxt(text);
            monsterState.fileHandle = handle;
            monsterState.fileName = file.name;
            monsterState.modified = false;
            renderMonsterTable();
            document.getElementById('btnClearMonster').style.display = 'inline-flex';
            document.getElementById('monsterSaveLabel').textContent = 'Guardar';
            showToast(`✅ ${monsterState.monsters.length} monstruos cargados desde ${file.name}`, 'success');
            showToast('🔗 Conectado: guardar sobreescribirá el archivo original', 'success');
        } else {
            // Fallback
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.txt';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    monsterState.monsters = parseMonsterTxt(ev.target.result);
                    monsterState.fileName = file.name;
                    monsterState.modified = false;
                    renderMonsterTable();
                    document.getElementById('btnClearMonster').style.display = 'inline-flex';
                    document.getElementById('monsterSaveLabel').textContent = 'Descargar';
                    showToast(`✅ ${monsterState.monsters.length} monstruos cargados`, 'success');
                };
                reader.readAsText(file);
            };
            input.click();
        }
    } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
    }
}

function clearMonsterFile() {
    if (monsterState.monsters.length > 0 && !confirm('¿Cerrar el archivo Monster.txt? Los cambios no guardados se perderán.')) return;
    monsterState.monsters = [];
    monsterState.fileHandle = null;
    monsterState.fileName = null;
    monsterState.modified = false;
    monsterState.editingIndex = null;
    document.getElementById('btnClearMonster').style.display = 'none';
    document.getElementById('monsterSaveLabel').textContent = 'Guardar';
    renderMonsterTable();
    showToast('🗑️ Archivo Monster.txt cerrado', 'info');
}

async function saveMonsterTxt() {
    if (monsterState.monsters.length === 0) {
        showToast('No hay datos para guardar', 'warning');
        return;
    }

    const content = generateMonsterTxt(monsterState.monsters);

    if (monsterState.fileHandle) {
        try {
            const writable = await monsterState.fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            monsterState.modified = false;
            showToast(`💾 Guardado directo: ${monsterState.fileHandle.name}`, 'success');
            return;
        } catch (err) {
            console.warn('Direct save failed', err);
        }
    }

    // Fallback download
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = monsterState.fileName || 'Monster.txt';
    a.click();
    URL.revokeObjectURL(url);
    showToast(`💾 Descargado: ${a.download}`, 'success');
}

// ─────────────────────────────────────────
// INIT MONSTER STATS
// ─────────────────────────────────────────
function initMonsterStats() {
    initTabs();

    // Import buttons
    document.getElementById('btnImportMonster').addEventListener('click', importMonsterTxt);
    document.getElementById('btnMonsterWelcomeImport').addEventListener('click', importMonsterTxt);

    // Save
    document.getElementById('btnSaveMonster').addEventListener('click', saveMonsterTxt);

    // Clear/close file
    document.getElementById('btnClearMonster').addEventListener('click', clearMonsterFile);

    // Search & Filter
    document.getElementById('monsterSearchInput').addEventListener('input', debounce(() => renderMonsterTable(), 200));
    document.getElementById('monsterSearchClear').addEventListener('click', () => {
        document.getElementById('monsterSearchInput').value = '';
        renderMonsterTable();
    });
    document.getElementById('filterMonsterLevel').addEventListener('change', renderMonsterTable);

    // Sort
    document.querySelectorAll('th.sortable-m').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sortM;
            if (monsterState.sortField === field) {
                monsterState.sortDir = monsterState.sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                monsterState.sortField = field;
                monsterState.sortDir = 'asc';
            }
            renderMonsterTable();
        });
    });

    // Table row events
    document.getElementById('monsterTableBody').addEventListener('click', (e) => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        const idx = parseInt(tr.dataset.idx);
        const action = e.target.closest('[data-action-m]')?.dataset.actionM;
        if (action === 'edit') openMonsterEdit(idx);
    });

    document.getElementById('monsterTableBody').addEventListener('dblclick', (e) => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        openMonsterEdit(parseInt(tr.dataset.idx));
    });

    // Edit modal
    document.getElementById('monsterModalClose').addEventListener('click', closeMonsterEdit);
    document.getElementById('btnCancelMonster').addEventListener('click', closeMonsterEdit);
    document.getElementById('btnSaveMonsterEdit').addEventListener('click', saveMonsterEdit);
    document.getElementById('modalMonster').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeMonsterEdit();
    });

    // Regen hint live update
    document.getElementById('mEditRegenTime').addEventListener('input', updateRegenHint);
}

// ═══════════════════════════════════════════════════════════════════════
// BOSS DROPS EDITOR
// ═══════════════════════════════════════════════════════════════════════

const bossState = {
    bossName: '',
    config: { dropZen: 0, itemDropRate: 0, itemDropCount: 0, setItemDropRate: 0, itemDropType: 0, fireworks: 0, dropInventory: 0 },
    items: [],
    fileHandle: null,
    fileName: null,
    modified: false,
    editingItemIdx: null, // null = add, number = edit index
};

// ─── Item Name Engine (uses ITEM_DB from itemData.js) ───
const SECTION_NAMES = {
    0: '⚔️ Espadas', 1: '🪓 Hachas', 2: '🔨 Mazas/Cetros', 3: '🗡️ Lanzas',
    4: '🏹 Arcos', 5: '🪄 Bastones', 6: '🛡️ Escudos', 7: '🪖 Cascos',
    8: '👕 Armaduras', 9: '🦵 Pantalones', 10: '🥾 Botas', 11: '🧤 Guantes',
    12: '💍 Alas/Capas', 13: '🐾 Mascotas', 14: '🔮 Misceláneos',
    15: '📜 Pergaminos'
};

function getItemName(section, type) {
    const key = `${section}-${type}`;
    if (typeof ITEM_DB !== 'undefined' && ITEM_DB[key]) return ITEM_DB[key];
    return `Item ${section}-${type}`;
}

function getSectionName(section) {
    return SECTION_NAMES[section] || `Categoría ${section}`;
}

// ─── Parse EventItemBag boss file ───
function parseBossDropFile(text) {
    const lines = text.split('\n').map(l => l.trim());
    let section = -1;
    const result = { bossName: '', config: {}, items: [] };

    for (const line of lines) {
        if (!line || line.startsWith('//')) continue;
        if (line === 'end') { section = -1; continue; }
        if (line === '0') { section = 0; continue; }
        if (line === '1') { section = 1; continue; }

        if (section === 0) {
            const nameMatch = line.match(/"([^"]+)"/);
            if (nameMatch) {
                result.bossName = nameMatch[1];
                const afterName = line.substring(line.lastIndexOf('"') + 1).trim();
                const vals = afterName.split(/\s+/).filter(v => v.length > 0);
                result.config = {
                    dropZen: parseInt(vals[0]) || 0,
                    itemDropRate: parseInt(vals[1]) || 0,
                    itemDropCount: parseInt(vals[2]) || 0,
                    setItemDropRate: parseInt(vals[3]) || 0,
                    itemDropType: parseInt(vals[4]) || 0,
                    fireworks: parseInt(vals[5]) || 0,
                    dropInventory: parseInt(vals[6]) || 0,
                };
            }
        } else if (section === 1) {
            const vals = line.split(/\s+/).filter(v => v.length > 0);
            if (vals.length >= 8) {
                result.items.push({
                    section: parseInt(vals[0]),
                    type: parseInt(vals[1]),
                    minLevel: parseInt(vals[2]),
                    maxLevel: parseInt(vals[3]),
                    skill: parseInt(vals[4]),
                    luck: parseInt(vals[5]),
                    option: parseInt(vals[6]),
                    excellent: parseInt(vals[7]),
                });
            }
        }
    }
    return result;
}

// ─── Generate EventItemBag boss file ───
function generateBossDropFile() {
    let out = '0\n';
    out += '//EventName              DropZen   ItemDropRate   ItemDropCount   SetItemDropRate   ItemDropType   Fireworks\tDropInventory\n';
    const c = bossState.config;
    const name = `"${bossState.bossName}"`;
    out += `${name.padEnd(25)}${String(c.dropZen).padEnd(10)}${String(c.itemDropRate).padEnd(15)}${String(c.itemDropCount).padEnd(16)}${String(c.setItemDropRate).padEnd(18)}${String(c.itemDropType).padEnd(15)}${String(c.fireworks)}\t\t${String(c.dropInventory)}\n`;
    out += 'end\n\n';
    out += '1\n';
    out += '//Section   Type   MinLevel   MaxLevel   Skill   Luck   Option   Excellent\n';
    for (const item of bossState.items) {
        const name = getItemName(item.section, item.type);
        const line = `${String(item.section).padEnd(12)}${String(item.type).padEnd(7)}${String(item.minLevel).padEnd(11)}${String(item.maxLevel).padEnd(11)}${String(item.skill).padEnd(8)}${String(item.luck).padEnd(7)}${String(item.option).padEnd(9)}${String(item.excellent)}`;
        out += `${line} // ${name}\n`;
    }
    out += 'end\n';
    return out;
}

// ─── Render Boss Drop UI ───
function renderBossDropUI() {
    const hasData = bossState.bossName !== '';
    document.getElementById('bossDropWelcome').style.display = hasData ? 'none' : 'flex';
    const editor = document.getElementById('bossDropEditor');
    editor.style.display = hasData ? 'flex' : 'none';

    if (!hasData) return;

    document.getElementById('bossDropTitle').textContent = `🎁 ${bossState.bossName}`;
    document.getElementById('bdDropZen').value = bossState.config.dropZen;
    document.getElementById('bdItemDropRate').value = bossState.config.itemDropRate;
    document.getElementById('bdItemDropCount').value = bossState.config.itemDropCount;
    document.getElementById('bdSetItemDropRate').value = bossState.config.setItemDropRate;
    document.getElementById('bdItemDropType').value = bossState.config.itemDropType;
    document.getElementById('bdFireworks').value = bossState.config.fireworks;
    document.getElementById('bdDropInventory').value = bossState.config.dropInventory;

    renderBossItemTable();
}

function renderBossItemTable() {
    const tbody = document.getElementById('bossItemTableBody');
    tbody.innerHTML = '';
    document.getElementById('bossItemCount').textContent = `${bossState.items.length} items en el loot table`;

    bossState.items.forEach((item, i) => {
        const itemName = getItemName(item.section, item.type);
        const sectionName = getSectionName(item.section);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align:center; color:var(--text-muted); font-size:11px;">${i + 1}</td>
            <td style="font-size:12px;">${sectionName}</td>
            <td>
                <div style="font-weight:600; color:#fff;">${itemName}</div>
                <div style="font-size:10px; color:var(--text-muted); font-family:var(--font-mono);">ID: ${item.section}-${item.type}</div>
            </td>
            <td style="text-align:center">${item.minLevel} → ${item.maxLevel}</td>
            <td style="text-align:center"><span class="${item.skill ? 'toggle-yes' : 'toggle-no'}">${item.skill ? 'Sí' : 'No'}</span></td>
            <td style="text-align:center"><span class="${item.luck ? 'toggle-yes' : 'toggle-no'}">${item.luck ? 'Sí' : 'No'}</span></td>
            <td style="text-align:center">${item.option}</td>
            <td style="text-align:center"><span class="${item.excellent > 0 ? 'toggle-yes' : ''}">${item.excellent}</span></td>
            <td style="text-align:center">
                <button class="monster-edit-btn" data-bd-edit="${i}" style="padding:4px 8px;" title="Editar">✏️</button>
                <button class="boss-delete-btn" data-bd-del="${i}" style="padding:4px 8px;" title="Eliminar">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ─── Read config from inputs ───
function readBossConfig() {
    bossState.config.dropZen = parseInt(document.getElementById('bdDropZen').value) || 0;
    bossState.config.itemDropRate = parseInt(document.getElementById('bdItemDropRate').value) || 0;
    bossState.config.itemDropCount = parseInt(document.getElementById('bdItemDropCount').value) || 0;
    bossState.config.setItemDropRate = parseInt(document.getElementById('bdSetItemDropRate').value) || 0;
    bossState.config.itemDropType = parseInt(document.getElementById('bdItemDropType').value) || 0;
    bossState.config.fireworks = parseInt(document.getElementById('bdFireworks').value) || 0;
    bossState.config.dropInventory = parseInt(document.getElementById('bdDropInventory').value) || 0;
}

// ─── Import Boss Drop ───
async function importBossDrop() {
    try {
        if (window.showOpenFilePicker) {
            const [handle] = await window.showOpenFilePicker({
                types: [{ description: 'Boss Drop txt', accept: { 'text/plain': ['.txt'] } }],
            });
            const file = await handle.getFile();
            const text = await file.text();
            const parsed = parseBossDropFile(text);
            bossState.bossName = parsed.bossName;
            bossState.config = parsed.config;
            bossState.items = parsed.items;
            bossState.fileHandle = handle;
            bossState.fileName = file.name;
            bossState.modified = false;
            document.getElementById('btnClearBossDrop').style.display = 'inline-flex';
            document.getElementById('bossSaveLabel').textContent = 'Guardar';
            renderBossDropUI();
            showToast(`✅ ${parsed.bossName}: ${parsed.items.length} items cargados`, 'success');
            showToast('🔗 Conectado al archivo original', 'success');
        } else {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.txt';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const parsed = parseBossDropFile(ev.target.result);
                    bossState.bossName = parsed.bossName;
                    bossState.config = parsed.config;
                    bossState.items = parsed.items;
                    bossState.fileName = file.name;
                    bossState.modified = false;
                    document.getElementById('btnClearBossDrop').style.display = 'inline-flex';
                    document.getElementById('bossSaveLabel').textContent = 'Descargar';
                    renderBossDropUI();
                    showToast(`✅ ${parsed.bossName}: ${parsed.items.length} items cargados`, 'success');
                };
                reader.readAsText(file);
            };
            input.click();
        }
    } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
    }
}

// ─── Save Boss Drop ───
async function saveBossDrop() {
    if (!bossState.bossName) { showToast('No hay datos para guardar', 'warning'); return; }
    readBossConfig();
    const content = generateBossDropFile();

    if (bossState.fileHandle) {
        try {
            const writable = await bossState.fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            bossState.modified = false;
            showToast(`💾 Guardado: ${bossState.bossName}`, 'success');
            return;
        } catch (err) { console.warn('Direct save failed', err); }
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = bossState.fileName || `${bossState.bossName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`💾 Descargado: ${a.download}`, 'success');
}

// ─── Clear Boss Drop ───
function clearBossDrop() {
    if (bossState.items.length > 0 && !confirm('¿Cerrar archivo de boss? Los cambios no guardados se perderán.')) return;
    bossState.bossName = '';
    bossState.config = { dropZen: 0, itemDropRate: 0, itemDropCount: 0, setItemDropRate: 0, itemDropType: 0, fireworks: 0, dropInventory: 0 };
    bossState.items = [];
    bossState.fileHandle = null;
    bossState.fileName = null;
    bossState.modified = false;
    document.getElementById('btnClearBossDrop').style.display = 'none';
    renderBossDropUI();
    showToast('🗑️ Archivo de boss cerrado', 'info');
}

// ─── Boss Item Modal ───
let itemDropdownInitialized = false;

function initItemDropdown() {
    if (itemDropdownInitialized) return;
    const list = document.getElementById('biItemDropdown');
    const search = document.getElementById('biItemSearch');
    
    let html = '';
    for (let key in ITEM_DB) {
        const name = ITEM_DB[key];
        const parts = key.split('-');
        const catName = getSectionName(parseInt(parts[0]));
        html += `<div class="custom-drop-item" data-id="${key}" data-search="${name.toLowerCase()} ${catName.toLowerCase()} ${key}">
            <span class="custom-drop-item-name">${name}</span>
            <span class="custom-drop-item-meta">${catName} (ID: ${key})</span>
        </div>`;
    }
    list.innerHTML = html;

    search.addEventListener('focus', () => { 
        list.style.display = 'block'; 
        search.select();
    });
    
    document.addEventListener('click', (e) => { 
        if (!e.target.closest('#biItemSearch') && !e.target.closest('#biItemDropdown')) {
            list.style.display = 'none'; 
        }
    });

    search.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        Array.from(list.children).forEach(el => {
            if (!val || el.dataset.search.includes(val)) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'none';
            }
        });
        list.style.display = 'block';
    });

    list.addEventListener('click', (e) => {
        const item = e.target.closest('.custom-drop-item');
        if (item) {
            const parts = item.dataset.id.split('-');
            document.getElementById('biSection').value = parts[0];
            document.getElementById('biType').value = parts[1];
            search.value = ITEM_DB[item.dataset.id];
            list.style.display = 'none';
            updateItemPreview();
        }
    });
    
    itemDropdownInitialized = true;
}

function updateItemPreview() {
    const section = parseInt(document.getElementById('biSection').value) || 0;
    const type = parseInt(document.getElementById('biType').value) || 0;
    const name = getItemName(section, type);
    
    const nameEl = document.getElementById('biItemNamePreview');
    const idEl = document.getElementById('biItemIDPreview');
    const kundunHint = document.getElementById('kundunHint');
    
    if (nameEl) nameEl.textContent = name;
    if (idEl) idEl.textContent = `ID: ${section} - ${type}`;
    
    if (kundunHint) {
        if (section === 14 && type === 11) {
            kundunHint.style.display = 'block';
        } else {
            kundunHint.style.display = 'none';
        }
    }
}

function openBossItemModal(editIdx) {
    bossState.editingItemIdx = editIdx;
    if (editIdx !== null) {
        const item = bossState.items[editIdx];
        document.getElementById('bossItemModalTitle').textContent = `✏️ Editar Item #${editIdx + 1}`;
        document.getElementById('biSection').value = item.section;
        document.getElementById('biType').value = item.type;
        document.getElementById('biItemSearch').value = getItemName(item.section, item.type);
        document.getElementById('biMinLevel').value = item.minLevel;
        document.getElementById('biMaxLevel').value = item.maxLevel;
        document.getElementById('biSkill').value = item.skill;
        document.getElementById('biLuck').value = item.luck;
        document.getElementById('biOption').value = item.option;
        document.getElementById('biExcellent').value = item.excellent;
        document.getElementById('btnConfirmBossItem').textContent = '💾 Guardar';
    } else {
        document.getElementById('bossItemModalTitle').textContent = '➕ Agregar Item al Loot';
        document.getElementById('biSection').value = 0;
        document.getElementById('biType').value = 0;
        document.getElementById('biItemSearch').value = getItemName(0, 0);
        document.getElementById('biMinLevel').value = 0;
        document.getElementById('biMaxLevel').value = 4;
        document.getElementById('biSkill').value = 1;
        document.getElementById('biLuck').value = 1;
        document.getElementById('biOption').value = 0;
        document.getElementById('biExcellent').value = 0;
        document.getElementById('btnConfirmBossItem').textContent = '✅ Agregar';
    }
    updateItemPreview(); // Update preview on open
    document.getElementById('modalBossItem').style.display = 'flex';
}

function closeBossItemModal() {
    document.getElementById('modalBossItem').style.display = 'none';
    bossState.editingItemIdx = null;
}

function confirmBossItem() {
    const item = {
        section: parseInt(document.getElementById('biSection').value) || 0,
        type: parseInt(document.getElementById('biType').value) || 0,
        minLevel: parseInt(document.getElementById('biMinLevel').value) || 0,
        maxLevel: parseInt(document.getElementById('biMaxLevel').value) || 0,
        skill: parseInt(document.getElementById('biSkill').value) || 0,
        luck: parseInt(document.getElementById('biLuck').value) || 0,
        option: parseInt(document.getElementById('biOption').value) || 0,
        excellent: parseInt(document.getElementById('biExcellent').value) || 0,
    };

    if (bossState.editingItemIdx !== null) {
        bossState.items[bossState.editingItemIdx] = item;
        showToast('✅ Item actualizado', 'success');
    } else {
        bossState.items.push(item);
        showToast('✅ Item agregado al loot table', 'success');
    }

    bossState.modified = true;
    closeBossItemModal();
    renderBossItemTable();
}

function deleteBossItem(idx) {
    if (!confirm(`¿Eliminar item #${idx + 1} del loot table?`)) return;
    bossState.items.splice(idx, 1);
    bossState.modified = true;
    renderBossItemTable();
    showToast('🗑️ Item eliminado', 'info');
}

// ─── Init Boss Drops ───
function initBossDrops() {
    document.getElementById('btnImportBossDrop').addEventListener('click', importBossDrop);
    document.getElementById('btnBossWelcomeImport').addEventListener('click', importBossDrop);
    document.getElementById('btnSaveBossDrop').addEventListener('click', saveBossDrop);
    document.getElementById('btnClearBossDrop').addEventListener('click', clearBossDrop);

    // Add item
    document.getElementById('btnAddBossItem').addEventListener('click', () => openBossItemModal(null));

    // Clear items
    document.getElementById('btnClearBossItems').addEventListener('click', () => {
        if (bossState.items.length === 0) return;
        if (confirm("¿Estás seguro de que deseas eliminar TODOS los items de este archivo?")) {
            bossState.items = [];
            bossState.modified = true;
            renderBossItemTable();
            showToast('🗑️ Todos los items de la lista fueron eliminados', 'info');
        }
    });

    // Item modal
    document.getElementById('bossItemModalClose').addEventListener('click', closeBossItemModal);
    document.getElementById('btnCancelBossItem').addEventListener('click', closeBossItemModal);
    document.getElementById('btnConfirmBossItem').addEventListener('click', confirmBossItem);
    document.getElementById('modalBossItem').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeBossItemModal();
    });

    // Modal Live Preview
    document.getElementById('biSection').addEventListener('input', updateItemPreview);
    document.getElementById('biType').addEventListener('input', updateItemPreview);

    document.getElementById('bossItemTableBody').addEventListener('click', (e) => {
        const editBtn = e.target.closest('[data-bd-edit]');
        if (editBtn) {
            openBossItemModal(parseInt(editBtn.dataset.bdEdit));
            return;
        }
        const delBtn = e.target.closest('[data-bd-del]');
        if (delBtn) {
            deleteBossItem(parseInt(delBtn.dataset.bdDel));
        }
    });

    initItemDropdown();
}
