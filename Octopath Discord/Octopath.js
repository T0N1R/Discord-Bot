//Antonio Reyes
//Octopath Traveller para Discord

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('');

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

function Character(peleando, nombre, personaDiscord, descripcionClase, clase, arma1, arma2, acc1, acc2, job, jp, oro, lider) {
    this.peleando = peleando;
    this.nombre = nombre;
    this.personaDiscord = personaDiscord;
    this.descripcionClase = descripcionClase;
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

function Enemy(nombre, vida, escudo, debilidad, oro, jp, ataque1, ataque2, ataque3){
    this.nombre = nombre;
    this.vida = vida;
    this.escudo = escudo;
    this.debilidad = debilidad;
    this.oro = oro;
    this.jp = jp;
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
}

var canal;
let diccionarioUsuarios = {1234: ""};
let diccionarioJugadores = {1234: ""};
let peleadores = [];
enemigo = [];



//https://docs.google.com/spreadsheets/d/1X-XO1bXJR90wMq3siW22ioERRKzgAUXob_yDpdpM25o/edit#gid=279719304

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

//oponente es falso
oponente = false;
//178064

enemy1 = new Enemy("Steorra", 200, 7, ["Sword", "Dagger", "Fire", "Ice", "Rod"], 20000, 1200, 100, 200, 150);
enemy2 = new Enemy("Balogar", 500, 7, ["Sword", "Dagger", "Fire", "Ice", "Rod"], 20000, 1200, 100, 200, 150);



player1 = new Character(false, "Ophilia", "", "Cleric", cleric, cleric.arma1, cleric.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player2 = new Character(false, "Cyrus", "", "Scholar", scholar, scholar.arma1, scholar.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player3 = new Character(false, "Tressa", "", "Merchant", merchant, merchant.arma1, merchant.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player4 = new Character(false, "Olberic", "", "Warrior", warrior, warrior.arma1, warrior.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player5 = new Character(false, "Primrose", "", " Dancer", dancer, dancer.arma1, dancer.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player6 = new Character(false, "Alfyn", "", "Apothecary", apothecary, apothecary.arma1, apothecary.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player7 = new Character(false, "Therion", "", "Thief", thief, thief.arma1, thief.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);

player8 = new Character(false, "Haanit", "", "Hunter", hunter, hunter.arma1, hunter.arma2, "accesorio1", "accesorio2", null, 100, 1000, false);


var timer = function (){
    console.log("pasaron 30 segundos");
    canal.send("ya pasaron 30 segundos");
    canal.send("enemy");
    oponente = true;
    }

function recuperarVida(){
    enemy1.vida = 200;
    enemy2.vida = 500;
}

function statusEnemy(){
    canal.send("Nombre: " + enemigo.nombre);
    canal.send("Vida: " + enemigo.vida);
    canal.send({files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/enemigos/" + enemigo.nombre + ".gif"]});
    
}


function ataqueEnemigo1(id){
    diccionarioJugadores[id].clase.vida = diccionarioJugadores[id].clase.vida - 100;
}

function ataqueEnemigo2(){
    diccionarioJugadores[id].clase.vida = diccionarioJugadores[id].clase.vida - 150;
}

function ataqueEnemigo3(){
    diccionarioJugadores[id].clase.vida = diccionarioJugadores[id].clase.vida - 50;
}


client.on('message', message =>{

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
            message.channel.send("[OCT_Ophilia]: Ophilia (Cleric)", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Ophilia.png"]});
            a += 1;
        

            if (a == 2){
                message.channel.send("[OCT_Cyrus]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Cyrus.png"]});
                a += 1;
            }

            if (a == 3){
                message.channel.send("[OCT_Tressa]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Tressa.png"]});
                a += 1;
            }

            if (a == 4){
                message.channel.send("[OCT_Olberic]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Olberic.png"]});
                a += 1;
            }

            if (a == 5){
                message.channel.send("[OCT_Primrose]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Primrose.png"]});
                a += 1;
            }

            if (a == 6){
                message.channel.send("[OCT_Alfyn]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Alfyn.png"]});
                a += 1;
            }

            if (a == 7){
                message.channel.send("[OCT_Therion]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Therion.png"]});
                a += 1;
            }

            if (a == 8){
                message.channel.send("[OCT_Haanit]", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/Haanit.png"]});
                a += 1;
            }
        }
    }

    if(message.content === 'OCTdelete'){

        if(message.author.id in diccionarioUsuarios == true){
            delete diccionarioUsuarios[message.author.id];
        }

    }

    if(message.content === 'OCT_Ophilia'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player1;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Cyrus'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player2;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }    

    if(message.content === 'OCT_Tressa'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player3;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Olberic'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player4;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Primrose'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player5;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Alfyn'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player6;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Therion'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player7;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'OCT_Haanit'){
        if (message.author.id in diccionarioJugadores == true){
            message.channel.send(message.author + " Ya cresate un personaje, elige [OCTdelete] para borrar tu antiguo personaje");

        }else{
            newPlayer = player8;
            newPlayer.personaDiscord = message.author.username;
            console.log(newPlayer.nombre);
            console.log(newPlayer.personaDiscord);
            diccionarioJugadores[message.author.id] = newPlayer;
            diccionarioUsuarios[message.author.id] = message.author.username;
            message.channel.send(message.author + '\n' + "Has elegido a " + newPlayer.nombre);
        }
    }

    if(message.content === 'activos'){
        let a = []
        for (var key in diccionarioUsuarios){
            a.push(diccionarioUsuarios[key])
        }
        message.channel.send(message.author + " Activos: " + '\n' + a);
        console.log(diccionarioJugadores);
    }

    if(message.content === 'my character'){
        if (message.author.id in diccionarioJugadores == true){
            var personaje = diccionarioJugadores[message.author.id].nombre;
            message.author.send("", {files: ["C:/Users/Antonio/Documents/Stuff/Discord-Bot-1/Discord-Bot/Octopath Discord/personajes/" + personaje +".png"]});
            message.author.send(`Personaje: ${diccionarioJugadores[message.author.id].nombre} 
            \nClase: ${diccionarioJugadores[message.author.id].descripcionClase}
            \nNivel: ${diccionarioJugadores[message.author.id].nivel} 
            \nVida: ${diccionarioJugadores[message.author.id].clase.vida}
            \nAtaque: ${diccionarioJugadores[message.author.id].clase.atk}
            \nDefensa: ${diccionarioJugadores[message.author.id].clase.def}`
            );
        }
    }

    if(message.content === 'battle'){
        if(oponente === false){
            num = Math.round(Math.random());
            if (num == 0){
                recuperarVida();
                enemigo = Object.assign(enemy1);
                
                
            }

            if (num == 1){
                recuperarVida();
                enemigo = Object.assign(enemy2);
            }
            
            message.channel.send(message.author + " La pelea va a iniciar, ingresa join en 30 segundos");
            canal = message.channel;
            setTimeout(timer, 30000);    
            
            
        }else{
            message.channel.send(message.author + " Ya hay una pelea en progreso");
        }

    }

    if (message.content === 'enemy'){
        canal = message.channel;
        statusEnemy();
    }

    if (message.content === 'attack'){
        if (enemigo.vida > 0 && message.author.id in diccionarioJugadores == true && oponente === true){
            if ((enemigo.vida - diccionarioJugadores[message.author.id].clase.atk) < 0){
                message.channel.send(enemigo.nombre + " Ha sido derrotado!!!!!!");
                oponente = false;
                delete enemigo;
                delete peleadores;
                
            }else{
                enemigo.vida = enemigo.vida - diccionarioJugadores[message.author.id].clase.atk;
                message.channel.send(enemigo.nombre + " acaba de recibir " + diccionarioJugadores[message.author.id].clase.atk + " de daño" + '\n' + "Vida: " + enemigo.vida);
                
                num = Math.round(Math.random());
                if (num == 0){
                    ataqueEnemigo1(message.author.id);
                    canal.send(message.author + " has recibido 100 de daño"  );
                }

                if (num == 1){
                    canal.send(message.author + ". El enemigo ataca pero esquivaste el ataque");
                }

            }
            
        }else{
            message.channel.send(message.author + ". No se puedes realizar esta acción");
        }
    }

    if (message.content == 'join'){
        if (message.author.id in peleadores == false && oponente === false && peleadores.includes(message.author.id) == false){
            peleadores.push(message.author.id);
            message.channel.send(message.author + ". Entraste a la party");
        }else{
            message.channel.send(message.author + ". Ya no puedes entrar a la batalla");
        }
    }

    if (message.content == 'party'){
        for (x = 0; x < peleadores.length; x++){
            message.channel.send(diccionarioUsuarios[peleadores[x]] + " | Vida: " + diccionarioJugadores[peleadores[x]].clase.vida);
        }
    }

    if(message.content.startsWith('curar')) {
        usuario = message.content.split(" ");
        console.log(peleadores);
        for (x = 0; x < peleadores.length; x++){
            if (diccionarioUsuarios[peleadores[x]] == usuario[1]){
                var identificador = peleadores[x];
                console.log(identificador);

                diccionarioJugadores[identificador].clase.vida = diccionarioJugadores[identificador].clase.vida + 60;
                message.channel.send(usuario[1]);
                num = Math.round(Math.random());
                if (num == 0){
                    ataqueEnemigo1(message.author.id);
                    canal.send(message.author + " has recibido 100 de daño"  );
                }

                if (num == 1){
                    canal.send(message.author + ". El enemigo ataca pero esquivaste el ataque");
                }

            }
        }
        
        
    }

});
