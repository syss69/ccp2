  <h1>Évaluation CCP2 Dévéloppement partie back-end</h1>

<h3>Projet stack:</h3>
<ul>
  <li>NodeJs</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Argon2</li>
  <li>Cookie-Parser</li>
</ul>

<h3>Pour lancer l'application:</h3>
```
npm install //installer les dependances
npm run start // demarer le serveur
```

<h2>Utilisation MongoDb sur mon projet.</h2>

j'ai choise d'utiliser une bdd nosql (MongoDb), car j'avais déjà une experience avec bdd sql (SQLite, MySQL, PostgreSQl) et j'avais envie d'ameliiorer mes compétences sur utilisation MongoDB.

Mongodb est beaciup plus simple à installer et à utiliser L'interaction avec la bdd est plus intuitive parce que il n'y a pas de risque de faire des erreurs de syntaxe SQL, j utilise des fonctions de Mongoose comme find, findById, findByIdAndUpdate etc, 
ce qui rend la manipulation avec le bdd plus fluide.

De plus, Mongoose permet de structurer les données à trsvers des modèles, ce qui facilite  leur validation et leur organisation. Cela rend le développement plus cohérent et réduit les erreurs liées aux incohérences des données.
