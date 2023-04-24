---
title: "Section 1: Collaboration entre administrations"
weight: 1
url: "docs/logiciels-libres/module_5/section_1/"
---

# {{< param title >}}

## Avantages de la collaboration

**La collaboration sur les logiciels libres présente des avantages pour tous les intervenants.** Le logiciel que vous concevez, ou les adaptations que vous faites, seront également utiles à d'autres administrations. Les logiciels libres sont plus performants et plus sûrs à mesure que la collectivité qui les entoure s'agrandit. Chaque utilisateur bénéficie des améliorations continues apportées aux logiciels (sous la forme de mises à jour, de nouvelles fonctionnalités ou d'améliorations de la sécurité). Il est donc dans l'intérêt de chaque utilisateur de contribuer, et d'ajouter d'autres utilisateurs contributeurs.

Un autre avantage de la collaboration pour les organisations gouvernementales réside dans le fait qu'elles n'ont pas besoin de réinventer constamment la roue. Lorsque le code source est publié sous une licence libre, une administration peut procéder à de petites adaptations du logiciel afin de veiller à ce qu'il soit le mieux adapté aux cas d'utilisation, aux réglementations et aux normes locales. Lorsqu'un ensemble de fonctionnalités de base est partagé, le temps, les efforts et les ressources de chaque administration peuvent être consacrés à de petites adaptations pour adapter le logiciel à leur contexte local (plutôt que de construire un ensemble complet de fonctionnalités de base à partir de rien). Le partage des connaissances et des ressources aide les partenaires moins expérimentés en matière de logiciels libres à renforcer leurs capacités.

## Avec qui pouvez-vous collaborer?

Les gouvernements et les organismes du secteur public qui souhaitent utiliser des logiciels libres devraient se joindre à des réseaux existants ou établir des relations axées sur la collaboration avec des administrations comparables. Ces réseaux peuvent s'intéresser à un logiciel spécifique ou miser plus largement sur l'utilisation des logiciels libres dans le secteur public. Au sein de ces collectivités, les utilisateurs peuvent partager les défis, les occasions, les capacités, les ressources et les processus (voir encadré 5.1).

Les gouvernements de même niveau -- qu'il s'agisse de gouvernements municipaux ou provinciaux -- sont des collaborateurs naturels lorsqu'il s'agit de concevoir, d'obtenir et de mettre à niveau des logiciels libres. Ils sont chargés de fournir un ensemble similaire de services et ont un ensemble similaire de besoins (internes, administratifs et externes, axés sur les citoyens). Et lorsqu'il s'agit d'acquérir un nouveau logiciel, une approche d'achat groupé permet à un groupe d'organismes gouvernementaux comparables de profiter d'économies d'échelle.

{{< hint info >}}
**Encadré 5.1: Plateforme de gestion des données ouvertes CKAN**

La plateforme de gestion des données ouvertes CKAN est un excellent exemple de collaboration entre administrations. Conçue par l’Open Knowledge Foundation (OKFN), organisme à but non lucratif, pour le gouvernement du Royaume-Uni, cette plateforme est utilisée par les gouvernements nationaux et régionaux du monde entier comme base de leurs portails de données ouvertes, notamment le gouvernement du Canada , le gouvernement de la Colombie-Britannique et le gouvernement de l’Ontario.
Étant donné que les améliorations du code sont partagées, chacun des 115 gouvernements et institutions bénéficie de la production d’un meilleur produit à un coût réduit pour les consommateurs individuels. En plus d’aider les gouvernements à développer et à mettre en œuvre des instances de la plateforme adaptées à leurs besoins[^1], l’importante collectivité d’utilisateurs et de développeurs de CKAN génère et diffuse continuellement des connaissances via GitHub, des listes de diffusion et des canaux IRC.

[^1]: Colombie-Britannique. Ministère de l’emploi, de la relance économique et de l’innovation, About the Catalogue Open Source Project, consultation le 3 novembre 2022. (https://www2.gov.bc.ca/gov/content/data/bc-data-catalogue/about-catalogue-open-source-project)
{{< /hint >}}

## Obstacles à l'utilisation des logiciels libres dans les différentes administrations

Chacun des aspects abordés dans les modules précédents peut présenter des défis spécifiques lorsqu'il s'agit de collaborer à des projets de logiciels libres entre administrations ou entre organismes publics.

- **Défis liés à l'organisation et aux capacités du personnel :** La capacité numérique peut varier considérablement d'un ordre de gouvernement ou d'une institution publique à l'autre, notamment au niveau municipal.[^75] Les administrations n'ont pas toutes une équipe de logiciels libres ou un responsable de produit; il peut arriver que les petites municipalités n'aient qu'une seule personne responsable de l'informatique. Lorsqu'il s'agit de gérer des projets de logiciels libres, les compétences requises sont de nature politiques et non techniques. Les développeurs, les utilisateurs et les responsables de la mise à niveau des logiciels ne sont peut-être pas les mieux placés pour gérer des questions telles que la responsabilité et la négociation des coûts partagés. De même, les responsables de produits ne comprennent pas nécessairement la dynamique et les implications des aspects techniques de la mise à niveau des logiciels.

- **Défis en matière d'approvisionnement, de budgétisation et de passation de marchés :** Les processus, modèles et normes de passation de marchés standard accordent la priorité aux produits disponibles sur le marché, auprès de fournisseurs établis, et, dans le cas de la prestation de services techniques, au développement de logiciels en cascade. Les gouvernements peuvent être enfermés dans des contrats à long terme avec les fournisseurs, ce qui ne leur permet pas d'envisager des collaborations en vue de solutions logicielles libres de rechange. En outre, certaines organisations refusent les logiciels qui ne sont pas d'ici et négligent de regarder ce que d'autres organisations gouvernementales ont fait. Un mantra courant dans la collectivité des logiciels libres est que la roue a déjà été inventée. Cela s'applique au logiciel complet, ainsi qu'aux sous-modules. Les gouvernements peuvent, et doivent, découvrir ce qui a fonctionné ailleurs.

- **Défis en matière de sécurité et de mise à niveau :** Les projets de logiciels libres entrepris par un groupe d'intervenants gouvernementaux, en particulier pour des cas d'utilisation relativement spécialisés, peuvent être négligés et devenir obsolètes si une structure de gouvernance n'est pas mise en place pour définir les responsabilités en matière de mise à niveau continue et si un financement n'est pas assuré pour la prestation de services de mise à niveau. En outre, les différences de politique en matière de services numériques entre les administrations (p. ex., le consentement de l'utilisateur et les exigences de protection des données en vertu du GDPR dans l'UE par rapport à la politique du Canada) peuvent créer des obstacles au développement de logiciels libres répondant aux besoins en matière de gestion des risques de toutes les parties dans le cadre d'une collaboration internationale.

## Fusion du code de bifurcation

La fusion du code de bifurcation à la branche principale est un moment difficile dans le cadre d'une collaboration concernant un logiciel libre. La pratique exemplaire, dans le contexte du développement de logiciels libres, consiste à effectuer de petites modifications graduelles, minimisant ainsi le risque de briser les dépendances. Lorsque les mesures prises par toutes les personnes travaillant sur le code sont synchronisées, les changements se répercutent les uns sur les autres avec un minimum de perturbations. Si quelqu'un crée une bifurcation et apporte de nombreuses modifications, puis souhaite finalement fusionner les bases de code, il peut y avoir des conflits, tant structurels que fonctionnels.

{{< hint info >}}
**Encadré 5.2: Le service de messagerie Notify**

Notify est un logiciel libre que les organismes gouvernementaux participants peuvent utiliser pour envoyer facilement des milliers de courriels, de messages textes et de lettres à leurs contacts, en toute sécurité.[^2]

Le Government Digital Service du Royaume-Uni a d’abord publié sa plateforme Notify sous forme de code source ouvert, ce qui a permis à d’autres gouvernements de l’adopter à leurs propres fins. Ainsi, le gouvernement du Canada a développé sa propre version appelée GC Notification en la modifiant pour qu’elle soit offerte dans plusieurs langues.[^3]

[^2]: Beeck Center for Social Impact and Innovation, Notify, Intergovernmental Software Collaborative, consultation le 18 octobre 2022. (https://softwarecollaborative.org/cooperatives/notify.html)

[^3]: Bryan Willey, On vous présente Notification, Service numérique canadien (blogue), le 26 novembre 2019. (https://numerique.canada.ca/2019/11/26/on-vous-pr%C3%A9sente-notification/)
{{< /hint >}}

Prenons l'exemple hypothétique d'une application open source telle que Notify (voir encadré 5.2) : l'application originale peut avoir été codée de manière à empêcher la modification des messages. Un forumeur peut ensuite créer une fonction de confiance basée sur le fait que les messages ne peuvent pas être modifiés. Cependant, dans l'intervalle, le code de la branche principale a été modifié pour permettre la modification des messages. Si le forumeur décide de fusionner à nouveau, il constatera que les fonctionnalités de la base de code originale ont changé, et que chaque branche a construit des fonctionnalités destinées aux utilisateurs sur la base de prémisses différentes. Cela crée un dilemme : *La base de code fusionnée doit-elle permettre la modification des messages (ce qui compromettrait les fonctions de confiance d'une branche) ou revenir à des messages non modifiables (ce qui compromettrait tous les outils et flux de travail impliquant des messages modifiables)?*

Pour éviter des situations comme celle décrite ci-dessus, le Guide pour l'utilisation de logiciels libres du gouvernement du Canada recommande ce qui suit au personnel : « Utiliser, dans la mesure du possible, des logiciels libres sans modification ou les contribuer au projet » et « Utiliser la configuration et personnaliser le logiciel avec des modules, des plugiciels ou des extensions et rendre ceux-ci disponibles à la collectivité ».[^76]

## Diffusion du code en tant que logiciel libre

Le gouvernement du Canada recommande aux organismes gouvernementaux qui ont développé leurs propres logiciels d'envisager la diffusion du code sous une licence de source ouverte, et fournit des directives pour le faire efficacement. « Il est recommandé que, lorsqu'ils ont le droit de le faire, les ministères publient tout le code source en tant que logiciel libre, que la solution logicielle soit (i) acquise en tant que logiciel libre, (ii) mise au point par les employés du GC à l'interne ou (iii) acquise au moyen des conditions des contrats d'approvisionnement où des conditions de licence appropriées ont été négociées ».[^77]

De nombreuses considérations juridiques entrent en jeu lors du choix d'une licence pour le projet de logiciel libre de votre organisation.[^78] Certains gouvernements (p. ex., la [Colombie-Britannique](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md)) ont publié des lignes directrices pour le choix d'une licence appropriée qui sont spécifiques à leur contexte législatif. Si, par exemple, votre projet est une adaptation ou un dérivé d'un projet existant, la pratique exemplaire consiste à utiliser la même licence que pour le projet original; s'il s'agit d'un nouveau projet, la licence que vous choisirez dépendra du résultat souhaité et de la licence de tout logiciel tiers utilisé dans le cadre de votre projet.[^79]

[^75]:Justin C. Colannino, Free and Open Source Software in Municipal Procurement : The Challenges and Benefits of Cooperation, Fordham Urban Law Journal 39 (février 2016) : 903-29. (https://ir.lawnet.fordham.edu/ulj/vol39/iss4/2)

[^76]: Secrétariat du Conseil du Trésor du Canada, Guide pour l’utilisation de logiciels libres, le 28 juillet 2020. (https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-pour-lutilisation-de-logiciels-libres.html)

[^77]: Guide pour la publication du code source libre. (https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-pour-la-publication-du-code-source-libre.html)

[^78]: Ben Balter, Everything a Government Attorneu needs to Know about Open Source Software Licensing, Ben Balter (blog), le 8 octobre 2014 (https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/); GitHub, Choose an Open Source License, consultation le 6 septembre 2022 (https://choosealicense.com/); GitHub, The Legal Side of Open Source, Open Source Guides, 17 octobre 2022 (https://opensource.guide/legal/).

[^79]: Secrétariat du Conseil du Trésor du Canada, Guide pour l’utilisation de logiciels libres, le 28 juillet 2020. (https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-pour-lutilisation-de-logiciels-libres.html)
