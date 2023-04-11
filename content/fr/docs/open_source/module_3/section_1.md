---
title: "Section 1: Modèles d'octroi de licences de logiciels, de revenus et de développement"
weight: 1
url: "docs/logiciels-libres/module_3/section_1/"
---

# {{< param title >}}

## Approvisionnement dans le contexte gouvernemental

Le gouvernement dispose de normes, de processus et de modèles bien établis pour l'approvisionnement, la budgétisation et la passation de marchés. Ces normes, processus et modèles ont été conçus à l'origine pour des actifs non numériques et des services de fournisseurs (comme le matériel de bureau ou le déneigement). Ces actifs et services sont fixes et prévisibles. Lorsque les gouvernements utilisent ces processus traditionnels pour obtenir des logiciels, ils ont tendance à privilégier les actifs logiciels (logiciels propriétaires) et les services (développement en cascade) fixes et prévisibles. Ils partent du principe que l'expertise technique est externe, et ne tiennent pas compte du partage entre pairs et des communautés de pratique. Mais, comme l'a fait remarquer une journaliste, il est de plus en plus fréquent que les longs cycles budgétaires et les mentalités des gouvernements ne correspondent pas au rythme de la technologie et à son besoin d'améliorations et de mise à niveau constantes.[^21]

Les dirigeants du secteur public ont la possibilité d'adopter une approche axée sur le numérique pour l'approvisionnement, la budgétisation et la passation de marchés, ce qui serait conforme aux pratiques exemplaires en matière de développement de logiciels, tout en préservant l'intégrité d'un processus d'approvisionnement public légitime, équitable, transparent et objectif.

Les gouvernements ont des ressources limitées, surtout lorsqu'il s'agit d'ajouter des étapes numériques aux unités opérationnelles et aux services existants. Des processus d'approvisionnement efficaces et des approches intelligentes en matière de logiciels libres peuvent les aider à atteindre les objectifs de transformation numérique malgré des budgets limités.

Les processus numériques d'approvisionnement, de budgétisation et de passation de marchés permettent aux employés du secteur public de contrôler la manière dont leurs outils numériques sont conçus, gérés et mis en œuvre, en particulier lorsqu'ils utilisent des logiciels libres.

## Octroi de licences de logiciels

N'importe qui peut développer un code logiciel et appliquer la protection qu'il souhaite. Une **licence de logiciel** est un document juridique qui définit comment un logiciel peut être utilisé, commercialisé, modifié, concédé en sous-licence et redistribué. Les licences de logiciels sont juridiquement exécutoires en vertu de la *Loi sur le droit d'auteur*.

Il existe deux grandes catégories de licences de logiciels : les licences propriétaires et les licences libres.

- Une **licence propriétaire** accorde à un utilisateur final le droit d'utiliser un logiciel, généralement contre rémunération. Il est interdit aux utilisateurs de modifier, copier, concéder en sous-licence ou distribuer le logiciel. Les logiciels propriétaires sont conçus de façon à empêcher les utilisateurs d'accéder au code source.

- Une **licence libre** confère à quiconque le droit d'utiliser, d'étudier, de modifier et de distribuer le logiciel et son code source à d'autres, dans n'importe quel but (souvent avec attribution). Le code sous-jacent (code source) est accessible aux utilisateurs finaux.

