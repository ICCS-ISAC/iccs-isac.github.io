---
title: "Section 1: Software Licensing, Revenue and Development Models"
weight: 1
---

# {{< param title >}}

## Digital Procurement in Government

Government has well-established norms, processes, and templates for procurement, contracting and budgeting. These were originally designed to obtain non-digital assets and vendor services (like office equipment or snow removal). These assets and services are fixed and predictable. When governments use these traditional processes to obtain software, they tend to favour fixed and predictable software assets (proprietary licenses) and services (waterfall development). They assume that technical expertise is external, and they do not account for peer sharing and communities of practice. But, as one author notes, it's increasingly the case that "long government budget cycles and mind-sets are a mismatch to the pace of technology and its need for constant improvements and upkeep."[^21]

Public sector executives have an opportunity to embrace a digital-native approach to procurement, budgeting and contracting. These align with software development best practices, while also maintaining the integrity of a legitimate, fair, transparent, and objective public procurement.

Governments are resource-constrained, especially when it comes to adding digital layers onto existing services and business units. Effective procurement processes and intelligent approaches to open source software can help them achieve digital transformation goals within limited budgets.

Digital-native procurement, contracting and budgeting processes empower public sector employees to be in control of how their digital toolsets are designed, managed, and implemented, especially when they are using open source software.

## Software Licensing

Anyone can develop software code and apply whatever license protection they like. A **software license** is a legal document that defines how a piece of software can be used, commercialized, altered, sub-licensed and redistributed. Software licenses are legally enforceable under copyright law.

There are two main categories of software licenses: proprietary and open source.

- A **proprietary license** grants an end user the right to use software, typically for a fee. Users are prohibited from modifying, copying, sub-licensing or distributing the software. Proprietary software is designed to prevent users from accessing the source code.

- An **open source license** grants anyone the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose (often with attribution). The underlying code ("source code") is available to end users.

