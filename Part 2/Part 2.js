//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
var players=function (name){
	var players ={};
	var name=name;
	players.addInfo=addInfo;
	players.increase=increase;
	players.isavailable=true;
	players.decrease=decrease;
return players;

}
function addInfo(age,position,level,availability){	
	var arr=[];
	return {
		players.age:age,
		players.position:position,
		players.level:level,
		players.availability:availability
	}

}
function increase(n){
	this.increase =this.increase + n; 
return this.increase;
}
function isAvailable(players,name){
	for(var k in players){
		if (players[k]===this.name && this.isavailable===true){
					this.isavailable=false;
			

		}
		return true ;
	}
	var player1={"anas",26,"M",3,"true"}
	var player1={"moad",16,"M",5,"false"}
	var player1={"hussam",19,"M",7,"false"}
	var player1={"ali",22,"M",1,"true"}
var arr=[player1,player2,player3,player4]

function decrease(arr){
	var x= this;
	for (var i = 0; i < arr.length; i++) {
		for( var k in player){
			if(player.age>30){
			x.level --;
		}
	}
}
	return x.level;
}
function sortByKey(arr,key){
			var x =arr[key];
			var b=arr[key];
	if (arr[key] ==="string"){
	return arr.sort(function (a,b){
		for (var i = 0; i < arr.length; i++) {
		return ((x<y) ?-1 : (x>y) ? 1:0);
		}

	})
}
else {
	return arr.sort();
 }
}


