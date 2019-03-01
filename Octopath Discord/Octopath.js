//Antonio Reyes
//Octopath Traveller para Discord

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('TOKEN');

function Class(nivel, vida, sp, atk, def, ElemAtk, ElemDef, speed, tipoArma1, tipoArma2, special1, special2, special3, special4, special5, special6, special7, special8, hit, defend, bp, status) {
    this.nivel = nivel;
    this.vida = vida;
    this.sp = sp;
    this.atk = atk
    this.def = def;
    this.ElemAtk = ElemAtk;
    this.ElemDef = ElemDef;
    this.speed = speed;
    this.tipoArma1 = tipoArma1;
    this.tipoArma2 = tipoArma2;
    this.special1 = special1;
    this.special2 = special2;
    this.special3 = special3;
    this.special4 = special4;
    this.special5 = special5;
    this.special6 = special6;
    this.special7 = special7;
    this.special8 = special8;
    this.hit = hit;
    this.defend = defend;
    this.bp = bp;
    this.status = status;
    this.identify = function () {
        console.log("Stats:"  + "\n" + "*******************************************************")
        console.log(`Nivel:  ${this.nivel} \nVida: ${this.vida} \nSP: ${this.sp} \nAtk: ${this.atk} \nDef: ${this.def} \nElemAtk: ${this.ElemAtk} \nElemDef: ${this.ElemDef} \nSpeed: ${this.speed}`);
    }

}

function Character(peleando, nombre, personaDiscord, clase, arma1, arma2, acc1, acc2, job, jp, oro, lider) {
    this.peleando = peleando;
    this.nombre = nombre;
    this.personaDiscord = personaDiscord;
    this.clase = clase;
    this.arma1 = arma1;
    this.arma2 = arma2;
    this.acc1 = acc1;
    this.acc2 = acc2;
    this.job = job;
    this.jp = jp;
    this.oro = oro;
    this.lider = lider;
    this.identify = function () {
        console.log(`Personaje: ${this.nombre} \nClase: ${this.clase}`);
    }
}

//https://docs.google.com/spreadsheets/d/1X-XO1bXJR90wMq3siW22ioERRKzgAUXob_yDpdpM25o/edit#gid=279719304

jugadoresServidor = [];
usernamesServidor = [];
let diccionarioJugadores = {};

party = []

//Ophilia
cleric = new Class(1, 225, 65, 80, 80, 96, 104, 64, "Staff", null, "Heal Wounds", "Holy Light", "Sherlering Veil", "Luminescence", "Heal More", "Reflective Veil", "Revive", "Aelfric's Auspices", "Basic atk", "Defend", 1, null);

//Cyrus
scholar = new Class(1, 200, 60, 72, 72, 104, 96, 72, "Staff", null, "Fire Ball", "Icewind", "Lightning Bolt", "Analyze", "Fire Storm", "Blizzard", "Lightning Blast", "Alephan's Enlightenment", "Basic atk", "Defend", 1, null);

//Tressa
merchant = new Class(1, 275, 50, 88, 80, 88, 80, 72, "Lance", "Bow", "Collect", "Tradewinds", "Rest", "Trade Tempest", "Donate BP", "Sidestep", "Hired Help", "Bifelgan's Bounty", "Basic atk", "Defend", 1, null);

//Olberic
warrior = new Class(1, 325, 40, 96, 88, 72, 64, "Sword", "Lance", "Level Slash", "Abide", "Spearhead", "Incite", "Cross Strike", "Stout Wall", "Thousand Spears", "Brands's Thunder", "Basic atk", "Defend", 1, null);

//Primrose
dancer = new Class(1, 225, 50, 80, 56, 96, 64, 104, "Dagger", null, "Lion Dance", "Moonlight Waltz", "Peacock Strut", "Mole Dance", "Night Ode", "Panther Dance", "Bewildering Grace", "Sealticge's Seduction", "Basic atk", "Defend", 1, null);

//Alfyn
apothecary = new Class(1, 300, 50, 88, 80, 80, 80, 64, "Axe", null, "First Aid", "Icicle", "Rehabilitate", "Amputation", "Empoison", "Vivify", "Last Stand", "Dohter's Charity", "Basic atk", "Defend", 1, null);

//Therion
thief = new Class(1, 250, 40, 88, 64, 80, 64, 96, "Dagger", "Sword", "Steal", "Wildfire", "HP Thief", "Shackle Foe", "Armor Corrosive", "Steal SP", "Share SP", "Aeber's Reckoning");

