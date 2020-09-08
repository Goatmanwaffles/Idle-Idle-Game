var gameData = {
    money: 0,
    moneyPerClick: 1,
    skillUpgradeCost: 100,
    skillUpgrades: 0,
    devs: 0,
    devCost: 1000,
  }

  function makeGame() {
      gameData.money += gameData.moneyPerClick
      document.getElementById("money").innerHTML = gameData.money + "$"
  }

  function devProduce() {
    gameData.money += gameData.devs
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

 var mainGameLoop = window.setInterval(function() {
    devProduce()
    document.getElementById("money").innerHTML = gameData.money + "$"
    document.getElementById("devPurchase").innerHTML = "Buy Game Dev (Currently:" + gameData.devs + ") Cost:" + gameData.devCost + "$"
    document.getElementById("skillUpgrade").innerHTML = "Upgrade Skill (Currently Level " + gameData.skillUpgrades + ") Cost: " + gameData.skillUpgradeCost + "$"
}, 1000)