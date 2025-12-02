let simulatedNow = new Date("2112-12-01"); 

const targetDate = new Date("2152-04-01");

function updateCountdown() {
    let now = simulatedNow;

    let years = targetDate.getFullYear() - now.getFullYear();
    let months = targetDate.getMonth() - now.getMonth();
    let days = targetDate.getDate() - now.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}

// Atualiza a cada 1 segundo e incrementa a data simulada
setInterval(() => {
    updateCountdown();
    simulatedNow.setSeconds(simulatedNow.getSeconds() + 1);
}, 1000);

updateCountdown();
