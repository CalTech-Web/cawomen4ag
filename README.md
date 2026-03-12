# CA Women for Agriculture

Next.js, TypeScript, Tailwind CSS
Deployed on Vercel: https://cawomen4ag.vercel.app
Production: https://cawomen4ag.com
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/cawomen4ag/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/cawomen4ag/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/cawomen4ag/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/cawomen4ag/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
