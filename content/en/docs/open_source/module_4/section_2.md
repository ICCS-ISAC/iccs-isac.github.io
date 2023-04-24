---
title: "Section 2: Key Issues and Concepts in Maintaining and Securing Open Source Software"
weight: 1
---

# {{< param title >}}

## Open Source Software Security Risks

There are several aspects of open source software which can render it vulnerable to security risks including:

- **Excessive access:** Since code is open for all to see, bad actors can take advantage of this vulnerability to manipulate code in potentially harmful ways.[^56]

- **Lack of verification:** The nature of how open source software is developed means that quality assurance and security testing are not guaranteed.[^57]

- **Lack of support:** Open source software that is backed by a large active community of users and developers is more likely to receive regular updates and security patches. However, if you are using open source software that is not widely supported by a community of users, you will need to compensate by making sure you have appropriate in-house capacity (or can hire external support) to monitor for security vulnerabilities.

## The Limitations of the Open Source Community Support Model

Most active open source communities regularly update software and issue patches for known vulnerabilities. However, issues can arise if there is no one to update the software either because the software too new or too nice to attract a large enough developer community or the existing community has not been maintaining an open source project.

A cybersecurity attack that results in a leak of data containing sensitive information can have a seriously negative impact on trust in a government organization. In such a case, waiting for updates and security patches to be developed by the open source project community may not be an option. Instead, government organizations need to be able to quickly assess and solve the problem which means having some internal expertise in the open source modules or software used by the organization.[^58]

## Conventional Risk Management Approaches

Most, if not all, government organizations will already have an IT security framework in place. An organizational IT security policy establishes an organization\'s general security objectives. It will outline how employees work and collaborate on corporate networks while respecting the organization's position on managing security risks.

In many cases, the measures in place to mitigate security risks stemming from conventional proprietary software will also cover open source software.[^59] In fact, current practices to approach risk assessment can be applied to secure open source software in addressing vulnerabilities and minimizing their impact.

Your organization more than likely has an established approach to IT risk management and will probably have a plan in place. Even if there are multiple versions of how to approach risk management, once you have identified a risk there are four basic ways to handle it: avoid, mitigate, transfer, or accept.

The problem with conventional proprietary software is that identifying risks in the first place can be challenging because they may be hidden behind the vendor's sales pitch and fine print in the license contract.

## Managing Risks for Open Source Software

Open source risk management can be approached in a similar way. A recent framework released by Google identifies three largely independent problem areas with a concrete objective: knowing about vulnerabilities in your open source software, preventing the addition of new vulnerabilities, and fixing (or removing) vulnerabilities.[^60]

Knowing your vulnerabilities involves your team being able to capture precise vulnerability metadata from all available data sources, preferably following industry standards to simplify tracking tasks. At the moment, better tooling to understand quickly newly discovered vulnerabilities is needed. However, understanding the inherent risks of new dependencies is a great start. Fixing vulnerabilities is not always an easy task, as directly solving vulnerabilities will require some in-house expertise that your team may lack. However, if your organization needs to address a specific vulnerability, the best course of action is to work bottom-up through the dependency chain for the software to be fixed.

As new threats emerge, new vulnerabilities will become apparent, which means that managing risk is an ongoing activity that needs to be constantly updated, as existing controls may become ineffective. One way to keep track of risks and an organization\'s risk appetite is by using a risk grid that can help organizations evaluate their likelihood of risks and understand and model the relationships among threats, vulnerabilities and controls that need to be applied.[^61]

Ultimately, open source vulnerabilities should be approached as an extension of an organization's general IT security objectives and reporting processes rather than as an entirely new task. Remember that understanding your risks will help create a risk-aware culture within the organization while considering how technology risks -- including those of open source software -- align with business objectives.

## Software Dependencies: A Challenge for Security and Maintenance

All software is built on other software to one degree or another. Developers can build new applications much faster by pointing to code that has already been developed by a third party than they could if they were writing new code from scratch. In fact, a 2017 investigation found that, out of over 1100 commercial codebases, "96 percent of the scanned applications contain\[ed\] open source components, with an average 257 components per application."[^62]

When 'Program A' requires 'Program B' to function, this is called a **software dependency**. Dependencies can be direct (i.e., Program A directly depends on Program B in order to run) or transitive (i.e., Program A depends on Program B which in turn depends on Program C for its functioning).[^63] Dependencies are largely unavoidable, but those that are outside your control present a risk.

A dependency failure can occur when a code library or package critical to the functioning of a given piece of software is altered or deleted. The 2016 'left-pad' incident is an example that illuminates how significant the impacts of a dependency failure can be:

- In 2016, a code package known as "[left-pad](https://www.npmjs.com/package/left-pad)\'\'[^64] which consisted of just 11 lines of code was removed by its developer from the NPM Registry where it had been hosted. Its removal caused a cascade of dependency failures, resulting in software crashes worldwide.[^65]

- As one blogger put it, the larger issue illustrated by this dependency failure is that "so many packages and projects took on a dependency for a simple left padding string function, rather than their developers taking 2 minutes to write such a basic function themselves."[^66]

The bottom line: the more dependencies a piece of software has that are outside your control, the greater the security risk and the greater the odds that something will break. The first step toward managing dependencies and mitigating downstream impacts on security and maintenance of your open source software is simply to be aware of them. To support this, many software developers are now including a Software Bill of Materials (SBOM) that lists all open source and third-party components present in a codebase.[^67]

[^56]: Canadian Centre for Cyber Security, “Security Considerations When Using Open Source Software (ITSAP.10.059)”, Canadian Centre for Cyber Security, July 9, 2020, https://www.cyber.gc.ca/en/guidance/security-considerations-when-using-open-source-software-itsap10059.

[^57]: Ibid.

[^58]: Ibid.

[^59]: Ibid.

[^60]: Eric Brewer et al., “Know, Prevent, Fix: A Framework for Shifting the Discussion around Vulnerabilities in Open Source”, Google Open Source Blog (blog), February 3, 2021, https://opensource.googleblog.com/2021/02/know-prevent-fix-framework-for-shifting-discussion-around-vulnerabilities-in-open-source.html.

[^61]: Jim Boehm et al., “The Risk-Based Approach to Cybersecurity”, McKinsey & Company, October 8, 2019, https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/the-risk-based-approach-to-cybersecurity.

[^62]: Zeljka Zorz, “The Percentage of Open Source Code in Proprietary Apps Is Rising”, Help Net Security (blog), May 22, 2018, https://www.helpnetsecurity.com/2018/05/22/open-source-code-security-risk/.

[^63]: Oskar Barcz, “What Is Dependency Hell and How to Avoid It?”, November 26, 2021, https://www.boldare.com/blog/software-dependency-hell-what-is-it-and-how-to-avoid-it.

[^64]: The purpose of the left-pad package is very simple: it “pads” the left-hand side of a string (of integers or characters) by adding zeroes or spaces to reach a desired string length, https://www.npmjs.com/package/left-pad.

[^65]: Keith Collins, “How One Programmer Broke the Internet by Deleting a Tiny Piece of Code,” Quartz, March 27, 2016, https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/.

[^66]: David Haney, “NPM & Left-Pad: Have We Forgotten How To Program?,” David Haney, accessed August 29, 2022, https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/.

[^67]: United States Cybersecurity & Infrastructure Security Agency, “Software Bill of Materials,” accessed November 13, 2022, https://www.cisa.gov/sbom.
