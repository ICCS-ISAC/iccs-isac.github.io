---
title: "Section 2: Software Basics"
weight: 2
---

# {{< param title >}}

## Software Basics: Key Concepts and Terminology

Throughout this course, we will discuss various aspects of buying, using and maintaining software, with particular attention to the public sector context.
A handful of fundamental concepts underpin this discussion:

- Development refers to how software is built. Software consists of lines of code. Software can be built from scratch, but more often, software is composed of pre-existing modules (which perform specific functions, such as sign-in authentication) and those modules may, themselves, be open source. For the purposes of this course, development also encompasses the ongoing updating and maintenance of software.
- Integration refers to implementation in a particular context. Software rarely works right “out of the box.” Depending on your organization’s needs, it will require custom features and will always need to be integrated with your existing digital environment.
- Distribution refers to how software gets to the end user. This includes the legal software use license (proprietary or open source) as well as the method of distribution (cloud, hybrid, or on-premises).
- Revenue refers to who pays who for what. This might be Software-as-a-Service (SaaS), an on-premises deployment of proprietary software, or fee-for-service to create a custom implementation of open source software.
- Clients, Vendors, Contractors and Users comprise the major stakeholders in a software ecosystem. The relationships between these stakeholders emerge from Development, Distribution, and Revenue models.

## Software Licensing Models

Anyone can develop software code and apply whatever license they choose. A license determines who can use the software, how they can use it, if they can alter it, and so on. There are two primary software licensing models:

- Proprietary licensing refers to software for which the source code is legally owned by the individual or company that created it. That entity has the sole and exclusive right to edit and commercialize the code as they see fit.
  - Examples: Microsoft Windows and Apple OS X (operating systems), Microsoft Office (productivity suite), Adobe Creative Suite (design software), SAP ERP (enterprise resource planning software), ArcGIS (geographic information system).
- Open source licensing refers to software that is available for anyone to access, use or change the source code. The source code is made available online and contributions are managed using a platform like GitHub.
  - Examples: Linux (operating system), Firefox (web browser), Python (programming language), Open Office (productivity suite), Thunderbird (mail client), Apache (web server), QGIS (geographic information system).

## How Proprietary Software Works

More than likely you already use proprietary software on a daily basis and have a basic understanding of how it works. The following is a summary of key stages along the proprietary software value chain.

- **Development**: Software vendors build and commercialize software. Vendors typically provide core updates (or “patches”) to software so that it remains bug-free and compatible with changing digital environments (updates may be free or paid).
- **Distribution**: The organization that built the software maintains ownership of the rights to access, use, and commercialize the source code through a legally enforceable license. Software may be hosted on the cloud (online), with users paying to access it, or hosted on-premises (on local servers).
- **Integration**: Software companies typically offer support but may charge fees. Some software vendors will provide custom integrations with your organization’s existing digital environment; if not, you will need to contract another service provider.
- **Revenue**: End users pay to use the software, according to a revenue model (flat rate, usage-based, tiered, freemium, etc.). Software companies may issue patches, new features, upgrades and integrations that are included in the fee structure, or for which end users pay an additional fee.

## How Open Source Software Works

Open source software works in a fundamentally different way than proprietary software.

- Development: A developer writes the first version of a piece of open source software and uploads it to a public online repository under an open source license. The code is then maintained using a distributed version control system (Git being the most popular) in which each user has a working copy and full change history of a given codebase (see Figure 1.1). GitHub, the largest hosting service for these repositories, provides a reliable environment in which a global community can manage, harmonize and reconcile simultaneous (possibly conflicting) versions of the software, identify and fix bugs, and streamline the process of editing.
  - There are several models of open source software development, each of which has slightly different approaches to how merges with the main codebase are managed and how frequently they happen. For the most part, these models follow a branching structure, in which the main codebase functions as a ‘trunk’ with ‘branches’ created as individuals or organizations create copies – or ‘forks’ – and add their own features (see Figure 1.2). In this way, open source software is continually improving through contributions from an open community.
  - Some open source software has a governance structure in place to review and validate any changes to the source code. This ensures the utility and integrity of contributions. Validated changes are integrated back into the main trunk of the tree.

```figure
INSERT FIGURE 1.1 HERE
```

**Figure 1.1**: This diagram shows in a simplified way how a distributed version control system works. A main server repository stores all of the files associated with an open source project. Each organization collaborating on the project maintains a local repository which is a copy of the main repository. Every programmer maintains a working copy of their respective local repository (which in turn is a copy of the main repository) on their hard drive. Programmers can commit changes to and update their local repository without any interference. They can update their local repositories with new data from the main server repository by an operation called “pull” and make changes to the main repository by an operation called “push” from their local repository.

```figure
INSERT FIGURE 1.2 HERE
```

**Figure 1.2**: A simple branching development model for open source software. The main trunk represents the ‘original’ source code. Any individual or organization can create a copy – or ‘fork’ – and add their own features. “Hotfix” branches are used to quickly patch production releases.

- Distribution: An open source license grants anyone the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose (often with attribution).
  - Regardless of how software is developed, it can be released under an open source license. The challenges and opportunities of open source software are more specific and unique once it has been released under an open source license, entering the maintenance and adaptation phase.
- Integration: At any point, someone may decide that their needs are unique enough to merit a fully customized version of the software. They can create a copy of the source code and alter it as they see fit, without re-integrating changes into the main source code. This is known as a “hard fork” because it starts a new path, disconnected from the original source code.
- Revenue: End users do not pay for access to the source code. However, that doesn’t mean open source software is free – there are costs associated with adapting, hosting, and maintaining the software. These costs might go toward in-house personnel or contracting an external technical service provider.
