"use strict";

const questionBank = [
  {
    category: "GÉOGRAPHIE",
    text: "Quel est le plus grand océan de la Terre ?",
    answers: ["L’océan Atlantique", "L’océan Indien", "L’océan Pacifique", "L’océan Arctique"],
    correct: 2,
    fact: "Le Pacifique couvre à lui seul près d’un tiers de la surface de notre planète."
  },
  {
    category: "SCIENCES",
    text: "Quelle planète est surnommée la planète rouge ?",
    answers: ["Vénus", "Mars", "Jupiter", "Mercure"],
    correct: 1,
    fact: "Sa couleur rouge vient de l’oxyde de fer présent à sa surface."
  },
  {
    category: "ART & CULTURE",
    text: "Qui a peint La Nuit étoilée ?",
    answers: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Paul Cézanne"],
    correct: 2,
    fact: "Van Gogh a peint cette œuvre en 1889, depuis sa chambre à Saint-Rémy-de-Provence."
  },
  {
    category: "NATURE",
    text: "Quel animal est le plus grand mammifère du monde ?",
    answers: ["L’éléphant d’Afrique", "La baleine bleue", "La girafe", "Le requin-baleine"],
    correct: 1,
    fact: "La baleine bleue peut dépasser les 30 mètres de long."
  },
  {
    category: "HISTOIRE",
    text: "Dans quel pays les Jeux olympiques antiques sont-ils nés ?",
    answers: ["En Italie", "En Égypte", "En Grèce", "En Turquie"],
    correct: 2,
    fact: "Les premiers Jeux olympiques connus ont eu lieu à Olympie, en Grèce, en 776 avant notre ère."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quelle est la capitale du Canada ?",
    answers: ["Toronto", "Ottawa", "Montréal", "Vancouver"],
    correct: 1,
    fact: "Ottawa, en Ontario, est la capitale fédérale du Canada."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quel fleuve traverse la ville de Paris ?",
    answers: ["Le Rhône", "La Loire", "La Seine", "La Garonne"],
    correct: 2,
    fact: "La Seine traverse Paris avant de rejoindre la Manche."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Sur quel continent se trouve le désert du Sahara ?",
    answers: ["En Asie", "En Afrique", "En Amérique du Sud", "En Océanie"],
    correct: 1,
    fact: "Le Sahara s’étend sur une grande partie de l’Afrique du Nord."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quelle est la plus haute montagne du monde au-dessus du niveau de la mer ?",
    answers: ["Le mont Kilimandjaro", "Le K2", "L’Everest", "Le mont Blanc"],
    correct: 2,
    fact: "L’Everest culmine à plus de 8 800 mètres dans la chaîne de l’Himalaya."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quelle est la capitale du Japon ?",
    answers: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    correct: 2,
    fact: "Tokyo est la capitale du Japon et l’une des plus grandes métropoles du monde."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quel pays a la forme d’une botte sur la carte ?",
    answers: ["Le Portugal", "L’Italie", "La Croatie", "La Grèce"],
    correct: 1,
    fact: "La péninsule italienne est souvent comparée à une botte."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quelle est la capitale de l’Australie ?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    fact: "Canberra a été choisie comme capitale entre Sydney et Melbourne."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Quel est le plus grand pays du monde par sa superficie ?",
    answers: ["La Chine", "Le Canada", "Les États-Unis", "La Russie"],
    correct: 3,
    fact: "La Russie s’étend sur l’Europe et l’Asie, sur plus de 17 millions de kilomètres carrés."
  },
  {
    category: "GÉOGRAPHIE",
    text: "Dans quel pays se trouvent les pyramides de Gizeh ?",
    answers: ["Au Maroc", "En Égypte", "En Jordanie", "Au Mexique"],
    correct: 1,
    fact: "Les pyramides de Gizeh se trouvent près du Caire, en Égypte."
  },
  {
    category: "SCIENCES",
    text: "Quel gaz les plantes absorbent-elles principalement pour la photosynthèse ?",
    answers: ["L’oxygène", "L’azote", "Le dioxyde de carbone", "L’hélium"],
    correct: 2,
    fact: "Les plantes utilisent le dioxyde de carbone, l’eau et la lumière pour produire des sucres."
  },
  {
    category: "SCIENCES",
    text: "Combien de pattes une araignée possède-t-elle ?",
    answers: ["Six", "Huit", "Dix", "Douze"],
    correct: 1,
    fact: "Les araignées sont des arachnides et ont huit pattes."
  },
  {
    category: "SCIENCES",
    text: "Quel organe pompe le sang dans le corps humain ?",
    answers: ["Le foie", "Le poumon", "Le cœur", "Le rein"],
    correct: 2,
    fact: "Le cœur fait circuler le sang dans tout le corps."
  },
  {
    category: "SCIENCES",
    text: "À quelle température l’eau pure bout-elle au niveau de la mer ?",
    answers: ["À 50 °C", "À 75 °C", "À 100 °C", "À 120 °C"],
    correct: 2,
    fact: "À la pression atmosphérique normale, l’eau bout à 100 °C."
  },
  {
    category: "SCIENCES",
    text: "Quelle étoile est au centre de notre système solaire ?",
    answers: ["Sirius", "Le Soleil", "L’étoile Polaire", "Véga"],
    correct: 1,
    fact: "La Terre et les autres planètes du système solaire orbitent autour du Soleil."
  },
  {
    category: "SCIENCES",
    text: "Quel est le symbole chimique de l’or ?",
    answers: ["Ag", "Fe", "Au", "Or"],
    correct: 2,
    fact: "Le symbole Au vient du nom latin de l’or, aurum."
  },
  {
    category: "SCIENCES",
    text: "Combien d’os compte généralement le squelette adulte ?",
    answers: ["106", "206", "306", "406"],
    correct: 1,
    fact: "Un adulte possède généralement 206 os, même si de petites variations existent."
  },
  {
    category: "SCIENCES",
    text: "Quelle force nous maintient au sol ?",
    answers: ["Le magnétisme", "La gravité", "La friction", "La pression"],
    correct: 1,
    fact: "La gravité attire les objets ayant une masse les uns vers les autres."
  },
  {
    category: "SCIENCES",
    text: "Quel est le satellite naturel de la Terre ?",
    answers: ["Phobos", "La Lune", "Titan", "Europe"],
    correct: 1,
    fact: "La Lune est le seul satellite naturel permanent de la Terre."
  },
  {
    category: "SCIENCES",
    text: "Quel appareil permet de mesurer la température ?",
    answers: ["Un baromètre", "Un thermomètre", "Un anémomètre", "Un voltmètre"],
    correct: 1,
    fact: "Un thermomètre mesure la température, par exemple celle de l’air ou du corps."
  },
  {
    category: "NATURE",
    text: "Quel est le plus grand animal terrestre vivant ?",
    answers: ["L’hippopotame", "L’éléphant d’Afrique", "Le rhinocéros blanc", "La girafe"],
    correct: 1,
    fact: "L’éléphant d’Afrique est le plus grand et le plus lourd des animaux terrestres actuels."
  },
  {
    category: "NATURE",
    text: "Quel insecte produit le miel ?",
    answers: ["La guêpe", "Le bourdon", "L’abeille", "La fourmi"],
    correct: 2,
    fact: "Les abeilles fabriquent le miel à partir du nectar des fleurs."
  },
  {
    category: "NATURE",
    text: "Comment appelle-t-on un animal qui mange uniquement des végétaux ?",
    answers: ["Un carnivore", "Un herbivore", "Un omnivore", "Un insectivore"],
    correct: 1,
    fact: "Les herbivores se nourrissent de végétaux."
  },
  {
    category: "NATURE",
    text: "Quel est le seul mammifère capable de voler activement ?",
    answers: ["L’écureuil volant", "La chauve-souris", "Le lémurien", "Le colugo"],
    correct: 1,
    fact: "Les chauves-souris battent des ailes pour voler ; d’autres mammifères planent seulement."
  },
  {
    category: "NATURE",
    text: "Quel arbre produit des glands ?",
    answers: ["Le bouleau", "Le chêne", "Le peuplier", "Le hêtre"],
    correct: 1,
    fact: "Les glands sont les fruits du chêne."
  },
  {
    category: "NATURE",
    text: "Quel animal porte souvent sa maison sur son dos ?",
    answers: ["Le hérisson", "L’escargot", "La grenouille", "Le lézard"],
    correct: 1,
    fact: "La coquille de l’escargot lui sert de protection."
  },
  {
    category: "NATURE",
    text: "Quel est l’animal terrestre le plus rapide sur une courte distance ?",
    answers: ["Le lion", "Le guépard", "L’autruche", "Le cheval"],
    correct: 1,
    fact: "Le guépard peut atteindre une très grande vitesse sur de courtes accélérations."
  },
  {
    category: "NATURE",
    text: "Comment s’appelle le petit de la grenouille ?",
    answers: ["Un têtard", "Un alevin", "Un poussin", "Un faon"],
    correct: 0,
    fact: "La grenouille passe d’abord par le stade aquatique de têtard."
  },
  {
    category: "NATURE",
    text: "Quel animal est connu pour changer de couleur afin de se camoufler ?",
    answers: ["Le caméléon", "Le panda", "Le castor", "Le flamant rose"],
    correct: 0,
    fact: "Le caméléon peut modifier ses couleurs, notamment pour communiquer et réagir à son environnement."
  },
  {
    category: "NATURE",
    text: "De quelle couleur sont les feuilles de la plupart des plantes grâce à la chlorophylle ?",
    answers: ["Bleues", "Vertes", "Rouges", "Blanches"],
    correct: 1,
    fact: "La chlorophylle, pigment essentiel à la photosynthèse, donne aux feuilles leur couleur verte."
  },
  {
    category: "HISTOIRE",
    text: "Quel monument parisien a été construit pour l’Exposition universelle de 1889 ?",
    answers: ["L’Arc de Triomphe", "La tour Eiffel", "Le Panthéon", "Le Louvre"],
    correct: 1,
    fact: "La tour Eiffel a été inaugurée à l’occasion de l’Exposition universelle de 1889."
  },
  {
    category: "HISTOIRE",
    text: "Qui fut le premier homme à marcher sur la Lune ?",
    answers: ["Youri Gagarine", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
    correct: 2,
    fact: "Neil Armstrong a fait ses premiers pas sur la Lune en juillet 1969, pendant Apollo 11."
  },
  {
    category: "HISTOIRE",
    text: "Quel peuple a construit le Colisée de Rome ?",
    answers: ["Les Grecs anciens", "Les Romains", "Les Égyptiens", "Les Perses"],
    correct: 1,
    fact: "Les Romains ont construit le Colisée, inauguré vers l’an 80 de notre ère."
  },
  {
    category: "HISTOIRE",
    text: "En quelle année le mur de Berlin est-il tombé ?",
    answers: ["1979", "1989", "1999", "2001"],
    correct: 1,
    fact: "L’ouverture du mur de Berlin, le 9 novembre 1989, a marqué un tournant historique."
  },
  {
    category: "HISTOIRE",
    text: "Quel navire célèbre a coulé lors de son voyage inaugural en 1912 ?",
    answers: ["Le Lusitania", "Le Titanic", "Le Mayflower", "Le Beagle"],
    correct: 1,
    fact: "Le Titanic a heurté un iceberg dans l’Atlantique Nord en avril 1912."
  },
  {
    category: "HISTOIRE",
    text: "Quelle civilisation a construit la cité de Machu Picchu ?",
    answers: ["Les Mayas", "Les Incas", "Les Aztèques", "Les Olmèques"],
    correct: 1,
    fact: "Machu Picchu est une ancienne cité inca située dans les Andes, au Pérou."
  },
  {
    category: "HISTOIRE",
    text: "Quel document anglais de 1215 a limité les pouvoirs du roi ?",
    answers: ["La Magna Carta", "Le Code Napoléon", "La Déclaration d’indépendance", "L’Édit de Nantes"],
    correct: 0,
    fact: "La Magna Carta fut scellée par le roi Jean d’Angleterre en 1215."
  },
  {
    category: "HISTOIRE",
    text: "Quel pharaon est associé à un tombeau découvert presque intact en 1922 ?",
    answers: ["Ramsès II", "Toutânkhamon", "Cléopâtre", "Khéops"],
    correct: 1,
    fact: "Howard Carter et son équipe ont découvert le tombeau de Toutânkhamon dans la Vallée des Rois."
  },
  {
    category: "HISTOIRE",
    text: "Quel explorateur a mené la première expédition à faire le tour du monde ?",
    answers: ["Christophe Colomb", "Fernand de Magellan", "James Cook", "Marco Polo"],
    correct: 1,
    fact: "Magellan a lancé l’expédition ; Juan Sebastián Elcano l’a ramenée en Espagne après sa mort."
  },
  {
    category: "HISTOIRE",
    text: "Quelle reine d’Égypte ancienne était liée à Jules César et Marc Antoine ?",
    answers: ["Néfertiti", "Hatchepsout", "Cléopâtre VII", "Sobeknéferou"],
    correct: 2,
    fact: "Cléopâtre VII fut la dernière souveraine active de l’Égypte ptolémaïque."
  },
  {
    category: "ART & CULTURE",
    text: "Qui a écrit Les Misérables ?",
    answers: ["Émile Zola", "Victor Hugo", "Molière", "Gustave Flaubert"],
    correct: 1,
    fact: "Victor Hugo a publié Les Misérables en 1862."
  },
  {
    category: "ART & CULTURE",
    text: "Quel instrument possède généralement 88 touches ?",
    answers: ["Le violon", "La flûte", "Le piano", "La harpe"],
    correct: 2,
    fact: "Le piano moderne standard possède 88 touches, blanches et noires."
  },
  {
    category: "ART & CULTURE",
    text: "Dans quelle ville se trouve le musée du Louvre ?",
    answers: ["Lyon", "Paris", "Marseille", "Bordeaux"],
    correct: 1,
    fact: "Le Louvre est situé au cœur de Paris, sur la rive droite de la Seine."
  },
  {
    category: "ART & CULTURE",
    text: "Quel peintre espagnol a cofondé le cubisme ?",
    answers: ["Salvador Dalí", "Francisco de Goya", "Pablo Picasso", "Joan Miró"],
    correct: 2,
    fact: "Pablo Picasso et Georges Braque sont considérés comme les fondateurs du cubisme."
  },
  {
    category: "ART & CULTURE",
    text: "Combien de cordes possède un violon classique ?",
    answers: ["Quatre", "Cinq", "Six", "Sept"],
    correct: 0,
    fact: "Le violon classique possède quatre cordes, accordées en sol, ré, la et mi."
  },
  {
    category: "ART & CULTURE",
    text: "Quel personnage de conte perd une pantoufle de verre ?",
    answers: ["Blanche-Neige", "Cendrillon", "La Belle au bois dormant", "Raiponce"],
    correct: 1,
    fact: "Dans la version popularisée par Charles Perrault, Cendrillon perd une pantoufle de verre."
  },
  {
    category: "ART & CULTURE",
    text: "Quel est le nom de famille de Sherlock Holmes ?",
    answers: ["Watson", "Holmes", "Moriarty", "Lestrade"],
    correct: 1,
    fact: "Sherlock Holmes est le détective créé par l’écrivain britannique Arthur Conan Doyle."
  },
  {
    category: "ART & CULTURE",
    text: "Quel art japonais consiste à plier du papier pour créer des formes ?",
    answers: ["Ikebana", "Origami", "Haïku", "Bonsaï"],
    correct: 1,
    fact: "L’origami transforme une feuille de papier en formes pliées, sans découpe nécessaire."
  },
  {
    category: "ART & CULTURE",
    text: "Quel compositeur a écrit la célèbre Neuvième Symphonie ?",
    answers: ["Mozart", "Beethoven", "Chopin", "Vivaldi"],
    correct: 1,
    fact: "La Neuvième Symphonie de Beethoven comprend l’Ode à la joie dans son dernier mouvement."
  },
  {
    category: "ART & CULTURE",
    text: "Quel est le premier livre de la saga Harry Potter ?",
    answers: ["La Coupe de feu", "L’Ordre du Phénix", "À l’école des sorciers", "Le Prisonnier d’Azkaban"],
    correct: 2,
    fact: "Le premier tome, Harry Potter à l’école des sorciers, a été publié en 1997."
  }
];


const QUESTIONS_PER_ROUND = 5;
let questionDeck = [];
let deckPosition = 0;
let roundQuestions = [];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function drawRound() {
  if (deckPosition + QUESTIONS_PER_ROUND > questionDeck.length) {
    questionDeck = shuffle(questionBank);
    deckPosition = 0;
  }
  const round = questionDeck.slice(deckPosition, deckPosition + QUESTIONS_PER_ROUND);
  deckPosition += QUESTIONS_PER_ROUND;
  return round;
}

const welcomeScreen = document.querySelector("#welcome-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const nextButton = document.querySelector("#next-button");
const questionTitle = document.querySelector("#question-title");
const questionCategory = document.querySelector("#question-category");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const scoreDisplay = document.querySelector("#score-display");
const scorePlural = document.querySelector("#score-plural");
const progressLabel = document.querySelector("#progress-label");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const progressFill = document.querySelector("#progress-fill");

let currentQuestion = 0;
let score = 0;
let answered = false;

function showScreen(screen) {
  welcomeScreen.hidden = screen !== welcomeScreen;
  quizScreen.hidden = screen !== quizScreen;
  resultScreen.hidden = screen !== resultScreen;
}

function updateScore() {
  scoreDisplay.textContent = String(score);
  scorePlural.textContent = score === 1 ? "" : "s";
}

function renderQuestion() {
  const question = roundQuestions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  answered = false;
  questionTitle.textContent = `Question ${questionNumber}`;
  questionCategory.textContent = question.category;
  questionText.textContent = question.text;
  progressLabel.textContent = `Question ${questionNumber} sur ${roundQuestions.length}`;
  progressPercent.textContent = `${Math.round((questionNumber / roundQuestions.length) * 100)} %`;
  progressBar.setAttribute("aria-valuemax", String(roundQuestions.length));
  progressBar.setAttribute("aria-valuenow", String(questionNumber));
  progressFill.style.width = `${(questionNumber / roundQuestions.length) * 100}%`;
  feedback.textContent = "";
  feedback.classList.remove("is-wrong");
  nextButton.hidden = true;
  nextButton.textContent = questionNumber === roundQuestions.length ? "Voir mon résultat" : "Question suivante";
  answerList.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.answer = String(index);
    button.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    button.addEventListener("click", () => chooseAnswer(index));
    answerList.append(button);
  });
  questionTitle.focus();
}

function chooseAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const question = roundQuestions[currentQuestion];
  const buttons = answerList.querySelectorAll(".answer-button");
  const isCorrect = selectedIndex === question.correct;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
  });

  if (isCorrect) {
    score += 1;
    updateScore();
    feedback.textContent = `Exactement ! ${question.fact}`;
    feedback.classList.remove("is-wrong");
  } else {
    feedback.textContent = `Pas tout à fait. La bonne réponse était « ${question.answers[question.correct]} ». ${question.fact}`;
    feedback.classList.add("is-wrong");
  }
  nextButton.hidden = false;
  nextButton.focus();
}

function showResults() {
  document.querySelector("#final-score").textContent = String(score);
  const resultMessage = document.querySelector("#result-message");
  const resultDetail = document.querySelector("#result-detail");
  if (score === roundQuestions.length) {
    resultMessage.textContent = "Un sans-faute, quelle belle curiosité !";
    resultDetail.textContent = "Tu as réponse à tout. Impressionnant !";
  } else if (score >= 3) {
    resultMessage.textContent = "Tu as de belles connaissances.";
    resultDetail.textContent = "Encore quelques questions et tu feras un sans-faute.";
  } else {
    resultMessage.textContent = "Chaque réponse est une découverte.";
    resultDetail.textContent = "La curiosité te va bien. Recommence quand tu veux !";
  }
  showScreen(resultScreen);
  document.querySelector("#result-title").focus();
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  roundQuestions = drawRound();
  updateScore();
  showScreen(quizScreen);
  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion < roundQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResults();
  }
});
