
const fs = require('fs')

let ATTACK_ID = 1

let TYPES_TABLE = ["NORMAL","FIGHTING","FLYING","POISON","GROUND","ROCK","BUG","GHOST","STEEL","FIRE","WATER","GRASS","ELECTRIC","PSYCHIC","ICE","DRAGON","DARK","FAIRY"]
let ATK_LOC = {"Vine Whip":"Fouet Lianes","Tackle":"Charge","Sludge Bomb":"Bomb-Beurk","Power Whip":"Mégafouet","Seed Bomb":"Canon Graine","Razor Leaf":"Tranch'Herbe","Solar Beam":"Lance-Soleil","Petal Blizzard":"Tempête Florale","Scratch":"Griffe","Ember":"Flammèche","Flamethrower":"Lance-Flammes","Flame Burst":"Rebondifeu","Flame Charge":"Nitrocharge","Fire Fang":"Crocs Feu","Fire Punch":"Poing de Feu","Fire Spin":"Danse Flamme","Air Slash":"Lame d'Air","Overheat":"Surchauffe","Fire Blast":"Déflagration","Dragon Claw":"Dracogriffe","Bubble":"Écume","Aqua Tail":"Hydroqueue","Water Pulse":"Vibraqua","Aqua Jet":"Aqua-Jet","Water Gun":"Pistolet à O","Bite":"Morsure","Hydro Pump":"Hydrocanon","Ice Beam":"Laser Glace","Flash Cannon":"Luminocanon","Hex":"Châtiment","Astonish":"Étonnement","Dark Pulse":"Vibrobscur","Ominous Wind":"Vent Mauvais","Shadow Sneak":"Ombre Portée","Hidden Power":"Puissance Cachée","Struggle":"Lutte","Counter":"Riposte","Splash":"Trempette","Mirror Coat":"Voile Miroir","Confusion":"Choc Mental","Psychic":"Psyko","Thunderbolt":"Tonnerre","Bug Bite":"Piqûre","Gyro Ball":"Gyroballe","Rock Tomb":"Tomberoche","Sand Tomb":"Tourbi-Sable","Struggle Bug":"Survinsecte","Heavy Slam":"Tacle Lourd","Earthquake":"Séisme","Rock Slide":"Éboulement","Drill Run":"Tunnelier","Dig":"Tunnel","Wing Attack":"Cru-Aile","Fury Cutter":"Taillade","Aerial Ace":"Aéropique","Night Slash":"Tranche-Nuit","Iron Tail":"Queue de Fer","Dragon Tail":"Draco-Queue","Crunch":"Mâchouille","Dazzling Gleam":"Éclat Magique","Brick Break":"Casse-Brique","Snarl":"Aboiement","Close Combat":"Close Combat","Play Rough":"Câlinerie","Poison Sting":"Dard-Venin","Sludge Wave":"Cradovague","Bullet Punch":"Pisto-Poing","Iron Head":"Tête de Fer","X Scissor":"Plaie-Croix","Rock Throw":"Jet-Pierres","Stone Edge":"Lame de Roc","Rock Blast":"Boule Roc","Megahorn":"Mégacorne","Feint Attack":"Feinte","Ice Shard":"Éclats Glace","Foul Play":"Tricherie","Avalanche":"Avalanche","Ice Punch":"Poing-Glace","Lick":"Léchouille","Cross Chop":"Coup-Croix","Metal Claw":"Griffe Acier","Hyper Beam":"Ultralaser","Heat Wave":"Canicule","Powder Snow":"Poudreuse","Body Slam":"Plaquage","Icy Wind":"Vent Glace","Bulldoze":"Piétisol","Power Gem":"Rayon Gemme","Bubble Beam":"Bulles d'O","Mud Shot":"Tir de Boue","Aurora Beam":"Onde Boréale","Gunk Shot":"Détricanon","Present":"Cadeau","Steel Wing":"Aile d'Acier","Brave Bird":"Rapace","Sky Attack":"Piqué","Waterfall":"Cascade","Dragon Breath":"Dracosouffle","Blizzard":"Blizzard","Outrage":"Colère","Rock Smash":"Éclate-Roc","Charge Beam":"Rayon Chargé","Zap Cannon":"Élecanon","Zen Headbutt":"Psykoud'Boul","Stomp":"Écrasement","Wild Charge":"Éclair Fou","Low Sweep":"Balayette","Pound":"Écras'Face","Psyshock":"Choc Psy","Thunder Shock":"Éclair","Low Kick":"Balayage","Discharge":"Coup d'Jus","Thunder Punch":"Poing-Éclair","Karate Chop":"Poing-Karaté","Volt Switch":"Change Éclair","Thunder":"Fatal-Foudre","Extrasensory":"Extrasenseur","Ancient Power":"Pouvoir Antique","Futuresight":"Prescience","Bullet Seed":"Balle Graine","Grass Knot":"Nœud Herbe","Energy Ball":"Éco-Sphère","Quick Attack":"Vive-Attaque","Leaf Blade":"Lame-Feuille","Peck":"Picpic","Focus Blast":"Exploforce","Sludge":"Détritus","Surf":"Surf","Mud Bomb":"Boue-Bombe","Poison Fang":"Crochet Venin","Shadow Claw":"Griffe Ombre","Infestation":"Harcèlement","Bug Buzz":"Bourdon","Air Cutter":"Tranch'Air","Silver Wind":"Vent Argenté","Hurricane":"Vent Violent","Disarming Voice":"Voix Enjôleuse","Shadow Ball":"Ball'Ombre","Signal Beam":"Rayon Signal","Dynamic Punch":"Dynamopoing","Yawn":"Bâillement","Spark":"Étincelle","Vice Grip":"Force Poigne","Psycho Cut":"Coupe Psycho","Swift":"Météores","Poison Jab":"Direct Toxik","Psybeam":"Rafale Psy","Sucker Punch":"Coup Bas","Dragon Pulse":"Dracochoc","Wrap":"Ligotage","Moonblast":"Pouvoir Lunaire","Acid":"Acide","Mud Slap":"Coud'Boue","Bone Club":"Massd'Os","Cross Poison":"Poison-Croix","Horn Attack":"Koud'Korne","Night Shade":"Ombre Nocturne","Shadow Punch":"Poing Ombre","Twister":"Ouragan","Hyper Fang":"Croc de Mort","Frost Breath":"Souffle Glacé","Draining Kiss":"Vampibaiser","Drill Peck":"Bec Vrille","Draco Meteor":"Draco Météor","Transform":"Morphing","Take Down":"Bélier","Doom Desire":"Carnareket","Psycho Boost":"Psycho Boost","Flame Wheel":"Roue de Feu","Submission":"Sacrifice","Magnet Bomb":"Bombaimant","Cut":"Coupe","Present":"Cadeau","Waterfall":"Cascade","Yawn":"Baillement","Take down":"Belier"}

