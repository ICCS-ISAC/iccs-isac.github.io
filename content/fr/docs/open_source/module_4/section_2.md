---
title: "Section 2 : Enjeux et concepts clés en matière d'approvisionnement"
weight: 2
url: "docs/logiciels-libres/module_4/section_2/"
---

# {{< param title >}}

### Risques sur le plan de la sécurité

Plusieurs aspects des logiciels libres peuvent les rendre vulnérables aux risques de sécurité :

- **Accès déraisonnable :** Le code source ouvert est accessible à tous, ce qui permet aux auteurs de cybermenace de manipuler le code à des fins malveillantes.[^56]

- **Lacunes en matière d'assurance de la qualité :** Il n'est pas toujours certain que des experts ont mené des tests rigoureux visant à garantir la qualité du produit pendant toutes les phases de développement du logiciel libre ni que ceux qui ont examiné le code ont minutieusement vérifié toutes les fonctions de sécurité.[^57]

- **Manque de soutien :** Les logiciels libres pris en charge par une grande collectivité active d'utilisateurs et de développeurs sont plus susceptibles de recevoir régulièrement des mises à jour et des rustines de sécurité. Toutefois, si vous utilisez un logiciel libre qui n'est pas largement appuyé par une collectivité d'utilisateurs, vous devrez compenser en vous assurant que vous disposez des capacités internes appropriées (ou que vous pouvez faire appel à une assistance externe) pour surveiller les vulnérabilités de sécurité.

### Les limites du modèle de soutien de la collectivité du logiciel libre

La plupart des collectivités de logiciels libres actives mettent régulièrement à jour les logiciels et publient des rustines pour les vulnérabilités connues. Cependant, des problèmes peuvent survenir si personne ne met à jour le logiciel, soit parce que le logiciel est trop nouveau ou trop beau pour attirer une collectivité de développeurs suffisamment importante, soit parce que la collectivité existante n'a pas maintenu un projet de logiciel libre.

Une attaque de cybersécurité qui se traduit par une fuite de données contenant des données sensibles peut avoir une incidence très négative sur la confiance au sein d'une organisation gouvernementale. En pareil cas, il se pourrait que le fait d'attendre que des mises à jour et des rustines de sécurité soient développées par la collectivité de logiciels libres ne soit pas une option. Les organisations gouvernementales doivent plutôt être en mesure d'évaluer et de résoudre rapidement le problème et, pour ce faire, elles doivent disposer d'une certaine expertise interne en ce qui concerne les modules ou logiciels libres utilisés par l'organisation.[^58]

### Approches conventionnelles en matière de gestion des risques

La quasi-totalité, sinon la totalité des organisations gouvernementales ont déjà mis en place un cadre de sécurité informatique. Une politique de sécurité informatique organisationnelle établit les objectifs généraux d'une organisation en matière de sécurité. Elle décrit de quelle façon les employés travaillent et collaborent sur les réseaux de l'organisation tout en respectant la position de l'organisation en matière de gestion des risques liés à la sécurité.

Dans de nombreux cas, les mesures mises en place pour atténuer les risques de sécurité découlant des logiciels propriétaires conventionnels couvrent également les logiciels libres.[^59] En fait, les pratiques actuelles d'évaluation des risques peuvent être appliquées aux logiciels libres sécurisés en traitant les vulnérabilités et en minimisant leur incidence.

Il est plus que probable que votre organisation ait adopté une approche en matière de gestion des risques informatiques et qu'elle ait un plan en place. Même s'il existe de multiples versions de la manière d'aborder la gestion des risques, une fois que vous avez identifié un risque, il existe quatre solutions de base : éviter, atténuer, transférer ou accepter.

Le problème avec les logiciels propriétaires conventionnels est qu'il peut être difficile d'identifier les risques dès le départ, car ils peuvent être cachés derrière le discours commercial du fournisseur et les petits caractères du contrat de licence.

### Gestion des risques liés aux logiciels libres

La gestion des risques liés aux logiciels libres peut être abordée de manière similaire. Un cadre récemment publié par Google identifie trois domaines problématiques largement indépendants avec un objectif concret : connaître les vulnérabilités de votre logiciel libre, empêcher l'ajout de nouvelles vulnérabilités et corriger (ou supprimer) les vulnérabilités.[^60]

