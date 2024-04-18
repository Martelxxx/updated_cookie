const btn = document.querySelector('button');

let utterance = new SpeechSynthesisUtterance('Hello, World!');

window.speechSynthesis.speak(utterance);

btn.addEventListener('click', () => {
    window.speechSynthesis.speak(utterance);
});   
