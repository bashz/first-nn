search2object = function (search) {
  var Obj = {}
  search.slice(1).slice(0).split('&').forEach(function (entry) {
    var keyValue = entry.split('=');
    Obj[keyValue[0]] = keyValue[1];
  })
  return Obj;
}
search = search2object(window.location.search);
i18next.init({
  lng: search.lang || 'en',
  resources: {
    en: {
      translation: {
        "Neural Networks in a glance": "Neural Networks in a glance",
        "Presented by": "Presented by",
        "Buzz words": "Buzz words",
        "AI": "AI",
        "Machine learning": "Machine learning",
        "Fuzzy control system (1980)": "Fuzzy control system (1980)",
        "Neural Network": "Neural Network",
        "Deep learning": "Deep learning",
        "Data Science": "Data Science",
        "NLP": "NLP",
        "Computer vision": "Computer vision",
        "Feed-forward Network": "Feed-forward Network",
        "1 Input layer": "1 Input layer",
        "N Hidden layers": "N Hidden layers",
        "1 Output layer": "1 Output layer",
        "Neurons & Activation function": "Neurons & Activation function",
        "Segmoid squashing function": "Segmoid squashing function",
        "Vectorial product => GPU": "Vectorial product => GPU",
        "Metrics": "Metrics",
        "Network configuration": "Network configuration",
        "number of hidden layers": "number of hidden layers",
        "number of neurones per hidden layer": "number of neurones per hidden layer",
        "squashing functions": "squashing functions",
        "learning rate": "learning rate",
        "Learning": "Learning",
        "XOR": "XOR",
        "Backward Propagation": "Backward Propagation",
        "Most used": "Most used",
        "Useful when we have enough data": "Useful when we have enough data",
        "Used on supervised learning": "Used on supervised learning",
        "How we teach it": "How we teach it",
        "We provide the network with an input": "We provide the network with an input",
        "We activate the network": "We activate the network",
        "We let the network know about the wanted output (target)": "We let the network know about the wanted output (target)",
        "We repeat until we are satisfied by the result of the activation": "We repeat until we are satisfied by the result of the activation",
        "Training set & validation set": "Training set & validation set",
        "Accurancy": "Accurancy",
        "Error tolerance": "Error tolerance",
        "Overfed networks": "Overfed networks",
        "Data processing": "Data processing",
        "Input/output": "Input/output",
        "Fuzzy Binairy": "Fuzzy Binairy",
        "Minimize the inputs wihtout loosing information": "Minimize the inputs wihtout loosing information",
        "Convolution, MFCC, pooling...": "Convolution, MFCC, pooling...",
        "Normalization": "Normalization",
        "Normal-Range": "Limited Ranges can be reduced to a [0..1] range",
        "Example-Range": "e.g: 1 hour can be 0 for 0 minutes, and 1 for 60 minutes, so 0.5 would be 30 minutes",
        "Normal-List": "Multi choice lists can be transformed to a binairy sequence",
        "Example-List": "e.g: Wednesday within the days of the week would be [0,0,1,0,0,0,0] while [1,0,0,0,1,0,0] means Monday and Friday",
        "Practice": "Practice",
        "Spider Game": "Spider Game",
        "Sun or Moon": "Sun or Moon",
        "Thanks": "Thanks"
      }
    },
    fr: {
      translation: {
        "Neural Networks in a glance": "Les Réseaux de neurones en un clin d'oeil",
        "Presented by": "Présenté par",
        "Buzz words": "Mots buzz",
        "AI": "IA",
        "Machine learning": "Machine learning",
        "Fuzzy control system (1980)": "Systemes experts (1980)",
        "Neural Network": "Réseau de neurones",
        "Deep learning": "Deep learning",
        "Data Science": "Data Science",
        "NLP": "Natural Language Processing",
        "Computer vision": "Vision machine",
        "Feed-forward Network": "Réseau Feed-forward",
        "1 Input layer": "Une Couche d'inputs",
        "N Hidden layers": "Une ou plusieurs couches cachées",
        "1 Output layer": "Une Couche d'outputs",
        "Neurons & Activation function": "Neurones & Fonctions d'activation",
        "Segmoid squashing function": "Fonction Logistique, ou sigmoïd",
        "Vectorial product => GPU": "Produit Vectoriel => GPU",
        "Metrics": "Métriques",
        "Network configuration": "Configuration du Réseau",
        "number of hidden layers": "Nombre de couches cachées",
        "number of neurones per hidden layer": "Nombre de neurones par couche cachée",
        "squashing functions": "Fonctions d'activation",
        "learning rate": "Taux d'apprentissage",
        "Learning": "Apprentissage",
        "XOR": "OU exclusive",
        "Backward Propagation": "Propagation arrière",
        "Most used": "La plus utilisée",
        "Useful when we have enough data": "Utile quand on a assez de données",
        "Used on supervised learning": "Utilisée dans l'apprentissage supervisé",
        "How we teach it": "Comment lui apprendre",
        "We provide the network with an input": "On fournit un input (dont on sache l'output) au réseau",
        "We activate the network": "On active le réseau",
        "We let the network know about the wanted output (target)": "On laisse le réseau savoir l'output attendu (cible)",
        "We repeat until we are satisfied by the result of the activation": "On répète jusqu'à avoir un bon résultat d'activation",
        "Training set & validation set": "Jeux de données et jeux de tests",
        "Accurancy": "Précision",
        "Error tolerance": "Tolérance d'erreur",
        "Overfed networks": "Réseaux Suralimentés (Overfed)",
        "Data processing": "Traitement des données",
        "Input/output": "Input/output",
        "Fuzzy Binairy": "Binaire Flou",
        "Minimize the inputs wihtout loosing information": "Minimise l'input sans perdre l'information",
        "Convolution, MFCC, pooling...": "Convolution, MFCC, pooling...",
        "Normalization": "Normalisation",
        "Normal-Range": "Les intervalles limités peuvent être réduits à un intervalle [0..1]",
        "Example-Range": "Exemple: une heure peut être représentée en 0 pour 0 minute, 1 pour 60, ce qui donne 0.5 pour 30 minutes",
        "Normal-List": "Une liste à choix multiples serait traduite en une séquence binaire",
        "Example-List": "Exemple: Mercredi pourrait être représenté comme [0, 0, 1, 0, 0, 0, 0] alors que [1, 0, 0, 0, 1, 0, 0] voudrait dire Lundi et Vendredi",
        "Practice": "Pratique",
        "Spider Game": "Jeu d'arrigné",
        "Sun or Moon": "Soleil ou Lune",
        "Thanks": "Merci"
      }
    }
  }
}, (err, t) => {
  document.querySelector('html').setAttribute('lang', search.lang);
  Array.prototype.slice.call(document.querySelectorAll('[data-lang]')).forEach(function (container) {
    var transaltion = document.createTextNode(i18next.t(container.dataset.lang));
    container.appendChild(transaltion);
  })
})