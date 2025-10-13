# CryptoDash

## Description

Design and data-driven browser home page web app and chrome extension to track onchain identity, crypto metrics in a local-first private by default model. Free version allows you to bring your own API keys, or there is a paid annual plan that rate limited includes access to shared API keys.

## Problem Statement

For people that want to keep an eye on the markets and onchain environment throughout the day without being glued to charts. Also acts as a producivity dashboard for onchain activities.

## Goals 

- Local-First app hosted on IPFS with PWA for Offline Mode
- Connect wallet to log in and load connected address that persists between sessions
- Centralised gateway that securely holds API keys for premium plan

## Anti-Goals
- No custody of funds or private keys. This is not a wallet. 
- No heavy server database. 
- No onchain actions beyond SIWE and optional subscripion payment

## Technical Design

- Maybe SvelteKit + Tailwind
- Local caching of calls with logical refresh rates
- Some lightweight way to manage subscriptions and access

## Potential MCP Prompts

- Identify all chains logged in address is active on and total assets
- Identify all chains logged in address is active on and then weight volume percentages
- Identify chains user is active on with lots of activity


## Vendors

- Blockscout SDK and MCP (Required for hackathon entry)
- Pyth for onchain prices (Optional for Hackathon)
- HyperSync (Optional for hackathon) - Provides real time streaming data. Thinking this could be used to create generative art and graphics to beautify the dashboard driven by onchain data. Think shapes and sizes driven by transaction types and velocity etc. 
- Alchemy API/RPC (Available)
- OpenSea MCP Acccess (Available)
- Nansen MCP Access (Available) 
- Snapshot (Considering for bringing in governance options, i.e. see available votes)

## Potential Prize Notes

Most Innovative use of Pyth pull oracle (Price Feeds) ⸺ $3,000
1st place - $1,500
2nd place - $1,000
3rd place - $500
Use Pyth Pull oracle to power up you dapp. The prize will go to the top three teams with best and most innovative use of Pyth Price feeds.
Please read the qualification requirements carefully.
Qualification Requirements
Qualification Requirements
Your app should use Pyth price feeds via Pull method. The steps include.
1. Pull/Fetch the data from Hermes. (Check the links and Resources)
2. Update the data on chain using updatePriceFeeds method.
3. Consume the price.
4. You can run a price pusher too if you prefer traditional way of using oracles. (Optional)
Please follow our comprehensive Pyth EVM guide to to integrate Pyth in less than 5 minutes.

Links and Resources
Pyth EVM guide
https://docs.pyth.network/price-feeds/use-real-time-data/evm
↗
Pyth supported Price Feeds
https://docs.pyth.network/price-feeds/price-feeds
↗
Pyth supported Chains
https://docs.pyth.network/price-feeds/contract-addresses/evm
↗
Pyth contract API Reference
https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan
↗
How to fetch data from Hermes
https://docs.pyth.network/price-feeds/fetch-price-updates
↗
EVM Error codes
https://docs.pyth.network/price-feeds/error-codes/evm
↗
Pyth Dev Forum
https://dev-forum.pyth.network/
↗

### Best Use of HyperSync ⸺ $1,500
Awarded to the project that best utilizes HyperSync, Envio’s ultra-fast blockchain data layer, for real-time data access or analytics. Examples may include on-chain dashboards, alerting systems, or AI-powered analytics built on HyperSync data streams.
Qualification Requirements
Clear and meaningful usage of HyperSync
Usage of one of the clients is highly recommended

Links and Resources
HyperSync docs
https://docs.envio.dev/docs/HyperSync/overview

HyperSync query builder
https://builder.hypersync.xyz/

### Best AI + Envio Tooling Project ⸺ $1,500
Up to 2 teams will receive $750
For the most compelling AI-powered project that enhances or integrates with Envio’s data stack (HyperIndex or HyperSync).
Examples:
• AI-assisted tools for building or querying HyperIndex / HyperSync
• AI-driven subgraph-to-HyperIndex converters
• MCP servers or developer assistants using Envio’s APIs
• Intelligent data pipeline generation or schema optimization
💡 Focus on AI as a helper or builder tool, not necessarily for analyzing blockchain data.
Qualification Requirements
Clearly demonstrate the use of Envio’s technology (HyperIndex or HyperSync).
Where possible, deploy to Envio’s hosted platform.

Links and Resources
Documentation
https://docs.envio.dev/

### Best Live Web3 dashboard ⸺ $500
Awarded to the team that builds the most impressive real-time Web3 dashboard powered by Envio’s data stack (HyperIndex and/or HyperSync)
We’re looking for dashboards that don’t just visualize blockchain data, but bring it to life, whether that’s tracking protocol activity, monitoring on-chain metrics, surfacing wallet analytics, or presenting live ecosystem insights.
Projects should demonstrate:
• Real-time data powered by HyperSync or HyperIndex queries
• Clear, intuitive visualizations of blockchain activity
• Creative presentation or storytelling through data
This prize celebrates teams who turn raw blockchain data into something that’s instantly understandable, dashboards that are as beautiful as they are informative.
Qualification Requirements
Clearly demonstrate the use of Envio’s technology (HyperIndex or HyperSync).
Where possible, deploy to Envio’s hosted platform.

Links and Resources
Showcases
https://docs.envio.dev/showcase

### Best Blockscout SDK Integration ⸺ $3,000
1st place - $2,000
2nd place - $1,000
Integrate the new Blockscout SDK into your app and provide interactivity and instant explorer feedback to your users. Easy integration + valuable UI enhancements = best usage!
Instructions on installation and usage available in the docs.
Qualification Requirements
To win this prize you need to use the new Blockscout SDK in a relevant way inside your project.

Links and Resources
SDK docs
https://docs.blockscout.com/devs/blockscout-sdk

### Best use of Blockscout MCP (Vibecode an app OR create a great prompt) ⸺ $3,500
1st place App | 1st place Prompt $1,250 ×2
2nd place App | 2nd place Prompt $500 ×2
Use Blockscout's MCP in various contexts to either Vibecode an app OR create a super prompt that helps with blockchain analysis.
1) Vibe Code an app with Blockscout!
Use Blockscout’s MCP when creating your blockchain app. The MCP has multichain coverage and includes data on balances, tokens, NFTs and contract metadata.Hook up the MCP to your preferred LLM and start finding contextual insights and incorporating these into your application.
Example Ideas
- App that tracks token balances across various lending protocols
- An apple watch app that alerts you of whale purchases of certain tokens on different chains
- App that displays transaction counts or other usage stats across multiple chains and timeframes.
2) Create a super prompt with Blockscout MCP for comprehensive blockchain analyses.
Develop a prompt (for ChatGPT, Claude etc) that allows us to dig deep into blockchain data. We've developed some simple prompts like "Tell me about a specific transaction, or show me token approvals for this address", but we haven't developed many in-depth prompts yet. That's where you come in!
We're looking for prompts that provide a full-account analysis, chain-of-custody research or other in-depth analysis. We should be able to run your reusable prompts in ChatGPT/Claude to get similar results for different accounts, transactions, or user operations.
Qualification Requirements
App prizes will be awarded based on overall idea, creativity, and interactivity with blockchain data via Blockscout.
Prompt prizes will be awarded based on their generalizability, usefulness, and ability to produce impressive results with the MCP server.

Links and Resources
MCP Docs
https://github.com/blockscout/mcp-server

MCP Setup
https://www.blog.blockscout.com/how-to-set-up-mcp-ai-onchain-data-block-explorer

Vibecode Blog Post
https://www.blog.blockscout.com/vibe-coding-with-blockscout/

Resources
Blockscout Documentation
https://docs.blockscout.com/