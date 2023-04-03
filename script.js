/*
PASSAGGI

1-Creare l’array di oggetti con le informazioni su ogni persona
2-Creo un ciclo che mi legga gli oggetti dell'array con tutti gli attributi
3-Stampo in pagina 



 */



const ul = document.querySelector("ul");




const personeArray = [
  { // oggetto 0
    name : "Wayne Barnett",
    ruolo : "Founder & CEO",
    avatar : `img/wayne-barnett-founder-ceo.jpg`,
  },
  { // oggetto 1
    name : "Angela Caroll",
    ruolo : "Chief Editor",
    avatar : `img/angela-caroll-chief-editor.jpg`,
  },
  { // oggetto 2
    name : "Walter Gordon",
    ruolo : "Office Manager",
    avatar : `img/walter-gordon-office-manager.jpg`,
  },
  { // oggetto 3
    name : "Angela Lopez",
    ruolo : "Social Media Manager",
    avatar : `img/angela-lopez-social-media-manager.jpg`,
  },
  { // oggetto 4
    name : "Scott Estrada",
    ruolo : "Developer",
    avatar : `img/scott-estrada-developer.jpg`,
  },
  { // oggetto 5
    name : "Barbara Ramos",
    ruolo : "Graphic Designer",
    avatar : `img/barbara-ramos-graphic-designer.jpg`,
  }

]

  for (let persona of personeArray) { // cicla gli oggetti
    // for (const key in persona) { // cicla il singolo oggetto => il value sarebbe la key [name, ruolo, avatar]
    const li = document.createElement("li")
      ul.append(li)
    // }

    const img = document.createElement('img');
    img.src =  persona.avatar;
    li.innerHTML = persona.name + " --- " + persona.ruolo + "<img src='" + persona.avatar + "'>";
    console.log(personeArray.persona)
  }
  // console.log(persona)




  




