import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = Keypair.generate();

console.log(`The public key is:`, keypair.publicKey.toBase58() )
console.log(`The secret key is:`, keypair.secretKey)

const newkeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(newkeypair.publicKey.toBase58())
console.log(newkeypair.secretKey)

console.log(`✅ Generated keypair!`)