---
title: Recommended Directives and Guidelines
lang: en
ref: recommended-directives-guidelines
---
## Directives and Guidelines

Draft work on baseline set of guidelines/directives for jurisdictions getting started with open source.

### Use of third party open source software

The working group recommends that clear directives/guidelines identify the following:

- Acquisition of new IT-enabled solutions must include standard provisions supporting the use of OSS as the underlying tools.
  - Those provisions must support all possible models of acquisitions, including but not limited to fully outsourced systems via RFPs, in-house development, 3rd party custom development, combinations, etc.
- All software developed by a 3rd party, whether proprietary or open source, must be assessed against the same criteria.
  - Suggested list of criteria:
    - OWASP Top 10
    - SANS Securing the Software Development Lifecycle
    - Secure by Design/Privacy by Design
    - Appropriate Open Source License
    - Vetted security cipher algorithms (not “home grown”)
    - Using standard communication protocols (e.g., TLS – not what port it uses)
    - Process for adoption of new code may need quorum approval otherwise a formal fork of code would be recognized – more thought needed here

Rationale:

Software built by a 3rd party must be assessed against various criteria, whether its source code is proprietary or open source. Commercial support is available for both types of software and the Service Level Agreements as well as warranties and liabilities are separate from the source code, thus should be evaluated separately at the solution level.

Additional questions and comments from the working group:

- Should there be any considerations with regards to bill of material, supply chains whether proprietary or open source? Mainly thinking about the US Executive Order on Improving the Nation’s Cybersecurity where they will require Enhancing Software Supply Chain Security.
- There should be a robust publishing process with vetting (from the third party providing the software or internally if organisation has performed internal changes)
- Use of forked code – “internally” or externally published (e.g., GitHub) – must have appropriate vetting before inclusion on national code repository
- Documentation of forking needs to be included (e.g., why, what, by whom, etc.)
- A pre-risk threat assessment, not as extensive as full Threat Risk Assessment, can be leveraged to accelerate evaluations and options analysis. It is much faster than a full threat risk analysis whether OSS or proprietary. The trigger for the pre-TRA is a project.
- Guidance and official position of the jurisdiction is required to clarify the liability of the organisation with regards to maintenance of forked code. It needs to be determined ahead of a decision to fork an open source project  – is this obvious? Bigger question? Applies only to “core” code used by all?
  - Clarification required for this question: what is the scenario like?

### Contribute to third party open source software projects

The working group recommends that clear directives/guidelines identify the following:

- When acquiring custom software or procuring source code via 3rd party, source code and software must be obtained:
  - under an open source licence of the jurisdiction’s choice; or
  - with sufficient rights for the jurisdiction to release it under terms and conditions of its choice.
- When using 3rd party open source software:
  - Employees are to:
    - use the software as is or with as minimal modifications as possible to reduce internal maintenance in the long run.
    - if modifications are necessary, employees must strive to contribute those modifications back to the main 3rd party project to remain as close as possible to the main version of the software.
    - clearly identify themselves as Jurisdiction’s employees when making contributions to 3rd party open source software.
    - continuously abide by the Jurisdictions Values and Ethics when working in the open.
    - to confirm with [designated group/team/individual] that it is not a conflict of interest for them to contribute the designated 3rd party project
    - to confirm with [designated group/team/individual/central repository] that contributions to the designated 3rd party project are authorized
    - ask for authorization to their [insert level in hierarchy] to apply a valid open source licence to the jurisdiction’s copyrighted material contributed to the designated 3rd party open source project.
    Notes:  
      - Hierarchy level is encouraged to be delegated as close as possible to the team involved in the contribution to the 3rd party.
      - Selection of the open source licence must be confirmed due to compliance requirements.

Additional questions and comments from the working group:

- Liability needs to be clearly documented and formally accepted before use and contribution
- Liability for maintenance of forked code needs to be determined – is this obvious? Bigger question? Applies only to “core” code used by all?

### Publishing in-house projects as open source

The working group recommends that clear directives/guidelines identify the following:

- By default, all new custom source code developed for the Jurisdiction, by employees or via the services of a 3rd party, must be released as open source at inception and that work be conducted in the open to the extent possible.
  - If it can’t be released publicly as open source immediately:
    - an explanation and a justification must be provided and [hierarchy level] must endorse the decision.
    - the source code must be available as inner-source to the entire organization
    - a plan to release publicly must be provided
  - Source code must be unclassified and exempt of any secrets, keys, personally identifiable information, etc.
- Authorization for applying an open source licence on the Jurisdiction’s copyrighted material must be delegated to the lowest position appropriate in the hierarchy responsible for the management of the software’s source code development.
  - The choice of the open source licence must be favoring the least restrictive licences as possible, while remaining compliant with the licences in the project’s dependencies.
  - Accepted open source licences must be limited to industry recognized licences, i.e.: Open Source Initiative and Free Software Foundation recognized licences.
  - Security must be by design throughout the entire software development lifecycle.
- Open source projects must be published in an official public repository designated by the Jurisdiction
  Notes: Selection of the appropriate platform is at the discretion of the Jurisdiction but a cohesive and comprehensive list of projects must be made so that the public can easily find and access all projects repositories.

Additional questions and comments from the working group:

- If there is code not posted for security, etc. reasons, is the existence of the code available?

### Management of open source software

The working group recommends the creation of a departmental group of specialists in the form of a small but versatile open source program office with a mandate to:

- ensure organisational compliance with the above directives;
- ensure legal compliance in partnership with Legal Services;
- ensure security compliance in partnership with all Security groups;
- provide guidance to all software development teams on the application of the directives;
- support enterprise operations in the development of in-house capacity and skill sets for maintaining OSS;
- provide guidance to best practices;
