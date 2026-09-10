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

<details id="blind-signatures">
<summary>Blind Signatures</summary>
<div class="faq-answer">
<p>Invented by David Chaum in the 1980s, blind signatures are a <a href="#cryptography">cryptographic</a> technique for signing a message without seeing its contents—like signing a sealed envelope. In systems like <a href="#ecash">eCash</a> built on Bitcoin, this allows payments that stay private from the signer while remaining verifiable.</p>
</div>
</details>

<details id="block">
<summary>Block</summary>
<div class="faq-answer">
<p>A block is a batch of Bitcoin transactions bundled together—like one page in a massively copied, permanent digital ledger—added to the <a href="#timechain">Timechain</a> roughly every 10 minutes by <a href="#mining">miners</a>.</p>
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

<details id="coinbase">
<summary>Coinbase</summary>
<div class="faq-answer">
<p>The coinbase is the first transaction in every <a href="#block">block</a>. It includes the new bitcoin awarded to <a href="#mining">miners</a> plus the <a href="#transaction-fee">fees</a> from the block’s transactions. <b>Note:</b> this is <i>not</i> the exchange named Coinbase; the exchange took its name from this concept.</p>
</div>
</details>

<details id="cold-storage">
<summary>Cold Storage</summary>
<div class="faq-answer">
<p>Cold storage means keeping your bitcoin in a <a href="#hardware-wallet">hardware wallet</a> (often called a signing device) whose <a href="#private-key">private keys</a> are controlled by you and have never touched the internet. That makes remote hacking of those keys effectively impossible without physical access to the device.</p>
</div>
</details>

<details id="consensus">
<summary>Consensus</summary>
<div class="faq-answer">
<p>Consensus is the agreement Bitcoin <a href="#node">nodes</a> reach—roughly every 10 minutes—on the current state of the <a href="#timechain">Timechain</a> while enforcing Bitcoin’s rules. It keeps everyone’s copy of the ledger in sync without a central coordinator.</p>
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
<p>Cryptography is a branch of mathematics that uses one-way functions: easy to verify when you have the right inputs, extremely hard to reverse when you don’t. That makes it possible to protect information—from a short message to a Bitcoin <a href="#private-key">private key</a>—so it can’t practically be decoded without the secret.</p>
</div>
</details>

<details id="custodial-wallet">
<summary>Custodial Wallet</summary>
<div class="faq-answer">
<p>A custodial wallet is an app or website (often an exchange) that holds your <a href="#private-key">private key</a> for you. It’s convenient and can reduce the risk of you losing a key yourself, but you must trust the custodian. Those services can still be hacked, mismanaged, or pressured by governments.</p>
</div>
</details>

<details id="dca">
<summary>DCA</summary>
<div class="faq-answer">
<p>DCA means <b>Dollar Cost Averaging</b>: buying a fixed dollar amount of bitcoin on a regular schedule (for example, $100 every week), regardless of price. Over time this averages your purchase price and avoids trying to time the market—something most people can’t do consistently. <a target="_blank" href="https://canyoubeatbitcoin.com/">This game</a> is a useful demonstration.</p>
</div>
</details>

<details id="decentralization">
<summary>Decentralization</summary>
<div class="faq-answer">
<p>Decentralization means no single person or group controls the system; everyone who runs the software shares that role, making the network hard to shut down or corrupt. A “blockchain” alone does not make something decentralized. Other than Bitcoin, nearly all <a href="#cryptocurrency">cryptocurrencies</a> are centrally controlled.</p>
</div>
</details>

<details id="difficulty-adjustment">
<summary>Difficulty Adjustment</summary>
<div class="faq-answer">
<p>Every 2,016 <a href="#block">blocks</a> (~two weeks), Bitcoin checks how long those blocks took and adjusts mining difficulty so the average stays near 10 minutes. If blocks were too fast, difficulty rises; if too slow, it falls. That keeps issuance on schedule no matter how many <a href="#mining">miners</a> join or leave.</p>
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

<details id="ecash">
<summary>eCash</summary>
<div class="faq-answer">
<p>Created by cryptographer David Chaum in the 1980s, eCash is a way to send digital money privately using <a href="#blind-signatures">blind signatures</a>. Today, eCash is used as a layer on top of Bitcoin (for example in Cashu), combining private payments with Bitcoin’s security model.</p>
</div>
</details>

<details id="epoch">
<summary>Epoch</summary>
<div class="faq-answer">
<p>An epoch is the period between <a href="#halving">halvings</a>. The first ran from 3 January 2009 to 28 November 2012, with a 50-bitcoin <a href="#block-reward">block reward</a>. We are now in the fifth epoch, with a reward of 3.125 new bitcoin per <a href="#block">block</a> (plus <a href="#transaction-fee">fees</a>).</p>
</div>
</details>

