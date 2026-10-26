let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internCost = 100;

let clickStrength = 1;
let upgradeMouse = 100;

let managers = 0;
let managerCost = 200;

function writeCode()
{
    linesOfCode = linesOfCode + clickPower + clickStrength;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + clickStrength + 1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost * 1.5;
        updateScreen();
    }
}

function buyMouse()
{
    if(linesOfCode >= upgradeMouse)
    {
        linesOfCode = linesOfCode - upgradeMouse;
        clickStrength = clickPower + clickStrength + 3;
        upgradeMouse = upgradeMouse * 1.5;
        updateScreen();
    }
}

function buyManager()
{
    if(linesOfCode >= managerCost)
    {
        linesOfCode = linesOfCode - managerCost;
        managers = interns * 3;
        managerCost = managerCost * 1.5;
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("intern-display-cost").innerText = internCost;

    document.getElementById("mouse-display").innerText = clickStrength;
    document.getElementByid("cost-display-mouse").innerText = upgradeMouse;

    document.getElementById("manager-display").innerText = managers;
    document.getElementById("cost-display-manager").innerText = managerCost;
}

setInterval(function() {
    if(interns > 0)
    {
        linesOfCode = linesOfCode + interns;
        updateScreen();
    }
},
1000
);

setInterval(function() {
    if(managers > 0)
    {
        linesOfCode = linesOfCode + managers;
        updateScreen();
    }
};
1000
);