Les exemples les plus courants de licences de logiciels libres sont [Creative Commons](https://creativecommons.org/), la [licence publique générale GNU](https://www.gnu.org/licenses/gpl-3.0.en.html) et la [licence MIT](https://opensource.org/licenses/MIT). Ces licences permettent au créateur d'un logiciel de préciser les conditions de son utilisation, de sa reproduction et de sa commercialisation.

Des organisations comme la [Free Software Foundation](https://www.fsf.org/) et le [Software Freedom Law Center](https://softwarefreedom.org/) occupent une place importante dans la collectivité des logiciels libres. Ils sont les responsables de fait de l'application des licences de logiciels libres. Toutefois, les actions en justice sont rares, car les licences de logiciels libres vont directement de l'auteur/propriétaire au titulaire de la licence, \[de sorte que\] la seule partie en position légale pour faire respecter \[les protections de la licence\] est l'auteur ou le propriétaire du droit d'auteur. Les distributeurs intermédiaires n'ont pas le pouvoir d'exécution, sauf en ce qui concerne leur contribution éventuelle.[^22]

## Aperçu des modèles de revenus des logiciels

Les sociétés de développement de logiciels ont adopté divers modèles pour générer des revenus à partir de logiciels protégés par une licence propriétaire. Voici quelques-uns des modèles de revenus les plus courants, ainsi que des exemples de logiciels qui les utilisent.

- **Licence/achat unique.** Il s'agit de vendre un logiciel sous forme de licence qui peut être utilisé par un seul utilisateur ou un groupe d'utilisateurs. L'idée générale est de proposer un produit qui ne nécessite qu'un seul paiement.

  - Microsoft Windows, serveur Apache.

- **Abonnement (paiement récurrent).** Contrairement à la licence, l'utilisateur a accès au logiciel en payant un abonnement mensuel ou annuel.

  - Netflix, Spotify, Adobe Creative Suite.

- **Logiciel payable à l'utilisation.** Cette méthode de tarification est principalement utilisée dans le cas de différents produits et services basés sur l'informatique en nuage qui vous facturent les puissances de calcul/la mémoire/les ressources/le temps utilisés.

  - Amazon Web Services et Google Cloud Platform.

- **Freemium (vente incitative).** Le freemium est un type de monétisation en vertu duquel un utilisateur peut accéder gratuitement à un produit de base, mais pour lequel il sera facturé pour des fonctions, services, suppléments ou modules d'extension supplémentaires.

  - Skype, Evernote, Gitbook.

- **Tarification hybride.** Les entreprises de logiciels combinent parfois des éléments de plusieurs modèles de revenus différents dans leurs plans de tarification. Ainsi, un plan freemium pourrait se transformer en une forme de plan à plusieurs niveaux avec paiement à l'utilisation. Après avoir dépassé une certaine limite en termes de calcul ou de ressources, un utilisateur peut être contraint d'utiliser un autre type de tarification, ou invité à le faire.

  - Mailchimp, Amazon Web Services, SalesForce.[^23]

- **Prestation de services.** Certaines sociétés de développement de logiciels facturent des services spécifiques, comme la création d'une instance personnalisée d'un logiciel libre existant. En pareil cas, le client paie le temps et l'expertise nécessaires pour la personnalisation et la mise en œuvre du logiciel, et non le logiciel proprement dit.

  - GNU/Linux, SugarCRM, LibreOffice.

## Modèles de développement de logiciels

Il existe deux principaux modèles de développement de logiciels.

- Le développement **en cascade** exige un plan détaillé, linéaire et séquentiel -- faisant état de chaque détail, chaque fonctionnalité, chaque réunion, chaque repère -- avant d'entreprendre un projet. L'inconvénient du développement en cascade est qu'il ne se prête pas bien à la plupart des développements de logiciels, car il sera presque toujours nécessaire de s'adapter à de nouvelles contraintes, de nouvelles exigences ou de nouveaux problèmes. Et, comme les développeurs ne sont pas en mesure de prévoir tous les problèmes potentiels, il est très probable que le produit final soit défectueux.

- Le développement **agile** est axé sur un résultat final prévu, et peut-être même un échéancier, mais il n'entre dans les détails qu'en cas de besoin, ce qui permet des changements en réponse à de nouvelles informations. Le développement agile commence par la définition d'histoires d'utilisateurs qui représentent des cas d'utilisation et des fonctionnalités réels. Le codage se fait par « sprints » d'une durée d'une à quatre semaines, chacun étant consacré au développement d'une fonctionnalité logicielle basée sur un récit utilisateur. Grâce à une méthode de développement agile, des modules distincts mais interdépendants peuvent être développés, testés, déployés et révisés facilement.

## Le décalage entre l'acquisition et le développement de logiciels

Le processus d'octroi de marchés publics est conçu de façon à obtenir le meilleur rapport qualité‑prix et éviter les risques. L'objectif est d'identifier un besoin et de trouver le produit le moins cher qui répond à ce besoin dans un délai prévisible.[^24]

Il s'agit d'une bonne approche pour l'achat de produits analogues (p. ex., matériel de bureau, lampadaires, service de déneigement). Définir les spécifications, comparer les options en fonction des réponses à un appel d'offres, prévoir les coûts futurs et rédiger un contrat à prix ferme sont des tâches assez simples.

Toutefois, en ce qui concerne les logiciels, les structures d'approvisionnement traditionnelles vous inciteront à acheter des logiciels prêts à l'emploi ou à contracter des logiciels personnalisés développés en cascade, en fonction de feuilles de route pluriannuelles surspécifiées. Mais cette approche est de moins en moins conforme aux pratiques exemplaires du secteur de développement des logiciels, qui privilégie les pratiques agiles telles que l'itération rapide et les tests continus auprès des utilisateurs pour créer des logiciels qui répondent à leurs besoins. Comme l'a fait remarquer un expert, cela a laissé une déconnexion fondamentale entre les pratiques de passation de marchés (il est plus prudent de tout spécifier) et les pratiques de développement de logiciels (il est dangereux de tout spécifier).[^25]

L'approvisionnement conventionnel -- l'achat d'un logiciel offert sur le marché ou le développement d'un produit personnalisé selon la méthode en cascade -- peut *sembler être* l'option la moins risquée. Cependant, cela conduit continuellement à une explosion des coûts et à des produits finis qui ne servent pas un objectif clair ou, pire encore, qui se terminent en catastrophe.

## Faire correspondre les pratiques exemplaires en matière de marchés publics et de logiciels

Il est important de garder à l'esprit que lorsque vous achetez un logiciel personnalisé, vous n'achetez pas un produit. Vous achetez un service, le service de développeurs qui créent des logiciels, avec des fonctionnalités classées par ordre de priorité par un propriétaire de produit du gouvernement.[^26]

Les logiciels doivent être évalués non seulement en fonction de leur coût, mais également en fonction de leur qualité, des coûts de propriété et de mise à niveau sur le cycle de vie à long terme, et de problèmes potentiels imprévus tels que le verrouillage du fournisseur, l'augmentation des frais de licence, le coût des fonctions supplémentaires, les frais de mise à niveau et la propriété des données.[^27]

Nous examinerons, dans les prochaines sections, ce que cela signifie pour l'obtention de services de développement afin de créer une instance personnalisée de logiciel libre. Nous explorerons également les pratiques exemplaires et les outils d'approvisionnement et de budgétisation modulaire qui permettent un développement logiciel agile efficace.

[^21]:  Shira Ovide, [Government Tech Moves Too Slooowly](https://www.nytimes.com/2021/07/07/technology/jedi-government-tech.html), The New York Times, le 7 juillet 2021.

[^22]:   Heather J. Meeker, [Chapter 13. Enforcement of Open Source Licenses, The Open Source Alternative : Understanding Risks and Leveraging Opportunities](https://www.oreilly.com/library/view/the-open-source/9780470194959/ch13.html) (Hoboken, NJ : Wiley & Sons, 2008).

[^23]:  AltexSoft, [Revenue Model Types and Examples](https://www.altexsoft.com/blog/revenue-model-types/), le 12 juin 2020.

[^24]:  Waldo Jacquith, [The Disconnect between Software Development and Government Contracting](https://waldo.jaquith.org/blog/2021/05/disconnect-development-and-government-contracting/), le 8 mai 2021.

[^25]:  Ibid.

[^26]:  Ibid.

[^27]:   Matthew Claudel et Bianca Wylie, [Technology Procurement : Shaping Future Public Value](https://opennorth.ca/publications/technology-procurement-shaping-future-public-value/), Community Solutions Network Research Brief (Nord Ouvert, 2021).
