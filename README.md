# Machine à compliments :

Félicitations ! Vous êtes sur le point de créer une incroyable "Machine à compliments" en TypeScript. Cette machine magique est capable de donner des compliments personnalisés à différentes personnes en fonction de leur type (par exemple, ami, collègue, membre de la famille, etc.), mais aussi en fonction de leur caractère (par exemple, gentil, intelligent, drôle, etc.). La machine est espiègle et utilise des types génériques pour fonctionner, vous permettant de choisir parmi trois types de données : `string`, `number` ou `boolean`. Pouvez-vous relever le défi et créer cette machine incroyable ?

# Etapes

1. Commencez par créer une classe `ComplimentMachine` qui peut donner des compliments à différentes personnes de types `string`, `number` ou `boolean`. Les personnes sont représentées par des noms, des âges ou des caractères (gentil, intelligent, drôle, etc.).

2. Dans la classe `ComplimentMachine`, ajoutez une méthode `compliment` qui prend en paramètre un nom, un âge ou un caractère de type `T`. Cette méthode devra renvoyer un compliment personnalisé en fonction du type de personne et du caractère donnés.

3. Pour personnaliser les compliments, vous utiliserez les méthodes privées `getPersonType` et `getComplimentForPersonType`.

4. La méthode privée `getPersonType` permettra de déterminer le type de personne en fonction du paramètre donné. Par exemple, si le paramètre est de type `string`, la méthode renverra "ami". Si le paramètre est de type `number`, la méthode renverra "collègue". Si le paramètre est de type `boolean`, la méthode renverra "membre de la famille".

5. La méthode privée `getComplimentForPersonType` permettra d'obtenir un compliment générique en fonction du type de personne. Par exemple, si la personne est un "ami" et qu'elle est "gentille", la méthode pourrait renvoyer "Tu es vraiment gentil !".

6. Commencez par créer des compliments génériques pour chaque type de personne et chaque caractère.

7. Créez ensuite des compliments spécifiques en utilisant les méthodes privées.

8. Vous pouvez créer différentes instances de `ComplimentMachine` pour chaque type de personne et chaque caractère.

9. Enfin, appelez la méthode `compliment` avec différents noms, âges ou caractères pour voir les compliments personnalisés apparaître !


Amusez-vous bien en créant votre "Machine à compliments" magique ! Faites preuve de créativité pour personnaliser les compliments en fonction du type de personne et du caractère. La magie des types génériques vous permettra de rendre votre machine flexible et réutilisable pour différentes personnes et caractères. Bonne chance et amusez-vous ! 😄