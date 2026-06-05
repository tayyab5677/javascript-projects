const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Boy = document.getElementById("first");
    const Girl = document.getElementById("second");

    const l1 = Boy.value.length;
    const l2 = Girl.value.length;

    const result = Math.pow(l1 + l2, 3) % 101;

    const total = document.querySelector("h2");
    total.textContent = `Result: ${result}%`;

    form.reset();
});