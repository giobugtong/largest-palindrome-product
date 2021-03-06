const firstNum = document.getElementById("first-number");
const secondNum = document.getElementById("second-number");
const form = document.getElementById("form");
const result = document.getElementById("result");
const resultsContainer = document.getElementById("results-container");
const bottomMessage = document.getElementById("bottom-message");

const compute = () => {
    const first = firstNum.value;
    const second = secondNum.value;
    const largest = getLargestPalindromeProduct(first, second);
    result.innerText = largest;
    show();
    resultsContainer.scrollIntoView({ behavior: "smooth" });
    if (largest < 1000) {
        bottomMessage.style.display = "block";
    } else {
        bottomMessage.style.display = "none";
    }
    firstNum.blur();
    secondNum.blur();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    compute();
});

const clearForm = () => {
    hide();
    firstNum.value = "";
    secondNum.value = "";
    firstNum.focus();
}

document.onkeydown = (e) => {
    if (e.key === "Escape" && (firstNum.value || secondNum.value)) {
        clearForm();
    }
}

const show = () => {
    resultsContainer.classList.remove("hide");
    resultsContainer.classList.add("show");
}

const hide = () => {
    resultsContainer.classList.remove("show");
    resultsContainer.classList.add("hide");
}

const computeThreeDigits = () => {
    firstNum.value = "999";
    secondNum.value = "999";
    compute();
}