<details id="fomo">
<summary>FOMO</summary>
<div class="faq-answer">
<p>FOMO means <b>Fear Of Missing Out</b>—the urge to buy when price is spiking. It’s usually a poor strategy because it’s emotional. A better approach is a plan to <a href="#dca">DCA</a> into bitcoin before drama hits, so price moves are less likely to control you.</p>
</div>
</details>

<details id="fud">
<summary>FUD</summary>
<div class="faq-answer">
<p>FUD means <b>Fear, Uncertainty, and Doubt</b>—negative information (often one-sided, incomplete, or false) meant to cast Bitcoin or something else in a bad light.</p>
</div>
</details>

<details id="get-off-zero">
<summary>Get Off Zero</summary>
<div class="faq-answer">
<p>“Get Off Zero” means stop having zero bitcoin and acquire your first <a href="#satoshi">sats</a>—the start of using this new form of money.</p>
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
<p>A halving happens every 210,000 <a href="#block">blocks</a> (~every 4 years), when the new-bitcoin reward per block is cut in half. It started at 50, then 25, 12.5, 6.25, and is now 3.125. This continues until only 1 <a href="#satoshi">satoshi</a> is issued per block, and eventually no new bitcoin at all—capping supply at just under 21 million.</p>
</div>
</details>

<details id="hardware-wallet">
<summary>Hardware Wallet</summary>
<div class="faq-answer">
<p>A hardware wallet (also called a signing device) is a physical device that stores your <a href="#private-key">private keys</a> offline and signs transactions without exposing those keys to the internet. It’s the main tool for <a href="#cold-storage">cold storage</a>.</p>
</div>
</details>

<details id="hfsp">
<summary>HFSP</summary>
<div class="faq-answer">
<p>HFSP means <b>Have Fun Staying Poor</b>—a blunt phrase some Bitcoiners use when they conclude a <a href="#nocoiner">nocoiner</a> won’t engage in good faith. It’s rude by design; treat it as internet slang, not a model for conversation.</p>
<iframe width="700" height="394" src="https://www.youtube.com/embed/k8ukx0LKJRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<details id="hodl">
<summary>Hodl</summary>
<div class="faq-answer">
<p>“Hodl” began as a typo for “hold” on a <a target="_blank" href="https://bitcointalk.org/index.php?topic=375643.0">Bitcointalk post</a> and became a meme for long-term conviction—resisting the urge to sell into fiat. Some later treated it as “Hold On for Dear Life,” but the typo came first.</p>
</div>
</details>

<details id="hot-wallet">
<summary>Hot Wallet</summary>
<div class="faq-answer">
<p>A hot wallet is software on a phone or computer that holds your <a href="#private-key">private key</a> while connected to the internet. Keys are usually encrypted, but exposure is higher than <a href="#cold-storage">cold storage</a>. Convenience is higher; security is a bit lower.</p>
</div>
</details>

<details id="kyc">
<summary>KYC</summary>
<div class="faq-answer">
<p>KYC means <b>Know Your Customer</b>—rules that force many exchanges to collect personal data before you can use them. The stated goal is stopping illicit finance; in practice it also creates large data honeypots. Non-KYC options include earning bitcoin, selling goods for it, or using peer-to-peer platforms such as <a target="_blank" href="https://hodlhodl.com/join/QPXV">Hodl Hodl</a>.</p>
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
<p>Liquid is a sidechain linked to Bitcoin’s <a href="#timechain">Timechain</a>. It can be faster, cheaper, and more private for some uses, but it is operated by a federation of businesses, so it requires a small amount of trust—though those operators are strongly incentivized to protect users.</p>
</div>
</details>

<details id="mempool">
<summary>Mempool</summary>
<div class="faq-answer">
<p>A mempool is a <a href="#node">node</a>’s list of pending on-chain transactions, typically ordered by fee rate (<a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a>). There is no single global mempool—each node has its own view of unconfirmed transactions until they land in a <a href="#block">block</a>.</p>
</div>
</details>

<details id="mining">
<summary>Mining</summary>
<div class="faq-answer">
<p>Mining is repeatedly guessing large numbers and hashing them to find a <a href="#nonce">nonce</a> that solves Bitcoin’s puzzle. The first miner to prove a valid solution adds a <a href="#block">block</a> to the <a href="#timechain">Timechain</a> and earns the new bitcoin plus <a href="#transaction-fee">fees</a>. The energy cost is real; competition pushes miners toward the cheapest available power, which is often the least wasted or cleanest.</p>
</div>
</details>

