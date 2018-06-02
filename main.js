
const fs = require('fs')

let ATTACK_ID = 1

let CP_MAX_TABLE = { "1":981,"2":1552,"3":2568,"4":831,"5":1484,"6":2686,"7":808,"8":1324,"9":2291,"10":393,"11":419,"12":1701,"13":397,"14":392,"15":1777,"16":580,"17":1085,"18":1994,"19":588,"20":1549,"21":673,"22":1814,"23":778,"24":1737,"25":787,"26":2025,"27":1194,"28":2328,"29":736,"30":1218,"31":2338,"32":739,"33":1252,"34":2386,"35":1085,"36":2353,"37":774,"38":2157,"39":713,"40":1906,"41":569,"42":1830,"43":1069,"44":1512,"45":2367,"46":836,"47":1657,"48":902,"49":1937,"50":465,"51":1333,"52":638,"53":1539,"54":966,"55":2270,"56":1002,"57":2105,"58":1110,"59":2839,"60":695,"61":1313,"62":2441,"63":1148,"64":1859,"65":2887,"66":1199,"67":1910,"68":2889,"69":916,"70":1475,"71":2268,"72":956,"73":2374,"74":1193,"75":1815,"76":2916,"77":1502,"78":2252,"79":1204,"80":2482,"81":1083,"82":2237,"83":1092,"84":1011,"85":2138,"86":899,"87":1894,"88":1269,"89":2709,"90":958,"91":2475,"92":1002,"93":1716,"94":2619,"95":1002,"96":992,"97":2048,"98":1386,"99":2694,"100":857,"101":1900,"102":1102,"103":2916,"104":943,"105":1691,"106":2406,"107":2098,"108":1322,"109":1091,"110":2183,"111":1679,"112":3300,"113":1469,"114":2208,"115":2463,"116":921,"117":1979,"118":1006,"119":2040,"120":926,"121":2303,"122":1984,"123":2464,"124":2512,"125":2196,"126":2254,"127":2770,"128":2488,"129":220,"130":3281,"131":2603,"132":718,"133":969,"134":3157,"135":2730,"136":2904,"137":1567,"138":1345,"139":2685,"140":1172,"141":2517,"142":2608,"143":3355,"144":2933,"145":3330,"146":3272,"147":860,"148":1609,"149":3581,"150":3982,"151":3090,"152":801,"153":1296,"154":2227,"155":831,"156":1484,"157":2686,"158":1011,"159":1598,"160":2721,"161":519,"162":1667,"163":640,"164":2040,"165":663,"166":1275,"167":685,"168":1636,"169":2466,"170":1067,"171":2077,"172":376,"173":620,"174":512,"175":540,"176":1543,"177":925,"178":1975,"179":887,"180":1402,"181":2695,"182":2108,"183":420,"184":1503,"185":2065,"186":2371,"187":508,"188":882,"189":1553,"190":1188,"191":316,"192":2048,"193":1326,"194":596,"195":1929,"196":3000,"197":2052,"198":1392,"199":2482,"200":1781,"201":1022,"202":1024,"203":1863,"204":1045,"205":2263,"206":1615,"207":1758,"208":2439,"209":1124,"210":2440,"211":1910,"212":2801,"213":300,"214":2938,"215":1868,"216":1184,"217":2760,"218":750,"219":1543,"220":663,"221":2284,"222":1214,"223":749,"224":2124,"225":937,"226":2032,"227":2032,"228":1110,"229":2529,"230":2424,"231":1175,"232":3022,"233":2546,"234":1988,"235":389,"236":404,"237":1905,"238":1230,"239":1073,"240":1178,"241":2312,"242":3219,"243":3349,"244":3377,"245":2823,"246":904,"247":1608,"248":3670,"249":3598,"250":3889,"251":3090,"252":923,"253":1508,"254":2584,"255":959,"256":1472,"257":2631,"258":981,"259":1617,"260":2815,"261":564,"262":1783,"263":423,"264":1533,"265":502,"266":517,"267":1573,"268":517,"269":1121,"270":526,"271":1102,"272":2229,"273":526,"274":1117,"275":2186,"276":642,"277":1747,"278":642,"279":1969,"280":436,"281":843,"282":2964,"283":695,"284":2135,"285":722,"286":2407,"287":942,"288":1896,"289":4548,"290":674,"291":1751,"292":421,"293":603,"294":1233,"295":2267,"296":745,"297":2765,"298":316,"299":831,"300":659,"301":1385,"302":1305,"303":1484,"304":1232,"305":2004,"306":3004,"307":555,"308":1275,"309":810,"310":2131,"311":1681,"312":1585,"313":1620,"314":1620,"315":1718,"316":788,"317":1872,"318":874,"319":1986,"320":1424,"321":2258,"322":957,"323":2016,"324":2036,"325":1285,"326":2310,"327":1088,"328":1092,"329":1065,"330":2458,"331":1080,"332":2092,"333":722,"334":1868,"335":2214,"336":1928,"337":2245,"338":2245,"339":716,"340":1991,"341":1107,"342":2317,"343":676,"344":1782,"345":1181,"346":2081,"347":1310,"348":2675,"349":220,"350":2967,"351":1486,"352":1924,"353":872,"354":2073,"355":523,"356":1335,"357":1846,"358":2095,"359":2280,"360":503,"361":772,"362":1945,"363":876,"364":1607,"365":2606,"366":1091,"367":2140,"368":2281,"369":2557,"370":735,"371":1053,"372":1958,"373":3532,"374":843,"375":1570,"376":3637,"377":3087,"378":3087,"379":2261,"380":3377,"381":3644,"382":4074,"383":4074,"384":3645,"385":3090,"386":15}
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
    V0103_POKEMON_EXEGGUTOR_ALOLA:  { id: 10000, form: { parent: 103, loc: { fr: 'Alola', en: 'Alola)' }}},
    V0351_POKEMON_CASTFORM_RAINY:   { id: 10001, form: { parent: 351, loc: { fr: 'Pluie', en: 'Rainy)' }}},
    V0351_POKEMON_CASTFORM_SNOWY:   { id: 10002, form: { parent: 351, loc: { fr: 'Neige', en: 'Snowy)' }}},
    V0351_POKEMON_CASTFORM_SUNNY:   { id: 10003, form: { parent: 351, loc: { fr: 'Soleil', en: 'Sunny)' }}},
    V0386_POKEMON_DEOXYS_ATTACK:    { id: 10004, form: { parent: 386, loc: { fr: 'Attaque', en: 'Attack' }}},
    V0386_POKEMON_DEOXYS_DEFENSE:   { id: 10005, form: { parent: 386, loc: { fr: 'Défense', en: 'Defense' }}},
    V0386_POKEMON_DEOXYS_SPEED:     { id: 10006, form: { parent: 386, loc: { fr: 'Vitesse', en: 'Speed' }}}
}

// Create special form pokemons
Object.keys(FORM_TABLE).forEach((key, index) => {
    const pokemonId = getPokemonFromTemplateId(key, true), entry = FORM_TABLE[key], pokemon = pokedex.pokemons[pokemonId]
    
    let updates = { id: entry.id, form: entry.form }
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
    let cpmax = CP_MAX_TABLE[sourcePokemonId], candy = settings.candyToEvolve || pokemon.candy
    let atk = stats.baseAttack, def = stats.baseDefense, sta = stats.baseStamina
    let fastAttacks = _handleAttacks(settings.quickMoves, templatesMap, attacksMap, true)
    let chargedAttacks = _handleAttacks(settings.cinematicMoves, templatesMap, attacksMap, false)
    
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