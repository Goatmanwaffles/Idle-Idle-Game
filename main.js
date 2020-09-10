var gameData = {
    money: 0,
    skillUpgradeCost: 100,
    skillUpgrades: 0,
    devs: 0,
    devCost: 1000,
    devMulitplier: 1,
    gameProgress:0,
    gameProgressPerClick:1,
    ideas:0,
    ideasPerClick:1,
  }
  var testBody = document.getElementById("body")
  var button = document.createElement("button")


function makeIdea() {
  gameData.ideas += gameData.ideasPerClick
}
  //function makeGame() {
    //  gameData.gameProgress += gameData.gameProgressPerClick
      //document.getElementById("money").innerHTML = gameData.money + "$"
      //document.getElementById("gameProgress").innerHTML = "Game Progress" + gameData.gameProgress + "/10"
  //}
  function makeMoney() {
    gameData.money += Math.round(Math.floor(Math.random(1,5) * 6) + 1)
  }

  function buySkillUpgrade() {
    if (gameData.money >= gameData.skillUpgradeCost) {
gameData.money -= gameData.skillUpgradeCost
gameData.moneyPerClick += 1
gameData.skillUpgradeCost = Math.round(Math.pow(gameData.skillUpgradeCost,1.01))
gameData.skillUpgrades += 1
document.getElementById("money").innerHTML = gameData.money + "$"
document.getElementById("skillUpgrade").innerHTML = "Upgrade Skill (Currently Level " + gameData.skillUpgrades + ") Cost: " + gameData.skillUpgradeCost + "$"
    }
 }

 function buyDev() {
if (gameData.money >= gameData.devCost) {
    gameData.money -= gameData.devCost
    gameData.devs += 1
    gameData.devCost = Math.round(Math.pow(gameData.devCost,1.01))
    document.getElementById("devPurchase").innerHTML = "Buy Game Dev (Currently:" + gameData.devs + ") Cost:" + gameData.devCost + "$"
} 
}


 //var mainGameLoop = window.setInterval(function() {
   //devProduce()
   // document.getElementById("money").innerHTML = gameData.money + "$"
   // document.getElementById("devPurchase").innerHTML = "Buy Game Dev (Currently:" + gameData.devs + ") Cost:" + gameData.devCost + "$"
   //  document.getElementById("skillUpgrade").innerHTML = "Upgrade Skill (Currently Level " + gameData.skillUpgrades + ") Cost: " + gameData.skillUpgradeCost + "$"
//}, 1000)

var updateLoop = window.setInterval(function() {
  if (gameData.gameProgress === 10) {
    gameData.gameProgress = 0
    makeMoney()
  }
  if (gameData.ideas === 10) {
    gameData.ideas = 0;
  testBody.appendChild(button);
  button.addEventListener ("click", makeMoney())
  document.getElementById("body").appendChild(body)
}
  document.getElementById("money").innerHTML = gameData.money + "$"
  document.getElementById("devPurchase").innerHTML = "Buy Game Dev (Currently:" + gameData.devs + ") Cost:" + gameData.devCost + "$"
  document.getElementById("skillUpgrade").innerHTML = "Upgrade Skill (Currently Level " + gameData.skillUpgrades + ") Cost: " + gameData.skillUpgradeCost + "$"
  document.getElementById("ideaProgress").innerHTML = "Game Progress:" + gameData.ideas + "/10"
}, 10)