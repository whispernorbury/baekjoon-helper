const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const arr = [
 { name: 'Bulbasaur', type: 'Grass Poison' },
 { name: 'Ivysaur', type: 'Grass Poison' },
 { name: 'Venusaur', type: 'Grass Poison' },
 { name: 'Charmander', type: 'Fire' },
 { name: 'Charmeleon', type: 'Fire' },
 { name: 'Charizard', type: 'Fire Flying' },
 { name: 'Squirtle', type: 'Water' },
 { name: 'Wartortle', type: 'Water' },
 { name: 'Blastoise', type: 'Water' },
 { name: 'Caterpie', type: 'Bug' },
 { name: 'Metapod', type: 'Bug' },
 { name: 'Butterfree', type: 'Bug Flying' },
 { name: 'Weedle', type: 'Bug Poison' },
 { name: 'Kakuna', type: 'Bug Poison' },
 { name: 'Beedrill', type: 'Bug Poison' },
 { name: 'Pidgey', type: 'Normal Flying' },
 { name: 'Pidgeotto', type: 'Normal Flying' },
 { name: 'Pidgeot', type: 'Normal Flying' },
 { name: 'Rattata', type: 'Normal' },
 { name: 'Raticate', type: 'Normal' },
 { name: 'Spearow', type: 'Normal Flying' },
 { name: 'Fearow', type: 'Normal Flying' },
 { name: 'Ekans', type: 'Poison' },
 { name: 'Arbok', type: 'Poison' },
 { name: 'Pikachu', type: 'Electric' },
 { name: 'Raichu', type: 'Electric' },
 { name: 'Sandshrew', type: 'Ground' },
 { name: 'Sandslash', type: 'Ground' },
 { name: 'Nidoran♀', type: 'Poison' },
 { name: 'Nidorina', type: 'Poison' },
 { name: 'Nidoqueen', type: 'Poison Ground' },
 { name: 'Nidoran♂', type: 'Poison' },
 { name: 'Nidorino', type: 'Poison' },
 { name: 'Nidoking', type: 'Poison Ground' },
 { name: 'Clefairy', type: 'Fairy' },
 { name: 'Clefable', type: 'Fairy' },
 { name: 'Vulpix', type: 'Fire' },
 { name: 'Ninetales', type: 'Fire' },
 { name: 'Jigglypuff', type: 'Normal Fairy' },
 { name: 'Wigglytuff', type: 'Normal Fairy' },
 { name: 'Zubat', type: 'Poison Flying' },
 { name: 'Golbat', type: 'Poison Flying' },
 { name: 'Oddish', type: 'Grass Poison' },
 { name: 'Gloom', type: 'Grass Poison' },
 { name: 'Vileplume', type: 'Grass Poison' },
 { name: 'Paras', type: 'Bug Grass' },
 { name: 'Parasect', type: 'Bug Grass' },
 { name: 'Venonat', type: 'Bug Poison' },
 { name: 'Venomoth', type: 'Bug Poison' },
 { name: 'Diglett', type: 'Ground' },
 { name: 'Dugtrio', type: 'Ground' },
 { name: 'Meowth', type: 'Normal' },
 { name: 'Persian', type: 'Normal' },
 { name: 'Psyduck', type: 'Water' },
 { name: 'Golduck', type: 'Water' },
 { name: 'Mankey', type: 'Fighting' },
 { name: 'Primeape', type: 'Fighting' },
 { name: 'Growlithe', type: 'Fire' },
 { name: 'Arcanine', type: 'Fire' },
 { name: 'Poliwag', type: 'Water' },
 { name: 'Poliwhirl', type: 'Water' },
 { name: 'Poliwrath', type: 'Water Fighting' },
 { name: 'Abra', type: 'Psychic' },
 { name: 'Kadabra', type: 'Psychic' },
 { name: 'Alakazam', type: 'Psychic' },
 { name: 'Machop', type: 'Fighting' },
 { name: 'Machoke', type: 'Fighting' },
 { name: 'Machamp', type: 'Fighting' },
 { name: 'Bellsprout', type: 'Grass Poison' },
 { name: 'Weepinbell', type: 'Grass Poison' },
 { name: 'Victreebel', type: 'Grass Poison' },
 { name: 'Tentacool', type: 'Water Poison' },
 { name: 'Tentacruel', type: 'Water Poison' },
 { name: 'Geodude', type: 'Rock Ground' },
 { name: 'Graveler', type: 'Rock Ground' },
 { name: 'Golem', type: 'Rock Ground' },
 { name: 'Ponyta', type: 'Fire' },
 { name: 'Rapidash', type: 'Fire' },
 { name: 'Slowpoke', type: 'Water Psychic' },
 { name: 'Slowbro', type: 'Water Psychic' },
 { name: 'Magnemite', type: 'Electric Steel' },
 { name: 'Magneton', type: 'Electric Steel' },
 { name: "Farfetch'd", type: 'Normal Flying' },
 { name: 'Doduo', type: 'Normal Flying' },
 { name: 'Dodrio', type: 'Normal Flying' },
 { name: 'Seel', type: 'Water' },
 { name: 'Dewgong', type: 'Water Ice' },
 { name: 'Grimer', type: 'Poison' },
 { name: 'Muk', type: 'Poison' },
 { name: 'Shellder', type: 'Water' },
 { name: 'Cloyster', type: 'Water Ice' },
 { name: 'Gastly', type: 'Ghost Poison' },
 { name: 'Haunter', type: 'Ghost Poison' },
 { name: 'Gengar', type: 'Ghost Poison' },
 { name: 'Onix', type: 'Rock Ground' },
 { name: 'Drowzee', type: 'Psychic' },
 { name: 'Hypno', type: 'Psychic' },
 { name: 'Krabby', type: 'Water' },
 { name: 'Kingler', type: 'Water' },
 { name: 'Voltorb', type: 'Electric' },
 { name: 'Electrode', type: 'Electric' },
 { name: 'Exeggcute', type: 'Grass Psychic' },
 { name: 'Exeggutor', type: 'Grass Psychic' },
 { name: 'Cubone', type: 'Ground' },
 { name: 'Marowak', type: 'Ground' },
 { name: 'Hitmonlee', type: 'Fighting' },
 { name: 'Hitmonchan', type: 'Fighting' },
 { name: 'Lickitung', type: 'Normal' },
 { name: 'Koffing', type: 'Poison' },
 { name: 'Weezing', type: 'Poison' },
 { name: 'Rhyhorn', type: 'Ground Rock' },
 { name: 'Rhydon', type: 'Ground Rock' },
 { name: 'Chansey', type: 'Normal' },
 { name: 'Tangela', type: 'Grass' },
 { name: 'Kangaskhan', type: 'Normal' },
 { name: 'Horsea', type: 'Water' },
 { name: 'Seadra', type: 'Water' },
 { name: 'Goldeen', type: 'Water' },
 { name: 'Seaking', type: 'Water' },
 { name: 'Staryu', type: 'Water' },
 { name: 'Starmie', type: 'Water Psychic' },
 { name: 'Mr. Mime', type: 'Psychic Fairy' },
 { name: 'Scyther', type: 'Bug Flying' },
 { name: 'Jynx', type: 'Ice Psychic' },
 { name: 'Electabuzz', type: 'Electric' },
 { name: 'Magmar', type: 'Fire' },
 { name: 'Pinsir', type: 'Bug' },
 { name: 'Tauros', type: 'Normal' },
 { name: 'Magikarp', type: 'Water' },
 { name: 'Gyarados', type: 'Water Flying' },
 { name: 'Lapras', type: 'Water Ice' },
 { name: 'Ditto', type: 'Normal' },
 { name: 'Eevee', type: 'Normal' },
 { name: 'Vaporeon', type: 'Water' },
 { name: 'Jolteon', type: 'Electric' },
 { name: 'Flareon', type: 'Fire' },
 { name: 'Porygon', type: 'Normal' },
 { name: 'Omanyte', type: 'Rock Water' },
 { name: 'Omastar', type: 'Rock Water' },
 { name: 'Kabuto', type: 'Rock Water' },
 { name: 'Kabutops', type: 'Rock Water' },
 { name: 'Aerodactyl', type: 'Rock Flying' },
 { name: 'Snorlax', type: 'Normal' },
 { name: 'Articuno', type: 'Ice Flying' },
 { name: 'Zapdos', type: 'Electric Flying' },
 { name: 'Moltres', type: 'Fire Flying' },
 { name: 'Dratini', type: 'Dragon' },
 { name: 'Dragonair', type: 'Dragon' },
 { name: 'Dragonite', type: 'Dragon Flying' },
 { name: 'Mewtwo', type: 'Psychic' },
 { name: 'Mew', type: 'Psychic' },
 { name: 'Chikorita', type: 'Grass' },
 { name: 'Bayleef', type: 'Grass' },
 { name: 'Meganium', type: 'Grass' },
 { name: 'Cyndaquil', type: 'Fire' },
 { name: 'Quilava', type: 'Fire' },
 { name: 'Typhlosion', type: 'Fire' },
 { name: 'Totodile', type: 'Water' },
 { name: 'Croconaw', type: 'Water' },
 { name: 'Feraligatr', type: 'Water' },
 { name: 'Sentret', type: 'Normal' },
 { name: 'Furret', type: 'Normal' },
 { name: 'Hoothoot', type: 'Normal Flying' },
 { name: 'Noctowl', type: 'Normal Flying' },
 { name: 'Ledyba', type: 'Bug Flying' },
 { name: 'Ledian', type: 'Bug Flying' },
 { name: 'Spinarak', type: 'Bug Poison' },
 { name: 'Ariados', type: 'Bug Poison' },
 { name: 'Crobat', type: 'Poison Flying' },
 { name: 'Chinchou', type: 'Water Electric' },
 { name: 'Lanturn', type: 'Water Electric' },
 { name: 'Pichu', type: 'Electric' },
 { name: 'Cleffa', type: 'Fairy' },
 { name: 'Igglybuff', type: 'Normal Fairy' },
 { name: 'Togepi', type: 'Fairy' },
 { name: 'Togetic', type: 'Fairy Flying' },
 { name: 'Natu', type: 'Psychic Flying' },
 { name: 'Xatu', type: 'Psychic Flying' },
 { name: 'Mareep', type: 'Electric' },
 { name: 'Flaaffy', type: 'Electric' },
 { name: 'Ampharos', type: 'Electric' },
 { name: 'Bellossom', type: 'Grass' },
 { name: 'Marill', type: 'Water Fairy' },
 { name: 'Azumarill', type: 'Water Fairy' },
 { name: 'Sudowoodo', type: 'Rock' },
 { name: 'Politoed', type: 'Water' },
 { name: 'Hoppip', type: 'Grass Flying' },
 { name: 'Skiploom', type: 'Grass Flying' },
 { name: 'Jumpluff', type: 'Grass Flying' },
 { name: 'Aipom', type: 'Normal' },
 { name: 'Sunkern', type: 'Grass' },
 { name: 'Sunflora', type: 'Grass' },
 { name: 'Yanma', type: 'Bug Flying' },
 { name: 'Wooper', type: 'Water Ground' },
 { name: 'Quagsire', type: 'Water Ground' },
 { name: 'Espeon', type: 'Psychic' },
 { name: 'Umbreon', type: 'Dark' },
 { name: 'Murkrow', type: 'Dark Flying' },
 { name: 'Slowking', type: 'Water Psychic' },
 { name: 'Misdreavus', type: 'Ghost' },
 { name: 'Unown', type: 'Psychic' },
 { name: 'Wobbuffet', type: 'Psychic' },
 { name: 'Girafarig', type: 'Normal Psychic' },
 { name: 'Pineco', type: 'Bug' },
 { name: 'Forretress', type: 'Bug Steel' },
 { name: 'Dunsparce', type: 'Normal' },
 { name: 'Gligar', type: 'Ground Flying' },
 { name: 'Steelix', type: 'Steel Ground' },
 { name: 'Snubbull', type: 'Fairy' },
 { name: 'Granbull', type: 'Fairy' },
 { name: 'Qwilfish', type: 'Water Poison' },
 { name: 'Scizor', type: 'Bug Steel' },
 { name: 'Shuckle', type: 'Bug Rock' },
 { name: 'Heracross', type: 'Bug Fighting' },
 { name: 'Sneasel', type: 'Dark Ice' },
 { name: 'Teddiursa', type: 'Normal' },
 { name: 'Ursaring', type: 'Normal' },
 { name: 'Slugma', type: 'Fire' },
 { name: 'Magcargo', type: 'Fire Rock' },
 { name: 'Swinub', type: 'Ice Ground' },
 { name: 'Piloswine', type: 'Ice Ground' },
 { name: 'Corsola', type: 'Water Rock' },
 { name: 'Remoraid', type: 'Water' },
 { name: 'Octillery', type: 'Water' },
 { name: 'Delibird', type: 'Ice Flying' },
 { name: 'Mantine', type: 'Water Flying' },
 { name: 'Skarmory', type: 'Steel Flying' },
 { name: 'Houndour', type: 'Dark Fire' },
 { name: 'Houndoom', type: 'Dark Fire' },
 { name: 'Kingdra', type: 'Water Dragon' },
 { name: 'Phanpy', type: 'Ground' },
 { name: 'Donphan', type: 'Ground' },
 { name: 'Porygon2', type: 'Normal' },
 { name: 'Stantler', type: 'Normal' },
 { name: 'Smeargle', type: 'Normal' },
 { name: 'Tyrogue', type: 'Fighting' },
 { name: 'Hitmontop', type: 'Fighting' },
 { name: 'Smoochum', type: 'Ice Psychic' },
 { name: 'Elekid', type: 'Electric' },
 { name: 'Magby', type: 'Fire' },
 { name: 'Miltank', type: 'Normal' },
 { name: 'Blissey', type: 'Normal' },
 { name: 'Raikou', type: 'Electric' },
 { name: 'Entei', type: 'Fire' },
 { name: 'Suicune', type: 'Water' },
 { name: 'Larvitar', type: 'Rock Ground' },
 { name: 'Pupitar', type: 'Rock Ground' },
 { name: 'Tyranitar', type: 'Rock Dark' },
 { name: 'Lugia', type: 'Psychic Flying' },
 { name: 'Ho-oh', type: 'Fire Flying' },
 { name: 'Celebi', type: 'Psychic Grass' },
 { name: 'Treecko', type: 'Grass' },
 { name: 'Grovyle', type: 'Grass' },
 { name: 'Sceptile', type: 'Grass' },
 { name: 'Torchic', type: 'Fire' },
 { name: 'Combusken', type: 'Fire Fighting' },
 { name: 'Blaziken', type: 'Fire Fighting' },
 { name: 'Mudkip', type: 'Water' },
 { name: 'Marshtomp', type: 'Water Ground' },
 { name: 'Swampert', type: 'Water Ground' },
 { name: 'Poochyena', type: 'Dark' },
 { name: 'Mightyena', type: 'Dark' },
 { name: 'Zigzagoon', type: 'Normal' },
 { name: 'Linoone', type: 'Normal' },
 { name: 'Wurmple', type: 'Bug' },
 { name: 'Silcoon', type: 'Bug' },
 { name: 'Beautifly', type: 'Bug Flying' },
 { name: 'Cascoon', type: 'Bug' },
 { name: 'Dustox', type: 'Bug Poison' },
 { name: 'Lotad', type: 'Water Grass' },
 { name: 'Lombre', type: 'Water Grass' },
 { name: 'Ludicolo', type: 'Water Grass' },
 { name: 'Seedot', type: 'Grass' },
 { name: 'Nuzleaf', type: 'Grass Dark' },
 { name: 'Shiftry', type: 'Grass Dark' },
 { name: 'Taillow', type: 'Normal Flying' },
 { name: 'Swellow', type: 'Normal Flying' },
 { name: 'Wingull', type: 'Water Flying' },
 { name: 'Pelipper', type: 'Water Flying' },
 { name: 'Ralts', type: 'Psychic Fairy' },
 { name: 'Kirlia', type: 'Psychic Fairy' },
 { name: 'Gardevoir', type: 'Psychic Fairy' },
 { name: 'Surskit', type: 'Bug Water' },
 { name: 'Masquerain', type: 'Bug Flying' },
 { name: 'Shroomish', type: 'Grass' },
 { name: 'Breloom', type: 'Grass Fighting' },
 { name: 'Slakoth', type: 'Normal' },
 { name: 'Vigoroth', type: 'Normal' },
 { name: 'Slaking', type: 'Normal' },
 { name: 'Nincada', type: 'Bug Ground' },
 { name: 'Ninjask', type: 'Bug Flying' },
 { name: 'Shedinja', type: 'Bug Ghost' },
 { name: 'Whismur', type: 'Normal' },
 { name: 'Loudred', type: 'Normal' },
 { name: 'Exploud', type: 'Normal' },
 { name: 'Makuhita', type: 'Fighting' },
 { name: 'Hariyama', type: 'Fighting' },
 { name: 'Azurill', type: 'Normal Fairy' },
 { name: 'Nosepass', type: 'Rock' },
 { name: 'Skitty', type: 'Normal' },
 { name: 'Delcatty', type: 'Normal' },
 { name: 'Sableye', type: 'Dark Ghost' },
 { name: 'Mawile', type: 'Steel Fairy' },
 { name: 'Aron', type: 'Steel Rock' },
 { name: 'Lairon', type: 'Steel Rock' },
 { name: 'Aggron', type: 'Steel Rock' },
 { name: 'Meditite', type: 'Fighting Psychic' },
 { name: 'Medicham', type: 'Fighting Psychic' },
 { name: 'Electrike', type: 'Electric' },
 { name: 'Manectric', type: 'Electric' },
 { name: 'Plusle', type: 'Electric' },
 { name: 'Minun', type: 'Electric' },
 { name: 'Volbeat', type: 'Bug' },
 { name: 'Illumise', type: 'Bug' },
 { name: 'Roselia', type: 'Grass Poison' },
 { name: 'Gulpin', type: 'Poison' },
 { name: 'Swalot', type: 'Poison' },
 { name: 'Carvanha', type: 'Water Dark' },
 { name: 'Sharpedo', type: 'Water Dark' },
 { name: 'Wailmer', type: 'Water' },
 { name: 'Wailord', type: 'Water' },
 { name: 'Numel', type: 'Fire Ground' },
 { name: 'Camerupt', type: 'Fire Ground' },
 { name: 'Torkoal', type: 'Fire' },
 { name: 'Spoink', type: 'Psychic' },
 { name: 'Grumpig', type: 'Psychic' },
 { name: 'Spinda', type: 'Normal' },
 { name: 'Trapinch', type: 'Ground' },
 { name: 'Vibrava', type: 'Ground Dragon' },
 { name: 'Flygon', type: 'Ground Dragon' },
 { name: 'Cacnea', type: 'Grass' },
 { name: 'Cacturne', type: 'Grass Dark' },
 { name: 'Swablu', type: 'Normal Flying' },
 { name: 'Altaria', type: 'Dragon Flying' },
 { name: 'Zangoose', type: 'Normal' },
 { name: 'Seviper', type: 'Poison' },
 { name: 'Lunatone', type: 'Rock Psychic' },
 { name: 'Solrock', type: 'Rock Psychic' },
 { name: 'Barboach', type: 'Water Ground' },
 { name: 'Whiscash', type: 'Water Ground' },
 { name: 'Corphish', type: 'Water' },
 { name: 'Crawdaunt', type: 'Water Dark' },
 { name: 'Baltoy', type: 'Ground Psychic' },
 { name: 'Claydol', type: 'Ground Psychic' },
 { name: 'Lileep', type: 'Rock Grass' },
 { name: 'Cradily', type: 'Rock Grass' },
 { name: 'Anorith', type: 'Rock Bug' },
 { name: 'Armaldo', type: 'Rock Bug' },
 { name: 'Feebas', type: 'Water' },
 { name: 'Milotic', type: 'Water' },
 { name: 'Castform', type: 'Normal' },
 { name: 'Kecleon', type: 'Normal' },
 { name: 'Shuppet', type: 'Ghost' },
 { name: 'Banette', type: 'Ghost' },
 { name: 'Duskull', type: 'Ghost' },
 { name: 'Dusclops', type: 'Ghost' },
 { name: 'Tropius', type: 'Grass Flying' },
 { name: 'Chimecho', type: 'Psychic' },
 { name: 'Absol', type: 'Dark' },
 { name: 'Wynaut', type: 'Psychic' },
 { name: 'Snorunt', type: 'Ice' },
 { name: 'Glalie', type: 'Ice' },
 { name: 'Spheal', type: 'Ice Water' },
 { name: 'Sealeo', type: 'Ice Water' },
 { name: 'Walrein', type: 'Ice Water' },
 { name: 'Clamperl', type: 'Water' },
 { name: 'Huntail', type: 'Water' },
 { name: 'Gorebyss', type: 'Water' },
 { name: 'Relicanth', type: 'Water Rock' },
 { name: 'Luvdisc', type: 'Water' },
 { name: 'Bagon', type: 'Dragon' },
 { name: 'Shelgon', type: 'Dragon' },
 { name: 'Salamence', type: 'Dragon Flying' },
 { name: 'Beldum', type: 'Steel Psychic' },
 { name: 'Metang', type: 'Steel Psychic' },
 { name: 'Metagross', type: 'Steel Psychic' },
 { name: 'Regirock', type: 'Rock' },
 { name: 'Regice', type: 'Ice' },
 { name: 'Registeel', type: 'Steel' },
 { name: 'Latias', type: 'Dragon Psychic' },
 { name: 'Latios', type: 'Dragon Psychic' },
 { name: 'Kyogre', type: 'Water' },
 { name: 'Groudon', type: 'Ground' },
 { name: 'Rayquaza', type: 'Dragon Flying' },
 { name: 'Jirachi', type: 'Steel Psychic' },
 { name: 'Deoxys', type: 'Psychic' },
 { name: 'Turtwig', type: 'Grass' },
 { name: 'Grotle', type: 'Grass' },
 { name: 'Torterra', type: 'Grass Ground' },
 { name: 'Chimchar', type: 'Fire' },
 { name: 'Monferno', type: 'Fire Fighting' },
 { name: 'Infernape', type: 'Fire Fighting' },
 { name: 'Piplup', type: 'Water' },
 { name: 'Prinplup', type: 'Water' },
 { name: 'Empoleon', type: 'Water Steel' },
 { name: 'Starly', type: 'Normal Flying' },
 { name: 'Staravia', type: 'Normal Flying' },
 { name: 'Staraptor', type: 'Normal Flying' },
 { name: 'Bidoof', type: 'Normal' },
 { name: 'Bibarel', type: 'Normal Water' },
 { name: 'Kricketot', type: 'Bug' },
 { name: 'Kricketune', type: 'Bug' },
 { name: 'Shinx', type: 'Electric' },
 { name: 'Luxio', type: 'Electric' },
 { name: 'Luxray', type: 'Electric' },
 { name: 'Budew', type: 'Grass Poison' },
 { name: 'Roserade', type: 'Grass Poison' },
 { name: 'Cranidos', type: 'Rock' },
 { name: 'Rampardos', type: 'Rock' },
 { name: 'Shieldon', type: 'Rock Steel' },
 { name: 'Bastiodon', type: 'Rock Steel' },
 { name: 'Burmy', type: 'Bug' },
 { name: 'Wormadam', type: 'Bug Grass' },
 { name: 'Mothim', type: 'Bug Flying' },
 { name: 'Combee', type: 'Bug Flying' },
 { name: 'Vespiquen', type: 'Bug Flying' },
 { name: 'Pachirisu', type: 'Electric' },
 { name: 'Buizel', type: 'Water' },
 { name: 'Floatzel', type: 'Water' },
 { name: 'Cherubi', type: 'Grass' },
 { name: 'Cherrim', type: 'Grass' },
 { name: 'Shellos', type: 'Water' },
 { name: 'Gastrodon', type: 'Water Ground' },
 { name: 'Ambipom', type: 'Normal' },
 { name: 'Drifloon', type: 'Ghost Flying' },
 { name: 'Drifblim', type: 'Ghost Flying' },
 { name: 'Buneary', type: 'Normal' },
 { name: 'Lopunny', type: 'Normal' },
 { name: 'Mismagius', type: 'Ghost' },
 { name: 'Honchkrow', type: 'Dark Flying' },
 { name: 'Glameow', type: 'Normal' },
 { name: 'Purugly', type: 'Normal' },
 { name: 'Chingling', type: 'Psychic' },
 { name: 'Stunky', type: 'Poison Dark' },
 { name: 'Skuntank', type: 'Poison Dark' },
 { name: 'Bronzor', type: 'Steel Psychic' },
 { name: 'Bronzong', type: 'Steel Psychic' },
 { name: 'Bonsly', type: 'Rock' },
 { name: 'Mime Jr.', type: 'Psychic Fairy' },
 { name: 'Happiny', type: 'Normal' },
 { name: 'Chatot', type: 'Normal Flying' },
 { name: 'Spiritomb', type: 'Ghost Dark' },
 { name: 'Gible', type: 'Dragon Ground' },
 { name: 'Gabite', type: 'Dragon Ground' },
 { name: 'Garchomp', type: 'Dragon Ground' },
 { name: 'Munchlax', type: 'Normal' },
 { name: 'Riolu', type: 'Fighting' },
 { name: 'Lucario', type: 'Fighting Steel' },
 { name: 'Hippopotas', type: 'Ground' },
 { name: 'Hippowdon', type: 'Ground' },
 { name: 'Skorupi', type: 'Poison Bug' },
 { name: 'Drapion', type: 'Poison Dark' },
 { name: 'Croagunk', type: 'Poison Fighting' },
 { name: 'Toxicroak', type: 'Poison Fighting' },
 { name: 'Carnivine', type: 'Grass' },
 { name: 'Finneon', type: 'Water' },
 { name: 'Lumineon', type: 'Water' },
 { name: 'Mantyke', type: 'Water Flying' },
 { name: 'Snover', type: 'Grass Ice' },
 { name: 'Abomasnow', type: 'Grass Ice' },
 { name: 'Weavile', type: 'Dark Ice' },
 { name: 'Magnezone', type: 'Electric Steel' },
 { name: 'Lickilicky', type: 'Normal' },
 { name: 'Rhyperior', type: 'Ground Rock' },
 { name: 'Tangrowth', type: 'Grass' },
 { name: 'Electivire', type: 'Electric' },
 { name: 'Magmortar', type: 'Fire' },
 { name: 'Togekiss', type: 'Fairy Flying' },
 { name: 'Yanmega', type: 'Bug Flying' },
 { name: 'Leafeon', type: 'Grass' },
 { name: 'Glaceon', type: 'Ice' },
 { name: 'Gliscor', type: 'Ground Flying' },
 { name: 'Mamoswine', type: 'Ice Ground' },
 { name: 'Porygon-Z', type: 'Normal' },
 { name: 'Gallade', type: 'Psychic Fighting' },
 { name: 'Probopass', type: 'Rock Steel' },
 { name: 'Dusknoir', type: 'Ghost' },
 { name: 'Froslass', type: 'Ice Ghost' },
 { name: 'Rotom', type: 'Electric Ghost' },
 { name: 'Uxie', type: 'Psychic' },
 { name: 'Mesprit', type: 'Psychic' },
 { name: 'Azelf', type: 'Psychic' },
 { name: 'Dialga', type: 'Steel Dragon' },
 { name: 'Palkia', type: 'Water Dragon' },
 { name: 'Heatran', type: 'Fire Steel' },
 { name: 'Regigigas', type: 'Normal' },
 { name: 'Giratina', type: 'Ghost Dragon' },
 { name: 'Cresselia', type: 'Psychic' },
 { name: 'Phione', type: 'Water' },
 { name: 'Manaphy', type: 'Water' },
 { name: 'Darkrai', type: 'Dark' },
 { name: 'Shaymin', type: 'Grass' },
 { name: 'Arceus', type: 'Normal' },
 { name: 'Victini', type: 'Psychic Fire' },
 { name: 'Snivy', type: 'Grass' },
 { name: 'Servine', type: 'Grass' },
 { name: 'Serperior', type: 'Grass' },
 { name: 'Tepig', type: 'Fire' },
 { name: 'Pignite', type: 'Fire Fighting' },
 { name: 'Emboar', type: 'Fire Fighting' },
 { name: 'Oshawott', type: 'Water' },
 { name: 'Dewott', type: 'Water' },
 { name: 'Samurott', type: 'Water' },
 { name: 'Patrat', type: 'Normal' },
 { name: 'Watchog', type: 'Normal' },
 { name: 'Lillipup', type: 'Normal' },
 { name: 'Herdier', type: 'Normal' },
 { name: 'Stoutland', type: 'Normal' },
 { name: 'Purrloin', type: 'Dark' },
 { name: 'Liepard', type: 'Dark' },
 { name: 'Pansage', type: 'Grass' },
 { name: 'Simisage', type: 'Grass' },
 { name: 'Pansear', type: 'Fire' },
 { name: 'Simisear', type: 'Fire' },
 { name: 'Panpour', type: 'Water' },
 { name: 'Simipour', type: 'Water' },
 { name: 'Munna', type: 'Psychic' },
 { name: 'Musharna', type: 'Psychic' },
 { name: 'Pidove', type: 'Normal Flying' },
 { name: 'Tranquill', type: 'Normal Flying' },
 { name: 'Unfezant', type: 'Normal Flying' },
 { name: 'Blitzle', type: 'Electric' },
 { name: 'Zebstrika', type: 'Electric' },
 { name: 'Roggenrola', type: 'Rock' },
 { name: 'Boldore', type: 'Rock' },
 { name: 'Gigalith', type: 'Rock' },
 { name: 'Woobat', type: 'Psychic Flying' },
 { name: 'Swoobat', type: 'Psychic Flying' },
 { name: 'Drilbur', type: 'Ground' },
 { name: 'Excadrill', type: 'Ground Steel' },
 { name: 'Audino', type: 'Normal' },
 { name: 'Timburr', type: 'Fighting' },
 { name: 'Gurdurr', type: 'Fighting' },
 { name: 'Conkeldurr', type: 'Fighting' },
 { name: 'Tympole', type: 'Water' },
 { name: 'Palpitoad', type: 'Water Ground' },
 { name: 'Seismitoad', type: 'Water Ground' },
 { name: 'Throh', type: 'Fighting' },
 { name: 'Sawk', type: 'Fighting' },
 { name: 'Sewaddle', type: 'Bug Grass' },
 { name: 'Swadloon', type: 'Bug Grass' },
 { name: 'Leavanny', type: 'Bug Grass' },
 { name: 'Venipede', type: 'Bug Poison' },
 { name: 'Whirlipede', type: 'Bug Poison' },
 { name: 'Scolipede', type: 'Bug Poison' },
 { name: 'Cottonee', type: 'Grass Fairy' },
 { name: 'Whimsicott', type: 'Grass Fairy' },
 { name: 'Petilil', type: 'Grass' },
 { name: 'Lilligant', type: 'Grass' },
 { name: 'Basculin', type: 'Water' },
 { name: 'Sandile', type: 'Ground Dark' },
 { name: 'Krokorok', type: 'Ground Dark' },
 { name: 'Krookodile', type: 'Ground Dark' },
 { name: 'Darumaka', type: 'Fire' },
 { name: 'Darmanitan', type: 'Fire' },
 { name: 'Maractus', type: 'Grass' },
 { name: 'Dwebble', type: 'Bug Rock' },
 { name: 'Crustle', type: 'Bug Rock' },
 { name: 'Scraggy', type: 'Dark Fighting' },
 { name: 'Scrafty', type: 'Dark Fighting' },
 { name: 'Sigilyph', type: 'Psychic Flying' },
 { name: 'Yamask', type: 'Ghost' },
 { name: 'Cofagrigus', type: 'Ghost' },
 { name: 'Tirtouga', type: 'Water Rock' },
 { name: 'Carracosta', type: 'Water Rock' },
 { name: 'Archen', type: 'Rock Flying' },
 { name: 'Archeops', type: 'Rock Flying' },
 { name: 'Trubbish', type: 'Poison' },
 { name: 'Garbodor', type: 'Poison' },
 { name: 'Zorua', type: 'Dark' },
 { name: 'Zoroark', type: 'Dark' },
 { name: 'Minccino', type: 'Normal' },
 { name: 'Cinccino', type: 'Normal' },
 { name: 'Gothita', type: 'Psychic' },
 { name: 'Gothorita', type: 'Psychic' },
 { name: 'Gothitelle', type: 'Psychic' },
 { name: 'Solosis', type: 'Psychic' },
 { name: 'Duosion', type: 'Psychic' },
 { name: 'Reuniclus', type: 'Psychic' },
 { name: 'Ducklett', type: 'Water Flying' },
 { name: 'Swanna', type: 'Water Flying' },
 { name: 'Vanillite', type: 'Ice' },
 { name: 'Vanillish', type: 'Ice' },
 { name: 'Vanilluxe', type: 'Ice' },
 { name: 'Deerling', type: 'Normal Grass' },
 { name: 'Sawsbuck', type: 'Normal Grass' },
 { name: 'Emolga', type: 'Electric Flying' },
 { name: 'Karrablast', type: 'Bug' },
 { name: 'Escavalier', type: 'Bug Steel' },
 { name: 'Foongus', type: 'Grass Poison' },
 { name: 'Amoonguss', type: 'Grass Poison' },
 { name: 'Frillish', type: 'Water Ghost' },
 { name: 'Jellicent', type: 'Water Ghost' },
 { name: 'Alomomola', type: 'Water' },
 { name: 'Joltik', type: 'Bug Electric' },
 { name: 'Galvantula', type: 'Bug Electric' },
 { name: 'Ferroseed', type: 'Grass Steel' },
 { name: 'Ferrothorn', type: 'Grass Steel' },
 { name: 'Klink', type: 'Steel' },
 { name: 'Klang', type: 'Steel' },
 { name: 'Klinklang', type: 'Steel' },
 { name: 'Tynamo', type: 'Electric' },
 { name: 'Eelektrik', type: 'Electric' },
 { name: 'Eelektross', type: 'Electric' },
 { name: 'Elgyem', type: 'Psychic' },
 { name: 'Beheeyem', type: 'Psychic' },
 { name: 'Litwick', type: 'Ghost Fire' },
 { name: 'Lampent', type: 'Ghost Fire' },
 { name: 'Chandelure', type: 'Ghost Fire' },
 { name: 'Axew', type: 'Dragon' },
 { name: 'Fraxure', type: 'Dragon' },
 { name: 'Haxorus', type: 'Dragon' },
 { name: 'Cubchoo', type: 'Ice' },
 { name: 'Beartic', type: 'Ice' },
 { name: 'Cryogonal', type: 'Ice' },
 { name: 'Shelmet', type: 'Bug' },
 { name: 'Accelgor', type: 'Bug' },
 { name: 'Stunfisk', type: 'Electric Ground' },
 { name: 'Mienfoo', type: 'Fighting' },
 { name: 'Mienshao', type: 'Fighting' },
 { name: 'Druddigon', type: 'Dragon' },
 { name: 'Golett', type: 'Ground Ghost' },
 { name: 'Golurk', type: 'Ground Ghost' },
 { name: 'Pawniard', type: 'Dark Steel' },
 { name: 'Bisharp', type: 'Dark Steel' },
 { name: 'Bouffalant', type: 'Normal' },
 { name: 'Rufflet', type: 'Normal Flying' },
 { name: 'Braviary', type: 'Normal Flying' },
 { name: 'Vullaby', type: 'Dark Flying' },
 { name: 'Mandibuzz', type: 'Dark Flying' },
 { name: 'Heatmor', type: 'Fire' },
 { name: 'Durant', type: 'Bug Steel' },
 { name: 'Deino', type: 'Dark Dragon' },
 { name: 'Zweilous', type: 'Dark Dragon' },
 { name: 'Hydreigon', type: 'Dark Dragon' },
 { name: 'Larvesta', type: 'Bug Fire' },
 { name: 'Volcarona', type: 'Bug Fire' },
 { name: 'Cobalion', type: 'Steel Fighting' },
 { name: 'Terrakion', type: 'Rock Fighting' },
 { name: 'Virizion', type: 'Grass Fighting' },
 { name: 'Tornadus', type: 'Flying' },
 { name: 'Thundurus', type: 'Electric Flying' },
 { name: 'Reshiram', type: 'Dragon Fire' },
 { name: 'Zekrom', type: 'Dragon Electric' },
 { name: 'Landorus', type: 'Ground Flying' },
 { name: 'Kyurem', type: 'Dragon Ice' },
 { name: 'Keldeo', type: 'Water Fighting' },
 { name: 'Meloetta', type: 'Normal Psychic' },
 { name: 'Genesect', type: 'Bug Steel' },
 { name: 'Chespin', type: 'Grass' },
 { name: 'Quilladin', type: 'Grass' },
 { name: 'Chesnaught', type: 'Grass Fighting' },
 { name: 'Fennekin', type: 'Fire' },
 { name: 'Braixen', type: 'Fire' },
 { name: 'Delphox', type: 'Fire Psychic' },
 { name: 'Froakie', type: 'Water' },
 { name: 'Frogadier', type: 'Water' },
 { name: 'Greninja', type: 'Water Dark' },
 { name: 'Bunnelby', type: 'Normal' },
 { name: 'Diggersby', type: 'Normal Ground' },
 { name: 'Fletchling', type: 'Normal Flying' },
 { name: 'Fletchinder', type: 'Fire Flying' },
 { name: 'Talonflame', type: 'Fire Flying' },
 { name: 'Scatterbug', type: 'Bug' },
 { name: 'Spewpa', type: 'Bug' },
 { name: 'Vivillon', type: 'Bug Flying' },
 { name: 'Litleo', type: 'Fire Normal' },
 { name: 'Pyroar', type: 'Fire Normal' },
 { name: 'Flabébé', type: 'Fairy' },
 { name: 'Floette', type: 'Fairy' },
 { name: 'Florges', type: 'Fairy' },
 { name: 'Skiddo', type: 'Grass' },
 { name: 'Gogoat', type: 'Grass' },
 { name: 'Pancham', type: 'Fighting' },
 { name: 'Pangoro', type: 'Fighting Dark' },
 { name: 'Furfrou', type: 'Normal' },
 { name: 'Espurr', type: 'Psychic' },
 { name: 'Meowstic', type: 'Psychic' },
 { name: 'Honedge', type: 'Steel Ghost' },
 { name: 'Doublade', type: 'Steel Ghost' },
 { name: 'Aegislash', type: 'Steel Ghost' },
 { name: 'Spritzee', type: 'Fairy' },
 { name: 'Aromatisse', type: 'Fairy' },
 { name: 'Swirlix', type: 'Fairy' },
 { name: 'Slurpuff', type: 'Fairy' },
 { name: 'Inkay', type: 'Dark Psychic' },
 { name: 'Malamar', type: 'Dark Psychic' },
 { name: 'Binacle', type: 'Rock Water' },
 { name: 'Barbaracle', type: 'Rock Water' },
 { name: 'Skrelp', type: 'Poison Water' },
 { name: 'Dragalge', type: 'Poison Dragon' },
 { name: 'Clauncher', type: 'Water' },
 { name: 'Clawitzer', type: 'Water' },
 { name: 'Helioptile', type: 'Electric Normal' },
 { name: 'Heliolisk', type: 'Electric Normal' },
 { name: 'Tyrunt', type: 'Rock Dragon' },
 { name: 'Tyrantrum', type: 'Rock Dragon' },
 { name: 'Amaura', type: 'Rock Ice' },
 { name: 'Aurorus', type: 'Rock Ice' },
 { name: 'Sylveon', type: 'Fairy' },
 { name: 'Hawlucha', type: 'Fighting Flying' },
 { name: 'Dedenne', type: 'Electric Fairy' },
 { name: 'Carbink', type: 'Rock Fairy' },
 { name: 'Goomy', type: 'Dragon' },
 { name: 'Sliggoo', type: 'Dragon' },
 { name: 'Goodra', type: 'Dragon' },
 { name: 'Klefki', type: 'Steel Fairy' },
 { name: 'Phantump', type: 'Ghost Grass' },
 { name: 'Trevenant', type: 'Ghost Grass' },
 { name: 'Pumpkaboo', type: 'Ghost Grass' },
 { name: 'Gourgeist', type: 'Ghost Grass' },
 { name: 'Bergmite', type: 'Ice' },
 { name: 'Avalugg', type: 'Ice' },
 { name: 'Noibat', type: 'Flying Dragon' },
 { name: 'Noivern', type: 'Flying Dragon' },
 { name: 'Xerneas', type: 'Fairy' },
 { name: 'Yveltal', type: 'Dark Flying' },
 { name: 'Zygarde', type: 'Dragon Ground' }
];
rl.on("line", (x) => {
    x--;
    console.log(arr[x].name);
    console.log(arr[x].type);
    rl.close();
});