The most common examples of open source licenses are [Creative Commons](https://creativecommons.org/), the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html), and the [MIT License](https://opensource.org/licenses/MIT). These licenses allow the creator of a work to specify the terms of its use, reproduction and commercialization.

Organizations like the [Free Software Foundation](https://www.fsf.org/) and the [Software Freedom Law Center](https://softwarefreedom.org/) are prominent in the open source community. They are the de-facto enforcers of open source licenses. However, legal action is rare because "open source licenses flow directly from the author/owner to the licensee, \[so\] the only party in a legal position to enforce \[the license protections\] is the author or owner of the copyright. Intermediate distributors do not have the power to enforce except with respect to any contribution they may make."[^22]

## Overview of Software Revenue Models

Software development companies have adopted various models for generating revenue from software that is protected under a proprietary license. Here are some of the most common revenue models, along with examples of software that use them.

- **Licensing/one-time purchase.** This entails selling a software product by license that can be used by a single user or a group of users. The general idea is to offer a product that requires making only one payment for it.

  - Microsoft Windows, Apache Server.

- **Subscription (recurring payment).** Unlike licensing, a user receives access to the software by paying a subscription fee on a monthly/annual basis.

  - Netflix, Spotify, Adobe Creative Suite.

- **Pay-per-use.** This pricing tactic is mostly used by different cloud-based products and services that charge you for the computing powers/memory/resources/time used.

  - Amazon Web Services, and Google Cloud Platform.

- **Freemium (upselling).** Freemium is a type of monetization in which a user may access a basic product for free, but will be charged for additional functions, services, bonuses, plugins, or extensions.

  - Skype, Evernote, Gitbook.

- **Hybrid pricing.** Sometimes software companies combine elements of several different revenue models into their pricing plans. For example, a freemium plan might morph into some form of pay-per-use tiered plan. After passing some limit in computation or resources, a user can be forced or offered to use another type of pricing.

  - Mailchimp, Amazon Web Services, SalesForce.[^23]

- **Service delivery.** Some software development companies charge for specific services -- such as creating a custom instance of an existing Open Source Software. In this case, the client is paying for the time and expertise involved with customizing and implementing software, not the software itself.

  - GNU/Linux, SugarCRM, LibreOffice

## Software Development Models

There are two main software development models.

- **Waterfall** development involves laying out a detailed, linear, sequential plan -- including every detail, every feature, every meeting, every benchmark -- before starting on a project. The downside of waterfall development is that it does not lend itself well to most software development because there will almost always be a need to adapt to new constraints, requirements, or problems. And since developers aren't able to foresee every potential problem, it is very likely that the end product will be flawed.

- **Agile** development has an end result in mind, and maybe a timeframe, but it only gets into the details as needed, which allows for change in response to new information. Agile development starts with defining user stories that represent actual use cases and features. Coding happens in "sprints" that last 1-4 weeks, each focused on developing a software feature based on a user story. Using an agile development method, separate but interdependent modules can be developed, tested, deployed and revised easily.

## The Disconnect Between Software Procurement and Software Development

Government procurement is a process designed to get the best value for money and avoid risk. The objective is to identify a need and find the cheapest product that fills that need within a predictable timeframe.[^24]

This is a good approach for procuring analog products (e.g., office equipment, streetlights, snow removal service). Defining specifications, comparing options based on responses to an RFP, predicting future costs, and writing a contract for a firm, fixed price (FFP) are all fairly straightforward.

When it comes to software, however, conventional procurement structures will steer you toward purchasing off-the-shelf software or contracting custom software that is developed using the waterfall method based on over-specified, multi-year roadmaps. But that approach has become increasingly misaligned with best practices in the software development industry, which favours agile practices like rapid iteration and continuous user testing to build software that meets user needs. As one expert notes, "this has left a fundamental disconnect between contracting practices (specifying everything is safest) and software development practices (specifying everything is dangerous)."[^25]

Conventional procurement -- purchasing off-the-shelf software or developing a custom product using the waterfall development model -- can *feel like* the least risky option. However, it continually leads to ballooning costs and end products that don't serve a clear purpose -- or worse, end in disaster.

## Matching Best Practice in Procurement and Software

It is important to bear in mind that "when buying custom software, you're not buying a product. You're buying a service, the service of developers building software, with features as prioritized by a government product owner."[^26]

Software should be evaluated not only on cost, but also on quality, long-term lifecycle costs of ownership and maintenance, and potential unforeseen concerns like vendor lock-in, increasing license fees, add-on feature costs, maintenance fees, and data ownership.[^27]

In the following sections, we will explore what this means for procuring development services to create a custom instance of open source software. We will also explore best practices and tools for procurement and modular budgeting that enables effective agile software development.

[^21]:  Shira Ovide, [Government Tech Moves Too Slooowly](https://www.nytimes.com/2021/07/07/technology/jedi-government-tech.html), The New York Times, le 7 juillet 2021.

[^22]:   Heather J. Meeker, [Chapter 13. Enforcement of Open Source Licenses, The Open Source Alternative : Understanding Risks and Leveraging Opportunities](https://www.oreilly.com/library/view/the-open-source/9780470194959/ch13.html) (Hoboken, NJ : Wiley & Sons, 2008).

[^23]:  AltexSoft, [Revenue Model Types and Examples](https://www.altexsoft.com/blog/revenue-model-types/), le 12 juin 2020.

[^24]:  Waldo Jacquith, [The Disconnect between Software Development and Government Contracting](https://waldo.jaquith.org/blog/2021/05/disconnect-development-and-government-contracting/), le 8 mai 2021.

[^25]:  Ibid.

[^26]:  Ibid.

[^27]:   Matthew Claudel et Bianca Wylie, [Technology Procurement : Shaping Future Public Value](https://opennorth.ca/publications/technology-procurement-shaping-future-public-value/), Community Solutions Network Research Brief (Nord Ouvert, 2021).
