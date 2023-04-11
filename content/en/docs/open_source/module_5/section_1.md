---
title: "Section 1: What Does It Mean to Work with Open Source Software across Jurisdictions?"
weight: 1
---

# {{< param title >}}

### Benefits of Collaboration

**Collaboration on open source software is a win-win.** The software you build, or the adaptations you make, will be useful to other jurisdictions as well. Open source software performs better and becomes more secure as the community around it grows. Each user benefits from continuous improvements to software (in the form of updates, new features or security improvements). It is therefore in each user's best interest to contribute, and to add more contributing users.

For government organizations, another benefit of collaboration is that they do not need to constantly reinvent the wheel. When source code is released under an open source license, any jurisdiction can make small software adaptations to ensure that the software is best-fit to local use cases, regulations and standards. When a core set of functionalities are shared, each jurisdiction's time, effort and resources can be focused on making small adaptations to fit the software to their local context (rather than building a full set of core functionalities from scratch). Knowledge and resource sharing help partners with less experience in open source software to build capacity.

### Who Can You Collaborate With?

Governments and public sector agencies that are interested in using open source software should join existing networks or build collaborative relationships with peer jurisdictions. These networks might surround a specific software, or they might be focused more broadly on using open source software in the public sector. Within such communities, users can share challenges, opportunities, capacities, resources, and processes (see Box 5.1).

Governments at the same level -- whether municipal or provincial \-- are natural collaborators when it comes to designing, obtaining and maintaining open source software. They are responsible for delivering a similar set of services and have a similar set of needs (internal, administrative and external, resident-facing). And when procuring new software, a pooled purchasing approach allows a group of similar government agencies to take advantage of economies of scale.

### Barriers to Working with Open Source Software across Jurisdictions

Each of the areas covered in the previous modules can present specific challenges when it comes to collaborating on open source software projects across jurisdictions or between public agencies.

- **Organizational and staff capacity challenges:** There can be significant variation in digital capacity between governments and public institutions, especially when you get down to the municipal level.[^75] Not all governments will have open source teams or product manager roles; smaller municipalities may only have one dedicated person responsible for IT. When it comes to governing open source projects, political -- not technical -- skills are required. Software developers, users, and maintainers may not be the ones best suited to manage issues like accountability and negotiation of shared costs -- and by the same token, product owners may not understand the dynamics and implications of technical aspects of software maintenance.

- **Procurement, contracting and budgeting challenges:** Standard procurement processes, templates and norms prioritize commercially available products from established vendors -- and in the case of technical service delivery -- prioritize waterfall-style software development. Governments may be locked into long-term contracts with vendors, which prevents them from being in a position to consider collaborations around open source alternatives. Furthermore, some organizations have a "not invented here" mentality when it comes to software, and neglect to look at what other government organizations have done. A common mantra in the open source software community is that the wheel has already been invented. This applies to full software as well as sub-modules. Governments can, and should, discover what has worked elsewhere.

- **Security and maintenance challenges:** Open source software projects undertaken by a group of government actors, especially for relatively niche use cases, may become neglected and obsolete unless a governance structure is established that sets out responsibilities for ongoing maintenance, and there is funding for maintenance service provision. Additionally, differences in digital policy between jurisdictions (e.g. user consent and data protection requirements under GDPR in the EU versus Canada's policy) may create obstacles to developing open source software that meets the risk management needs of all parties in an international collaboration.

### Merging Forked Code

Merging forked code back into the main branch is a challenging moment in an open source software collaboration. Best practice, in open source software development, is to make small incremental changes, thereby minimizing the risk of breaking dependencies. When everyone working on the code is in sync, any changes affect each other with minimal disturbance. If someone creates a fork and makes many changes, then eventually wants to merge the codebases back together, there may be conflicts -- both structural and functional.

Consider an open source application such as Notify (see Box 5.2) as a hypothetical example: the original application may have been coded to disallow messages from being edited. A forker may subsequently build a trust feature based upon the fact that messages cannot be changed. However, in the meantime the main branch code has been changed to allow editable messages. If the forker decides to merge back, they will find that functionality in the original codebase has changed, and each branch has built user-facing features based on different premises. This creates a dilemma: *Should the merged codebase allow message editing (which would undermine one branch's trust features) or revert to non-editable messages (which would undermine any tools and workflow involving editable messages)?*

To avoid situations like the one described above, the Government of Canada guidelines for open source software recommend that staff "wherever possible, use open source software without modification or contribute back to the project" and "use configuration and customize the software with modules, plugins or extensions and make those available to the community."[^76]

### Releasing Code under an Open Source Licence

The Government of Canada recommends that government agencies who have developed their own software should consider releasing the code under an open source license, and provides guidelines on doing so effectively. "It is recommended that where they have the right to do so, departments publish all source code as open source software, whether the software solution was (i) acquired as OSS; (ii) developed in-house by GC employees or (iii) acquired through the terms of procurement contracts where appropriate license terms were negotiated."[^77]

There are numerous legal considerations when selecting a license for your organization's open source software project.[^78] Some governments (e.g., [British Columbia](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md)) have published guidelines for choosing an appropriate license that are specific to their legislative context. For example, if your open source project is an adaptation or derivative of an existing open source project, the best practice is to use the same license as the original; if it is a new open source project, the license you select will depend on the desired outcome and the licensing of any third-party software used in your project.[^79]
