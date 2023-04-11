---
title: "Section 3 : Budgétisation et passation de marchés"
weight: 3
url: "docs/logiciels-libres/module_3/section_3/"
---

# {{< param title >}}

## Passer des dépenses d'investissement aux dépenses d'exploitation

Les logiciels libres sont gratuits, mais leur personnalisation et leur mise à niveau demandent du travail. Cela signifie que la structure des coûts sera différente. Par conséquent, la budgétisation des logiciels libres doit tenir compte du passage des *dépenses d'investissement* -- achat d'un produit (logiciel propriétaire) -- aux *dépenses de fonctionnement* -- achat d'un service (travail de développement et d'intégration).

Les organisations gouvernementales devront embaucher du personnel capable de mettre en œuvre les logiciels et d'en assurer la mise à niveau, ou passer des contrats avec des fournisseurs de services technologiques (en rédigeant des contrats ouverts pour les services, par opposition aux coûts fixes pour les produits numériques et les licences).

## Adopter une approche contractuelle modulaire pour le développement agile

Le développement agile est structuré en fonction de courts « sprints », chacun étant axé sur la création d'un module autonome. Le contrat modulaire est une approche de la planification financière qui appuie cette cadence de travail.[^39]

Dans un scénario de contrat modulaire, vous devez d'abord établir un contrat-cadre pour le projet en suivant une procédure régulière et en obtenant les approbations appropriées. Ensuite, vous modularisez le travail et rédigez des contrats de sous-traitance pour des composants spécifiques, en veillant à ce que le montant du contrat soit un reflet légitime du travail exigé (plutôt que de viser un montant juste en dessous du seuil d'approvisionnement).[^40]

De cette manière, vous maîtriserez les coûts et vous pourrez veiller à ce que le prestataire de services respecte les délais et les attentes en matière de qualité. Si ce n'est pas le cas, vous pouvez rompre le contrat-cadre et attribuer un contrat pour la suite à un autre fournisseur --qui sera facile à intégrer au travail déjà accompli (parce qu'il est modulaire et basé sur des composants libres). Les contrats modulaires vous donnent le contrôle, ce qui vous permet de réduire le risque global (voir encadré 3.2).

Toutefois, il faut se méfier du *fractionnement des offres* ou de la perception de procédés frauduleux. C'est le cas lorsqu'un employé du gouvernement divise les gros contrats en petits contrats pour éviter l'examen minutieux requis dans le cas des gros contrats.[^41] Bien que les responsables de l'audit et de la conformité s'habituent de plus en plus aux contrats modulaires pour un développement agile, il est néanmoins important d'anticiper cette préoccupation. Ainsi, la US General Services Administration propose des « accords d'achat généraux » qui permettent de gérer et de justifier des groupes de contrats modulaires dans le cadre d'un contrat plus important.[^42]

{{< hint info >}}
**Encadré 3.2 : Créer de la valeur en utilisant l’approvisionnement modulaire pour le nouveau système de services de protection de l’enfance de la Californie**

En 2015, l’État de Californie a décidé d’adopter une approche différente pour l’acquisition d’un nouveau système de services de protection de l’enfance, après avoir connu une série d’échecs dans le cas de grands projets informatiques dont les coûts s’élevaient à des centaines de millions de dollars.[^1]

Le maintien du statu quo aurait signifié l’émission d’une demande de propositions (DP) monolithique et pluriannuelle dont le coût était estimé à plusieurs centaines de millions de dollars et dont la mise en œuvre aurait pris de cinq à sept ans.[^2] Au lieu de cela, l’État de la Californie a collaboré avec 18F (l’unité de transformation technologique de l’administration fédérale des services généraux) et le ministère américain de la santé et des services sociaux pour utiliser une approche d’approvisionnement modulaire associée à des méthodologies de conception et de développement agiles afin d’obtenir plus rapidement une valeur commerciale.[^3] Le projet a été divisé en modules plus petits qui pouvaient faire l’objet d’appels d’offres individuels, ce qui a accéléré le développement du système tout en réduisant le risque global en cas de défaillance d’un composant.

Outre les avantages directs pour le projet proprement dit, cette nouvelle approche a permis de remporter plusieurs autres victoires. Le projet a attiré de nouveaux soumissionnaires grâce à son bassin de fournisseurs agiles présélectionnés, et a donné l’occasion de « travailler à découvert » et de tester les modules avec les utilisateurs finaux avant le déploiement. De plus, en affinant de manière itérative le processus de demande de propositions, ce projet constitue un modèle pour d’autres projets dans d’autres ministères.[^4]

