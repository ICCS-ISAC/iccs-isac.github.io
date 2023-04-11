---
title: "Section 2: Key Issues and Concepts in Digitally-Native Procurement"
weight: 2
---

# {{< param title >}}

## Seizing the Opportunity of Procurement

Procurement is traditionally thought of as a compliance procedure that involves detailed a priori specifications, identifies lowest-cost solutions, and prevents corruption. However, procurement is a powerful tool for strategic value-creation.

When administrations seize the opportunities that procurement offers, they can creatively meet broad public sector objectives, promote innovation (inside and outside of government) and drive economic development. In short, they can shape *future public value*.[^28]

Governments at all levels are major spenders in their local economies. Significant funding has been earmarked for digital transformation, shared technical services, and IT system upgrades at the federal level.[^29]

According to the Business Development Bank of Canada (BDC), there are 41,800 IT businesses in Canada, and 90% of them have 10 employees or less. Together, these businesses contribute \$57 billion to the Canadian economy.[^30] However, conventional procurement usually favour larger, established vendors, which means that smaller firms and start-ups are systematically shut out of the process.[^31] Governments can better support national and local tech communities by engaging with local vendors and writing local sourcing requirements into their RFPs.

## Creating Value with a Procurement Process

At its core, procurement is a process that starts with identifying a fundamental need or opportunity, then exploring and obtaining solutions. If that process is well-designed, it can generate positive spin-off effects (see Box 3.1). Using specific tools like an RFP, the procurement process can specify:

- **Vendor Criteria:** Small, Local, Minority-owned, or Non-profit vendors

- **Solution Criteria:** Public ownership or control, Equitable and sustainable cost models, Functionalities, Outcomes (rather than defaulting to existing solutions)

In the case of open source software, positive spin-off effects might include: fostering a more diverse local ecosystem of technology service providers,[^32] sharing software with peer jurisdictions, and maintaining public control over how data is used and commercialized.

{{< hint info >}}
**Box 3.1: Experimenting with Agile Procurement in the Federal Government**

Procurement is transforming at the federal level. In 2017, the Treasury Board of Canada Secretariat (TBS) tested a new agile procurement model in conjunction with the Government of Canada’s Open by Default pilot.[^1] TBS deployed a “challenge-based procurement process that saw qualified businesses pitch their ideas to a panel of evaluators.”[^2] Following the presentations, the contract was awarded the same day. In addition, the bidders were able to exchange feedback on the process with TBS procurement staff and evaluators.[^3]

In 2022, Shared Services Canada (SSC) recently launched Agile Procurement Process 3.0 – a new, simplified approach to IT procurement that focuses on procuring a small demo or prototype as a strategy for evaluating potential solutions. This process “lets government officials assess real-world examples of proposed solutions and choose the solution that delivers the best value to Canada and Canadians.”[^4]

