const display = document.getElementById("display") as HTMLInputElement;

function add(value: string): void {
  display.value += value;
}

function clearDisplay(): void {
  display.value = "";
}

function calculate(): void {
  try {
    const result = eval(display.value);
    display.value = result;
    speakResult(result.toString());
  } catch {
    display.value = "Error";
    speakResult("Error");
  }
}

function speakResult(text: string): void {
  try {
    const utterance = new SpeechSynthesisUtterance(`Result is ${text}`);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Speech error:", error);
  }
}

// Make functions global for HTML to access
(window as any).add = add;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;
