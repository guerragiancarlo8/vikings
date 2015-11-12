function viking(name, health, strength, warcry){

	this.name = name;
	this.health = health;
	this.strength = strength;
	this.warcry = warcry;

	this.attack = function(enemy){
		enemy.health = enemy.health - this.strength;

	}

	this.emit_warcry = function(){

		console.log(this.warcry);
	}
}

function saxon(){

	this.name = "sajón";
	this.health = Math.floor(Math.random()*11) + 1;
	this.strength = Math.floor(Math.random()*5) + 1;

	this.attack = function(enemy){

		enemy.health = enemy.health - this.strength;
	}
}

function battle(array_of_saxons, array_of_vikings){



	var battle = [array_of_saxons, array_of_vikings];

	turns = Math.floor(Math.random()*7) + 1;

	while(turns > -1){
	//random si vikings/saxons
		var who_attacks = Math.floor(Math.random()*2);
		var unit_that_attacks = battle[who_attacks][Math.floor(Math.random()*battle[who_attacks].length)];
		var who_victim = (who_attacks === 0) ? 1 : 0;
		var unit_that_receives_capon = battle[who_victim][Math.floor(Math.random()*battle[who_victim].length)];
		unit_that_attacks.attack(unit_that_receives_capon);

		turns--;
	}
	if(is_dead(array_of_vikings) > is_dead(array_of_saxons))
		console.log("THE VIKINGS HAVE WON!");
	else
		console.log("Whaaaaaaaaaat??? the saxons have won. What a shame :(");
}

function pit_fight(fighter1, fighter2, turns){

	max_turns = turns;
	array_of_fighters = [fighter1, fighter2];
	//comprueba daño de cada uno de los vikingos
	while((fighter1.health > 0 && fighter2.health > 0) && max_turns > -1){

		var attacker = Math.floor(Math.random()*2);
		var victim = (attacker === 0) ? 1 : 0;
		array_of_fighters[attacker].attack(array_of_fighters[victim]);
		max_turns--;
		console.log(array_of_fighters[attacker].name + " has struck " + array_of_fighters[victim].name + " with a force of " + array_of_fighters[attacker].strength);
	}


	console.log(" ");
	console.log("BATTLE OVER! Here are the results: ");
	if(fighter1.health > fighter2.health)
		console.log(fighter1.name + " has pleased Loki and given his opponent a capón!");
	else
		console.log(fighter2.name + " has satiated Odin and destroyed his opponent!")
}

function is_dead(array_of_players){

	var deadPeople = array_of_players.filter(function(player){

		return player.health <= 0;

	});

	return deadPeople.length;

};

vik = new viking('Ruben',100,10, "aroeipghaeriohgr");
viko = new viking('Gian',70,11, "GRAAAAAHPIRHRG");
viko2 = new viking('Davi',20,11, "GRAAAAAHPIRHRG");
viko3 = new viking('Fer',100,5, "GRAAAAAHPIRHRG");
pobre_diablo = new saxon();
pobre_diablo2 = new saxon();
pobre_diablo3 = new saxon();
pobre_diablo4 = new saxon();
pobre_diablo5 = new saxon();
pobre_diablo6 = new saxon();
pobre_diablo7 = new saxon();
pobre_diablo8 = new saxon();
pobre_diablo9 = new saxon();
pobre_diablo10 = new saxon();
//pit_fight(vik,viko,5);

var viking_array = [viko3];
var saxon_array = [pobre_diablo,pobre_diablo2,pobre_diablo3,pobre_diablo4,pobre_diablo5,pobre_diablo6,
										pobre_diablo7,pobre_diablo8,pobre_diablo9,pobre_diablo10];

battle(viking_array,saxon_array);