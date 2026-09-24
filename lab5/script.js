let playerHealth = 100;
const damageAmount = 30;

function takeMoney() {
    playerHealth = playerHealth - damageAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText = playerHealth;

    if(playerHealth > 0)
    {
        moneyText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        moneyText.innerText = 0;
        statusText.innerText = "Game Over";
        statusText.style.color = "#f83722";
        statusText.style.fontweight = "bold";
        
        document.body.style.backgroundColor = "#5a1a1a";
        
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Dead";
    }
}