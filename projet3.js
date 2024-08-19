let listeLivres=[
    {titre:' Le Petit Prince',
    auteur:'Antoine de Saint-Exupéry',
    isbn:'978-0451524935',
    editeur:'',
    anneeDePublication:1998,
    category:'Histoire',
    disponibilite:true
},{
    titre: "1984",
    auteur: "George Orwell",
    isbn: "978-0451524936",
    editeur: "Secker & Warburg",
    anneeDePublication: 1949,
    category: "Dystopian Fiction",
    disponibilite:true
}
]
function  ajouterLivre(titre,auteur,isbn,editeur,anneeDePublication,category){
    const existeLivre=listeLivres.find(item=>item.isbn===isbn)
    if (existeLivre) {
        console.log("Erreur : Un livre avec ce ISBN existe déjà.")
    }else{
        const livre={
            titre,
            auteur,
            isbn,
            editeur,
            anneeDePublication,
            category,
            disponibilite:true
        }
        listeLivres.push(livre)
        console.log("Livre ajouté avec succès !")
    }
}




function supprimerLivre(isbn){
    const index=listeLivres.findIndex(item=>item.isbn===isbn)
    if(index===-1){
        console.log(`Erreur : Aucun livre trouvé avec l'ISBN ${isbn}.`)
    }else{
        listeLivres.splice(index,1)
        console.log(`Livre avec ISBN ${isbn} supprimé avec succès.`)
    }
}

function modifierLivre(titre,auteur,isbn,editeur,anneeDePublication,category,disponibilite){
    const index=listeLivres.findIndex(item=>item.isbn===isbn)

    if(index===-1){
        console.log("Erreur : Un livre avec ce ISBN existe déjà.") 
    }else{
        listeLivres[index].titre=titre
        listeLivres[index].auteur=auteur
        listeLivres[index].editeur=editeur
        listeLivres[index].anneeDePublication=anneeDePublication
        listeLivres[index].category=category
        listeLivres[index].disponibilite=disponibilite
        console.log(`Livre avec ISBN ${isbn} modifié avec succès et ${index}.`)
    }
}

function rechercherLivre(titre,auteur,category){
    const results = inventory.filter(book => {
        return (
            (!titre || book.title.toLowerCase().includes(titre.toLowerCase())) &&
            (!auteur || book.author.toLowerCase().includes(auteur.toLowerCase())) &&
            (!isbn || book.isbn === isbn) &&
            (!category || book.category.toLowerCase().includes(category.toLowerCase()))
        )
    })

    // Afficher les résultats
    if (results.length > 0) {
        console.log("Livres correspondant aux critères :")
        results.forEach(book => {
            console.log(`Titre: ${book.title}, Auteur: ${book.author}, ISBN: ${book.isbn}, Catégorie: ${book.category}`);
        })
    } else {
        console.log("Aucun livre ne correspond aux critères.")
    }
   

}

ajouterLivre(" Les Misérables","Victor Hugo","978-2070409202","A. Lacroix, Verboeckhoven & Cie"
    ,1862,"Classique de la littérature")

//supprimerLivre('978-2070409202')
modifierLivre("Les Misérables de victor","Victor Hugo","978-2070409202","A. Lacroix, Verboeckhoven & Cie"
 ,1862,"Classique de la littérature")
console.log(listeLivres)

// Gestion Membres

let listeMembres = [
    { nom: 'Alice Dupont', numeroMembre: 'M001', adresse: '123 Rue Principale', dateInscription: '2023-01-15' },
    { nom: 'Bob Martin', numeroMembre: 'M002', adresse: '456 Avenue des Champs', dateInscription: '2023-02-20' }
]

function inscrireMembre(nom, numeroMembre, adresse, dateInscription) {
    const existeMembre = listeMembres.find(item => item.numeroMembre === numeroMembre);
    if (existeMembre) {
        console.log("Erreur : Un membre avec ce numéro existe déjà.")
    } else {
        const membre = { nom, numeroMembre, adresse, dateInscription }
        listeMembres.push(membre);
        console.log("Membre inscrit avec succès !")
    }
}

function mettreAJourMembre(numeroMembre, nom, adresse, dateInscription) {
    const index = listeMembres.findIndex(item => item.numeroMembre === numeroMembre);
    if (index === -1) {
        console.log(`Erreur : Aucun membre trouvé avec le numéro ${numeroMembre}.`);
    } else {
        if (nom) listeMembres[index].nom = nom;
        if (adresse) listeMembres[index].adresse = adresse;
        if (dateInscription) listeMembres[index].dateInscription = dateInscription;
        console.log(`Informations du membre avec le numéro ${numeroMembre} mises à jour avec succès.`)
    }
}

function supprimerMembre(numeroMembre) {
    const index = listeMembres.findIndex(item => item.numeroMembre === numeroMembre)
    if (index === -1) {
        console.log(`Erreur : Aucun membre trouvé avec le numéro ${numeroMembre}.`)
    } else {
        listeMembres.splice(index, 1);
        console.log(`Membre avec le numéro ${numeroMembre} supprimé avec succès.`)
    }
}