[^1]: Alex Benay, “[Agile Procurement for Better Digital Solutions](http://open.canada.ca/en/blog/agile-procurement-better-digital-solutions)”, Open Government Blog (blog), July 27, 2017.

[^2]: Treasury Board of Canada Secretariat, “[Government of Canada Uses Simplified Procurement to Award Contract for Digital Services](https://www.canada.ca/en/treasury-board-secretariat/news/2017/09/government_of_canadausessimplifiedprocurementtoawardcontractford.html)”, September 14, 2017.

[^3]: Michael Grant, [An Open, Honest Talk About Procurement Improvements](https://blog.echidna.ca/open-honest-talk-about-procurement-improvements), Digital Echidna Blog, le 14 septembre 2017,  

[^4]: Shared Services Canada, “[Shared Services Canada Launches Agile Procurement Process 3.0](https://www.canada.ca/en/shared-services/news/2022/03/shared-services-canada-launches-agile-procurement-process-30.html)”, March 23, 2022.
{{< /hint >}}

## Managing the Procurement Process: The Product Owner

Traditionally, procurement is managed by a procurement official, based on detailed budget and functionality specifications. These specifications often come from a variety of sources -- such as an IT specialist and an executive focused on policy directives. As a result, specifications can be conflicting, or unclear to the procurement official. More generally, a one-way flow of information (from specialists to procurement officials to vendors) undermines opportunities for creative solution-development.

In a digital-native procurement process, there is a central figure responsible for engaging across business units and advancing the entire procurement process: the Product Owner. The Product Owner does not need to be a technical expert, but should have a working knowledge of software development processes, procurement, and user-centred design methods (see [Module 2](/docs/open_source/module_2/) for more detail).

## Discovery: Laying a Strong Foundation by Understanding the Problem

The 'discovery' stage is the entry point to software procurement. There are three main elements of discovery:

1. Define the problem to be solved. This involves user research with the beneficiaries and end users of the software (using charettes, brainstorming, etc.).[^33]

   - Surveys and interviews

   - Demos

   - User journey mapping

   - "Ride alongs"

2. Explore products that already exist. Read how other jurisdictions have approached the same problem. Consult government Github repositories, read blogs and attend conferences.

   - Market research and neutral market analysis of existing commercial solutions[^34]

   - Look at how other jurisdictions have addressed similar problems

   - Consult the [GC Open Resource Exchange](https://canada-ca.github.io/ore-ero/en/index.html)

3. Become familiar with vendors. Engage with the world of experts, civic tech enthusiasts and vendors (and let them become familiar with you). Discuss the problems you are trying to solve, and hear their thoughts on existing or potential solutions. Use the following approaches:

   - Issue an informal call for ideas (in the civic tech community)

   - Issue a formal Request for Information (RFI)

   - Host an event related to the problem and invite community groups and vendors[^35]

   - Reach out to the academic sector

A common misconception is that public officials cannot directly engage with potential vendors. In reality, understanding the market is a crucial starting point for sourcing the best solution. Having a good understanding of what these companies can do is helpful when you are planning to issue an RFP for services. You can also share the needs of your organization so that they become familiar with your long-term roadmap for integrating software in public service delivery. Repeated contracts allow service vendors to become familiar with your technical environment and specific needs. To maintain integrity and avoid concerns, ensure that all vendor engagements are public, well documented, and made publicly accessible as synthesized insights.

## Sourcing Strategies

If you go through a strong discovery process, you will reveal a number of sourcing strategies -- buying existing software, using and adapting open source software or contracting a vendor to build net-new software. You should compare these through a fair and objective true lifetime cost of ownership analysis. Based on the results, you will be able to confidently choose the right sourcing strategy for the challenge at hand.[^36] There are a number of possible scenarios, each with its own associated costs:

- **If proprietary *and* open source software exists and meets all user needs,** you will choose between procuring existing proprietary software or pursuing an open source software solution.

- **If there is existing open source software that meets all user needs**, an in-house team or hired contractor can deploy a custom instance that integrates with your existing technical environment.

- **If there is existing open source software that needs to be altered** in order to meet all user needs, an in-house team or hired contractor can develop the custom features you need.

- **If there is no existing software that fills the need**, an in-house team or hired contractor can develop software from scratch and release it under an open source license.

{{< figure src=../fig3_1.png caption="Figure 3.1: A decision tree for choosing a software sourcing strategy" alt="A decision tree for choosing a software sourcing strategy. If proprietary and open source software exists and meets all user needs, you will choose between procuring existing proprietary software or pursuing an open source software solution. If there is existing open source software that meets all user needs, an in-house team or hired contractor can deploy a custom instance that integrates with your existing technical environment. If there is existing open source software that needs to be altered in order to meet all user needs, an in-house team or hired contractor can develop the custom features you need. If there is no existing software that fills the need, an in-house team or hired contractor can develop software from scratch and release it under an open source license." >}}

## Analyzing True Lifetime Cost and Value of Ownership

In order to properly weigh sourcing options, you must perform a True Lifetime Cost and Value of Ownership Analysis, which includes direct and indirect, immediate and long-term costs and benefits.[^37] Specifically, this analysis should include:

- The direct cost of the solution (annual license or ownership)

- The technical capacity of staff to build, adapt, integrate and/or maintain software[^38]

- The acquisition costs, including all costs of the procurement process and change management (if applicable).

- The operating costs, including annual fees, per-user cost, and insurance.

- The cost of integration with existing digital infrastructure at the city (in terms of staff time and any software or database costs).

- The costs of subsequent releases and disposal, which might include removal of the installation, clean-up costs, releasing code under an open source license, and any associated legal fees.

- The cost of future software customization (work orders) if the city's needs, processes, or underlying digital infrastructure changes in the future.

- The value of controlling costs, revenue models, updates and additional feature sets (especially for compliance with changing government software performance standards).

- The value of staff capacity-building and empowerment.

- The value of releasing code under an open source license and engaging with a community of peer jurisdictions.

## Evaluating Options

When evaluating existing proprietary software, be critical and cautious of potential downstream contract issues. These might emerge from the vendor's business model, their approach to ownership or monetization, or software performance and feature updates. This evaluation should influence your choice of strategy.

- **Ownership:** What are the exact licensing conditions? Does the software depend on other proprietary systems (like databases) for which there is an associated cost?

- **Security:** Are there known vulnerabilities? Which party bears responsibility for addressing vulnerabilities?

- **Data governance:** What data is collected? Who owns it? Where is it stored? Who has access to it? How can they use it?

- **Interoperability:** How compatible is it with existing technical infrastructure?

- **Revenue model:** How does the vendor generate its revenue (e.g., fee per "seat;" fee per use; premium features, etc.)?

- **Maintenance:** How regularly is the software updated? What kind of ongoing user support is available?

[^28]: Matthew Claudel et Bianca Wylie, [Technology Procurement : Shaping Future Public Value](https://opennorth.ca/publications/technology-procurement-shaping-future-public-value/), Community Solutions Network Research Brief (Nord Ouvert, 2021).

[^29]: Josh Lowe, [Canadian Budget Leads with Digital Tax and IT Investments](https://www.globalgovernmentforum.com/canadian-budget-leads-with-digital-tax-and-it-investments/), Global Government Forum, le 20 avril 2021

[^30]: Banque de développement du Canada, [Perspectives du secteur des technologies : Comment les changements dans l’économie affectent le secteur technologique canadien](https://www.bdc.ca/globalassets/digizuite/28336-st-outlookmfg-f2010-2.pdf), janvier 2021.

[^31]: Luke DeCoste, [Outdated Procurement Rules Hindering Digital Government](https://policyoptions.irpp.org/magazines/february-2019/outdated-procurement-rules-hindering-digital-government/) Policy Options, le 12 février 2019.

[^32]: Kaye Sklar, [A Procurement Path to Equity : Strategies for Government and the Business Ecosystem](https://www.open-contracting.org/wp-content/uploads/2020/11/OCP-AspenCUI-2020-Pathway-to-Equity.pdf) (Open Contracting Partnership et Aspen Institute Center for Urban Innovation, 2020).

[^33]: Jerrod Larson, Jen Hocko et Richard Bye, [User-Centered Procurement : Evaluating the Usability of Off-the Shelf Software User Experience Magazine](https://uxpamagazine.org/user_centered_procurement/), UX Development, mars 2010.

[^34]: LaBrie, Suzanne et Ferron, Pierre-Antoine, [Qu’est-ce que l’approvisionnement ouvert?](https://lms.opennorth.ca/catalog/info/id:145), Réseau de solutions pour les communautés, Nord Ouvert.

[^35]: Bien qu’il ne couvre qu’une poignée de grandes villes, [Open Source Cities](https://github.com/opensourcecities) vous donne une idée de la variété des intervenants et des organisations impliqués dans les écosystèmes locaux de logiciels libres. Une fois que vous aurez commencé à chercher, vous serez peut-être surpris d’apprendre combien d’activités de logiciels libres se déroulent déjà dans votre région.

[^36]: Sascha Haselmayer, [Unit 3 : Choosing Your Procurement Path, Citymart Procurement Institute (blog)](https://medium.com/citymartinsights/unit-3-choosing-your-procurement-path-8e1b711d0268), le 26 mars 2020.

[^37]: Ben Winter, [4 Key Steps to Performing an Effective Spend Analysis, Fairmarkit (blog)](https://www.fairmarkit.com/blog/4-key-steps-to-performing-an-effective-spend-analysis), le 25 août 2021; Doug Greer et Jen Scarlato, [Best Practices for TCO Costing](https://cdn2.hubspot.net/hubfs/2652075/Downloadable_Files/regoUniversity%202018/Functional/TCO%20Best%20Practices%20for%20TCO%C2%A0Costing_SVMGT01.pdf).

[^38]: Secrétariat du Conseil du Trésor du Canada, [Guide pour l’utilisation de logiciels libres – Évaluer les options de soutien](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-pour-lutilisation-de-logiciels-libres.html), le 28 juillet 2020.
