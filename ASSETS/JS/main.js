/*
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1 (da fare entro le 18):

stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):

trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede



*/


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  //stampare su console le informazioni di nome, ruolo e la stringa della foto
  // totale nomi stampati in console

  console.log(team);


  //stampa nomi singoli e ruoli & img

//   console.log(team[0].name)
//   console.log(team[0].role)
//   console.log(team[0].image)


//   console.log(team[1].name)
//   console.log(team[1].role)
//   console.log(team[1].image)

//   console.log(team[2].name)
//   console.log(team[2].role)
//   console.log(team[2].image)

//   console.log(team[3].name)
//   console.log(team[3].role)
//   console.log(team[3].image)


//   console.log(team[4].name)
//   console.log(team[4].role)
//   console.log(team[4].image)

//   console.log(team[5].name)
//   console.log(team[5].role)
//   console.log(team[5].image)


  //ciclo for con tre console.log
/*
for(let i = 0; i < team.length; i++){
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
}

*/



//ciclo for in

for(let i = 0; i < team.length; i++){
     for (let key in team[i]) {
         console.log(team[i][key]);
    }
 }


//stampare le stesse informazioni su DOM sottoforma di stringhe

let html = document.getElementById("team");

for(let i = 0; i < team.length; i++){
    for (let key in team[i]) {
        let paragraph = document.createElement("p");

    paragraph.innerText = team[i][key]; 
    html.append (paragraph);

        
   }
}