function rechercherMembre(nom = '', numeroMembre = '') {
    const results = listeMembres.filter(member => {
        return (
            (!nom || member.nom.toLowerCase().includes(nom.toLowerCase())) &&
            (!numeroMembre || member.numeroMembre === numeroMembre)
        )
    })

    // Afficher les résultats
    if (results.length > 0) {
        console.log("Membres correspondant aux critères :");
        results.forEach(member => {
            console.log(`Nom: ${member.nom}, Numéro de membre: ${member.numeroMembre}, Adresse: ${member.adresse}, Date d'inscription: ${member.dateInscription}`);
        })
    } else {
        console.log("Aucun membre ne correspond aux critères.");
    }
}

// Inscrire un nouveau membre
inscrireMembre('Charles Dupuis', 'M003', '789 Boulevard des Lilas', '2023-03-25')

// Mettre à jour les informations d'un membre
mettreAJourMembre('M001', 'Alice Dupont', '123 Rue Principale, Apt 2', '2023-01-15')

// Supprimer un membre
//supprimerMembre('M002')

// Rechercher des membres par nom
rechercherMembre('Charles')

// Rechercher des membres par numéro de membre
rechercherMembre('', 'M003')


//Partie Emprunt

let listeEmprunts=[]

function enregistrerEmprunt(isbn,numeroMembre,dateEmprunt){
    const livre=listeLivres.find(livre=>livre.isbn===isbn)
    const membre=listeMembres.find(membre=>membre.numeroMembre===numeroMembre)

    if(!livre){
        console.log("Erreur : Livre non trouvé.");
        return;
    }
    if(!membre){
        console.log("Erreur : membre non trouvé.");
        return;
    }
    livre.disponibilite=false
    listeEmprunts.push({
       isbn,
       numeroMembre,
       dateEmprunt,
       dateRetour:null
    })
    console.log(`Emprunt enregistré pour le livre ISBN ${isbn} par le membre ${numeroMembre}.`)
    
}

function enregistrerRetour(isbn,numeroMembre,dateRetour){
  const emprunt=listeEmprunts.find(emprunt=>emprunt.isbn===isbn && emprunt.numeroMembre===numeroMembre)
  const livre=listeLivres.find(livre=>livre.isbn===isbn)

  if(!emprunt){
    console.log("Erreur : Emprunt non trouvé.")
    return
  }
  livre.disponibilite=true
  emprunt.dateRetour=dateRetour

  console.log(`Retour enregistré pour le livre ISBN ${isbn} par le membre ${numeroMembre}.`)
  
}

function verifierDisponibilite(isbn) {
    const livre = listeLivres.find(livre => livre.isbn === isbn)

    if (!livre) {
        console.log("Erreur : Livre non trouvé.")
        return false;
    }

    if (livre.disponibilite) {
        console.log(`Le livre ISBN ${isbn} est disponible.`)
        return true;
    } else {
        console.log(`Le livre ISBN ${isbn} n'est pas disponible.`)
        return false;
    }
}

function calculerFraisRetard(isbn, numeroMembre, dateActuelle, tauxFraisParJour) {
    const emprunt = listeEmprunts.find(emprunt => emprunt.isbn === isbn && 
        emprunt.numeroMembre === numeroMembre && emprunt.dateRetour === null)

    if (!emprunt) {
        console.log("Erreur : Emprunt non trouvé.")
        return 0;
    }

    const dateEmprunt = new Date(emprunt.dateEmprunt)
    const dateAct = new Date(dateActuelle)
    const diffTime = Math.abs(dateAct - dateEmprunt)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const fraisRetard = diffDays * tauxFraisParJour;

    console.log(`Frais de retard pour le livre ISBN ${isbn} par le membre ${numeroMembre}: ${fraisRetard} FGN.`)
    return fraisRetard;
}


enregistrerEmprunt("978-0451524935","M001", "2023-08-01")
verifierDisponibilite("978-0451524935")

calculerFraisRetard("978-0451524935", "M001", "2023-08-20", 500)
enregistrerRetour("978-0451524935", "M001", "2023-08-15")


verifierDisponibilite("978-0451524935")

// Gestion Reservation

let listeReservations=[]

function reserverLivre(isbn,numeroMembre){
    const livre=listeLivres.find(livre=>livre.isbn===isbn)
    const membre=listeMembres.find(membre=>membre.numeroMembre===numeroMembre)

    if(!livre){
        console.log("Erreur : Livre non trouvé.");
        return;
    }
    if(!membre){
        console.log("Erreur : Membre non trouvé.");
        return;
    }
    if(livre.disponibilite){
        console.log(`Le livre ISBN ${isbn} est disponible, vous pouvez l'emprunter directement.`)
    }else{
        listeReservations.push({isbn,reservation:[numeroMembre]})
        console.log(`Le livre ISBN ${isbn} est actuellement indisponible. Vous êtes ajouté à la liste d'attente.`)
        }
        
}



enregistrerEmprunt("978-0451524936","M001", "2023-08-01")
reserverLivre('978-0451524936','M002')  // Alice réserve '1984'
reserverLivre('978-0451524936','M003')
console.log(listeReservations)
