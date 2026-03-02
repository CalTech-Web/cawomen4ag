# cawomen4ag Project Rules

## Style Rules
- Never use em dashes or hyphens as separators in content. Hyphens are only for hyphenated words (e.g. "full-time").

## Site Facts
- Read SITE_FACTS.md before making content changes.

## GitHub
- All repos must be created under the CalTech-Web organization.
- Never create repos under a personal account.

# currentDate
Today's date is 2026-03-01.

# Project-Specific README.md files
When creating or updating project-specific README.md files, start with the tech stack and any mandatory information, such as the Vercel dev URL or website URL.

## Prefer succinct instructions
The user prefers readme.md files that are up to date. Do not use bash commands or backticks.

## Autonomous Agents
In a project with autonomous agents, found in /agents/ folder, there should be a root readme.md file that contains copy and paste code to run the agent.

For example:
WORK=~/ctw/CLIENT-NAME/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/ctw/saif/ENGINE/run.sh

Do not describe the agents, do not list all of the variables or models. Keep it succinct.

## Browser Preferences
When using Playwright or any other browser, use headless as to not disrupt the user.