//Haanit
hunter = new Class(1, 250, 40, 96, 64, 80, 64, 80, "Bow", "Axe", "Rain of Arrows", "True Strike", "Thunderbird", "Leghold Trap", "Mercy Strike", "Arrowstorm", "Take Aim", "Draefindi's Rage", "Basic atk", "Defend", 1, null);

player1 = new Character(false, "Ophilia (Cleric)", "", cleric, cleric.arma1, cleric.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player2 = new Character(false, "Cyrus (Scholar)", "", scholar, scholar.arma1, scholar.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player3 = new Character(false, "Tressa (Merchant)", "", merchant, merchant.arma1, merchant.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player4 = new Character(false, "Olberic (Warrior)", "", warrior, warrior.arma1, warrior.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player5 = new Character(false, "Primrose (Dancer)", "", dancer, dancer.arma1, dancer.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player6 = new Character(false, "Alfyn (Apothecary)", "", apothecary, apothecary.arma1, apothecary.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player7 = new Character(false, "Therion (Thief)", "", thief, thief.arma1, thief.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player8 = new Character(false, "Haanit (Hunter)", "", hunter, hunter.arma1, hunter.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);


client.on('message', message =>{
    if(message.content === 'traveller'){
        message.channel.send("Selecciona a tu traveller:" + "\n" +
        "OCT1: Cleric" + "\n" + 
        "OCT2: Scolar" + "\n" + 
        "OCT3: Merchant" + "\n" +
        "OCT4: Warrior" + "\n" + 
        "OCT5: Dancer" + "\n" + 
        "OCT6: Apothecary" + "\n" +
        "OCT7: Thief" + "\n" +
        "OCT8: Hunter" + "\n"
        )
    }

    if(message.content === 'game'){
        console.log(message.author.id)
        message.channel.send(message.author + " Escribe el comando: "+ '\n' +
        "OCTcreate: Crear personaje (si no se tiene)" + '\n' + 
        "OCTdelete: Eliminar personaje (empezar desde cero)" + '\n'
        )
    }

    if(message.content === 'OCTcreate'){
        message.channel.send("Ingresa el comando para crear tu personaje/clase: ");
        a = 1;
        if (a == 1){
            message.channel.send("[OCT_Ophilia]: Ophilia (Cleric)", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Ophilia.png"]});
            a += 1;
        

            if (a == 2){
                message.channel.send("[OCT_Cyrus]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Cyrus.png"]});
                a += 1;
            }

            if (a == 3){
                message.channel.send("[OCT_Tressa]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Tressa.png"]});
                a += 1;
            }

            if (a == 4){
                message.channel.send("[OCT_Olberic]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Olberic.png"]});
                a += 1;
            }

            if (a == 5){
                message.channel.send("[OCT_Primrose]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Primrose.png"]});
                a += 1;
            }

            if (a == 6){
                message.channel.send("[OCT_Alfyn]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Alfyn.png"]});
                a += 1;
            }

            if (a == 7){
                message.channel.send("[OCT_Therion]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Therion.png"]});
                a += 1;
            }

            if (a == 8){
                message.channel.send("[OCT_Haanit]", {files: ["C:/Users/Antonio/Documents/Stuff/Octopath Discord/personajes/Haanit.png"]});
                a += 1;
            }
        }
        }

    if(message.content === 'OCT_Ophilia'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
        }else{
            newPlayer = player1;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Cyrus'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player2;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }    

    if(message.content === 'OCT_Tressa'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player3;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Olberic'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player4;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Primrose'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player5;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Alfyn'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
        newPlayer = player6;
        newPlayer.personaDiscord = message.author.username;
        usernamesServidor.push(message.author.username);
        jugadoresServidor.push(message.author.id);

        console.log(newPlayer.nombre);
        console.log(newPlayer.personaDiscord);
        diccionarioJugadores[message.author.id] = newPlayer;
        message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Therion'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player7;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Haanit'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(message.author + " Ya create un personaje, elige [OCTdelete] para borrar tu antiguo personaje");
            return
        }else{
            newPlayer = player8;
            newPlayer.personaDiscord = message.author.username;
            usernamesServidor.push(message.author.username);
            jugadoresServidor.push(message.author.id);

            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'activos'){
        a = usernamesServidor;
        message.channel.send(message.author + " Activos: "+ '\n' + a);
        console.log(diccionarioJugadores);
    }

    if(message.content === 'my character'){
        if (jugadoresServidor.includes(message.author.id)){
            message.channel.send(`Personaje: ${diccionarioJugadores[message.author.id].nombre}`);
        }
    }

});