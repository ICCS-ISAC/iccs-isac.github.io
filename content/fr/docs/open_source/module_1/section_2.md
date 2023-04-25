---
title: "Section 2: Les fondements des logiciels"
weight: 2
url: "docs/logiciels_libres/module_1/section_2"
---

# {{< param title >}}

## Les fondements des logiciels : Concepts clés et terminologie

Tout au long de ce cours, nous aborderons les différents aspects de l'achat, de l'utilisation et de la mise à niveau des logiciels, et nous accorderons une attention particulière au contexte du secteur public. Quelques concepts fondamentaux sous-tendent cette discussion :

- Le **développement** désigne la *manière dont les logiciels sont mis au point.* Les logiciels sont constitués de lignes de code. Ils peuvent être conçus à partir de rien, mais le plus souvent, ils sont composés de modules préexistants (qui remplissent des fonctions spécifiques, comme l'authentification de la connexion) et ces modules peuvent eux‑mêmes être libres. Dans le cadre de ce cours, le développement englobe également la mise à jour et la mise à niveau continues des logiciels.

- L'**intégration** désigne la mise en œuvre dans un contexte particulier. Il est rare que les logiciels fonctionnent correctement dès le début. Selon les besoins de votre organisation, la mise en œuvre nécessitera des fonctionnalités personnalisées et devra toujours être intégrée à votre environnement numérique existant.

- La **distribution** désigne la *manière dont le logiciel parvient à l'utilisateur final*. Cela inclut la licence légale d'utilisation du logiciel (logiciel propriétaire ou logiciel libre), ainsi que la méthode de distribution (informatique en nuage, hybride ou sur place).

- Les **revenus** désignent *qui paie qui et pourquoi*. Il peut s'agir d'un logiciel en tant que service (SaaS), d'un déploiement sur place d'un logiciel propriétaire, ou d'une rémunération à l'acte pour créer une mise en œuvre personnalisée d'un logiciel libre.

- Les **clients,** les **vendeurs,** les **entrepreneurs et** les **utilisateurs** sont les *principaux intervenants d'un écosystème logiciel*. Les liens entre les intervenants découlent des modèles de développement, de distribution et de revenus.

## Modèles de licences de logiciels

N'importe qui peut mettre au point un code logiciel et appliquer la licence de son choix. Une licence détermine qui peut utiliser le logiciel, comment il peut l'utiliser, s'il peut le modifier, etc. Il existe deux principaux modèles de licence pour les logiciels :

- Les licences **de logiciels propriétaires** font référence aux logiciels dont le code source appartient légalement à la personne ou à la société qui les a créés. Cette entité a le droit unique et exclusif de modifier et de commercialiser le code comme bon lui semble.

  - Exemples : Microsoft Windows et Apple OS X (systèmes d'exploitation), Microsoft Office (logiciels de productivité), Adobe Creative Suite (logiciel de conception), SAP ERP (progiciel de gestion intégrée), ArcGIS (système d'information géographique).

- Les licences de **logiciels ouvertes** font référence à des logiciels auxquels tout le monde peut utiliser ou modifier le code source. Le code source est mis à disposition en ligne et les contributions sont gérées à l'aide d'une plateforme comme GitHub.

  - Exemples : Linux (système d'exploitation), Firefox (navigateur web), Python (langage de programmation), Open Office (logiciels de productivité), Thunderbird (client de messagerie), Apache (serveur web), QGIS (système d'information géographique).

## Fonctionnement des logiciels propriétaires

Il est plus que probable que vous utilisez déjà des logiciels propriétaires au quotidien et que vous avez une connaissance de base de leur fonctionnement. Voici un résumé des principales étapes de la chaîne de valeur des logiciels propriétaires.

- **Développement**: Les vendeurs de logiciels créent et commercialisent des logiciels. Ils fournissent généralement des mises à jour de base (ou des « rustines ») des logiciels afin qu'ils restent exempts de bogues et qu'ils soient compatibles avec des environnements numériques en évolution (les mises à jour peuvent être gratuites ou payantes).

- **Distribution**: L'organisation qui a créé le logiciel conserve la propriété des droits d'accès, d'utilisation et de commercialisation du code source par l'entremise d'une licence juridiquement contraignante. Les logiciels peuvent être hébergés dans l'informatique en nuage (en ligne), les utilisateurs payant pour y accéder, ou hébergés sur place (sur des serveurs locaux).

- **Intégration :** Les éditeurs de logiciels proposent généralement une assistance, mais ils peuvent facturer des frais. Certains fournisseurs de logiciels proposent des intégrations personnalisées en fonction de l'environnement numérique existant de votre organisation; dans le cas contraire, vous devrez faire appel à un autre fournisseur de services.

- **Revenus**: Les utilisateurs finaux paient pour utiliser le logiciel, selon un mode de paiement (montant forfaitaire, montant basé sur l'utilisation, paiement à plusieurs niveaux, freemium, etc.). Les éditeurs de logiciels peuvent publier des rustines ou offrir de nouvelles fonctionnalités, des mises à niveau et des intégrations qui sont inclus dans la structure tarifaire ou pour lesquels les utilisateurs finaux paient des frais supplémentaires.

## Fonctionnement des logiciels libres

Les logiciels libres fonctionnent d'une manière fondamentalement différente des logiciels propriétaires.

- **Développement :** Un concepteur crée la première version d'un logiciel libre et la télécharge sur un dépôt public en ligne sous une licence libre. Le code est ensuite maintenu à l'aide d'un **système de contrôle de la version distribuée** (Git étant le plus populaire) dans lequel chaque utilisateur dispose d'une copie de travail et de l'historique complet des modifications d'une base de code donnée (voir la figure 1.1). GitHub, le plus grand service d'hébergement de ces dépôts, fournit un environnement fiable dans lequel une collectivité mondiale peut gérer, harmoniser et concilier des versions simultanées (possiblement contradictoires) du logiciel, identifier et corriger les bogues, et rationaliser le processus d'édition.

  - Il existe plusieurs modèles de développement de logiciels libres, chacun ayant une approche légèrement différente de la gestion des fusions avec la base de code principale et de leur fréquence. Dans la plupart des cas, ces modèles suivent une structure ramifiée, dans laquelle la base de code principale fait office de « tronc » et les « branches » sont créées lorsque des particuliers ou des organisations créent des copies -- ou « bifurcations » - et ajoutent leurs propres fonctionnalités (voir la figure 1.2). De cette façon, les logiciels libres s'améliorent continuellement grâce aux contributions d'une collectivité ouverte.

  - Certains logiciels libres disposent d'une structure de gouvernance pour l'examen et la validation de toute modification du code source. Cela garantit l'utilité et l'intégrité des contributions. Les modifications validées sont réintégrées dans le tronc principal de l'arbre.

{{< figure src=../fig1_1.png caption="**Figure 1.1 :** Ce diagramme montre de manière simplifiée comment fonctionne un système de contrôle de la version distribuée. Le dépôt d’un serveur principal stocke tous les fichiers associés à un projet de code source. Chaque organisation collaborant au projet maintient un référentiel local qui est une copie du référentiel principal. Chaque programmeur conserve une copie de travail de son référentiel local respectif (qui est lui-même une copie du référentiel principal) sur son disque dur. Les programmeurs peuvent apporter des modifications et mettre à jour leur référentiel local sans aucune interférence. Ils peuvent mettre à jour leurs référentiels locaux avec de nouvelles données provenant du référentiel du serveur principal par une opération appelée « pull » (extraction) et apporter des modifications au référentiel principal par une opération appelée « push » (insertion), à partir de leur référentiel local.{{< newline >}}(*Note: traduction du texte de l'image à venir*)" >}}

{{< figure src=../fig1_2.png caption="**Figure 1.2**: Un modèle de développement simple et ramifié pour les logiciels libres. Le tronc principal représente le code source « original ». Toute personne ou organisation peut créer une copie -- ou « bifurcation » - et ajouter ses propres fonctionnalités. Les branches « Hotfix » sont utilisées pour corriger rapidement les versions de production.{{< newline >}}(*Note: traduction du texte de l'image à venir*)" >}}

- **Distribution :** Une licence de logiciel libre accorde à quiconque le droit d'utiliser, d'étudier, de modifier et de distribuer le logiciel et son code source à quiconque et dans n'importe quel but (souvent avec attribution).

  - Quel que soit le mode de développement du logiciel, il peut être publié sous une licence de logiciel libre. Les défis et les opportunités des logiciels libres sont plus spécifiques et uniques une fois qu'ils ont été publiés sous une licence libre, entrant dans la phase de mise à niveau et d'adaptation.

- **Intégration :** À tout moment, un utilisateur peut décider que ses besoins sont suffisamment uniques pour mériter une version entièrement personnalisée du logiciel. Il peut alors créer une copie du code source et la modifier comme bon lui semble, sans réintégrer les modifications dans le code source principal. Cette opération est connue sous le nom de « hard fork » (changement de protocole), car elle ouvre une nouvelle voie, déconnectée du code source original.

- **Revenu :** Les utilisateurs finaux ne paient pas pour avoir accès au code source. Toutefois, cela ne signifie pas que les logiciels libres sont gratuits. L'adaptation, l'hébergement et la mise à niveau des logiciels entraînent des coûts. Ces coûts peuvent être consacrés au personnel interne ou à l'embauche d'un prestataire de services techniques externe.

{{< hint info >}}
**Encadré 1.1 : Origines du mouvement des logiciels libres**
Le mouvement des logiciels libres a été inspiré par la possibilité de rassembler une collectivité mondiale pour créer, développer et adapter des logiciels librement et en collaboration.

- Les logiciels « libres » ne sont pas des logiciels « gratuits ». En anglais, le mot « free » peut signifier « gratuit » et/ou « assorti de peu ou pas de restriction » (libre).

- Dans les années 1990, les concepteurs de logiciels ont commencé à offrir leurs logiciels gratuitement parce que le coût marginal de chaque unité était nul. Dans un tel contexte, le logiciel est offert gratuitement, mais le concepteur conserve les droits afférents au logiciel.

- Le mouvement des logiciels libres est apparu peu après. Ce mouvement a été important parce qu’il misait sur la possibilité d’accès au code et de modification de celui-ci, et pas simplement sur la gratuité de l’utilisation des logiciels.[^1] Les logiciels seraient libres, de sorte que d’autres concepteurs pourraient non seulement les utiliser, mais également les modifier et les améliorer.

- Dans un essai emblématique, l’un des pères du mouvement des logiciels libres, Lawrence Lessig, a lancé l’expression « pensez à la liberté d’expression par opposition à la bière gratuite » [^2]: les logiciels gratuits sont comme la bière gratuite, alors tandis que les logiciels libres se comparent à la liberté d’expression (accès et reproduction sans restriction).

[^1]: Eric S. Raymond, “The Cathedral and the Bazaar,” Knowledge, Technology & Policy 12, no. 3 (September 1999): 23–49, https://doi.org/10.1007/s12130-999-1026-0.
[^2]: Lawrence Lessig, “Free, as in Beer,” WIRED, September 1, 2006, https://www.wired.com/2006/09/free-as-in-beer/.
{{< /hint >}}
