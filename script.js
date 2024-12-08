
fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
      


        let header = document.getElementById("header");
        let titre = document.createElement("h1");
        titre.textContent=data.nomCommercial;
        header.appendChild(titre);

        let sousTitre =document.createElement("h2");
        sousTitre.textContent=data.phraseAccroche;
        header.appendChild(sousTitre);

        // let boutonHeader=document.createElement("button");                       ERROR
        // boutonHeader.textContent=data.texteAppelAction;
        // header.appendChild(boutonHeader);

        let sectionClient=document.getElementById("avantage-clients");

        data.avantagesClients.forEach(element => {
            let paragrapheClient=document.createElement("h3");
        paragrapheClient.textContent=element;
        sectionClient.appendChild(paragrapheClient);
            
        });


      
        data.produits.forEach(element => {
            let ProjetContainer = document.getElementById("projet-container");
           let ContainerProduit = document.createElement("div");
           ContainerProduit.setAttribute("class", "article")
           let image = document.createElement("img") 
           image.className = "produitImage";
           image.src = element["image-url"];
           let paragraphe = document.createElement("p")
           paragraphe.textContent = element.description;

           ContainerProduit.appendChild(image);
    ContainerProduit.appendChild(paragraphe);
    ProjetContainer.appendChild(ContainerProduit);


// });
// data.services.forEach(element => {                                            ERROR
    
    
//     let Services= document.createElement("p");
//     let ServicesNom=document.createElement("div");
//     ServicesNom.textContent= element.nom;
    
//     let servicesDescription = document.createElement("div");
//     servicesDescription.textContent=element.description;


//     servicesDescription.appendChild(Services);
//     Services.appendChild(ServicesNom);
//     Services.appendChild(servicesDescription);

});


    data.temoignages.forEach(element => {
        
        let ContainerProduit = document.createElement("div");
            let temoignageNom=document.createElement("h4");
            temoignageNom.textContent= element.prenom;
            
            let temoignageType = document.createElement("h5");
            temoignageType.textContent=element.typeExperience;

            let temoignagecommentaire = document.createElement("h6");
            temoignagecommentaire.textContent=element.commentaire;

            let temoignagenote=document.createElement("div");
            temoignagenote.textContent=element.note;

            temoignage.appendChild(ContainerProduit);
            ContainerProduit.appendChild(temoignageNom);
            ContainerProduit.appendChild(temoignageType);
            ContainerProduit.appendChild(temoignagecommentaire);  
            ContainerProduit.appendChild(temoignagenote);
            
        
        });
   


        
    })
    .catch(error => console.error('Error:', error));