let pokedex =  JSON.parse(fs.readFileSync('pokedex.json'))
let gameMaster = JSON.parse(fs.readFileSync('gamemaster.json'))

const gen3eggsList = {
    "2": [ "Wailmer", "Aron", "Spheal", "Gulpin", "Luvdisc", "Swablu", "Barboach", "Whismur", "Poochyena", "Wurmple", "Zigzagoon" ],
    "5": [ "Anorith", "Spoink", "Lileep", "Corphish", "Cacnea", "Mudkip", "Torchic", "Numel", "Treecko", "Carvanha", "Shuppet", "Snorunt", "Makuhita", "Shroomish", "Baltoy", "Skitty", "Wingull", "Lotad", "Seedot", "Duskull", "Wynaut", "Azurill" ],
    "10": [ "Chimecho", "Sableye", "Trapinch", "Bagon", "Slakoth", "Beldum", "Ralts", "Feebas" ]
}

let templatesMap = {}, attacksMap = {}
let itemTemplates = gameMaster.itemTemplates
itemTemplates.forEach(template => {
    templatesMap[template.templateId] = template
})	

let FORM_TABLE = {
    
    V0351_POKEMON_CASTFORM_RAINY:   { id: 10001, form: { parent: 351, loc: { fr: 'Pluie', en: 'Rainy' }}},
    V0351_POKEMON_CASTFORM_SNOWY:   { id: 10002, form: { parent: 351, loc: { fr: 'Neige', en: 'Snowy' }}},
    V0351_POKEMON_CASTFORM_SUNNY:   { id: 10003, form: { parent: 351, loc: { fr: 'Soleil', en: 'Sunny' }}},

    V0386_POKEMON_DEOXYS_ATTACK:    { id: 10004, form: { parent: 386, loc: { fr: 'Attaque', en: 'Attack' }}},
    V0386_POKEMON_DEOXYS_DEFENSE:   { id: 10005, form: { parent: 386, loc: { fr: 'Défense', en: 'Defense' }}},
    V0386_POKEMON_DEOXYS_SPEED:     { id: 10006, form: { parent: 386, loc: { fr: 'Vitesse', en: 'Speed' }}},

    POKEMON_RATTATA_ALOLA:  { id: 10007, form: { parent: 19, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10008 ] },
    POKEMON_RATICATE_ALOLA: { id: 10008, form: { parent: 20, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_SANDSHREW_ALOLA: { id: 10009, form: { parent: 27, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10010 ]},
    POKEMON_SANDSLASH_ALOLA: { id: 10010, form: { parent: 28, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_VULPIX_ALOLA: { id: 10011, form: { parent: 37, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10012 ]},
    POKEMON_NINETALES_ALOLA: { id: 10012, form: { parent: 38, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_MEOWTH_ALOLA: { id: 10013, form: { parent: 52, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10014 ]},
    POKEMON_PERSIAN_ALOLA: { id: 10014, form: { parent: 53, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_GRIMER_ALOLA: { id: 10015, form: { parent: 88, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10016 ]},
    POKEMON_MUK_ALOLA:  { id: 10016, form: { parent: 89, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_GEODUDE_ALOLA:  { id: 10017, form: { parent: 74, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10018 ]},
    POKEMON_GRAVELER_ALOLA: { id: 10018, form: { parent: 75, alola: true, loc: { fr: 'Alola', en: 'Alola' }}, evolves: [ 10019 ]},
    POKEMON_GOLEM_ALOLA:  { id: 10019, form: { parent: 76, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},

    POKEMON_MAROWAK_ALOLA:  { id: 10020, form: { parent: 105, alola: true, loc: { fr: 'Alola', en: 'Alola' }}},
    POKEMON_EXEGGUTOR_ALOLA:  { id: 10000, form: { parent: 103, alola: true, loc: { fr: 'Alola', en: 'Alola' }}}

    
}

const CP_MULT = 0.79030001

// Create special form pokemons
Object.keys(FORM_TABLE).forEach((key, index) => {
    const entry = FORM_TABLE[key], pokemonId = entry.form.parent, pokemon = pokedex.pokemons[pokemonId]
    let updates = { id: entry.id, form: entry.form }
    if (entry.evolves) {
        updates.evolves = entry.evolves
    }
    pokedex.pokemons[entry.id] = Object.assign({}, pokedex.pokemons[pokemonId], updates)
})

Object.keys(templatesMap).forEach(templateId => {

    if (templateId.indexOf('ALOLA') !== -1) {
        debugger
    }

    let id = getPokemonFromTemplateId(templateId)
    if (!id) {
        return
    }
    
    let pokemon = pokedex.pokemons[id]
    if (!pokemon) {
        return
    }

    let template = templatesMap[templateId]
    if (templateId.startsWith('SPAWN_')) {
        pokemon.gender = { m: template.genderSettings.gender.malePercent, f: template.genderSettings.gender.femalePercent }
        if (!pokemon.gender) {
            console.error(templateId, 'cannot find gender informations')
        }
        return
    }

    if (templateId.indexOf('POKEMON') === -1 || templateId.charAt(0) !== 'V') {
        return;
    }

    let settings = template.pokemonSettings
    let stats = settings.stats
    
    // Species
    let types = [ settings.type, settings.type2 ], species = []
    types.forEach(type => {
        if (type) {
            const index = type.lastIndexOf('_')
            if (index !== -1) {
                species.push(1 + TYPES_TABLE.indexOf(type.substring(index + 1).toUpperCase()))
            }
        }
    })

    const sourcePokemonId = getPokemonFromTemplateId(templateId, true)
    let candy = settings.candyToEvolve || pokemon.candy

    let atk = stats.baseAttack, def = stats.baseDefense, sta = stats.baseStamina
    let fastAttacks = _handleAttacks(settings.quickMoves, templatesMap, attacksMap, true)
    let chargedAttacks = _handleAttacks(settings.cinematicMoves, templatesMap, attacksMap, false)

    const cpmax = calcMaxCp(atk, def, sta)

    Object.assign(pokemon, {
        cpmax: cpmax,
        candy: candy,
        atk: atk,
        def: def,
        sta: sta,
        buddy: settings.kmBuddyDistance + ' KM' || '',
        attacks: {
            fast: fastAttacks,
            charged: chargedAttacks
        },
        species: species
    })

    switch (settings.rarity) {
        case 'POKEMON_RARITY_MYTHIC': pokemon.rarity = 'M'; break;
        case 'POKEMON_RARITY_LEGENDARY': pokemon.rarity = 'L'; break;
    }
})

let attacks = {}

Object.keys(attacksMap).forEach(key => {
    let attack = attacksMap[key]
    attacks[attack.id] = attack
    delete attack.id
})

pokedex.attacks = attacks

const babies = [
	[172, 25],
	[173, 35],
	[174, 39],
	[175, 176],
	[236, 106],
	[236, 107],
	[236, 237],
	[238, 124],
	[239, 125],
	[240, 126],
	[298, 183],
	[360, 202],
	[406, 315],
	[433, 358],
	[438, 185],
	[439, 122],
	[440, 113],
	[446, 143],
	[447, 448],
	[458, 226]
]

babies.forEach(entry => {
    let pokemon = pokedex.pokemons[entry[0]]
    pokemon.evolves = []
    pokemon.baby = true
})

babies.forEach(entry => {
    pokedex.pokemons[entry[0]].evolves.push(entry[1])
})

fs.writeFileSync('new-pokedex.json', JSON.stringify(pokedex))



////////////////////////////////////////////////////////////////////////////////

function calcMaxCp(atk, def, sta) {
    if (atk === 1 && def === 1 && sta === 1) {
        return 0
    }

    let res = ((atk + 15) * Math.pow(def + 15, 0.5) * Math.pow(sta + 15, 0.5) * Math.pow(0.79030001, 2)) / 10
    return Math.floor(res)
}

function generateEggs(pokedex, eggsList, eggs) {
    let pokemonKeys = Object.keys(pokedex.pokemons)
    for (let km in eggsList) {
        for (let pokemonName of eggsList[km]) {
            let found = false
            for (let pokemonId of pokemonKeys) {
                let pokemon = pokedex.pokemons[pokemonId]
                if (pokemon.loc[9].toUpperCase() === pokemonName.toUpperCase()) {
                    if (eggs[km].indexOf(Number(pokemonId)) === -1) {
                        eggs[km].push(Number(pokemonId))
                    }
                    found = true
                    break
                }
            }

            if (!found) {
                console.log(pokemonName, ' not found :(')
            }

        }
    }
}

function _handleAttacks(inputMoves, templatesMap, attacksMap, fast) {
    let list = []
    let moves = Array.isArray(inputMoves) ? inputMoves : [ inputMoves ]
    moves.forEach(move => {
        let templateAttack = _findAtk(true, move, templatesMap);
        let atkSettings = templateAttack.moveSettings
        let atkId = atkSettings.movementId
    
        let attack = attacksMap[atkId]
        if (!attack) {

            // Attacks can be numeric
            let attackName = isNaN(move) ? move : _attackNameFromTemplateId(templateAttack.templateId)
            let attackLocales = _getAtkLocalization(attackName);
            let typeId = _getTypeId(atkSettings.pokemonType)
            attack = {
                id: ATTACK_ID++,
                duration: atkSettings.durationMs / 1000,
		        dmg: atkSettings.power || 0,
		        energy: atkSettings.energyDelta || 0,
                type: typeId,
                loc: attackLocales
            }
            attacksMap[atkId] = attack
        }
    
        if (list.indexOf(attack.id) === -1) {
            list.push(attack.id);
        }
    })
    
    return list;
}

function _getTypeId(gameType) {
    let parts = gameType.split('_'), id = -1
    TYPES_TABLE.forEach((type, index) => {
        if (type === parts[parts.length  - 1]) {
            id = index + 1
        }
    })

    if (id < 0) {
        console.log('Unknonw game type:', gameType)
    }

    return id
}

function _getAtkLocalization(inputMove) {
    let move = replaceAll(inputMove, '_FAST', '')
    move = replaceAll(move, '_', ' ')
    let loc = __getAtkLocalization(move)
    if (!loc) {
        console.log(inputMove, ' cannot find localization')
    }

    return loc
}

function __getAtkLocalization(move) {
    let keys = Object.keys(ATK_LOC)
    for (let i = 0; i < keys.length; i++) {

        if (keys[i].toUpperCase() === move.toUpperCase()) {
            return {
                en: keys[i],
                fr: ATK_LOC[keys[i]]
            }
        }
    }

    return null
}

function _findAtk(fast, atk, map) {
    let result = null
    Object.keys(map).forEach(key => {
        let jsonAttack = map[key]
        if (jsonAttack.moveSettings && jsonAttack.moveSettings.movementId === atk) {
            result = jsonAttack
        }
    })

    return result;
}

function _escapeRegExp (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
};

function replaceAll (str, find, replace) {
    if (str && typeof str !== 'undefined') {
        return str.replace(new RegExp(_escapeRegExp(find), 'g'), replace);
    }
    return str;
};

function _attackNameFromTemplateId(templateId) {
    const text = '_MOVE_', index = templateId.indexOf(text)
    let attack = templateId.substring(index + text.length)
    return attack
}

function getPokemonFromTemplateId(templateId, ignoreFormTable) {

    if (!ignoreFormTable) {
        const formKeys = Object.keys(FORM_TABLE)
        for (let i = 0; i < formKeys.length; i++) {
            if (templateId.indexOf(formKeys[i]) !== -1) {
                return FORM_TABLE[formKeys[i]].id
            }
        }
    }

    let matches = templateId.match(new RegExp(/\d+/))
    return matches ? Number(matches[0]) : null
}

function buildFormsTable (templatesMap) {
    const POKEMON = 'POKEMON'
    Object.keys(templatesMap).forEach(id => {
        if (!id.startsWith("SPAWN_")) {
            return
        }

        let pokemonId = getPokemonFromTemplateId(id)
        if (!pokemonId) {
            return
        }

        let start = id.indexOf(POKEMON) + POKEMON.length, end = id.lastIndexOf('_')
        if (start === end) {
            return
        }

        console.log(id)
        //"SPAWN_V0351_POKEMON_CASTFORM_NORMAL
    })
}