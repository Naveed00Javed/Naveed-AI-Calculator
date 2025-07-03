var display = document.getElementById("display");
function add(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        var result = eval(display.value);
        display.value = result;
        speakResult(result.toString());
    }
    catch (_a) {
        display.value = "Error";
        speakResult("Error");
    }
}
function speakResult(text) {
    try {
        var utterance = new SpeechSynthesisUtterance("Result is ".concat(text));
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    }
    catch (error) {
        console.error("Speech error:", error);
    }
}
// Make functions global for HTML to access
window.add = add;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
