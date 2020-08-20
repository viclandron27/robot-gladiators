var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        //Alert users that they are starting the round
        //window.alert("Welcome to Robot Galdiators!");

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');
        
            //if player chooses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
                
                //confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
                //if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                    
                    //subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                }
            } 

            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use taht result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died!');

                //award player money for winning
                playerMoney = playerMoney + 20;

                //leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
            );
            
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + ' has died!');
                //leave while() loop if player is dead
                break;
            } 
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyHealth[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}