[^1]: Stuart Drown and Mike Wilkening, “[Leadership and Innovation at California’s Child Welfare Services](https://18f.gsa.gov/2016/11/17/leadership-innovation-california-child-welfare-services/)”, 18F (blog), November 17, 2016.

[^2]: “[CWDS Procurement Management Plan](https://cwds.ca.gov/project_management_plan),” Child Welfare Digital Services, accessed November 30, 2022.

[^3]: Ibid.

[^4]: Stuart Drown and Mike Wilkening, “[Leadership and Innovation at California’s Child Welfare Services](https://18f.gsa.gov/2016/11/17/leadership-innovation-california-child-welfare-services/)”.
{{< /hint >}}

## Passer d'un financement basé sur les projets à un financement basé sur les produits

Votre analyse du coût de possession sur toute la durée de vie devrait avoir permis d'identifier les coûts d'entretien permanents. Il est important de créer un plan financier à long terme pour les applications de logiciels libres. Un contrat de service classique mise sur le projet en cours, par exemple la *création et la livraison d'un logiciel*. Toutefois, cette approche ponctuelle peut entraver la capacité d'itération et d'amélioration fréquente d'une équipe informatique,[^43] notamment en ce qui concerne la mise à niveau à long terme.

Les gouvernements devraient plutôt s'orienter vers une planification axée sur les feuilles de route de produits, avec un financement stable pour les flux de valeur composés de membres d'équipes multidisciplinaires capables d'appuyer les demandes et de prendre des décisions opportunes reflétant les besoins des utilisateurs finaux, et une gouvernance qui mesure les progrès par l'entremise de logiciels fonctionnels plutôt que de documents de planification.[^44]

Dans un paradigme de financement basé sur le produit, une unité opérationnelle spécifique (comme le Service des parcs) peut parrainer un projet qui est réalisé par une équipe de produit multidisciplinaire incluant les utilisateurs finaux du Service des parcs, de l'informatique et autres. L'équipe multidisciplinaire identifie le défi, acquiert ou développe un produit, et établit des cadres pour une mise à niveau continue.

Le personnel est donc responsable de la mise en place et du maintien d'un portefeuille de produits dans le temps. Cela va de pair avec l'utilisation de logiciels libres. En utilisant des modules interopérables, une équipe bien budgétée et gérée peut mettre en œuvre et maintenir un large portefeuille de produits logiciels. Les ressources de l'équipe informatique doivent tenir compte des coûts directs (main-d'œuvre, abonnements et licences de logiciels) et indirects (ressources communes).

La Politique sur les services et le numérique conseille aux dirigeants de rechercher un financement suffisant dans les budgets de renouvellement des programmes afin d'appuyer le cycle de vie complet d'un produit, y compris les améliorations stratégiquement prévues. Cela peut nécessiter le recours à différentes enveloppes de financement pour le développement et la mise à niveau continue. Les budgets doivent tenir compte des coûts directs (main-d'œuvre, abonnements et licences de logiciels) et indirects (ressources communes). Ce type de financement est connu sous le nom de financement par produit, car il est axé sur le succès continu du *produit*, et non sur la réalisation d'un *projet* ponctuel.[^45]

## Participer à un accord d'achat groupé

Il n'est pas toujours possible d'acquérir ou de développer des logiciels libres par ses propres moyens, surtout dans le cas des petites et moyennes municipalités. Mais la plupart des administrations ont besoin d'un logiciel similaire, et aucune d'entre elles ne devrait en supporter seule le coût total. Les achats groupés sont courants dans d'autres domaines (comme le transport), mais ne sont pas monnaie courante dans le cas des logiciels. Zachary Spicer note que les accords de services partagés dans le domaine des technologies de l'information sont beaucoup moins courants que dans d'autres domaines municipaux, tels que les transports ou les services d'urgence, ce qui indique que les municipalités ont la possibilité d'explorer ces types d'accords.[^46] Cela est probablement dû au fait que l'achat groupé est impossible dans le cadre d'un paradigme de licence de logiciel propriétaire; un tel mode d'achat est interdit par le contrat de licence. Les logiciels libres étant libres d'utilisation, d'adaptation et de redistribution, les gouvernements sont parfaitement en droit de se procurer collectivement des services de développement ou de personnalisation auprès d'un fournisseur de services technologiques et de les partager entre eux. Les achats groupés sont importants pour les raisons suivantes :

- Chaque bénéficiaire fait un investissement initial moins important.

- De meilleurs logiciels peuvent être construits avec des ressources regroupées.

- Optimisation des ressources financières.

- Les pairs contribuent à l'amélioration du code partagé[^47].

Il existe plusieurs outils et stratégies pouvant être utilisés pour organiser des achats groupés entre un groupe d'organisations (voir le module 5).

[^39]: Laura Gerhardt et Mark Headd, [Why We Love Modular Contracting](https://18f.gsa.gov/2019/04/09/why-we-love-modular-contracting/), 18F (blog), le 9 avril 2019.

[^40]: Mark Hopson, [Improving Government Outcomes through an Agile Contract Format](https://18f.gsa.gov/2017/11/30/improving-government-outcomes-through-an-agile-contract-format/), 18F (blog), le 30 novembre 2017.

[^41]: Association of Certified Fraud Examiners, [Contract and Procurement Fraud: Fraud in Procurement without Competition](https://www.acfe.com/training-events-and-products/all-events/seminar-topics/contract-and-procurement-fraud).

[^42]: US General Services Administration, [2nd Generation IT Blanket Purchase Agreements](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology/buy-from-mas-information-technology/2nd-generation-it-blanket-purchase-agreements).

[^43]: Rémy Bernard, [Les problèmes du financement par projet pour les organisations TI](https://sara-sabr.github.io/ITStrategy/2021/05/18/problemes-financement-par-projet.html) (blogue), le 18 mai 2021.

[^44]: Ibid.

[^45]: Rémy Bernard, [Le financement d’activités reliées au logiciel](https://sara-sabr.github.io/ITStrategy/2022/07/21/financement-activites-logiciel.html), Équipe de la stratégie des technologies de l’information (blogue), 21 juillet 2022.

[^46]: Zachary Spicer, [Digital Dilemmas : Technology, Governance, and Canadian Municipalities](https://imfg.munkschool.utoronto.ca/research/doc/?doc_id=597), IMFG Forum Papers (Institute on Municipal Finance & Governance, 2022), 7-8.

[^47]: Ben Balter, [Eight Reasons Why Government Contractors Should Embrace Open Source Software](https://ben.balter.com/2014/10/08/why-government-contractors-should-embrace-open-source/), Ben Balter (blog), le 8 octobre 2014.
