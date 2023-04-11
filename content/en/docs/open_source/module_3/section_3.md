---
title: "Section 3: Contracting and Budgeting for Open Source Software"
weight: 3
---

# {{< param title >}}

## Shift Your Focus from Capital Expenditures to Operating Expenditures

Open source software is free, but it takes work to customize and maintain. That means the cost structure will be different. Therefore, budgeting for open source software should account for the shift from *capital expenditure* -- buying a product (proprietary software) -- to *operating expenditure* -- buying a service (development and integration work).

Government organizations will need to hire staff who have capacity to implement and maintain software, or contract technology service providers (writing open contracts for services, as opposed to fixed costs for digital products and licenses).

## Adopt a Modular Contracting Approach for Agile Development

Agile development is structured in short sprints, each focused on building a standalone module. Modular contracting is an approach to financial planning that supports this working cadence.[^39]

In a modular contracting scenario, you first establish an umbrella contract for the project through due process and with appropriate approvals. Then you modularize the work and write sub-contracts for specific components, ensuring that the contract amount is a legitimate reflection of the work involved (rather than targeting a number just under the procurement threshold).[^40]

In this manner, you will be in control of costs and can ensure that the service provider is meeting deadlines and quality expectations. If they are not, you can break the umbrella contract and award a contract for subsequent to a different vendor -- which will be easy to integrate with the work that's been done already (because it is modular and based on open source components). Modular contracts put you in control, so you can reduce the overall risk (see Box 3.2).

However, be cautious of *bid splitting* or the perception of fraudulent processes. This is when a government "employee splits large contracts into smaller contracts to avoid the scrutiny required for larger contracts."[^41] Although auditing and compliance officials are becoming more and more accustomed to modular contracting for agile development, it is nevertheless important to pre-empt this concern. For example, the US General Services Administration provides "Blanket Purchase Agreements" that help manage and justify groups of modular contracts under a larger contract.[^42]

{{< hint info >}}
**Box 3.2: Creating value using modular procurement for California’s new child welfare services system**

In 2015, the State of California decided to pursue a different approach to procuring a new Child Welfare Services system, having experienced “a string of failed large IT projects with costs running into the hundreds of millions of dollars.”[^1]

Business-as-usual would have meant issuing “a monolithic multi-year Request for Proposal (RFP) estimated to cost several hundred million dollars and take five to seven years to implement.”[^2] Instead, the State of California worked alongside 18F (the technology transformations unit of the federal General Services Administration) and the U.S. Department of Health & Human Services to “use a modular procurement approach coupled with agile design and development methodologies to deliver business value earlier.”[^3] The project was broken up into smaller modules which could lead to be bid out individually, accelerating the development of the system while reducing overall risk if any one component were to fail.

In addition to the direct benefits to the project itself, several other early wins emerged from the new approach. The project attracted new bidders through its pre-qualified pool of agile vendors, and provided an opportunity to ‘work in the open’ and test modules with end users prior to deployment. Additionally, by iteratively refining the RFP process, this project is “providing a template for other projects in other departments.”[^4]

