let accountMoney = 1000;
const withdrawlAmount = 20;
const depositAmount = 20;

function takeMoney() {
    accountMoney = accountMoney - withdrawlAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = accountMoney;

    if(accountMoney > 0)
    {
        moneyText.innerText = accountMoney;
        statusText.innerText = "$20 Withdrawn!";
    }
    else
    {
        moneyText.innerText = 0;
        statusText.innerText = "You're out of money!";
        statusText.style.color = "#f83722";
        statusText.style.fontweight = "bold";
        
        document.body.style.backgroundColor = "#5a1a1a";
        
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "No more money";
    }
}

function insertMoney() {
    accountMoney = accountMoney + depositAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = accountMoney;

    moneyText.innerText > 0;
    statusText.innerText = "Withdrawl or Deposit?";
    statusText.style.color = "white";
    statusText.style.fontweight = "bold";
        
    document.body.style.backgroundColor = "darkcyan";
        
    document.querySelector("button").disabled = false;
    document.querySelector("button").innerText = "Withdrawl $20";

    if(accountMoney >0)
    {
        moneyText.innerText = accountMoney;
        statusText.innerText = "$20 Deposited!";
    }
    else
    {
        moneyText.innerText = 0;
        statusText.innerText = "You're out of money!";
        statusText.style.color = "#f83722";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
    }
}