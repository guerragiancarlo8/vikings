function viking(name, health, strength){

	this.name = name;
	this.health = health;
	this.strength = strength;

	this.attack = function(enemy){
		enemy.health = enemy.health - this.strength;

	}
}

function pit_fight(viking1, viking2, turns){

	max_turns = turns;
	array_of_fighters = [viking1, viking2];
	//comprueba daño de cada uno de los vikingos
	while((viking1.health > 0 && viking2.health > 0) && max_turns > -1){

		var attacker = Math.floor(Math.random()*2);
		var victim = (attacker === 0) ? 1 : 0;
		array_of_fighters[attacker].attack(array_of_fighters[victim]);
		max_turns--;
		console.log(array_of_fighters[attacker].name + " has struck " + array_of_fighters[victim].name + " with a force of " + array_of_fighters[attacker].strength);
	}


	console.log(" ");
	console.log("BATTLE OVER! Here are the results: ");
	if(viking1.health > viking2.health)
		console.log(viking1.name + " has pleased Loki and given his opponent a capón!");
	else
		console.log(viking2.name + " has satiated Odin and destroyed his opponent!")
}

vik = new viking('Ruben',100,10);
viko = new viking('Gian',100,11);

pit_fight(vik,viko,5);