Pour connaître vos vulnérabilités, votre équipe doit être en mesure de saisir des métadonnées précises sur les vulnérabilités à partir de toutes les sources de données disponibles, de préférence en suivant les normes du secteur pour simplifier les tâches de suivi. À l'heure actuelle, il est nécessaire de disposer d'un meilleur outil pour comprendre rapidement les vulnérabilités nouvellement découvertes. Toutefois, le fait de comprendre les risques inhérents aux nouvelles dépendances est un bon début. La correction des vulnérabilités n'est pas toujours une tâche facile, car la résolution directe des vulnérabilités nécessite une expertise interne que votre équipe n'a peut-être pas. Toutefois, si votre organisation doit s'attaquer à une vulnérabilité spécifique, le meilleur plan d'action est de travailler de bas en haut dans la chaîne de dépendance pour que le logiciel soit corrigé.

À mesure que de nouvelles menaces apparaissent, de nouvelles vulnérabilités se manifestent, ce qui signifie que la gestion des risques est une activité permanente qui doit être constamment mise à jour, car les mesures existantes peuvent devenir inefficaces. Une façon de suivre les risques et la tolérance au risque d'une organisation est d'utiliser une grille de risques pouvant aider les organisations à évaluer leur probabilité de risques et à comprendre et modéliser les relations entre les menaces, les vulnérabilités et les mesures devant être appliquées.[^61]

En fait, les vulnérabilités des logiciels libres doivent être abordées comme un prolongement des objectifs généraux en matière de sécurité informatique et des processus de rapports d'une organisation plutôt que comme une tâche entièrement nouvelle. N'oubliez pas que la compréhension de vos risques contribuera à créer une culture consciente des risques au sein de l'organisation, tout en examinant comment les risques technologiques -- y compris les risques liés aux logiciels libres -- s'harmonisent avec les objectifs opérationnels.

### Dépendances logicielles : Un défi pour la sécurité et la mise à niveau

Tous les logiciels sont construits à partir d'autres logiciels, d'une façon ou d'une autre. Les développeurs peuvent créer de nouvelles applications beaucoup plus rapidement en pointant vers un code qui a déjà été créé par un tiers que s'ils devaient créer un nouveau code à partir de rien. En fait, une enquête menée en 2017 a révélé que, sur plus de 1 100 bases de code commerciales, 96 % des applications numérisées contenaient des composants de logiciels libres, avec une moyenne de 257 composants par application. »[^62]

Lorsque le « programme A » a besoin du « programme B » pour fonctionner, on parle de **dépendance logicielle**. Les dépendances peuvent être directes (c'est-à-dire que le programme A dépend directement du programme B pour fonctionner) ou transitives (c'est-à-dire que le programme A dépend du programme B, qui dépend à son tour du programme C pour fonctionner).[^63] Les dépendances sont en grande partie inévitables, mais celles qui échappent à votre contrôle présentent un risque.

Une défaillance de dépendance peut se produire lorsqu'une bibliothèque de codes ou un paquetage critique pour le fonctionnement d'un logiciel donné est modifié ou supprimé. L'incident de 2016 concernant le « coussinet gauche » est un exemple qui montre à quel point les conséquences d'une défaillance de la dépendance peuvent être importantes :

- En 2016, un paquet de codes connu sous le nom de « [coussinet gauche](https://www.npmjs.com/package/left-pad) »\'[^64] ne comportant que 11 lignes de codes a été retiré par son développeur du registre NPM où il avait été hébergé. Sa suppression a provoqué une cascade de défaillances de dépendance, entraînant des pannes de logiciels dans le monde entier.[^65]

- Selon un blogueur, le problème plus vaste illustré par cet échec de dépendance est que tant de paquets et de projets ont pris une dépendance pour une simple fonction de chaîne de remplissage gauche, plutôt que leurs développeurs prennent deux minutes pour écrire eux-mêmes une fonction aussi basique.[^66]

En bref, plus les dépendances d'un logiciel échappent à votre contrôle, plus le risque de sécurité est élevé et plus les chances que quelque chose se brise augmentent. La première étape vers la gestion des dépendances et l'atténuation des incidences en aval sur la sécurité et la mise à niveau de votre logiciel libre est simplement d'en être conscient. À cette fin, de nombreux développeurs de logiciels incluent désormais une nomenclature logicielle (SBOM) qui répertorie tous les composants logiciels et tiers présents dans un code base.[^67]
