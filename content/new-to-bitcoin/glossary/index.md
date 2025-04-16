+++
date = '2025-03-06T19:54:53-05:00'
draft = false
underConstruction = false
title = 'Glossary'
+++

<div class="article">
  <h1 style="text-align:center">
    Glossary of Bitcoin Terms
  </h1>

<br>

  <h2 style="text-align:center">
    Here are many words and phrases you'll hear in the world of Bitcoin, and what they each mean.
  </h2>

  <h3 style="text-align:center">
    If you can't find what you're looking for, <a href="https://www.bitcoinchatt.org/contact">let us know</a>, and we'll add it to this list!
  </h3>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="address">
        Address
      </h3>
    </summary>
    A Bitcoin address is a unique code used for receiving bitcoin on-chain. It looks like a long string of letters and numbers, and is generated from your <a href="#public-key">public key</a>, to add a layer of privacy to your bitcoin transactions. For example: <b>bc1qnn35dt7vr4s7yxdpytknjxx5u66ex8033uk797</b>
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="ark-protocol">
        Ark Protocol
      </h3>
    </summary>
    The Ark Protocol is an in-development additional layer on the Bitcoin <a href="#timechain">Timechain</a> that aims to scale bitcoin usage by pooling users’ <a href="#utxo">UTXOs</a> into shared off-chain transactions, managed by a <a href="#node">node</a>-runner of your choice, who has no power over your funds. As of early 2025, it’s still being tested, but it promises to blend speed, privacy, and compatibility with other second layer solutions like the <a href="#lightning-network">Lightning Network</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="blind-signatures">
        Blind Signatures
      </h3>
    </summary>
    Invented by David Chaum in the 1980s, blind signatures are a <a href="#cryptography">cryptographic</a> technique for signing messages without seeing their contents. Think of it like signing a sealed envelope, so that digital transactions can be made while remaining private. In systems like <a href="#ecash">eCash</a> built on Bitcoin, payments can be anonymous because the transaction details are hidden from the signer, while the transaction's validity can still be verified.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="block">
        Block
      </h3>
    </summary>
    A block is a collection of Bitcoin transactions bundled together, like a single page in a massively-copied, permanent digital ledger, added to the <a href="#timechain">Timechain</a> roughly every 10 minutes by <a href="#mining">miners</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="blockchain">
        Blockchain
      </h3>
    </summary>
    <i>See <a href="#timechain">Timechain</a>.</i>
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="block-height">
        Block Height
      </h3>
    </summary>
    The block height refers to the total number of <a href="#block">blocks</a> in the <a href="#timechain">Timechain</a>, counting from the very first one (Block 0, known as <a target="_blank" href="https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f">the Genesis Block</a>), up to the latest. Each block marks a fixed point in time and contains an unalterable record of transactions and other data, so the block height is often used to verifiably record when a recent historical event occurred (for example, the first Bitcoin Chattanooga meetup began at block 703083).
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="block-reward">
        Block Reward
      </h3>
    </summary>
    The block reward is the new bitcoin that <a href="#mining">miners</a> earn after successfully proving that they found a correct large number through energy expenditure (see <a href="#nonce">Nonce</a> and <a href="#proof-of-work">Proof of Work</a>), and when they add a new <a href="#block">block</a> to the <a href="#timechain">Timechain</a>. From January 2009 to November 2012, the reward of new bitcoin for each block was 50 bitcoin; from November 2012 to July 2016, the reward was 25 bitcoin; from July 2016 to May 2020, the reward was 12.5 bitcoin; from May 2020 to April 2024, the reward was 6.25 bitcoin; and from April 2024 to the present, the reward is 3.125 bitcoin with every new block, which are added approximately every 10 minutes. This 4-year "<a href="#halving">halving</a>" pattern will continue until roughly the year 2140, when the last <a href="#satoshi">satoshi</a> will be mined.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="coinbase">
        Coinbase
      </h3>
    </summary>
    The coinbase is the first transaction in every <a href="#block">block</a>. It includes the new bitcoin awarded to the <a href="#mining">miners</a>, as well as the <a href="#transaction-fee">fees</a> attached to every on-chain transaction. <b>Note:</b> this coinbase is <i>not</i> the same as the popular exchange by the same name; the exchange got its name from this initial block transaction.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="cold-storage">
        Cold Storage
      </h3>
    </summary>
    "Cold storage" refers to keeping your bitcoin in a <a href="#hardware-wallet">hardware wallet</a> (often called a "signing device") with <a href="#private-key">private keys</a> that are not only controlled by you, but have also never touched the internet. This makes it impossible for hackers to access your funds without obtaining physical access to your signing device.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="consensus">
        Consensus
      </h3>
    </summary>
    Consensus is the agreement that Bitcoin <a href="#node">nodes</a> reach globally, approximately every 10 minutes, on the current state of the <a href="#timechain">Timechain</a>, while continuously enforcing Bitcoin’s rules. It ensures everyone’s copy of the ledger matches precisely, without needing to rely on a central coordinator.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="cryptocurrency">
        Cryptocurrency
      </h3>
    </summary>
    Cryptocurrency is a general classification of digital assets that rely on <a href="#cryptography">cryptography</a> for security. Many place Bitcoin in this category, along with literally <i>millions</i> of other digital tokens, which is technically accurate. However, due to the centralized and unethical natures of nearly <a href="#shitcoin">all other cryptocurrencies</a>, many (including us at Bitcoin Chattanooga) prefer to separate Bitcoin as a class of its own.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="cryptography">
        Cryptography
      </h3>
    </summary>
    Cryptography is a field of mathematics—like arithmetic, algebra, calculus, and others—in which one-way functions can be created. These are easy to verify when all the variables are known, but nearly impossible to solve when any variables are unknown, except via guess-and-check. This means that any information—from "Hello, world" to your Bitcoin <a href="#private-key">private key</a>—can be encoded and protected in such a way that it's nearly impossible for it to be decoded.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="custodial-wallet">
        Custodial Wallet
      </h3>
    </summary>
    Wallets in general are tools for receiving, storing, and spending your bitcoin. <i>Custodial</i> wallets are typically apps or websites that are controlled by third parties, such as exchanges, which hold your <a href="#private-key">private key</a> for you. While this means you're much less likely to lose your private key through damage or neglect, custodial wallets require you to trust them to keep your bitcoin safe, and they're still potentially vulnerable to hackers, rogue employees, and government confiscation.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="dca">
        DCA
      </h3>
    </summary>
    "DCA" is an acronym that means "<b>D</b>ollar <b>C</b>ost <b>A</b>veraging", which is a simple strategy for easing into bitcoin (or any other asset) in a way that smooths out any potential volatility. The key to Dollar Cost Averaging is choosing an amount of dollars that you can afford to save long-term, and an interval in which you plan to buy that amount of bitcoin (for example, $100 every week). This will cause you to buy regularly regardless of the price; sometimes you'll buy high and sometimes you'll buy low, but over time you will accumulate more bitcoin than if you had tried to time the highs and lows, which most people can't do, as <a target="_blank" href="https://canyoubeatbitcoin.com/">this game</a> demonstrates.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="decentralization">
        Decentralization
      </h3>
    </summary>
    Decentralization means no single individual or group controls the software, but it's controlled by <i>everyone</i> who runs it, making the decentralized network nearly impossible to shut down, destroy, or corrupt. There are many who claim that other <a href="#cryptocurrency">cryptocurrencies</a> are decentralized, and that their "<a href="#timechain">blockchain</a>" makes that possible, but that's not true. Blockchains are merely massively-copied ledgers that play no role in decentralization or centralization. Other than Bitcoin, all cryptocurrencies are centrally controlled.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="difficulty-adjustment">
        Difficulty Adjustment
      </h3>
    </summary>
    Every 2016 <a href="#block">blocks</a>, or approximately every two weeks, Bitcoin’s protocol automatically checks the average time it took for each of those blocks to be found, and then adjusts the level of difficulty for the <a href="#mining">miners</a> to find the next set of 2016 blocks accordingly. For example, if the average time for finding each of the previous 2016 blocks was 9 minutes, then Bitcoin's protocol would make it more difficult for the miners to find blocks for the next two weeks; if, however, the average time for finding each of the previous 2016 blocks was 11 minutes, then Bitcoin's protocol would make the next two weeks' of blocks <i>less</i> difficult to find. This keeps the average block time to around 10 minutes, and the issuance rate of new bitcoin close to its initial schedule, regardless of how many miners join the network. Compare that to gold, which grows in supply when new miners start digging as a result of rising gold prices, and that increased supply leads to a return to lower prices.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="dont-trust-verify">
        Don’t Trust, Verify
      </h3>
    </summary>
    “Don’t Trust, Verify” is a bit of wisdom born from Bitcoin's <a href="#open-source">open source</a> ethos, which can be applied to other situations outside the realm of Bitcoin. It's about taking personal responsibility, and not outsourcing your thinking to someone else.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="double-spending">
        Double-Spending
      </h3>
    </summary>
    Double spending is the problem that all attempts at digital currencies before Bitcoin faced: it's the idea that since the money is digital, it can't be scarce, so Alice can theoretically send the same token to Bob that she just sent to Charlie. <a href="#satoshi-nakamoto">Satoshi Nakamoto</a> solved this problem when he introduced Bitcoin as a <a href="#proof-of-work">proof-of-work</a>-based system with a shared ledger, the <a href="#timechain">Timechain</a>, enforced by a network of <a href="#node">nodes</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="ecash">
        eCash
      </h3>
    </summary>
    Created by cryptographer David Chaum in the 1980s, eCash is a method for sending digital money privately using a special technique called <a href="#blind-signatures">blind signatures</a>. Today, eCash used as an extra layer on top of Bitcoin, in systems like Cashu, letting people make anonymous payments along with Bitcoin’s trustless nature and strong security.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="epoch">
        Epoch
      </h3>
    </summary>
    The period of time between <a href="#halving">halvings</a>. Bitcoin's first epoch began on 3 January 2009, when Bitcoin was started, and ended at the first halving on 28 November 2012. It was defined by 50 new bitcoin being awarded to the <a href="#mining">miners</a> for each <a href="#block">block</a> they found. Today, we are in the fifth epoch, characterized by a <a href="#block-reward">block reward</a> of 3.125 new bitcoin being awarded to the miners for each block (in addition to <a href="#transaction-fee">transaction fees</a>).
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="fomo">
        FOMO
      </h3>
    </summary>
    "FOMO" is an acronym that means "<b>F</b>ear <b>O</b>f <b>M</b>issing <b>O</b>ut". It usually strikes when the price of Bitcoin or any other asset dramatically increases, and you feel the urge to jump on the bandwagon before the price reaches its peak. This is almost never a wise strategy, since it's so emotionally-driven, so it's best to not let it control you. Long before the price does anything dramatic—whether up or down—try to have a plan in place to <a href="#dca">DCA</a> into bitcoin, so your emotions are less likely to take over.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="fud">
        FUD
      </h3>
    </summary>
    FUD is an acronym that stands for "<b>F</b>ear, <b>U</b>ncertainty, and <b>D</b>oubt". It refers to information that's meant to cast a negative light on Bitcoin or anything else, even if that information is one-sided, faulty, or just false.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="get-off-zero">
        Get Off Zero
      </h3>
    </summary>
    “Get Off Zero” is a friendly nudge to stop having zero bitcoin and acquire your first <a href="#satoshi">sats</a>, and kickstart your journey into this new form of money.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="get-on-zero">
        Get On Zero
      </h3>
    </summary>
    "Get <i>On</i> Zero" is an inversion of the phrase "<a href="#get-off-zero">Get <i>Off</i> Zero</a>", and refers to the goal of owning no fiat and being 100% allocated to bitcoin. The way those who choose to 'Get on Zero' see it, if they have one foot in a lifeboat and the other on the Titanic, are they really safe from the sinking fiat system?
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="halving">
        Halving
      </h3>
    </summary>
    Halving events happen ever 210,000 <a href="#block">blocks</a>, or approximately every 4 years, and is when the rate of issuance for new bitcoin with each block is cut in half. For example, when Bitcoin first started, 50 new bitcoin were being issued to the <a href="#mining">miners</a> for every new block they found. At block 210,000 (since the first block, the Genesis Block, counts as block 0), that reward was automatically cut in half, to 25 new bitcoin for each of the next 210,000 blocks. This happened again at block 420,000, when the reward was halved to 12.5 bitcoin, at block 630,000, when it was halved to 6.25 bitcoin, and again at block 840,000, when the amount dropped to 3.125 bitcoin. This will continue until just 1 <a href="#satoshi">satoshi</a> (or 0.00000001 of a bitcoin) is being mined with every block. After 210,000 blocks of that, no new bitcoin will <i>ever</i> be mined, and just under 21 million bitcoin will exist.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hfsp">
      HFSP
      </h3>
    </summary>
    "HFSP" stands for "<b>H</b>ave <b>F</b>un <b>S</b>taying <b>P</b>oor", and is a provocative phrase that Bitcoiners sometimes use when they've been arguing with someone about Bitcoin or fundamental economic principles, and they realize that they will never be able to get through to the <a href="#nocoiner">nocoiner</a> they're arguing with. While certainly rude, it's a way of ending the conversation with conviction and a promise that their incorrect assertions will turn into tangible poverty, unless they humble themselves enough to study Bitcoin. This song gives many examples of times when a Bitcoiner might use this phrase:

