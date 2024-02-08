import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getDomainKeySync, NameRegistryState } from "@bonfida/spl-name-service";

// const publicKey = new PublicKey("9hci7oscsR4ggu78ejcVYMLtP8XzQHoohmhb9rSgbHhG");
//const publicKey = new PublicKey("9hci7oscsR4ggu78ejcVYMLtP8XzQHoohmhb9rSgbHhG");

const domainName = "toly.sol"; // With or without the .sol at the end
const { pubkey } = getDomainKeySync(domainName);
const publicKey = new PublicKey(pubkey.toJSON())
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

console.log(pubkey.toJSON())