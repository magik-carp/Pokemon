import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  count = [
    {
      place: 'Viridian City',
      link: '../../assets/Viridian_City.png',
      description:
        "Viridian City isn't exactly a bustling burg, but it's bigger than Pallet Town. There you'll see your first Pokémon Center, a place where you can go to restore your Pokémon to full health. You'll also see a Poké Mart, which stocks items useful to Pokémon trainers. This one has a delivery service and will need your help to make a special delivery.",
      pokemon: '../../assets/Viridian_pokemon.jpeg',
      catchpokemon:
        "You may want to go straight to Viridian Forest, but don't be too hasty! Route #1 was full of Pokémon that you can catch anywhere, but the area West of here, Route #22, has a few interesting finds. But don't go past the grassy area, or your rival might challenge you to a fight when you're not quite ready. You'll want to have a bunch of good Pokémon before you attempt to challenge the Viridian Forest. Spend the next few minutes tracking some down in Route #22.",
      tasks:
        "1.Oak's Parcel (Given to you at the Poké Mart)Potion (Behind the fence to the west, near the old man)  2.Teachy TV (Given to you by the old man, on the way to Route 2)  3.TM26 Earthquake (Given to you by the Viridian Gym leader for defeating them)  4.Macho Brace (Hidden and 'buried' on the spot where the Viridian Gym leader will have stood, unearthed with the ItemFinder)",
    },
    {
      place: 'Pewter City',
      link: '../../assets/Pewter_City.png',
      description:
        "Pewter City is where you find your first gym challenge, in which you'll be able to earn your first badge.",
      pokemon: '',
      catchpokemon: '',
      tasks:
        "It'll cost you Pokebuck.png50 to get into the Museum (the large building in the North part of town). It's inexpensive and its exhibits build up the story in the game, namely regarding Mt. Moon and fossil Pokémon, which is pretty interesting if you try to tie the many dots together. The more practical part of the museum is in its back, although access to it is blocked at this point and you'll have to come back later.Once you have Cut, you'll get the Old Amber from a scientist who is interested in extracting Pokémon DNA and will ask you to take it to a research institution. In addition, one of the other scientists is a Move Tutor that will teach one of your Pokémon Seismic Toss! 2.Poké Ball (Hidden in the northwest corner of the city in the light grass)TM39 (Rock Tomb) (Given to you by Gym Leader Brock after defeating him)Running Shoes (Given to you by one of Professor Oak's aides on the way out of the city after defeating Brock; doesn't get listed as an item in the bag)",
    },
    {
      place: 'Cerulean City',
      link: '../../assets/Cerulean_City.png',
      description:
        'There is much to do in Cerulean City. You will have to battle your Rival, beat a group of trainers, stop Team Rocket from their usual mischievous deeds and of course earn another badge. The way out is blocked by a guard, who will move away after you visit Bill at his house on Route 25.',
      pokemon: '../../assets/cerulean_pokemon.png',
      catchpokemon:
        "At the house west of the PokéCenter there is an old man who will trade Pokémon with you. You will get a Jynx at the same level as the Poliwhirl you have given. You won't be able to do this trade until much later in the game, after you get the Good Rod or the Super Rod.",
      tasks:
        'Rare Candy (Hidden behind the house in the north west corner of the city, between two flowers)Powder Jar (Given to you by the old man in the right of the two northern houses, but only if you already have at least one berry)Fame Checker (Given to you by your Rival after you fight him)TM 03 Water Pulse (Given to you by Misty after you beat her)TM 28 Dig (Given to you by the TR Grunt after you beat him)',
    },
    {
      place: 'Vermilion City',
      link: '../../assets/Vermilion_City.png',
      description:
        "After the city itself, moored on the dock, is a large luxury liner, the S.S. Anne, which needs to be explored before it's possible to access this city's gym. Head to the dock and take on S.S. Anne right after checking out the city. However, you must have the S.S ticket in order to get on it (you can get it in Route 25 if you haven't gotten it yet).",
      pokemon: '../../assets/vermilion_pokemon.jpeg',
      catchpokemon:
        "A trade can be found in the house with the orange roof, north of the gym.'Farfetch'd, a ninja bird that beats enemies with a leek, is a solid fighter, and capable of learning Cut. Because it was traded, this particular Farfetch'd goes up levels 50% faster than normal Pokémon. Since it doesn't evolve, it really won't get much better than it is, so using for the long term isn't recommended.)",
      tasks:
        "The Vs. Seeker can be found in Vermilion's Pokémon Center. Highly recommended, it allows rematches with previously defeated trainers, making it easy to train Pokémon and earn money. The trainers may display stronger Pokémon and different dialogue in the rematches. Some trainers change more than once, requiring more than one rematch. There isn't quite a way to know which trainers change.The Old Rod allows for fishing and is obtained from the house next to the Pokémon Center. However, it disappointingly mostly catches low level Magikarp.In the green roofed house above the gym, there is a Pokémon Fan Club. The Chairman there will give you a Bike Voucher. Take it to the bike shop in Cerulean City and get a Bicycle.TM34 Shock Wave (Given to you by Lt. Surge after you beat him)",
    },
    {
      place: 'Saffron City',
      link: '../../assets/Saffron_City.png',
      description:
        'Saffron City is home to the Silph Company, the makers of the fabulous Silph Scope. So how did Giovanni get his paws on the Silph Scope prototype? Is the company in cahoots with Team Rocket? The only way to find out will be to use a little industrial espionage, so get your team built up strong and prepare to go on a stealth mission!',
      pokemon: '../../assets/Saffron_pokemon.jpeg',
      catchpokemon:
        "You won't get a badge for taking down this optional Gym, but you will get something just as good: One of two Pokémon that can be found nowhere else in the game.",
      tasks:
        "1) Fans of the TV show are probably beginning to notice that the ruthless Team Rocket of the game doesn't have a whole heck of a lot in common with the bumbling idiots depicted on TV. Their mission of world dominance has led them to Saffron City, headquarters of the Silph Company. Team Rocket has basically occupied the entire city, sending respectable citizens running while they force the staff of Silph Co. to make advanced weaponry for their nefarious purposes.2) Mr. Psychic:In the Southeast corner of town you'll find Mr. Psychic's house. Enter and he will give you TM29 Psychic. Psychic is considered one of the best attack moves in the game as it does a lot of damage, almost always hits, and has a 30% chance of temporarily lowering its target's 'Special' statistic.3)The Fighting Dojo:You won't get a badge for taking down this optional Gym, but you will get something just as good: One of two Pokémon that can be found nowhere else in the game. If you've only played the originals, you'll be in for a less-than-pleasant surprise. Beating the Mankeys in this gym is still easy, but thanks to a Generation II fighting move Foresight, the Machops, Machokes, Hitmonlee and Hitmonchan can still decimate your entire party even if you have Ghost Pokémon, so make sure you level your party up plenty before taking on this gym. When you've bested the Karate Master, he'll offer you your pick of his pets.",
    },
    {
      place: 'Fuchsia City',
      link: '../../assets/Fuchsia_City.png',
      description:
        'Now that Team Rocket is reeling from its crushing defeat in Saffron City, you have a chance to resume your original quest: to become the greatest Pokémon trainer ever. Fuchsia City is the home of the Safari Zone, the home of some of the strangest and most powerful Pokemon in the game. Take some time to explore the city, and then... start hunting!',
      pokemon: '../../assets/Fuchsia_pokemon.png',
      catchpokemon:
        "You may want to go straight to Viridian Forest, but don't be too hasty! Route #1 was full of Pokémon that you can catch anywhere, but the area West of here, Route #22, has a few interesting finds. But don't go past the grassy area, or your rival might challenge you to a fight when you're not quite ready. You'll want to have a bunch of good Pokémon before you attempt to challenge the Viridian Forest. Spend the next few minutes tracking some down in Route #22.",
      tasks:
        "1)Move Deleter:In the house next to the Pokecenter you'll find an old man who calls himself the Move Deleter. This old man allows you to force a Pokémon to forget any move it knows. While you won't ever have a need to make your Pokémon forget normal moves, you can use his ability to make a Pokémon forget an HM it has been taught. Outside of exploiting a glitch in the Day Care System, this is the only way you can do this in the entire game.2)Safari Zone:The Safari Zone is an amusement park for Pokémon trainers. You are given special Safari Balls and Pokémon bait and are allowed to captured as many rare Pokémon as you can within 600 paces.To enter it, you'll need to walk through the entire Zoo (or use a Pokemon with Cut), but at least you'll see some cool Pokemon on the way, and one of the tourists is a Move Tutor that can teach your Pokemon Substitute!.3)Safari Warden:In the bottom right corner are two houses, the left of which contains the Safari Zone Warden. The warden has lost his Gold Teeth, and no one can understand a word he's saying. His chompers are probably in the Safari Zone somewhere. Find them and return them to the warden and he'll reward you handsomely with HM03 Strength, a normal type move that can let you move boulders out of the way. In combat, its a decent move with good power.4)Fishing Guru:Next door is the Fishing Guru's older brother, who runs a fish farm here in the city. Speak to him to get the Good Rod. Although it may seem pointless if you already got the Super Rod, which lets you fish for even more Pokémon, catching rates and types of Pokemon will vary between rods, so it is still worthwhile to get both.",
    },
    {
      place: 'Celadon City',
      link: '../../assets/Celadon_City.png',
      description:
        'Celadon City is the largest city in this game. Its Poké Mart has six stories; no wonder it needs an elevator! This city holds lots of new experiences for you. Challenge a Gym Leader, do some shopping, play the slot machines, get some cool new Pokemon and thwart an evil organization! You can expect to make this city your headquarters for some time.',
      pokemon: '../../assets/Celadon_pokemon.jpeg',
      catchpokemon:
        "go in through the back door. Go all the way to the rooftop, where you'll find a small building. Inside you'll find a person and a Poké Ball on the table. Pick it up; it's an Eevee",
      tasks:
        "1)Celadon Department Store :They sell all sorts of things here. On the 1st Floor you'll find the reception and the Elevator at the back. On the 2nd Floor you'll find all the normal items for your trip, as well as some TM's. The 3rd Floor is filled with gamers trading Pokemon, and the man at the countertop is a Move Tutor that teaches Counter.The 4th Floor holds evolutionary stones of all kinds. The 5th Floor is the most specialized of all. Expect to keep coming back to Celadon City only to visit the 5th Floor, as it is the only reliable source of Protein, Calcium, and other items that permanently boost the stats of your Pokemon. It also sells temporary boosts such as X Attack, which must be used during battle, and can certainly get you some victories.Finally, at the rooftop you'll find three vending machines and two people, including a little girl. Get a Fresh Water, a Soda Pop, and a Lemonade from the vending machine, and give it to the little girl one at a time. She'll give you TM16 Light Screen, TM20 Safeguard, and TM33 Reflect, respectively, for your drinks.Consider purchasing some extra drinks from these machines for the road ahead, as they are much cheaper and heal more than the Super Potions you've been using in the past.2)Celadon MansionThere is a huge building to the right of the department store that's nearly empty inside. Talk to the old lady who's surrounded by Pokémon on the first floor. She'll give you the Tea, which you can give to any one of the Saffron City guards so they can let you through. You'll also find the game's programmers in this building, one of which will tell you to return after getting all the Pokémon. He'll give you a diploma for catching all the Pokémon.3)Game Corner:Now go to the Game Corner, a place full of slot machines and people on them. This is Team Rocket's racket, where you can win or buy coins in order to trade them for Pokémon, TM's and other items in the building to the right of the Game Corner. At the top of the Game Corner, battle the Rocket member and then push the button on the poster. A staircase leading to the basement will appear. See Rocket Hideout for the walkthrough.",
    },
    {
      place: 'Cinnabar Island',
      link: '../../assets/Cinnabar_Island.png',
      description:
        "Cinnabar Island is an island located in the southwestern part of the Kanto region. It is home to the Cinnabar Lab and the Pokémon Mansion, as well as a gym, where you'll face leader Blaine, bearer of the Volcano Badge. However, access to the gym is at first barred.",
      pokemon: '../../assets/cinnabar_pokemon.png',
      catchpokemon:
        "You may want to go straight to Viridian Forest, but don't be too hasty! Route #1 was full of Pokémon that you can catch anywhere, but the area West of here, Route #22, has a few interesting finds. But don't go past the grassy area, or your rival might challenge you to a fight when you're not quite ready. You'll want to have a bunch of good Pokémon before you attempt to challenge the Viridian Forest. Spend the next few minutes tracking some down in Route #22.",
      tasks:
        "Pokémon Mansion:Get the Secret Key,Find the Secret Key to unlock the Cinnabar Gym door and fight Blaine for a shot at the Volcano Badge.The Pokémon Mansion is a decrepit, burned-down mansion. It got its name because a famous Pokémon Researcher once lived there. Amongst the rubble and wreckage is information that the scientists who once worked there obtained a Mew and impregnated it with the genetically altered Mewtwo, who destroyed the Mansion in its escape.To access the Cinnabar Gym, you have to enter the mansion and find the Secret Key to unlock the door of the gym. The Pokémon Mansion has four floors. Doors can be unlocked in the mansion by pressing switches hidden in Pokémon statues.2)Pokémon Lab:Pokémon Lab Main Hall The Pokémon Lab is a laboratory founded by Dr. Fuji. It reveals important bits of information regarding the obscure storyline, if you can tie all the dots together correctly.Here, you should hand your Fossil from Mt. Moon and your Old Amber from Pewter City's Science Museum to get two resurrected Pokémon otherwise unobtainable.3)A surprise twist in the plot:Now that you've acquired the Volcano Badge, Bill will meet you outside the gym. He mentions that he's going to one of the Sevii Islands and wants you to come along. You may very well say 'NO' for now and Bill will wait at the Pokémon Center for you when you're ready. This is because, although you're not told, there will be no way to return to Kanto for a good while! So make sure you wrap up your tasks around Kanto before you feel like departing for a while to some remote islands. Finish up route 21 and take with you anything that you might need before leaving to the new Sevii Islands. Just don't get your hopes up for entirely new Pokémon... This isn't it yet.",
    },
    {
      place: 'Lavender Town',
      link: '../../assets/Lavender_Town.png',
      description:
        "Lavender Town is just a stop on your journey for now. The Poké Mart here is the first to sell Great Balls and Revives, so pick some up if you want any. Heal up from your trek through Rock Tunnel and head west to Route 8 when you're ready for the next city.",
      pokemon: '../../assets/lavender_pokemon.png',
      catchpokemon:
        'You may want to go south of the town to find a bridge on which a SNORLAX would be resting,play the pokeflute,weaken it and catch it.',
      tasks:
        "1) Pokémon renaming:Ever wanted to go back and change one of your Pokémon's nicknames? Well, here's the only place where you can do it. Enter the building adjacent to the south entrance and talk to the man inside. This self appointed 'Name Rater' will let you change the name of any Pokémon you captured. Pokémon acquired in trades cannot be renamed.2)Pokémon Tower:You can't complete Pokémon Tower until you've dealt with Team Rocket in Celadon City, so feel free to skip this for now. If you enter you'll find some psychic trainers under some kind of mysterious spell. There's a healing zone in the middle of the tower, so this is a great place to level up if you've got Pokémon who need XP. Even if you clear the tower right now you won't be able to access the last floor, as there's an unknown ghost blocking it. You'll need the Silph Scope, found in Celadon City, to get past it.3)Mr. Fuji's house:There isn't much you can do in here on your first visit to lavender town. You'll be told that Mr. Fuji is missing, but that's about it. Once you've completed the Pokémon Tower this is where Mr. Fuji will give you the Poké Flute.",
    },
  ];
  placeinfo: any = [];
  moreInfo(a: number) {
    this.placeinfo = [];
    this.placeinfo.push(this.count[a]);
  }
  gyms: any = [
    {
      gym_leaders: 'Brock',
      location: 'Pewter City',
      specality: 'Rock-type',
      reward: 'Boulder Badge, TM39',
      img: '../../assets/brock.png',
      method:
        "The first gym is located in Pewter City and is a Rock-type Gym. It doesn't have much of a puzzle but there is a lone trainer who you must face before taking on Brock, the leader. This gym specialises in Rock-type Pokémon, and Brock will use the attack Rock Tomb to seriously wound Pokemon like Charmander, Beedrill, and Pidgeotto. Defeat Brock to earn the Boulder Badge, which lets you use Flash outside of battle, and TM39, Rock Tomb.",
    },
    {
      gym_leaders: 'Misty',
      location: 'Cerulean City',
      specality: 'Water-type',
      reward: 'Cascade Badge, TM03',
      img: '../../assets/misty.png',
      method:
        "Misty's gym is a straightforward path around a pool. You can avoid the first trainer but not the second. Misty uses the starfish Pokemon, Staryu and Starmie, which will try to smack you with confusion using their signature Water Pulse. They can also use Recover to heal. After you beat Misty, you receive the Cascade Badge, which makes traded Pokemon up to Level 30 obey you, and TM03, which contains the attack Water Pulse. You can also now use Cut outside of battle.",
    },
    {
      gym_leaders: 'Lt. Surge',
      location: 'Vermilion City',
      specality: 'Electric-type',
      reward: 'Thunder Badge, TM34',
      img: '../../assets/serge.png',
      method:
        'Before you can enter Vermilion City gym you must use Cut to clear the tree blocking the path. Once inside, prepare to check each garbage can until you find both switches to open the electric door. The second switch is always beside the first one, but if you find the wrong one the locks reset. Lt. Surge boasts a Raichu which can hit with the move Shock Wave, a fairly strong Electric-type attack that never misses. Ground-type Pokemon like Sandshrew and Diglett cannot be affected by this move, or any other Electric-type move. The prizes for this match are the Thunder Badge and TM34 Shock Wave. You can also now use Fly outside of battle.',
    },
    {
      gym_leaders: 'Erika',
      location: 'Celadon City',
      specality: 'Grass-type',
      reward: 'Rainbow Badge, TM19',
      img: '../../assets/erika.png',
      method:
        "Erika's gym requires Cut to navigate! Her Pokemon use the self-healing attack Giga Drain, which is also handed out via TM19 once the match is won. Also given to you are the Rainbow Badge, which makes any traded Pokemon up to Level 50 obey, and the ability to use Strength outside of battle.",
    },
    {
      gym_leaders: ' Koga',
      location: 'Fuchsia City',
      specality: 'Poison-type',
      reward: 'Soul Badge, TM06',
      img: '../../assets/koga.png',
      method:
        "The fifth Pokemon gym is a maze of invisible walls. The lighter tiles are actually invisible walls you must travel through to find Koga, the Gym Leader. The gym trainers are peculiar, using a mix of Ground, Psychic, and Poison-types. Koga's team however only uses Poison-types. While Muk can be hit with Ground-type moves, Koga's other Pokemon can't as they have the Levitate ability. Koga's Pokemon use a move called Toxic which causes a unique type of poisoning where damage exponentially increases each turn. The prize for this match is TM06 Toxic as well as the Soul Badge. After this match you can use Surf, which can be found in the Safari Zone.",
    },
    {
      gym_leaders: 'Sabrina',
      location: 'Saffron City',
      specality: 'Psychic-type',
      reward: 'Marsh Badge, TM04  ',
      img: '../../assets/serina.png',
      method:
        "Only accessible after the Rockets have been defeated, Sabrina's gym is a network of warp panels. Not all the trainers have to be fought, but many of them do in order to reach all these panels. Sabrina's team itself uses three pure Psychic-types and a Bug/Poison-type, Venomoth. Kadabra and Alakazam both have bad defenses so try to use attacks that fall under the physical type categories. Be careful though as they can do significant damage with their high Special Attack. As a reward for winning you get the Marsh Badge, while makes any Pokemon up to Level 70 obey you and lets you use the move Rock Smash outside of battle. The TM prize for this match is TM04 Calm Mind, a move which increases Special Attack and Special Defense one stage.",
    },
    {
      gym_leaders: 'Blaine',
      location: 'Cinnabar Island',
      specality: 'Fire-type',
      reward: 'Volcano Badge, TM38',
      img: '../../assets/blane.png',
      method:
        "After finding the hidden key to the Cinnabar Gym in Cinnabar Mansion, you'll be able to take a crack at Blaine's Fire-type Pokemon Gym. Each room has a quiz machine that asks you a question. If you answer it wrong or don't want to do it at all, you'll have to fight the trainer to open the door. Blaine uses several strong Fire-types that know the move Fire Blast. The prize for this match is TM38 Fire Blast, inflicts massive damage and can burn your Pokemon, and the penultimate Volcano Badge, which allows you to use Waterfall outside of battle.",
    },
    {
      gym_leaders: 'Giovanni',
      location: 'Viridian City',
      specality: 'Ground-type',
      reward: ' Earth Badge, TM26',
      img: '../../assets/giovani.png',
      method:
        "After you have collected the seven other Badges and completed the quest in the Sevii Islands, the word is that Viridian City's Gym Leader has returned, and who should it be but the Team Rocket Boss Giovanni. The spinning tile maze here is similar to the one in the Celadon City Rocket Hideout. Giovanni's team now uses only Ground-types, and powerful ones to boot. When you defeat him you earn the Earth Badge, which allows you to control a Pokemon at any Level, as well as access to the Indigo Plateau west of Viridian City. You also get the TM for the strong Ground-type move Earthquake.",
    },
  ];
  info: any = [];

  gymInfo(a: number) {
    this.info = [];
    let obj = this.gyms[a];
    obj['index'] = a + 1;
    this.info.push(obj);
  }
  constructor() {}
}
