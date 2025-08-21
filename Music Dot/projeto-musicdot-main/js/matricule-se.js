const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// Perguntas do fluxo
const perguntas = [
  "Olá! Seja bem-vindo à MusicDot. Qual é o seu nome?",
  "Prazer em te conhecer! Quantos anos você tem?",
  "Perfeito! Obrigado pelas informações. Sua matrícula foi iniciada ✅"
];

let passo = 0;


function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}


addMessage(perguntas[0], "bot");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = chatInput.value.trim();
  if (!userInput) return;

  // Mostra a resposta do usuário
  addMessage(userInput, "user");
  chatInput.value = "";

 
  passo++;
  if (passo < perguntas.length) {
    setTimeout(() => {
      addMessage(perguntas[passo], "bot");
    }, 500);
  } else {
    chatInput.disabled = true;
    chatInput.placeholder = "Conversa finalizada.";
  }
});