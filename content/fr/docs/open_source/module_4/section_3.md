---
title: "Section 3 : Stratégies pour la mise à niveau et la sécurisation des logiciels libres"
weight: 3
url: "docs/logiciels-libres/module_4/section_3/"
---

# {{< param title >}}

### Exploiter le cadre de votre organisation en matière de gouvernance des données

Les organisations gouvernementales devraient avoir une compréhension approfondie des données qu'elles recueillent, utilisent et conservent et de la manière dont elles les aident à atteindre leurs objectifs. La mise en place d'un cadre de gouvernance des données à l'échelle de l'organisation formalise cette compréhension et fournit un point de référence pour toutes les activités liées aux données, qu'elles visent des logiciels propriétaires ou des logiciels libres.

Les considérations spécifiques liées à la gouvernance des données dans le cas des logiciels libres incluent des politiques et des procédures afin de veiller à ce que les renseignements personnels identifiables soient tenus à l'écart des codes bases libres.[^68] Ces considérations incluent également le fait de « conserver les données sensibles comme les justificatifs d'identité en lieu sûr et séparément du code source » et « éviter d'entreposer des clés et d'autres documents de nature délicate dans des systèmes non approuvés à cette fin.[^69]»

### Faire de la confidentialité et de la sécurité une priorité

Les dirigeants du secteur public devraient promouvoir une culture axée sur la protection des données et inciter leurs équipes à adopter des pratiques de protection de la vie privée et de sécurité dès la conception[^70] afin de veiller à ce que tous les logiciels -- qu'il s'agisse de logiciels propriétaires ou de logiciels libres -- soient exempts de vulnérabilités susceptibles d'entraîner une violation de la vie privée ou une perte de fonctionnalité.[^71] Pour ce faire, vous pouvez :

- Réviser périodiquement les politiques afin de veiller à ce qu'elles s'harmonisent avec les menaces en cours.

- Organiser des séances de formation périodiques à l'intention du personnel sur des sujets liés à la sécurité informatique.

Ces pratiques devraient être revues et mises à jour régulièrement afin qu'elles reflètent les menaces en cours. Et, bien que cela ne soit pas spécifique aux logiciels libres, il est important de disposer d'un plan pour assurer la continuité des activités et évaluer comment l'organisation réagira en cas de violation de la sécurité ou de perte de données pour des raisons non intentionnelles (comme la perte d'un ordinateur).

### Établir des politiques et des procédures pour l'examen périodique du code et la divulgation des vulnérabilités

Si votre équipe compte des développeurs qui prennent en charge des applications logicielles libres utilisées par votre organisation, il est important que vous établissiez des politiques et des procédures appropriées pour examiner le code source afin de détecter les risques de sécurité potentiels. L'examen périodique des codes « augmente la probabilité de détecter les bogues, les vulnérabilités en matière de sécurité et réduit le risque d'engager des données sensibles ».[^72] L'examen des codes vous permet également d'évaluer le niveau de dépendance de votre logiciel libre et de minimiser l'exposition aux défaillances de dépendance.

Un certain nombre d'outils et de services peuvent aider votre équipe à évaluer rapidement les logiciels libres pour détecter les vulnérabilités de sécurité connues et les problèmes de dépendance potentiels, notamment l'outil [Open SSF Scorecard](https://securityscorecards.dev/), qui permet de vérifier s'il existe des vulnérabilités affectant différentes parties de la chaîne d'approvisionnement des logiciels, notamment le code source, la construction, les dépendances, les tests et la mise à niveau du projet ».[^73]

### Ne transférez pas un code si vous n'êtes pas en mesure d'en assurer la mise à niveau

La mise à niveau et la sécurisation de tout type de logiciel, qu'il s'agisse de logiciels propriétaires ou de logiciels libres, exigent la gestion d'un grand nombre de composants libres et de dépendances afin d'atténuer les risques en matière de sécurité. C'est plus facile lorsque votre logiciel est un élément actif de la collectivité de logiciels libres.

Toutefois, si votre organisation crée une instance locale indépendante (en bifurquant le code), les mises à jour et les rustines de sécurité relèvent de votre propre responsabilité -- et elles deviennent de plus en plus difficiles, car votre version s'éloigne de la version initiale au fil du temps. En bref : pas de bifurcation si vous n'êtes pas en mesure d'assurer la mise à niveau.

Le Guide pour l'utilisation de logiciels libres du gouvernement du Canada recommande ce qui suit : « Dans la mesure du possible, utiliser des logiciels libres sans modification ou les contribuer au projet » et « Utiliser la configuration et personnaliser le logiciel avec des modules, des plugiciels ou des extensions et rendre ceux-ci disponibles à la collectivité ».[^74]