<details id="newcoiner">
<summary>Newcoiner</summary>
<div class="faq-answer">
<p>A newcoiner is someone newly into Bitcoin who has just started <a href="#stack-sats">stacking sats</a>—a shorter label than “Bitcoin beginner.”</p>
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
<p>A noncustodial wallet is an app or device where <i>you</i> hold the <a href="#private-key">private key</a>. You control the funds fully—and you are fully responsible. Lose the key (and backups), and the bitcoin is gone with no recovery desk to call.</p>
</div>
</details>

<details id="not-your-keys-not-your-bitcoin">
<summary>Not Your Keys, Not Your Bitcoin</summary>
<div class="faq-answer">
<p>This mantra means: if someone else holds your <a href="#private-key">private keys</a>, you don’t truly hold the bitcoin—you hold an IOU. Exchange hacks, seizures, and failures made the phrase stick.</p>
</div>
</details>

<details id="open-source">
<summary>Open Source</summary>
<div class="faq-answer">
<p>Open source software (including Bitcoin) can be inspected by anyone. Changes are proposed publicly and only take effect when the community of users and developers adopts them. Closed source code can only be audited by insiders.</p>
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
<p>Proof of Work is the process of <a href="#mining">miners</a> searching for a <a href="#nonce">nonce</a> that produces a valid <a href="#hash">hash</a> so a new <a href="#block">block</a> can be added to the <a href="#timechain">Timechain</a>. Finding it is expensive; verifying it is cheap—so it proves real work was done.</p>
</div>
</details>

<details id="public-key">
<summary>Public Key</summary>
<div class="faq-answer">
<p>A public key is derived from your <a href="#private-key">private key</a> and can be used to receive bitcoin. It can’t be reversed into the private key, but reusing it hurts privacy. Prefer a fresh receiving <a href="#address">address</a> for each payment when possible.</p>
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

<details id="sha-256">
<summary>SHA-256</summary>
<div class="faq-answer">
<p>SHA-256 (Secure Hash Algorithm 256-bit) is the main <a href="#hash">hash</a> function Bitcoin uses to fingerprint data and secure <a href="#mining">mining</a>. It’s a core building block of Bitcoin’s security model.</p>
</div>
</details>

<details id="shitcoin">
<summary>Shitcoin</summary>
<div class="faq-answer">
<p>Among Bitcoiners, “shitcoin” is a blunt term for other <a href="#cryptocurrency">cryptocurrencies</a>—viewed as centralized, low-integrity, or scammy compared with Bitcoin.</p>
</div>
</details>

<details id="smart-contract">
<summary>Smart Contract</summary>
<div class="faq-answer">
<p>Smart contracts are rules written in code that can move funds or take other actions automatically when conditions are met, without a middleman. Bitcoin supports scripting for this kind of programmable spending under its security model.</p>
</div>
</details>

<details id="stack-sats">
<summary>Stack Sats</summary>
<div class="faq-answer">
<p>“Stack sats” means keep accumulating bitcoin steadily—especially via ongoing buys—without obsessing over short-term price. Often paired with “stay humble.”</p>
</div>
</details>

<details id="timechain">
<summary>Timechain</summary>
<div class="faq-answer">
<p>The Timechain—commonly called a “blockchain”—is the shared ledger of all on-chain bitcoin transactions since 3 January 2009. Each <a href="#block">block</a> proves a set of transactions and a moment in time. Bitcoin Chattanooga’s first meetup is marked at <a target="_blank" href="https://mempool.space/block/00000000000000000004730cacd16909b9e2323eeceab1305c31edae2af07537">block 703,083</a>.</p>
</div>
</details>

<details id="transaction-fee">
<summary>Transaction Fee</summary>
<div class="faq-answer">
<p>Fees pay for inclusion and routing of your payment. On-chain, you choose a rate in <a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a>; higher rates clear faster when the <a href="#mempool">mempool</a> is busy. <a href="#liquid-network">Liquid</a> fees are usually small; <a href="#lightning-network">Lightning</a> fees depend on the path and each hop’s charge.</p>
</div>
</details>

<details id="utxo">
<summary>UTXO</summary>
<div class="faq-answer">
<p>UTXO means <b>Unspent Transaction Output</b>—chunks of bitcoin from past payments that haven’t been spent yet. When you send on-chain, you spend one or more UTXOs and may receive change as a new UTXO. Managing them matters: many tiny UTXOs can make future spends expensive when fees are high.</p>
</div>
</details>

<details id="vbyte">
<summary>vByte</summary>
<div class="faq-answer">
<p>A vByte (virtual byte) measures the size of an on-chain transaction for fee calculation. On-chain <a href="#transaction-fee">fees</a> are typically quoted as sats per vByte.</p>
</div>
</details>

</div>