[^1]: Stuart Drown and Mike Wilkening, “[Leadership and Innovation at California’s Child Welfare Services](https://18f.gsa.gov/2016/11/17/leadership-innovation-california-child-welfare-services/)”, 18F (blog), November 17, 2016.

[^2]: “[CWDS Procurement Management Plan](https://cwds.ca.gov/project_management_plan),” Child Welfare Digital Services, accessed November 30, 2022.

[^3]: Ibid.

[^4]: Stuart Drown and Mike Wilkening, “[Leadership and Innovation at California’s Child Welfare Services](https://18f.gsa.gov/2016/11/17/leadership-innovation-california-child-welfare-services/)”.
{{< /hint >}}

## Shift from Project-based to Product-based Funding

Your lifetime cost of ownership analysis should have identified ongoing maintenance costs. It is important to create a long-term financial plan for open source software applications. A conventional service contract will focus on the project at hand -- e.g. *to build and deliver software*. However, this one-off approach can impede an IT team's "ability to iterate and improve frequently"[^43] especially when it comes to long-term maintenance.

Governments should instead shift towards "planning around product roadmaps, with stable funding for value streams made up of multi-disciplinary team members that can sustain demands and make timely decisions reflecting end-user needs, and a governance that measures progress through working software instead of planning documents."[^44]

In a product-based funding paradigm, a specific business unit (like the Parks Department) can sponsor a project that is carried out by a multidisciplinary Product team, including end users in the Parks Department, IT, and others. The multidisciplinary team identifies the challenge, procures or develops a product, and establishes frameworks for ongoing maintenance.

Staff are therefore responsible for standing up and maintaining a portfolio of products over time. This aligns well with the use of open source software. Using interoperable modules, a well-budgeted and managed team can implement and maintain a large portfolio of software products. Resourcing the IT team must account for direct (labor, software subscriptions and licenses) and indirect (common resources) costing.

The Policy on Service and Digital counsels executives to seek sufficient funding in their program renewal budgets to sustain a product's full life cycle, including strategically planned improvements. This may mean drawing on different funding envelopes for development and ongoing maintenance. Budgets should account for direct (labour, software subscriptions and licenses) and indirect (common resources) costing. This is known as Product-based Funding because it is focused on the ongoing success of the *product*, not the delivery of a one-off *project*.[^45]

## Participate in a Pooled Purchasing Arrangement

Procuring or developing open source software on your own isn't always feasible, especially for small and mid-sized municipalities. But most jurisdictions need similar software, and each shouldn't bear the full cost alone. Pooled purchasing is common in other areas (like transportation) but isn't standard practice for software. Zachary Spicer notes that "shared-services agreements in information technology are much less common than they are in other municipal areas, such as transportation or emergency services, indicating that there is room for municipalities to explore these types of agreements."[^46] This is likely because pooled purchasing is impossible under a proprietary software licensing paradigm; it is prohibited under the license contract. Because open source software is free to use, adapt, and redistribute, governments are fully within their rights to collectively procure development or customization services from a technology service provider and share it amongst themselves. Pooled purchasing is important because:

- Each beneficiary makes a smaller upfront investment

- Better software can be built with mutualized resources

- Tax dollars go further

- Peers contribute to improvements in the shared code[^47]

There are several tools and strategies you can use to organize pooled purchasing among a group of organizations (see Module 5).

[^39]: Laura Gerhardt et Mark Headd, [Why We Love Modular Contracting](https://18f.gsa.gov/2019/04/09/why-we-love-modular-contracting/), 18F (blog), le 9 avril 2019.

[^40]: Mark Hopson, [Improving Government Outcomes through an Agile Contract Format](https://18f.gsa.gov/2017/11/30/improving-government-outcomes-through-an-agile-contract-format/), 18F (blog), November 30, 2017.

[^41]: Association of Certified Fraud Examiners, [Contract and Procurement Fraud: Fraud in Procurement without Competition](https://www.acfe.com/training-events-and-products/all-events/seminar-topics/contract-and-procurement-fraud).

[^42]: US General Services Administration, [2nd Generation IT Blanket Purchase Agreements](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology/buy-from-mas-information-technology/2nd-generation-it-blanket-purchase-agreements).

[^43]: Rémy Bernard, “[The Problems with Project-Based Funding for IT Organizations](https://sara-sabr.github.io/ITStrategy/2021/05/18/problems-of-project-based-funding.html)”, Information Technology Strategy Team (blog), May 18, 2021.

[^44]: Ibid.

[^45]: Rémy Bernard, “[Funding Software Related Activities](https://sara-sabr.github.io/ITStrategy/2022/07/21/funding-sw-activities.html)”, Information Technology Strategy Team (blog), July 21, 2022.

[^46]: Zachary Spicer, [Digital Dilemmas : Technology, Governance, and Canadian Municipalities](https://imfg.munkschool.utoronto.ca/research/doc/?doc_id=597), IMFG Forum Papers (Institute on Municipal Finance & Governance, 2022), 7-8.

[^47]: Ben Balter, [Eight Reasons Why Government Contractors Should Embrace Open Source Software](https://ben.balter.com/2014/10/08/why-government-contractors-should-embrace-open-source/), Ben Balter (blog), le 8 octobre 2014.
