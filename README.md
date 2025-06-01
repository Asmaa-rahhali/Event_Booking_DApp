<h1>Event Booking DApp</h1>

<p>Une application décentralisée (DApp) permettant la réservation d'événements sur la blockchain Ethereum locale via Hardhat. Elle permet aux utilisateurs de consulter des événements et de réserver leur place via MetaMask.</p>

<hr>

<h2>Fonctionnalités</h2>
<ul>
  <li>Connexion via MetaMask</li>
  <li>Affichage dynamique de la liste des événements</li>
  <li>Réservation directe depuis l'interface</li>
  <li>Empêche les doubles réservations et respecte les capacités</li>
</ul>

<hr>

<h2>Technologies utilisées</h2>
<ul>
  <li><strong>Solidity</strong> : contrat intelligent <code>EventBooking.sol</code></li>
  <li><strong>Hardhat</strong> : environnement de développement Ethereum local</li>
  <li><strong>Ethers.js</strong> : communication entre le frontend et la blockchain</li>
  <li><strong>React.js</strong> : interface utilisateur</li>
  <li><strong>MetaMask</strong> : wallet pour l'utilisateur</li>
</ul>

<hr>

<h2>Installation</h2>
<ol>
  <li><strong>Cloner le projet</strong><br>
  <code>git clone https://github.com/Asmaa-rahhali/Event_Booking_DApp.git</code><br>
  <code>cd Event_Booking_DApp</code></li>

  <li><strong>Installer les dépendances</strong><br>
  <code>npm install</code><br>
  <code>cd client</code><br>
  <code>npm install</code></li>

  <li><strong>Lancer le réseau Hardhat</strong><br>
  <code>npx hardhat node</code></li>

  <li><strong>Déployer le contrat</strong><br>
  <code>npx hardhat run scripts/deploy.js --network localhost</code></li>

  <li><strong>Mettre à jour l’adresse du contrat dans</strong> <code>web3Utils.js</code><br>
  <code>const RAW_CONTRACT_ADDRESS = "adresse_obtenue_au_deploiement";</code></li>

  <li><strong>Lancer le frontend React</strong><br>
  <code>cd client</code><br>
  <code>npm start</code></li>
</ol>

<hr>

<h2>Utilisation</h2>
<ol>
  <li>Ouvrir <a href="http://localhost:3000">http://localhost:3000</a></li>
  <li>Se connecter via MetaMask (réseau Hardhat)</li>
  <li>Réserver une place dans un événement</li>
</ol>

<hr>
<h2>Objectif pédagogique</h2>
<p>Comprendre le fonctionnement d’un smart contract, l’interfacer avec une application web (React + ethers.js), et tester l’intégration Web3 avec MetaMask et Hardhat.</p>
