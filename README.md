# BoskeNomics
Boske Web3 Academia - CryptoEconomics of a gamified, social and open learning innitiative.

Boske is *inspired by Aavegotchi* game mechanics.

We are designing open, relevant and high quality gamified learning oportunities 
focused on **web3 technology and economics** topics.  

## Website and social media

<br> Our web site: [Boske](https://boske.org)  
<br> Join us on Discord: [#Boske](https://discord.gg/SdAtdDaSvp)
<br> Subscribe to our public calendar [here](https://calendar.google.com/calendar/u/3?cid=Ym9za2VkYW9AZ21haWwuY29t)
<br> Github Organization, classroom, lab, repos, book, page, etc: https://github.com/BoskeDAO
<br> Twitter: https://twitter.com/Boske67896312
<br> Youtube: https://www.youtube.com/channel/UCnSquEkp8mBB5rSJ5Fq6h7Q
<br> Medium: https://medium.com/boske
<br> Linkedin: https://www.linkedin.com/company/boske3/
<br> Meetup: https://www.meetup.com/es-ES/web3latam/

## Introduction

Boske is a DeFi-enabled crypto collectibles web3 learning game developed by *Venten Labs* and *Argand Web3 Innovation for Latam* that allows players to stake Non-fungible tokens (NFTs) avatars with interest-generating aTokens and interact with the Boske metaverse. It is a unique combination of Decentralized Finance (DeFi) and NFTs.

Robosepus (or BoskeNFTs) are pixelated ghosts living on the Ethereum blockchain, backed by the ERC-721 standard. Their value is determined by rarity level, which is calculated via multiple factors, such as base traits, amount of staked collateral/aTokens, and equipped wearables.

To level up their Robosepus, players can participate in a variety of activities including mini-games, governance, and meetups. Robosepus can also increase their rarity level by equipping in-game wearables and leveling up.

Rare Robosepus not only have higher secondary marketplace value, they also enable the Robosepu to perform better in rarity farming—a minigame that rewards the rarest Robosepu with GHST tokens.

Boske is governed by BoskeDAO that manages all funds generated through the LILA token distribution.

## About Robosepus

Robosepus are rare crypto-collectibles living on the Ethereum blockchain, backed by the ERC-721 standard used in popular blockchain games such as CryptoKitties, Axie Infinity, and Cryptovoxels. Robosepus possess three attributes that determine their overall value and rarity within the Boske universe: collateral stake, traits, and wearables.

* Collateral stake: Each Robosepu ERC721 NFT manages an escrow contract address that holds an Aave-backed ERC20 collateral, or “aToken”. aTokens generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Thus, the amount of aTokens held in the Robosepu’s escrow address grows over time.

* Traits: Robosepus possess multiple traits that influence their rarity, their performance in mini-games, and the wearables they can equip. Some are generated randomly upon birth, and others depend on user interactions with the Robosepu. See Traits.

    * Random Traits: Upon birth, every Robosepu is assigned several random trait values using the ChainLink VRF random number generator. Trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical depending on its rarity.

    * Kinship: “Kinship” is not randomly assigned, but rather starts at a fixed value (50) upon birth and increases or decreases based on various factors, such as how long the Robosepu has been with the same owner, and how often the owner interacts with it.

    * Experience: Robosepus level up as they gain more experience by voting in BoskeDAO and participating in mini-games. Every three levels, Robosepus receive one Spirit Point that can be allocated towards increasing or decreasing a certain trait.

* Wearables In addition to managing the aToken escrow, Robosepus also extend the ERC998 Composables standard, which allows them to manage child NFTs, known as wearables in the Boske ecosystem. Not every wearable can be equipped by every Robosepu. Some wearables may be exclusively equipped by Robosepus staked with certain collaterals, those of a certain level, and those with certain traits. Some wearables can increase or decrease certain traits of a Robosepu. For example, equipping a sword may slightly boost an Robosepu’s aggressiveness, whereas equipping a Bob Marley shirt may decrease its energy level.

The relationship between Collateral stake, Traits, Wearables, and Kinship is best represented by an Onion Diagram (see below). Each layer builds upon the previous layers, with the sum being the Robosepu itself!

https://wiki.aavegotchi.com/introduction/aavegotchi-onion-diagram.png
Aavegotchi Onion Diagram

Robosepu Value

The valuation of an Robosepu comes from both from its intrinsic value and from its rarity value.

    Intrinsic value Intrinsic value is the denominated value of the Robosepu’s staked collateral. If the Robosepu is staked with 10 aDAI, then the intrinsic value would be 10 aDAI, plus whatever extra aDAI has accrued from the Lending Pool. Initially, only ERC20 tokens listed on the Aave platform (aTokens) will be available as collaterals. However, once BoskeDAO launches, the community will be able to vote on which new collaterals to allow.

    Rarity value Rarity value is determined by calculating the rareness of each Robosepu’s traits and equipped wearables within the Boske universe. Unlike other NFT games, rarity is not a fixed value in Boske. It can change over time as Robosepus level up and equip different wearables. Thus, a rare Robosepu one week could become common, and vice versa, depending on the overall distribution of traits and wearables within the Boske universe. This enables a novel concept known as “rarity farming”, which is explained in this page.
