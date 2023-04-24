---
title: "Section 3: Strategies for Maintaining and Securing Open Source Software"
weight: 3
---

# {{< param title >}}

## Leverage Your Organization's Existing Data Governance Framework

Government organizations should have a thorough understanding what data they are collecting, using, and storing and how it supports them in achieving their objectives. Having an organization-wide data governance framework in place formalizes this understanding and provides a reference point for all data activities whether they involve proprietary or open source software.

Specific data governance considerations for open source software include policies and procedures for ensuring that personally identifiable information is kept out of open source codebases,[^68] as well as "keep\[ing\] sensitive data such as credentials secure and separate from source code" and "avoid\[ing\] storing keys and other sensitive material in systems not approved for that purpose."[^69]

## Make Privacy and Security a Priority

Public sector executives should foster a culture of data protection and incentivize their teams to adopt privacy and security by design practices[^70] to make sure all software -- proprietary and open source -- is free from vulnerabilities that could lead to a privacy breaches or loss of functionality.[^71] You can do this by:

- Regularly reviewing policies to ensure they align with the current threat environment

- Organizing regular training sessions for staff on IT security topics

These practices should be reviewed and updated regularly so that they reflect the current threat environment. And while not specific to open source software, it is important to have a plan for ensuring business continuity and assessing how the organization will react in case of a security breach or loss of data for unintended reasons (such as the loss of a computer).

## Establish Policies & Procedures for Regular Code Review and Vulnerability Disclosure

If you have developers on your team supporting open source applications used by your organization, it's important that you establish appropriate policies and procedures for reviewing source code for potential security risks. When code is regularly reviewed, it "increase\[s\] the likelihood of catching bugs, security vulnerabilities, and reduces the risk of committing sensitive data."[^72] Code reviews also allow you to assess the level of dependency in your open source software and minimize exposure to dependency failures.

There are a number of tools and services that can help your team quickly evaluate open source software for known security vulnerabilities and potential dependency issues, including the [Open SSF Scorecard](https://securityscorecards.dev/) tool which "checks for vulnerabilities affecting different parts of the software supply chain including source code, build, dependencies, testing, and project maintenance."[^73]

## Don't Fork Code Unless You Can Maintain It

Maintaining and securing any type of software -- proprietary or open source -- means managing a large number of open source components and dependencies to mitigate security risks. That's easier when your software is an active part of the open source community.

However, if your organization creates an independent local instance (forking the code) updates and security patches are your own responsibility -- and they become increasingly difficult, as your version and the main branch grow further apart over time. The bottom line: Don't fork it unless you can maintain it.

Government of Canada guidelines for open source software recommend that, "wherever possible, use open source software without modification or contribute back to the project... Use configuration and customize the software with modules, plugins or extensions and make those available to the community." [^74]

[^68]: New America, “Section Two: Building Open Source Software,” Building and Reusing Open Source Tools for Government, accessed July 4, 2022, http://newamerica.org/digital-impact-governance-initiative/reports/building-and-reusing-open-source-tools-government/.

[^69]:  Treasury Board of Canada Secretariat, “Guide for Using Open Source Software.”, https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html#toc03

[^70]: Ann Cavoukian and Mark Dixon, “Privacy and Security by Design: An Enterprise Architecture Approach” (Information and Privacy Commissioner of Ontario, 2013), https://www.ipc.on.ca/wp-content/uploads/Resources/pbd-privacy-and-security-by-design-oracle.pdf.

[^71]: Nicole Olsen, “Open Source Projects and the GDPR,” Privacy Policies, accessed September 2, 2022, https://www.privacypolicies.com/blog/gdpr-open-source-projects/.

[^72]: Treasury Board of Canada Secretariat, “Guide for Using Open Source Software,” July 28, 2020, https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-using-open-source-software.html.

[^73]: Open Source Security Foundation and The Linux Foundation, “Home,” OpenSSF Scorecard, accessed November 14, 2022, https://securityscorecards.dev/undefined/.

[^74]: Treasury Board of Canada Secretariat, “Guide for Using Open Source Software.”
