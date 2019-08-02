const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', msg =>{
    if(msg.content === "lothelp"){
        msg.reply('\n Commands: loltip, lothelp, lota, lotsys, lotupdate');
    }
})

client.on('message', msg =>{
    if(msg.content === "lota"){
        msg.reply('\n My creators: NonManifest and Bioblitz');
    }
})

client.on('message', msg =>{
    if(msg.content === "lotsys"){
        msg.reply('\n My version: 00001A');
    }
})

client.on('message', msg=>{
    if(msg.content === "lotupdate"){
        msg.reply('\n NEW: \n +loltip [1-15] removed.\n +loltip added.\n +lothelp updated.\n +lota added. \n +lotsys added.');
    }
})
function randomMessage(){
    var randomNumber = Math.round(Math.random()*25);
    switch(randomNumber){
        case 0: return 'Play normal games until you are ready to play that champion in ranked.';
        case 1: return 'Play your champion over and over again and look for specific examples of when you can use specific combos';
        case 2: return 'Anything can happen in Solo Queue, so you should never give up.';
        case 3: return 'You should not blame others, because most of the time you can probably avoid the mistake if you find a solution to it.';
        case 4: return 'Getting angry at anyone is counter productive – it will only cloud your judgement and probably make you say things you would not say normally. ';
        case 5: return 'If you are playing progressively worse than you normally do due to mental frustrations you are on tilt. If this happens, you should take a break.';
        case 6: return 'When learning a new champion or lane, NEVER play like a pus*y';
        case 7: return 'Look for times to roam';
        case 8: return 'After you take an objective, look what else you can take. ';
        case 9: return 'Play aggressively as to learn what you can do. If you find yourself constantly backing off when an enemy laner walks at you, perhaps you could play that differently. ';
        case 10: return 'Learning your limits is one of the most important aspects of league ';
        case 11: return 'Are you paying attention to your ward timer? Knowing when you are vulnerable is key is improving';
        case 12: return 'Practice, practice, practice! Every professional player has put in ridiculous amounts of hours to ensure that they remain at the top of their game, and there are multiple things you can focus on which can greatly improve your game.';
        case 13: return 'Make sure those wards are in effective places';
        case 14: return 'Place wards';
        case 15: return 'The vast majority of times the enemy is not moving randomly. If you notice the enemy mid laner is missing and your top laner is pushed....You might want to let him know what is coming ';
        case 16: return 'Are you trying to predict where the enemy could be?';
        case 17: return 'Did you call MIA (Missing in action) on the enemy?';
        case 18: return 'Are you CSing properly?';
        case 19: return 'If you casted a spell sooner would you have lived?';
        case 20: return 'After you died, did you check what spells were up that could have saved you?';
        case 21: return 'Did you not cast spells when getting ganked?';
        case 22: return 'Think of ways you could have played a situation differently';
        case 23: return 'Look for mistakes you make consistently';
        case 24: return 'Watch replays of your games';
        case 25: return 'Take your desired champion into the Practice Tool and not leave until you’ve mastered a combo.';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "loltip"){
        message.reply(randomMessage());
    }
});
 

function kaisa(randomizer){
    fs.readFile("temp.txt", function(err, buf) {
        var fs = require("fs");
      var lines = buf.toString().split('\n');
      var randomizer = lines[Math.floor(Math.random()*lines.length)];
    });

}

client.on('message', (message)=>{
    if(message.content == "loltip_kaisa")
        message.reply(kaisa());
})
 
function zed(){
    var randomNumber = Math.round(Math.random()*9);
    switch(randomNumber){
        case 0: return "PROBA";
        case 1: return "";
 
    }
}

client.on('message', (message) =>{
    if(message.content == "loltip_zed")
        message.reply(zed());
})

function yasuo(){
    var randomNumber = Math.round(Math.random()*9);
    switch(randomNumber){
        case 0: return "";
        case 1: return "";
 
    }
}

client.on('message', (message) =>{
    if(message.content == "loltip_yasuo")
        message.reply(yasuo());
})

function katarina(){
    var randomNumber = Math.round(Math.random()*9);
    switch(randomNumber){
        case 0: return "";
        case 1: return "";
 
    }
}

client.on('message', (message) =>{
    if(message.content == "loltip_katarina")
        message.reply(katarina());
})

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret