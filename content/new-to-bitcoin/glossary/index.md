+++
date = '2025-03-06T19:54:53-05:00'
draft = false
underConstruction = false
title = 'Glossary'
+++

<div class="article">
<h1 style="text-align:center">Glossary of Bitcoin Terms</h1>
<p style="text-align:center">Here are many words and phrases you'll hear in the world of Bitcoin, and what they each mean.</p>
<p style="text-align:center">If you can't find what you're looking for, <a href="/contact">let us know</a>, and we'll add it to this list!</p>
</div>

<div class="faq-list">

<details id="51-percent-attack">
<summary>51% Attack</summary>
<div class="faq-answer">
<p>A 51% attack is when one miner or group controls more than half of the network’s <a href="#hashrate">hashrate</a> and uses that power to rewrite recent history. For example, by <a href="#double-spending">double-spending</a> or blocking other people’s transactions. On Bitcoin this is extremely expensive and difficult because the total hashrate is so large, and even then older <a href="#block">blocks</a> remain effectively permanent.</p>
</div>
</details>

<details id="address">
<summary>Address</summary>
<div class="faq-answer">
<p>A Bitcoin address is a unique code used for receiving bitcoin on-chain. It looks like a long string of letters and numbers, and is generated from your <a href="#public-key">public key</a> to add a layer of privacy to your transactions. Example: <b>bc1qnn35dt7vr4s7yxdpytknjxx5u66ex8033uk797</b></p>
</div>
</details>

<details id="ark-protocol">
<summary>Ark Protocol</summary>
<div class="faq-answer">
<p>The Ark Protocol is an in-development layer on the Bitcoin <a href="#timechain">Timechain</a> that aims to scale bitcoin use by pooling users’ <a href="#utxo">UTXOs</a> into shared off-chain transactions. A <a href="#node">node</a> operator of your choice helps coordinate, but has no power over your funds. It aims to combine speed, privacy, and compatibility with other layers like the <a href="#lightning-network">Lightning Network</a>.</p>
</div>
</details>

<details id="asic">
<summary>ASIC</summary>
<div class="faq-answer">
<p>An ASIC (Application-Specific Integrated Circuit) is a computer chip built to do one job extremely well. In Bitcoin, ASICs are designed only for <a href="#mining">mining</a>, running <a href="#sha-256">SHA-256</a> hashes as fast and efficiently as possible. General-purpose computers can still mine in theory, but ASICs dominate because they are far more powerful per watt.</p>
</div>
</details>

<details id="bip">
<summary>BIP</summary>
<div class="faq-answer">
<p>A BIP is a <b>Bitcoin Improvement Proposal</b>: a public document that suggests a change or standard for Bitcoin, such as a new address format or wallet feature. BIPs are discussed openly; nothing becomes part of Bitcoin just because a BIP exists. Users and <a href="#node">node</a> operators decide what to adopt.</p>
</div>
</details>

<details id="bip39-bip32">
<summary>BIP39 / BIP32</summary>
<div class="faq-answer">
<p><a href="#bip">BIP</a>39 defines how a wallet turns random data into a human-readable <a href="#seed-phrase">seed phrase</a> (usually 12 or 24 words). <a href="#bip">BIP</a>32 defines how that seed can generate a tree of related keys, so one backup can recreate many <a href="#address">addresses</a> and <a href="#private-key">private keys</a> in a structured way.</p>
</div>
</details>

<details id="bitcoin-standard">
<summary>Bitcoin Standard</summary>
<div class="faq-answer">
<p>The Bitcoin standard is the idea of organizing personal, business, and national finances around bitcoin as the primary money, using it as a <a href="#sound-money">sound</a> unit for saving and pricing, rather than treating it only as a speculative asset priced in <a href="#fiat">fiat</a>.</p>
</div>
</details>

<details id="blind-signatures">
<summary>Blind Signatures</summary>
<div class="faq-answer">
<p>Invented by David Chaum in the 1980s, blind signatures are a <a href="#cryptography">cryptographic</a> technique for signing a message without seeing its contents, like signing a sealed envelope. In systems like <a href="#ecash">eCash</a> built on Bitcoin, this allows payments that stay private from the signer while remaining verifiable.</p>
</div>
</details>

<details id="block">
<summary>Block</summary>
<div class="faq-answer">
<p>A block is a batch of Bitcoin transactions bundled together, like one page in a massively copied, permanent digital ledger. A new one is added to the <a href="#timechain">Timechain</a> roughly every 10 minutes by <a href="#mining">miners</a>.</p>
</div>
</details>

<details id="blockchain">
<summary>Blockchain</summary>
<div class="faq-answer">
<p><i>See <a href="#timechain">Timechain</a>.</i></p>
</div>
</details>

<details id="block-height">
<summary>Block Height</summary>
<div class="faq-answer">
<p>Block height is the number of <a href="#block">blocks</a> in the <a href="#timechain">Timechain</a>, counting from the first one (Block 0, the <a target="_blank" href="https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f">Genesis Block</a>) up to the latest. Each block is a fixed point in time, so height is often used to mark when something happened (for example, the first Bitcoin Chattanooga meetup began at block 703,083).</p>
</div>
</details>

<details id="block-reward">
<summary>Block Reward</summary>
<div class="faq-answer">
<p>The block reward is the new bitcoin <a href="#mining">miners</a> earn when they successfully add a <a href="#block">block</a> to the <a href="#timechain">Timechain</a> (see <a href="#nonce">Nonce</a> and <a href="#proof-of-work">Proof of Work</a>). It started at 50 bitcoin per block (2009–2012), then 25, 12.5, 6.25, and since April 2024 is 3.125 bitcoin per block (plus <a href="#transaction-fee">fees</a>). This ~4-year <a href="#halving">halving</a> continues until around 2140, when the last <a href="#satoshi">satoshi</a> is mined.</p>
</div>
</details>

<details id="block-weight">
<summary>Block Weight / Block Size Limit</summary>
<div class="faq-answer">
<p>Bitcoin limits how much data can go in each <a href="#block">block</a>. After <a href="#segwit">SegWit</a>, that limit is measured mainly in weight units (with a maximum of 4 million weight units per block), not simple bytes. This keeps blocks from growing without bound while still allowing more efficient use of space for signatures and other data.</p>
</div>
</details>

<details id="reorg">
<summary>Chain Reorganization (Reorg)</summary>
<div class="faq-answer">
<p>A chain reorganization (reorg) happens when <a href="#node">nodes</a> switch from one branch of the <a href="#timechain">Timechain</a> to another that has more <a href="#proof-of-work">proof of work</a>. Short reorgs of one block can occur naturally; deep reorgs are rare on Bitcoin and would require enormous mining power.</p>
</div>
</details>

<details id="change-address">
<summary>Change Address</summary>
<div class="faq-answer">
<p>When you spend a <a href="#utxo">UTXO</a> that holds more bitcoin than the payment amount, the leftover returns to you as change. A change address is the <a href="#address">address</a> that receives that leftover. Good wallets create a fresh change address automatically so you don’t have to manage it by hand.</p>
</div>
</details>

<details id="coin-selection">
<summary>Coin Selection</summary>
<div class="faq-answer">
<p>Coin selection is how a wallet chooses which <a href="#utxo">UTXOs</a> to spend for a payment. The goal is usually to cover the amount and fee efficiently, avoid creating awkward leftovers, and sometimes improve privacy. Poor coin selection can leave you with many tiny UTXOs that are expensive to spend later.</p>
</div>
</details>

<details id="coinbase">
<summary>Coinbase</summary>
<div class="faq-answer">
<p>The coinbase is the first transaction in every <a href="#block">block</a>. It includes the new bitcoin awarded to <a href="#mining">miners</a> plus the <a href="#transaction-fee">fees</a> from the block’s transactions. <b>Note:</b> this is <i>not</i> the exchange named Coinbase; the exchange took its name from this concept.</p>
</div>
</details>

<details id="coinjoin">
<summary>CoinJoin</summary>
<div class="faq-answer">
<p>CoinJoin is a method where several people combine their inputs into one collaborative Bitcoin transaction, then receive outputs of matching amounts. From the outside, it becomes harder to tell which output belongs to which person, improving privacy on the <a href="#timechain">Timechain</a> without changing Bitcoin’s rules.</p>
</div>
</details>

<details id="cold-storage">
<summary>Cold Storage</summary>
<div class="faq-answer">
<p>Cold storage means keeping your bitcoin in a <a href="#hardware-wallet">hardware wallet</a> (often called a signing device) whose <a href="#private-key">private keys</a> are controlled by you and have never touched the internet. That makes remote hacking of those keys effectively impossible without physical access to the device.</p>
</div>
</details>

<details id="confirmations">
<summary>Confirmations</summary>
<div class="faq-answer">
<p>A confirmation means your transaction has been included in a <a href="#block">block</a>. Each block added on top adds another confirmation. One confirmation is often enough for small payments; larger amounts are commonly left to wait for more blocks so a <a href="#reorg">reorg</a> becomes increasingly unlikely.</p>
</div>
</details>

<details id="consensus">
<summary>Consensus</summary>
<div class="faq-answer">
<p>Consensus is the agreement Bitcoin <a href="#node">nodes</a> reach roughly every 10 minutes, on the current state of the <a href="#timechain">Timechain</a> while enforcing Bitcoin’s rules. It keeps everyone’s copy of the ledger in sync without a central coordinator.</p>
</div>
</details>

<details id="cpfp">
<summary>CPFP</summary>
<div class="faq-answer">
<p>CPFP means <b>Child Pays for Parent</b>. If an unconfirmed transaction is stuck because its fee is too low, you can spend its output in a new “child” transaction that pays a higher fee. Miners are incentivized to confirm both together so they collect the combined fees.</p>
</div>
</details>

<details id="cryptocurrency">
<summary>Cryptocurrency</summary>
<div class="faq-answer">
<p>Cryptocurrency is a broad label for digital assets secured by <a href="#cryptography">cryptography</a>. Bitcoin is often grouped with millions of other tokens under that label. Because almost all other tokens are centralized or poorly designed, many Bitcoiners (including us) treat Bitcoin as its own category.</p>
</div>
</details>

<details id="cryptography">
<summary>Cryptography</summary>
<div class="faq-answer">
<p>Cryptography is a branch of mathematics that uses one-way functions: easy to verify when you have the right inputs, extremely hard to reverse when you don’t. That makes it possible to protect information, from a short message to a Bitcoin <a href="#private-key">private key</a>, so it can’t practically be decoded without the secret.</p>
</div>
</details>

<details id="custodial-wallet">
<summary>Custodial Wallet</summary>
<div class="faq-answer">
<p>A custodial wallet is an app or website (often an exchange) that holds your <a href="#private-key">private key</a> for you. It’s convenient and can reduce the risk of you losing a key yourself, but you must trust the custodian. Those services can still be hacked, mismanaged, or pressured by governments.</p>
</div>
</details>

<details id="decentralization">
<summary>Decentralization</summary>
<div class="faq-answer">
<p>Decentralization means no single person or group controls the system; everyone who runs the software shares that role, making the network hard to shut down or corrupt. A “blockchain” alone does not make something decentralized. Other than Bitcoin, nearly all <a href="#cryptocurrency">cryptocurrencies</a> are centrally controlled.</p>
</div>
</details>

<details id="derivation-path">
<summary>Derivation Path</summary>
<div class="faq-answer">
<p>A derivation path is the route a wallet follows inside a <a href="#bip39-bip32">BIP32</a> key tree to generate a specific key or <a href="#address">address</a> from the master seed. For example: <code>m/84'/0'/0'/0/0</code>. Using standard paths helps different wallets restore the same addresses from one <a href="#seed-phrase">seed phrase</a>.</p>
</div>
</details>

<details id="difficulty-adjustment">
<summary>Difficulty Adjustment</summary>
<div class="faq-answer">
<p>Every 2,016 <a href="#block">blocks</a> (~two weeks), Bitcoin checks how long those blocks took and adjusts mining difficulty so the average stays near 10 minutes. If blocks were too fast, difficulty rises; if too slow, it falls. That keeps issuance on schedule no matter how many <a href="#mining">miners</a> join or leave.</p>
</div>
</details>

<details id="dca">
<summary>Dollar Cost Averaging (DCA)</summary>
<div class="faq-answer">
<p>Dollar Cost Averaging, or DCA, is buying a fixed dollar amount of bitcoin on a regular schedule (for example, $100 every week), regardless of price. Over time this averages your purchase price and avoids trying to time the market, something most people can’t do consistently. <a target="_blank" href="https://canyoubeatbitcoin.com/">This game</a> is a useful demonstration.</p>
</div>
</details>

<details id="dont-trust-verify">
<summary>Don’t Trust, Verify</summary>
<div class="faq-answer">
<p>“Don’t Trust, Verify” comes from Bitcoin’s <a href="#open-source">open source</a> culture: check things for yourself instead of outsourcing your thinking to someone else. It applies both to Bitcoin and to life more broadly.</p>
</div>
</details>

<details id="double-spending">
<summary>Double-Spending</summary>
<div class="faq-answer">
<p>Double-spending is the risk that the same digital money is spent twice. Earlier digital cash designs struggled with this. <a href="#satoshi-nakamoto">Satoshi Nakamoto</a> solved it with Bitcoin’s <a href="#proof-of-work">proof-of-work</a> system, shared <a href="#timechain">Timechain</a>, and network of <a href="#node">nodes</a>.</p>
</div>
</details>

<details id="dust">
<summary>Dust</summary>
<div class="faq-answer">
<p>Dust is a <a href="#utxo">UTXO</a> so small that the fee to spend it can be worth as much or more than the output itself. Wallets and the network treat very tiny outputs carefully so the <a href="#utxo-set">UTXO set</a> doesn’t fill up with uneconomical leftovers.</p>
</div>
</details>

<details id="ecash">
<summary>eCash</summary>
<div class="faq-answer">
<p>Created by cryptographer David Chaum in the 1980s, eCash is a way to send digital money privately using <a href="#blind-signatures">blind signatures</a>. Today, eCash is used as a layer on top of Bitcoin (for example in Cashu), combining private payments with Bitcoin’s security model.</p>
</div>
</details>

<details id="electrum-server">
<summary>Electrum Server</summary>
<div class="faq-answer">
<p>An Electrum server is software that indexes the <a href="#timechain">Timechain</a> and answers wallet queries, such as balances, transaction history, and broadcast requests, without the wallet storing the full chain itself. Lightweight wallets often connect to one; running your own keeps that query private.</p>
</div>
</details>

<details id="epoch">
<summary>Epoch</summary>
<div class="faq-answer">
<p>An epoch is the period between <a href="#halving">halvings</a>. The first ran from 3 January 2009 to 28 November 2012, with a 50-bitcoin <a href="#block-reward">block reward</a>. We are now in the fifth epoch, with a reward of 3.125 new bitcoin per <a href="#block">block</a> (plus <a href="#transaction-fee">fees</a>).</p>
</div>
</details>

<details id="fomo">
<summary>Fear Of Missing Out (FOMO)</summary>
<div class="faq-answer">
<p>Fear Of Missing Out, or FOMO, is the urge to buy when price is spiking. It’s usually a poor strategy because it’s emotional. A better approach is a plan to <a href="#dca">DCA</a> into bitcoin before drama hits, so price moves are less likely to control you.</p>
</div>
</details>

<details id="fud">
<summary>Fear, Uncertainty, and Doubt (FUD)</summary>
<div class="faq-answer">
<p>Fear, Uncertainty, and Doubt, or FUD, refers to negative information (often one-sided, incomplete, and/or false) meant to cast Bitcoin or something else in a bad light.</p>
</div>
</details>

<details id="fedimint">
<summary>Fedimint</summary>
<div class="faq-answer">
<p>Fedimint is a federated <a href="#ecash">eCash</a> system built for Bitcoin communities. A group of guardians collectively custodians bitcoin and issues privacy-preserving eCash tokens to members. It aims to combine stronger privacy and easier payments with shared, multi-party custody instead of a single custodian.</p>
</div>
</details>

<details id="fee-rate">
<summary>Fee Rate</summary>
<div class="faq-answer">
<p>Fee rate is how much you pay per unit of transaction size, usually measured in <a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a> for on-chain payments. Higher rates tend to confirm faster when the <a href="#mempool">mempool</a> is busy; lower rates save money if you can wait.</p>
</div>
</details>

<details id="fiat">
<summary>Fiat</summary>
<div class="faq-answer">
<p>Fiat money is government-issued currency, like dollars or euros, that is not redeemable for a fixed amount of gold or another hard asset. Its supply can be expanded by policy. Bitcoiners often contrast fiat with bitcoin’s fixed supply and <a href="#sound-money">sound money</a> properties.</p>
</div>
</details>

<details id="hard-fork">
<summary>Fork, Hard</summary>
<div class="faq-answer">
<p>A hard fork is a protocol change that adds rules incompatible with the old version. Because it can split the network, hard forks are avoided when possible.</p>
</div>
</details>

<details id="soft-fork">
<summary>Fork, Soft</summary>
<div class="faq-answer">
<p>A soft fork tightens rules in a way that stays compatible with older software. Unless a radical change is needed, this is the usual path for Bitcoin upgrades.</p>
</div>
</details>

<details id="full-node">
<summary>Full Node</summary>
<div class="faq-answer">
<p>A full node is software that downloads and verifies Bitcoin’s rules and the full <a href="#timechain">Timechain</a> for itself. It does not have to trust someone else’s copy of history. Running a full node is how you participate most directly in <a href="#consensus">consensus</a> and <a href="#dont-trust-verify">verify</a> your own transactions.</p>
</div>
</details>

<details id="genesis-block">
<summary>Genesis Block</summary>
<div class="faq-answer">
<p>The Genesis Block is Bitcoin’s first <a href="#block">block</a> (block 0), mined by <a href="#satoshi-nakamoto">Satoshi Nakamoto</a> on 3 January 2009. Every later block builds on it. It famously embedded a newspaper headline about bank bailouts, marking Bitcoin’s launch in the context of the financial crisis.</p>
</div>
</details>

<details id="get-off-zero">
<summary>Get Off Zero</summary>
<div class="faq-answer">
<p>“Get Off Zero” means stop having zero bitcoin and acquire your first <a href="#satoshi">sats</a>. It marks the beginning of using this new form of money.</p>
</div>
</details>

<details id="get-on-zero">
<summary>Get On Zero</summary>
<div class="faq-answer">
<p>“Get On Zero” flips “<a href="#get-off-zero">Get Off Zero</a>”: the goal of holding no fiat and being fully allocated to bitcoin. The idea is that one foot in a lifeboat and one on the Titanic isn’t really safe.</p>
</div>
</details>

<details id="halving">
<summary>Halving</summary>
<div class="faq-answer">
<p>A halving happens every 210,000 <a href="#block">blocks</a> (~every 4 years), when the new-bitcoin reward per block is cut in half. It started at 50, then 25, 12.5, 6.25, and is now 3.125. This continues until only 1 <a href="#satoshi">satoshi</a> is issued per block, and eventually no new bitcoin at all, thereby capping the supply at just under 21 million.</p>
</div>
</details>

<details id="hardware-wallet">
<summary>Hardware Wallet</summary>
<div class="faq-answer">
<p>A hardware wallet (also called a signing device) is a physical device that stores your <a href="#private-key">private keys</a> offline and signs transactions without exposing those keys to the internet. It’s the main tool for <a href="#cold-storage">cold storage</a>.</p>
</div>
</details>

<details id="hash">
<summary>Hash</summary>
<div class="faq-answer">
<p>A hash is a fixed-length string produced by a one-way <a href="#cryptography">cryptographic</a> function from any input data. In Bitcoin, <a href="#mining">miners</a> use <a href="#sha-256">SHA-256</a> seeking a hash below a target (<a href="#proof-of-work">Proof of Work</a>). A hash of the <a href="#public-key">public key</a> also helps form a receiving <a href="#address">address</a>.</p>
</div>
</details>

<details id="hashrate">
<summary>Hashrate</summary>
<div class="faq-answer">
<p>Hashrate is the rate at which <a href="#mining">miners</a> compute <a href="#hash">hashes</a> while searching for a valid <a href="#nonce">nonce</a>. Higher individual hashrate means a better chance of finding a <a href="#block">block</a>; higher network hashrate makes <a href="#double-spending">double-spending</a> attacks much harder.</p>
</div>
</details>

<details id="hfsp">
<summary>Have Fun Staying Poor (HFSP)</summary>
<div class="faq-answer">
<p>Have Fun Staying Poor, or HFSP, is a blunt phrase some Bitcoiners use when they conclude a <a href="#nocoiner">nocoiner</a> won’t engage in good faith. It’s rude by design; treat it as internet slang, not a model for conversation.</p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/k8ukx0LKJRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</details>

<details id="hodl">
<summary>Hodl</summary>
<div class="faq-answer">
<p>“Hodl” began as a typo for “hold” on a <a target="_blank" href="https://bitcointalk.org/index.php?topic=375643.0">Bitcointalk post</a> and became a meme for long-term conviction and resisting the urge to sell into fiat. Some later treated it as “Hold On for Dear Life,” but the typo came first.</p>
</div>
</details>

<details id="hot-wallet">
<summary>Hot Wallet</summary>
<div class="faq-answer">
<p>A hot wallet is software on a phone or computer that holds your <a href="#private-key">private key</a> while connected to the internet. Keys are usually encrypted, but exposure is higher than <a href="#cold-storage">cold storage</a>. Convenience is higher; security is a bit lower.</p>
</div>
</details>

<details id="htlc">
<summary>HTLC</summary>
<div class="faq-answer">
<p>An HTLC is a <b>Hashed TimeLock Contract</b>: a conditional payment that releases bitcoin only if a secret is revealed before a deadline, otherwise the funds can return to the sender. HTLCs are a core building block of the <a href="#lightning-network">Lightning Network</a>, allowing multi-hop payments without trusting every middle hop.</p>
</div>
</details>

<details id="hyperbitcoinization">
<summary>Hyperbitcoinization</summary>
<div class="faq-answer">
<p>Hyperbitcoinization is the idea of a tipping point where bitcoin becomes the world’s dominant money, used widely for saving, pricing, and payments, while <a href="#fiat">fiat</a> currencies fade in importance. It’s a long-term outlook, not a claim that the shift has already finished.</p>
</div>
</details>

<details id="ibd">
<summary>Initial Block Download (IBD)</summary>
<div class="faq-answer">
<p>Initial Block Download is the process a new <a href="#full-node">full node</a> goes through when it first syncs: downloading and verifying the entire <a href="#timechain">Timechain</a> from the <a href="#genesis-block">Genesis Block</a> to the present. Until IBD finishes, the node is not yet fully caught up.</p>
</div>
</details>

<details id="kyc">
<summary>Know your Customer (KYC)</summary>
<div class="faq-answer">
<p>Know Your Customer, or KYC, refers to laaws and regulations that force many exchanges to collect personal data before you can use them. The stated goal is stopping illicit finance; in practice it also creates large data honeypots. Non-KYC options include earning bitcoin, selling goods for it, or using peer-to-peer platforms such as <a target="_blank" href="https://hodlhodl.com/join/QPXV">Hodl Hodl</a>.</p>
</div>
</details>

<details id="layer-1">
<summary>Layer 1 / Base Layer</summary>
<div class="faq-answer">
<p>Layer 1 (or the base layer) is Bitcoin itself: the main <a href="#timechain">Timechain</a>, on-chain transactions, and the rules enforced by <a href="#node">nodes</a>. It prioritizes security and decentralization. Faster or cheaper activity is often built in layers on top of it.</p>
</div>
</details>

<details id="layer-2">
<summary>Layer 2</summary>
<div class="faq-answer">
<p>A Layer 2 is a system built on top of Bitcoin’s <a href="#layer-1">base layer</a> to improve speed, cost, or other features while still depending on Bitcoin for security or settlement. The <a href="#lightning-network">Lightning Network</a> is the best-known example.</p>
</div>
</details>

<details id="lightning-address">
<summary>Lightning Address</summary>
<div class="faq-answer">
<p>A Lightning Address looks like an email address (for example, name@example.com) but is used to receive bitcoin over the <a href="#lightning-network">Lightning Network</a>. Behind the scenes it helps your wallet fetch a <a href="#lightning-invoice">Lightning invoice</a> so the sender doesn’t need a fresh QR code every time.</p>
</div>
</details>

<details id="lightning-channel">
<summary>Lightning Channel</summary>
<div class="faq-answer">
<p>A Lightning channel is a payment connection between two parties, opened with an on-chain Bitcoin transaction that locks funds on each side. While the channel is open, the two can send many off-chain payments instantly by updating balances. Closing the channel settles the final balances back on the <a href="#timechain">Timechain</a>.</p>
</div>
</details>

<details id="lightning-liquidity">
<summary>Lightning Inbound / Outbound Liquidity</summary>
<div class="faq-answer">
<p>In a <a href="#lightning-channel">Lightning channel</a>, outbound liquidity is the amount you can send; inbound liquidity is the amount you can receive. Both matter: without outbound capacity you can’t pay, and without inbound capacity others can’t pay you, even if you “have a channel.”</p>
</div>
</details>

<details id="lightning-invoice">
<summary>Lightning Invoice</summary>
<div class="faq-answer">
<p>A Lightning invoice is a payment request on the <a href="#lightning-network">Lightning Network</a>. It encodes the amount, destination, and other details the sender’s wallet needs. Invoices are often shown as long strings or QR codes and typically expire after a set time.</p>
</div>
</details>

<details id="lightning-network">
<summary>Lightning Network</summary>
<div class="faq-answer">
<p>Lightning is a second layer on Bitcoin’s <a href="#timechain">Timechain</a> for fast, low-cost payments. Users open channels with on-chain bitcoin, then send payments off-chain by updating balances across those channels. Payments can route through intermediate nodes (for example Alice → Bob → Charlie) while settling finally when channels close back on-chain.</p>
</div>
</details>

<details id="liquid-network">
<summary>Liquid Network</summary>
<div class="faq-answer">
<p>Liquid is a sidechain linked to Bitcoin’s <a href="#timechain">Timechain</a>. It can be faster, cheaper, and more private for some uses, but it is operated by a federation of businesses, so it requires a small amount of trust, though those operators are strongly incentivized to protect users.</p>
</div>
</details>

<details id="lightning-routing">
<summary>Lightning Routing</summary>
<div class="faq-answer">
<p>Lightning routing is how a payment finds a path across multiple <a href="#lightning-channel">channels</a>. For example, Alice pays Bob, who forwards it to Charlie. Each hop may charge a small fee. You don’t need a direct channel with the final recipient if a route exists.</p>
</div>
</details>

<details id="lightning-watchtower">
<summary>Lightning Watchtower</summary>
<div class="faq-answer">
<p>A watchtower is a service that monitors the <a href="#timechain">Timechain</a> for cheating attempts on your <a href="#lightning-channel">Lightning channels</a> while you are offline. If a counterpart tries to close an old channel state unfairly, the watchtower can help enforce the correct outcome.</p>
</div>
</details>

<details id="mempool">
<summary>Mempool</summary>
<div class="faq-answer">
<p>A mempool is a <a href="#node">node</a>’s list of pending on-chain transactions, typically ordered by fee rate (<a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a>). There is no single global mempool; each node has its own view of unconfirmed transactions until they land in a <a href="#block">block</a>.</p>
</div>
</details>

<details id="merkle-tree">
<summary>Merkle Tree / Merkle Root</summary>
<div class="faq-answer">
<p>A Merkle tree is a structure that fingerprints many pieces of data by repeatedly hashing them in pairs until one final value remains: the Merkle root. Each Bitcoin <a href="#block">block</a> stores a Merkle root of its transactions, so any transaction can be proven to belong to that block efficiently.</p>
</div>
</details>

<details id="mining">
<summary>Mining</summary>
<div class="faq-answer">
<p>Mining is repeatedly guessing large numbers and hashing them to find a <a href="#nonce">nonce</a> that solves Bitcoin’s puzzle. The first miner to prove a valid solution adds a <a href="#block">block</a> to the <a href="#timechain">Timechain</a> and earns the new bitcoin plus <a href="#transaction-fee">fees</a>. The energy cost is real; competition pushes miners toward the cheapest available power, which is often the least wasted or cleanest.</p>
</div>
</details>

<details id="mining-pool">
<summary>Mining Pool</summary>
<div class="faq-answer">
<p>A mining pool is a group of <a href="#mining">miners</a> who combine their <a href="#hashrate">hashrate</a> and share rewards when the pool finds a <a href="#block">block</a>. Pools make payouts more steady for small miners, at the cost of some centralization compared with <a href="#solo-mining">solo mining</a>.</p>
</div>
</details>

<details id="multisig">
<summary>Multisig</summary>
<div class="faq-answer">
<p>Multisig (multi-signature) means more than one key is required to spend bitcoin. For example, 2-of-3, where any two of three keys can authorize a transaction. It’s widely used for shared custody, business funds, and stronger personal security setups.</p>
</div>
</details>

<details id="newcoiner">
<summary>Newcoiner</summary>
<div class="faq-answer">
<p>A newcoiner is someone newly into Bitcoin who has just started <a href="#stack-sats">stacking sats</a>. It's a shorter way of referring to someone who is a Bitcoin beginner.</p>
</div>
</details>

<details id="nocoiner">
<summary>Nocoiner</summary>
<div class="faq-answer">
<p>A nocoiner is someone who owns no bitcoin <i>and</i> actively opposes Bitcoin, often spreading <a href="#fud">FUD</a>. Someone who simply hasn’t bought yet but is open or neutral is closer to a <a href="#precoiner">precoiner</a>.</p>
</div>
</details>

<details id="node">
<summary>Node</summary>
<div class="faq-answer">
<p>A node is a computer running Bitcoin software that keeps a full copy of the <a href="#timechain">Timechain</a>, checks transactions and blocks against the rules, and helps keep the network <a href="#decentralization">decentralized</a>. Anyone can run one; nodes are what ultimately enforce the protocol.</p>
</div>
</details>

<details id="nonce">
<summary>Nonce</summary>
<div class="faq-answer">
<p>A nonce is the number <a href="#mining">miners</a> vary while hashing with <a href="#sha-256">SHA-256</a> until the resulting <a href="#hash">hash</a> is below the network target. Finding it lets them add a <a href="#block">block</a> and claim the reward and <a href="#transaction-fee">fees</a>.</p>
</div>
</details>

<details id="noncustodial-wallet">
<summary>Noncustodial Wallet</summary>
<div class="faq-answer">
<p>A noncustodial wallet is an app or device where <i>you</i> hold the <a href="#private-key">private key</a>. You control the funds fully, and you are fully responsible. Lose the key (and backups), and the bitcoin is gone with no recovery desk to call.</p>
</div>
</details>

<details id="not-your-keys-not-your-bitcoin">
<summary>Not Your Keys, Not Your Bitcoin</summary>
<div class="faq-answer">
<p>This mantra means: if someone else holds your <a href="#private-key">private keys</a>, you don’t truly hold the bitcoin; you hold an IOU. Exchange hacks, seizures, and failures made the phrase stick.</p>
</div>
</details>

<details id="op-return">
<summary>OP_RETURN</summary>
<div class="faq-answer">
<p>OP_RETURN is a Bitcoin script opcode that allows a small amount of arbitrary data to be attached to a transaction output that is provably unspendable. It’s often used for timestamps, proofs, or protocol metadata, while keeping that data from bloating the spendable <a href="#utxo-set">UTXO set</a>.</p>
</div>
</details>

<details id="open-source">
<summary>Open Source</summary>
<div class="faq-answer">
<p>Open source software (including Bitcoin) can be inspected by anyone. Changes are proposed publicly and only take effect when the community of users and developers adopts them. Closed source code can only be audited by insiders.</p>
</div>
</details>

<details id="orange-pill">
<summary>Orange Pill</summary>
<div class="faq-answer">
<p>Like giving the red pill to someone in the 1999 film <i>The Matrix</i>, to “orange pill” someone is to help them understand Bitcoin deeply enough that their view of money changes, usually toward seeing bitcoin as <a href="#sound-money">sound money</a> rather than just another app or gamble. A person who has gone through that shift is often called orange-pilled.</p>
</div>
</details>

<details id="psbt">
<summary>Partially Signed Bitcoin Transaction (PSBT)</summary>
<div class="faq-answer">
<p>A Partially Signed Bitcoin Transaction, or a PSBT, is a standard format for building and passing around a transaction that is not fully signed yet. It’s especially useful for <a href="#hardware-wallet">hardware wallets</a>, <a href="#multisig">multisig</a>, and any workflow where different devices each add their signature.</p>
</div>
</details>

<details id="p2p">
<summary>Peer-to-Peer (P2P)</summary>
<div class="faq-answer">
<p>Peer-to-peer, or P2P, means people interacting directly without a required middleman. Bitcoin’s network is peer-to-peer at the computer level, and Bitcoin culture also uses “P2P” for direct trades between people (often without KYC exchanges in the middle).</p>
</div>
</details>

<details id="precoiner">
<summary>Precoiner</summary>
<div class="faq-answer">
<p>A precoiner is someone who hasn’t bought bitcoin yet, but either doesn’t know about it yet or already views it favorably.</p>
</div>
</details>

<details id="private-key">
<summary>Private Key</summary>
<div class="faq-answer">
<p>Your private key is the secret that controls your bitcoin. Wallets usually show it as a 12- or 24-word <a href="#seed-phrase">seed phrase</a> that can recreate those keys. Keep it private and offline: in practice, <b>control of the private key is control of the bitcoin</b>.</p>
</div>
</details>

<details id="proof-of-work">
<summary>Proof of Work</summary>
<div class="faq-answer">
<p>Proof of Work is the process of <a href="#mining">miners</a> searching for a <a href="#nonce">nonce</a> that produces a valid <a href="#hash">hash</a> so a new <a href="#block">block</a> can be added to the <a href="#timechain">Timechain</a>. Finding it is expensive; verifying it is cheap, so it proves real work was done.</p>
</div>
</details>

<details id="pruned-node">
<summary>Pruned Node</summary>
<div class="faq-answer">
<p>A pruned node is a <a href="#full-node">full node</a> that verifies the whole <a href="#timechain">Timechain</a>, then discards old block data to save disk space while keeping the information needed to stay in <a href="#consensus">consensus</a>. It still enforces the rules; it just doesn’t keep every historical block forever.</p>
</div>
</details>

<details id="public-key">
<summary>Public Key</summary>
<div class="faq-answer">
<p>A public key is derived from your <a href="#private-key">private key</a> and can be used to receive bitcoin. It can’t be reversed into the private key, but reusing it hurts privacy. Prefer a fresh receiving <a href="#address">address</a> for each payment when possible.</p>
</div>
</details>

<details id="rbf">
<summary>Replace-By-Fee (RBF)</summary>
<div class="faq-answer">
<p>Replace-By-Fee, or RBF, is a way to increase the fee on an unconfirmed transaction by broadcasting a replacement that pays more. It helps unstick payments when the <a href="#mempool">mempool</a> is congested, provided the original transaction signaled that replacement is allowed.</p>
</div>
</details>

<details id="satoshi">
<summary>Satoshi / Sat</summary>
<div class="faq-answer">
<p>A satoshi (or “sat”) is the smallest unit of bitcoin: 0.00000001 BTC, or one hundred-millionth of a coin. Named after Bitcoin’s creator, sats are often easier to think in than long decimals.</p>
</div>
</details>

<details id="satoshi-nakamoto">
<summary>Satoshi Nakamoto</summary>
<div class="faq-answer">
<p>Satoshi Nakamoto is the pseudonym of Bitcoin’s creator, who published the white paper in 2008, launched the network on 3 January 2009, and last publicly appeared in 2011. Identity remains unknown. Coins widely attributed to Satoshi’s early <a href="#mining">mining</a> have largely stayed unspent on the <a href="#timechain">Timechain</a>.</p>
</div>
</details>

<details id="seed-phrase">
<summary>Seed Phrase</summary>
<div class="faq-answer">
<p>A seed phrase is 12 or 24 common words that back up your wallet’s <a href="#private-key">private keys</a>. Write it down and store it offline somewhere safe. With the seed, you can restore access on a new device; without it (and without other backups), lost access is permanent.</p>
</div>
</details>

<details id="segwit">
<summary>SegWit</summary>
<div class="faq-answer">
<p>SegWit (Segregated Witness) is a Bitcoin upgrade that moved signature data (<a href="#witness-data">witness data</a>) to a separate part of the transaction. It fixed transaction malleability, made room for more transactions per <a href="#block">block</a>, and paved the way for second layers like the <a href="#lightning-network">Lightning Network</a>.</p>
</div>
</details>

<details id="self-custody">
<summary>Self-Custody</summary>
<div class="faq-answer">
<p>Self-custody means you hold your own <a href="#private-key">private keys</a>, usually in a <a href="#noncustodial-wallet">noncustodial wallet</a> or <a href="#hardware-wallet">hardware wallet</a>, instead of trusting an exchange or other third party. It comes with more responsibility, and with the core benefit summed up by <a href="#not-your-keys-not-your-bitcoin">“Not Your Keys, Not Your Bitcoin.”</a></p>
</div>
</details>

<details id="settlement">
<summary>Settlement / Finality</summary>
<div class="faq-answer">
<p>Settlement is when a payment is completed in a way that is very hard to reverse. On Bitcoin’s <a href="#layer-1">base layer</a>, finality grows with each new <a href="#confirmations">confirmation</a>. Layers like <a href="#lightning-network">Lightning</a> can feel instant between parties, while still ultimately relying on Bitcoin for final settlement.</p>
</div>
</details>

<details id="sha-256">
<summary>SHA-256</summary>
<div class="faq-answer">
<p>SHA-256 (Secure Hash Algorithm 256-bit) is the main <a href="#hash">hash</a> function Bitcoin uses to fingerprint data and secure <a href="#mining">mining</a>. It’s a core building block of Bitcoin’s security model.</p>
</div>
</details>

<details id="shitcoin">
<summary>Shitcoin</summary>
<div class="faq-answer">
<p>Among Bitcoiners, “shitcoin” is a blunt term for other <a href="#cryptocurrency">cryptocurrencies</a>, which are viewed as centralized, low-integrity, or scammy compared with Bitcoin.</p>
</div>
</details>

<details id="smart-contract">
<summary>Smart Contract</summary>
<div class="faq-answer">
<p>Smart contracts are rules written in code that can move funds or take other actions automatically when conditions are met, without a middleman. Bitcoin supports scripting for this kind of programmable spending under its security model.</p>
</div>
</details>

<details id="solo-mining">
<summary>Solo Mining</summary>
<div class="faq-answer">
<p>Solo mining means <a href="#mining">mining</a> on your own, without a <a href="#mining-pool">pool</a>. If you find a <a href="#block">block</a>, you keep the entire reward; if you don’t, you earn nothing for that work. Pools trade that lottery-like variance for smaller, more regular payouts.</p>
</div>
</details>

<details id="sound-money">
<summary>Sound Money</summary>
<div class="faq-answer">
<p>Sound money is money that holds value well over time because its supply is hard to debase. Bitcoiners use the term for bitcoin’s fixed supply, predictable issuance, and resistance to political manipulation, contrasted with expandable <a href="#fiat">fiat</a> currencies.</p>
</div>
</details>

<details id="stack-sats">
<summary>Stack Sats</summary>
<div class="faq-answer">
<p>“Stack sats” means keep accumulating bitcoin steadily, especially via ongoing buys, without obsessing over short-term price. Often paired with “stay humble.”</p>
</div>
</details>

<details id="submarine-swap">
<summary>Submarine Swap</summary>
<div class="faq-answer">
<p>A submarine swap is an exchange between on-chain bitcoin and <a href="#lightning-network">Lightning</a> bitcoin (or the reverse) without trusting a custodian with both sides at once. It helps people move value between layers when they need more inbound or outbound <a href="#lightning-liquidity">liquidity</a>.</p>
</div>
</details>

<details id="taproot">
<summary>Taproot</summary>
<div class="faq-answer">
<p>Taproot is a Bitcoin upgrade that improves privacy and efficiency for complex spending conditions, including <a href="#multisig">multisig</a> and some smart-contract-like setups. Many advanced transactions can look like simple single-key spends on the <a href="#timechain">Timechain</a> when everyone cooperates.</p>
</div>
</details>

<details id="timechain">
<summary>Timechain</summary>
<div class="faq-answer">
<p>The Timechain, commonly called a “blockchain”, is the shared ledger of all on-chain bitcoin transactions since 3 January 2009. Each <a href="#block">block</a> proves a set of transactions and a moment in time. Bitcoin Chattanooga’s first meetup is marked at <a target="_blank" href="https://mempool.space/block/00000000000000000004730cacd16909b9e2323eeceab1305c31edae2af07537">block 703,083</a>.</p>
</div>
</details>

<details id="timelock">
<summary>Timelock</summary>
<div class="faq-answer">
<p>A timelock is a rule that prevents bitcoin from being spent until a certain time or <a href="#block-height">block height</a>. Timelocks are used in <a href="#lightning-network">Lightning</a>, recovery scripts, and other designs that need money to unlock only after a delay.</p>
</div>
</details>

<details id="transaction-fee">
<summary>Transaction Fee</summary>
<div class="faq-answer">
<p>Fees pay for inclusion and routing of your payment. On-chain, you choose a rate in <a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a>; higher rates clear faster when the <a href="#mempool">mempool</a> is busy. <a href="#liquid-network">Liquid</a> fees are usually small; <a href="#lightning-network">Lightning</a> fees depend on the path and each hop’s charge.</p>
</div>
</details>

<details id="utxo">
<summary>Unspent Transaction Output (UTXO)</summary>
<div class="faq-answer">
<p>Unspent Transaction Output, or URXO, are chunks of bitcoin from past payments that haven’t been spent yet. Think of them like denominations of dollar bills and coins, except they can be any amount. When you send on-chain, you spend one or more UTXOs and may receive change as a new UTXO. Managing them matters: many tiny UTXOs can make future spends expensive when fees are high.</p>
</div>
</details>

<details id="uasf">
<summary>User Activated Soft Fork (UASF)</summary>
<div class="faq-answer">
<p>A User-Activated Soft Fork, or UASF, is a way for <a href="#node">node</a> operators to adopt a <a href="#soft-fork">soft fork</a> by enforcing new rules themselves, rather than waiting for <a href="#mining">miners</a> to lead. It is a reminder that nodes enforce Bitcoin’s rules.</p>
</div>
</details>

<details id="utxo-set">
<summary>UTXO Set</summary>
<div class="faq-answer">
<p>The UTXO set is the full collection of all currently unspent transaction outputs on Bitcoin. It is the network’s working picture of which coins exist and can still be spent. Growing the set with lots of tiny outputs can make validation more resource-heavy over time.</p>
</div>
</details>

<details id="vbyte">
<summary>vByte</summary>
<div class="faq-answer">
<p>A vByte (virtual byte) measures the size of an on-chain transaction for fee calculation. On-chain <a href="#transaction-fee">fees</a> are typically quoted as sats per vByte.</p>
</div>
</details>

<details id="watch-only-wallet">
<summary>Watch-Only Wallet</summary>
<div class="faq-answer">
<p>A watch-only wallet can track balances and transactions for certain <a href="#address">addresses</a> or an <a href="#xpub">xPub</a>, but cannot spend funds because it has no <a href="#private-key">private keys</a>. It’s useful for monitoring savings without exposing keys to a phone or computer.</p>
</div>
</details>

<details id="white-paper">
<summary>White Paper</summary>
<div class="faq-answer">
<p>The Bitcoin white paper is the nine-page document published by <a href="#satoshi-nakamoto">Satoshi Nakamoto</a> on 31 October 2008, titled <i>Bitcoin: A Peer-to-Peer Electronic Cash System</i>. It introduced the design for a decentralized digital cash system without trusted middlemen and launched the project that became Bitcoin.</p>
</div>
</details>

<details id="witness-data">
<summary>Witness Data</summary>
<div class="faq-answer">
<p>Witness data is the signature and related proof data that shows a spender is authorized to move bitcoin. <a href="#segwit">SegWit</a> moved this data into a separate structure, fixing transaction malleability and allowing more efficient use of <a href="#block-weight">block weight</a>.</p>
</div>
</details>

<details id="xpub">
<summary>xPub</summary>
<div class="faq-answer">
<p>An xPub (extended public key) can generate many public receiving <a href="#address">addresses</a> without exposing the matching <a href="#private-key">private keys</a>. It’s commonly used for <a href="#watch-only-wallet">watch-only</a> wallets and accounting, but should still be handled carefully because it reveals transaction history linked to that account.</p>
</div>
</details>

<details id="zap">
<summary>Zap</summary>
<div class="faq-answer">
<p>A zap is a small <a href="#lightning-network">Lightning</a> payment, often used as a tip on social apps built on <a target="_blank" href="https://nostr.how/en/get-started">Nostr</a>. It’s one of the simplest everyday examples of bitcoin moving instantly as money rather than only as a long-term savings asset.</p>
</div>
</details>

</div>
