# Exo 1:
1.  Faire une recherche ( RND ) sur:
-   POST + POST Parameters ( Express )
    -   form data
    -   body (json)
------------------------------------------------------------
Task Management:
Besoins:
-   consulter la liste de mes taches d'aujourdhui       
        => app.get('/tasks-list', function(req, res) {...}
-   créer une tache et l'ajouter à la liste
        => app.post('/tasks-list/task?id=132&status=TODO', function(req, res) {...}
-   modifier la statut d'une tache en COMPLETED
        => app.put('/tasks-list/task?id=3&status=COMPLETED', function(req, res) {...}
-   à noter: les statuts d'une tache: TODO, COMPLETED
        => app.notify('/tasks-list/task?id=3&status=COMPLETED', function(req, res) {...}

TODO:
-   analyser les routes par rapports à ce besoin
    -  hints: voir la diff entre GET et POST
       -  GET 
          -  pour OBTENIR des données
          -  incluent toutes les données dans l’URL
       -  POST
          -  pour TRANSMETTRE des données
          -  ajoutent des données supplémentaires dans le corps du message d’un client
          -  données de taille importante
          -  pour les données sensible
          -  recommandée pour modifier les données sur le serveur


# Reference docs:
https://express,js.com