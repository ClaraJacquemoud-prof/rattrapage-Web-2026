let data;

function preload() {
  // import du fichier JSON
  data = loadJSON("cyrano.json");
}

function setup() {
  data = Object.values(data); // convertit l'objet en tableau

  console.log(data.length); //Compter le nombre de de ligne (répliques ou didascalies)
  console.log(data[1]); // Afficher la première ligne (réplique ou didascalie)

  //Parcourir toute les lignes et les afficher :
  for (let i = 0; i < data.length; i++) {
    let ligne = data[i];
    let texte = ligne.contenu;
    let personnage = ligne.personnage;
    let type = ligne.type;

    let parent = createP();
    let persoHTML = createElement("i", personnage);
    let texteHTML = createElement("b", texte);

    parent.child(persoHTML);
    parent.child(texteHTML);
    parent.addClass(personnage);
    parent.addClass(type);
  }
}

function draw() {}