<br>

<iframe width="700" height="394" src="https://www.youtube.com/embed/k8ukx0LKJRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hard-fork">
        Fork, Hard
      </h3>
    </summary>
    A hard fork is a change to Bitcoin's protocol in such a way that new rules are added, making the new version incompatible with the old one. For this reason, hard forks are typically avoided as much as possible.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="soft-fork">
        Fork, Soft
      </h3>
    </summary>
    A soft fork is a tightening of Bitcoin's rules, so that the change is optional and still compatible with older versions of the protocol. Unless a radical change is severely needed, this is the most common way for Bitcoin to upgrade.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hash">
        Hash
      </h3>
    </summary>
    A hash is a fixed-length string of seemingly random letters and numbers, created by a one-way <a href="#cryptography">cryptographic</a> function that turns any data into a unique, irreversible code. In Bitcoin, <a href="#mining">miners</a> use the <a href="#sha-256">SHA-256</a> hash function while aiming for a hash below a specific target in a process called <a href="#proof-of-work">Proof of Work</a>. For bitcoin wallets, a hash of the <a href="#public-key">public key</a> forms part of an <a href="#address">address</a>, linking transactions to the wallet while keeping the <a href="#private-key">private key</a> secure, and using the private key to sign for transactions.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hashrate">
        Hashrate
      </h3>
    </summary>
    Hashrate refers to the estimated number of <a href="#hash">hashes</a> that <a href="#mining">miners</a> make when guessing the correct answer—known as a <a href="#nonce">nonce</a>—to a <a href="#cryptography">cryptographic</a> function. The higher an individual miner's hashrate is, the more likely they are to find a new <a href="#block">block</a> and claim the <a href="#block-reward">block reward</a>. The higher the network's collective hashrate is, the more difficult it will be for an attacker to cheat the system by <a href="#double-spending">double-spending</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hodl">
        Hodl
      </h3>
    </summary>
    "Hodl" was originally a typo made on <a target="_blank" href="https://bitcointalk.org/index.php?topic=375643.0">a message board post</a>, when the author meant to type "hold". It has since become a meme among Bitcoiners, as a way of expressing one's conviction for Bitcoin, and dedication to resisting the urge to sell for more fiat. Since the initial blog post, some have turned it into an acronym for "<b>H</b>old <b>O</b>n for <b>D</b>ear <b>L</b>ife", and while that effectively communicates the general meaning of the term, the acronym came after the typo.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="hot-wallet">
        Hot Wallet
      </h3>
    </summary>
    Hot wallets are applications on phones or other devices that hold your <a href="#private-key">private key</a> and are exposed to an internet connection. Typically, such wallets encrypt your private key, making it much more difficult for someone to access it via hacking, but there's still a chance—however small—that your private key could become compromised, so while hot wallets are more convenient than <a href="#cold-storage">cold storage</a>, they aren't quite as secure.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="kyc">
        KYC
      </h3>
    </summary>
    "KYC" stands for "Know Your Customer", and represents laws, regulations, and policies that require centralized agencies, like Bitcoin exchanges, to collect your personally identifying data before you can use their services. The claim is that KYC mitigates against potential money laundering and other illicit activity, but in reality it helps very little with that, and creates honeypots for identity thieves to steal your personal information. If you'd rather not comply with KYC laws, there are many methods for acquiring bitcoin without giving up your personal data, including working for it, selling things for it, or buying it on KYC-free exchanges like <a target="_blank" href="https://hodlhodl.com/join/QPXV">Hodl Hodl</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="lightning-network">
        Lightning Network
      </h3>
    </summary>
    The Lightning Network is an additional layer on top of Bitcoin's <a href="#timechain">Timechain</a>, and currently the most popular second layer payment network. It allows for instant and free or almost-free transactions while leveraging the security found on Bitcoin base layer. The Lightning Network works by Bitcoin users creating on-chain transactions that open channels with other users, with different amounts of bitcoin locked up on each side of the channels. For example, if Alice has a channel with Bob, and Bob has a channel with Charlie, Alice can send Charlie a payment instantly over the Lightning Network by routing it through Bob. The amount she would send, plus any small fee that Bob might charge, would move from her side of the channel with Bob to Bob's side, and the final amount that Charlie is expecting to receive will then move from Bob's side of the channel with Charlie to Charlie's side. This allows for fast, secure, and cheap final settlement between any two parties connected to the network.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="liquid-network">
        Liquid Network
      </h3>
    </summary>
    The Liquid Network is a separate chain that's linked to Bitcoin's <a href="#timechain">Timechain</a>, so it's often referred to as a "sidechain". It's often faster, cheaper, and more private than using the Timechain, but it's run by a federation of Bitcoin businesses, so it requires a small amount of trust. Fortunately, all the businesses in the Liquid Federation are incentivized to keep your transactions safe and private, which is why the amount of trust required is negligible.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="mempool">
        Mempool
      </h3>
    </summary>
    The mempool is a list of pending on-chain transactions in a <a href="#node">node</a>, sorted according to the rate of <a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a> for each <a href="#transaction-fee">transaction fee</a>. When a new on-chain transaction is made, it's broadcast to all the nodes, which then store it in their own mempool until it's confirmed in a <a href="#block">block</a>. Not all nodes are "hearing" all the same broadcasted transactions, though, so it's important to remember that there is no single mempool in Bitcoin: there are at least tens of thousands of them, each existing on a separate node.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="mining">
        Mining
      </h3>
    </summary>
    Mining is the process of rapidly guessing many extremely large numbers, and running them through a hashing algorithm, in order to find a number, known as a "<a href="#nonce">nonce</a>", that's small enough to solve a <a href="#cryptography">cryptographic</a> puzzle. In Bitcoin, the first person to do this and prove to the network that they found this nonce gets to add a new <a href="#block">block</a> with transactions in it to the <a href="#timechain">Timechain</a>, receives the award of new bitcoin associated with that block, and receives the <a href="#transaction-fee">fees</a> that were included with each transaction. This is an energy-intensive process, but since Bitcoin is so valuable, miners are incentivized to seek out the cheapest (which is also the cleanest) sources of energy, naturally subsidizing the development of cleaner and more efficient forms of energy generation.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="newcoiner">
        Newcoiner
      </h3>
    </summary>
    A "newcoiner" is someone who has recently been orange-pilled and barely started <a href="#stack-sats">stacking sats</a>. It's shorter and easier to say than "new Bitcoin user" or "Bitcoin newb", so the term has caught on for some Bitcoiners.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="nocoiner">
        Nocoiner
      </h3>
    </summary>
    A "nocoiner" is someone who not only owns no bitcoin, but is also opposed to Bitcoin and everything it was created to do. While someone who simply owns no bitcoin but has a neutral or positive opinion about it might be considered a "<a href="#precoiner">precoiner</a>", a nocoiner will often spread <a href="#fud">FUD</a> about Bitcoin, and make predictions of its demise.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="node">
        Node
      </h3>
    </summary>
    A node is any computer that's running and enforcing Bitcoin’s protocol, holding a full copy of its <a href="#timechain">Timechain</a>, and verifying all transactions to keep the network honest and <a href="#decentralization">decentralized</a>. Anyone can run a node, and those who do have the most control over Bitcoin, since no upgrade happens without their say-so.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="nonce">
        Nonce
      </h3>
    </summary>
    A nonce is a number that <a href="#mining">miners</a> run through a hashing algorithm called <a href="#sha-256">SHA-256</a>. They rapidly change the nonce and check the output of the <a href="#hash">hash</a> function until the result is a number that's smaller than a target set by Bitcoin's rules. When they find this hash, they get to add a new <a href="#block">block</a> to Bitcoin's <a href="#timechain">Timechain</a>, and collect the <a href="#transaction-fee">transaction fees</a> and new bitcoin as a reward for defending the network with real-world energy.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="noncustodial-wallet">
        Noncustodial Wallet
      </h3>
    </summary>
    A noncustodial wallet can be an app or device that stores your <a href="#private-key">private key</a>, so you don't have to trust anyone to custody it for you. On one hand, it allows you to be completely in charge of your wealth; on the other hand, it requires you to be fully responsible for taking custody of your own funds, since if you lose your private key, your money will be lost, and you will <i>never</i> be able to recover it.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="not-your-keys-not-your-bitcoin">
        Not Your Keys, Not Your Bitcoin
      </h3>
    </summary>
    “Not Your Keys, Not Your Bitcoin” is a mantra that grew in popularity after many exchanges were hacked, seized by governments, or compromised by rogue employees. Put another way, this phrase is saying that if someone else is holding your <a href="#private-key">private keys</a> for you, the bitcoin you think you have is not really yours; all you actually have is an IOU from the custodian, which they may or may not honor.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="open-source">
        Open Source
      </h3>
    </summary>
    Open source refers to the accessibility of the code for any kind of software. While closed source software can only be inspected by insiders with the necessary permissions, open source software, like Bitcoin, can be seen, inspected, and verified by anyone, and anyone can propose changes to the code, which will only go into effect when the whole community of developers agrees to it. The code can even be copied and pasted in one's own repository, where they can change it as they please.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="precoiner">
        Precoiner
      </h3>
    </summary>
    A "precoiner" is someone who has either not heard about Bitcoin yet, but would probably like it once they do, or they know what Bitcoin is, they have a favorable opinion about it, but they haven't acquired any bitcoin yet.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="private-key">
        Private Key
      </h3>
    </summary>
    Your private key is a random set of 12 or 24 words (depending on the wallet software) that unlock full access to your bitcoin. As the name implies, you must <i>always</i> keep it private, since, for all intents and purposes, <b>your private key <i>is</i> your bitcoin!</b>
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="proof-of-work">
        Proof of Work
      </h3>
    </summary>
    Proof of Work refers to the process of <a href="#mining">miners</a> searching for a <a href="#nonce">nonce</a> that leads to a valid <a href="#hash">hash</a>, in order to add a new <a href="#block">block</a> to Bitcoin's <a href="#timechain">Timechain</a>. Since the only way the correct nonce can be found is through a massive effort of rapidly guessing and checking, the discovery of the correct nonce serves as mathematical proof that real, unforgeable work was done.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="public-key">
        Public Key
      </h3>
    </summary>
    A public key is a long code of letters and numbers, derived from your <a href="#private-key">private key</a>, which others can use to send you bitcoin. It's safe to share since no one can reverse-engineer your private key from it, but it's not very private, since anyone with your public key can see all the bitcoin associated with it. That's why it's recommended that you use a receiving <a href="#address">address</a> instead, for better privacy, and never reuse the same address from one transaction to another.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="satoshi">
        Satoshi/Sat
      </h3>
    </summary>
    Named after Bitcoin's mysterious creator, a satoshi, or just “sat”, is the smallest piece of a bitcoin, a one-hundred-millionth, or 0.00000001 of a full bitcoin. Instead of trying to keep track of all those zeros after the decimal point, many have found that it's easier to just use sats.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="satoshi-nakamoto">
        Satoshi Nakamoto
      </h3>
    </summary>
    "Satoshi Nakamoto" is the pseudonym of Bitcoin's creator. He/She/They/It appeared on the Cypherpunk mailing list on 31 October 2008, started Bitcoin on 3 January 2009, and then disappeared and hasn't been heard from since 26 April 2011. To this day, no one knows who Satoshi really was, and analysis suggests that the roughly 1 million bitcoin believed to have been <a href="#mining">mined</a> by Satoshi have remained unspent on the <a href="#timechain">Timechain</a>. Whoever they were, they have either passed away, lost their <a href="#private-key">private keys</a>, and/or simply gifted the world with the most important technology since fire, and asked for nothing in return.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="seed-phrase">
        Seed Phrase
      </h3>
    </summary>
    A seed phrase is a set of 12 or 24 random, common English words that act as your <a href="#private-key">private key</a>. These should always be written and stored somewhere secret, safe, and <i>offline</i> as a backup, in case your device ever fails, you get a new device, or you can't access your bitcoin for any other reason.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="sha-256">
        SHA-256
      </h3>
    </summary>
    SHA-256 (or Secure Hash Algorithm-256) is a mathematical formula used in Bitcoin to create a unique, fixed-length code from any data, such as a transaction, and use it like a digital fingerprint for verification. In Bitcoin, SHA-256 helps verify transactions and <a href="#mining">mine</a> new coins, keeping the network secure, transparent, and reliable. It’s a key building block for Bitcoin’s security.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="shitcoin">
        Shitcoin
      </h3>
    </summary>
    "Shitcoin" refers to the quality and real value of other <a href="#cryptocurrency">cryptocurrencies</a>. Since all cryptocurrencies besides Bitcoin are centralized, rent-seeking grifts at best, and outright scams at worst, most Bitcoiners believe that such a title is neither undeserved, nor an exaggeration.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="smart-contract">
        Smart Contract
      </h3>
    </summary>
    Smart contracts are self-executing agreements written as code on Bitcoin's <a href="#timechain">Timechain</a>. They automatically carry out actions (such as transferring funds) when specific conditions are met, without needing any middlemen to enforce them. In Bitcoin, smart contracts enable complex transactions, ensuring trust and security while reducing costs and delays.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="stack-sats">
        Stack Sats
      </h3>
    </summary>
    "Stack sats" is a fun way of saying "accumulate more bitcoin", especially in a slow and steady way, regardless of price action. It's often said following the reminder to "stay humble", which together serve as a reminder to not get ahead of oneself or overcomplicate the road to prosperity.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="timechain">
        Timechain
      </h3>
    </summary>
    The Timechain—commonly referred to as a "blockchain"—is the massively-copied digital ledger of all bitcoin transactions since Bitcoin began on 3 January 2009. Each <a href="#block">block</a> of transactions serves as mathematical proof that those transactions occurred at those times, and that each block was found at that point in time. Because of this, Bitcoin's Timechain also serves as an immutable time-keeping device, which is why we focus on Bitcoin Chattanooga—which started as a meetup on 1 October 2021—and say that it started at <a target="_blank" href="https://mempool.space/block/00000000000000000004730cacd16909b9e2323eeceab1305c31edae2af07537">block 703,083</a>.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="transaction-fee">
        Transaction Fee
      </h3>
    </summary>
    Transaction fees are small payments you make to ensure your transaction is completed securely. Fees exist on-chain, as well as on the <a href="#lightning-network">Lightning</a> and <a href="#liquid-network">Liquid</a> networks. On-chain fees are essentially tips for the <a href="#mining">miners</a> to prioritize your transaction over others, so you can set the rate of the number of <a href="#satoshi">sats</a> per <a href="#vbyte">vByte</a> you're willing to pay, based on how quickly you want the transaction to be confirmed, and how full the <a href="#mempool">mempool</a> is with pending transactions. Fees on the Liquid Network work similarly, though due to a higher frequency of <a href="#block">blocks</a> and overall lower popularity than the base chain, Liquid fees tend to be very small. And on Lightning, fees are dependent on the "hops" a transaction needs to take from the sender to the receiver, and how much each one charges to route the payment.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="utxo">
        UTXO
      </h3>
    </summary>
    "UTXO" is short for "Unspent Transaction Output", which is a fancy way of saying it's change from previous transactions that hasn't been spent yet. UTXOs are essentially bundles of <a href="#satoshi">sats</a> in any denomination, so Bitcoin's ledger can easily account for all bitcoin in the economy, without using too much data to account for each of the <i>quadrillions</i> of sats that will ever exist. The dollar system, for example, has 12 different denominations for its UTXOs: 1¢, 5¢, 10¢, 25¢, 50¢, $1, $2, $5, $10, $20, $50, and $100. In contrast, Bitcoin can have <i>any number</i> of UTXOs made of <i>any</i> amount (as long as the number and amount are within Bitcoin's limit of 21 million coins). So when you send an on-chain transaction, you use one or more UTXOs that add up to at least the amount you're trying to send. If there's any extra, it's sent back to you as change, and as a new UTXO. It's important to learn how to manage your UTXOs, or else you might find yourself with many—like having a jar of $100 all in pennies—which can get very expensive to transact with, especially in a high-fee environment.
  </details>

<br>

  <details>
    <summary>
      <h3 class="align-left" style="display: inline-block" id="vbyte">
        vByte
      </h3>
    </summary>
    A vByte, or <i>virtual byte</i>, is a measurement of on-chain transaction data that will be included in the <a href="#block">block</a>, minus the signature data. This is how on-chain <a href="#transaction-fee">fees</a> are measured, so keep that in mind when selecting the fee rate when paying on-chain.
  </details>

<br>

</div>
