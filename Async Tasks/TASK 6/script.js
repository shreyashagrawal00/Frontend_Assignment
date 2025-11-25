const ul = document.getElementById("steps");

function step(msg) {
    return new Promise(resolve => {
        setTimeout(() => resolve(msg), 1000);
    });
}

async function executeSteps() {
    const msgs = ["Step 1 done", "Step 2 done", "Step 3 done"];

    for (let m of msgs) {
        let li = document.createElement("li");
        li.style.fontWeight = "bold";
        li.textContent = "Processing...";
        ul.appendChild(li);

        let result = await step(m);

        li.style.fontWeight = "normal";
        li.textContent = result;
    }
}

executeSteps();
