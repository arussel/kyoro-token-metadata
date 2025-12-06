import { Connection, clusterApiUrl, PublicKey, Keypair } from '@solana/web3.js';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { keypairIdentity, publicKey } from '@metaplex-foundation/umi';
import {
    createV1,
    TokenStandard,
    printV1
} from '@metaplex-foundation/mpl-token-metadata';
import fs from 'fs';
import path from 'path';

// KYORO token details
const MINT_ADDRESS = 'AHgVJscCvsGR7jWX39VRFKvyZU1jjaNcARHawYsinM6d';

const METADATA = {
    name: 'KYORO',
    symbol: 'KYORO',
    description: 'A utility token on the Solana blockchain',
    image: 'https://raw.githubusercontent.com/arussel/arussel.github.io/main/assets/images/2c5b0950-ebe7-410a-a50c-dd0bb9db9f73.png',
    external_url: 'https://arussel.github.io'
};

async function addMetadata() {
    try {
        console.log('🚀 Starting KYORO metadata creation...');

        // Create Umi instance
        const umi = createUmi('https://api.mainnet-beta.solana.com');

        // Load wallet keypair
        const keypairPath = path.join(process.env.HOME!, '.config/solana/id.json');
        const secretKey = JSON.parse(fs.readFileSync(keypairPath, 'utf8'));
        const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey));

        umi.use(keypairIdentity(keypair));

        console.log('📋 Creating metadata for KYORO...');
        console.log('Mint:', MINT_ADDRESS);

        // Create metadata transaction
        const createMetadataIx = createV1(umi, {
            mint: publicKey(MINT_ADDRESS),
            authority: keypair,
            name: METADATA.name,
            symbol: METADATA.symbol,
            uri: '', // We'll upload metadata JSON separately
            sellerFeeBasisPoints: 0,
            tokenStandard: TokenStandard.Fungible,
        });

        console.log('📤 Sending transaction...');
        const result = await createMetadataIx.sendAndConfirm(umi);

        console.log('✅ Metadata created!');
        console.log('Transaction signature:', result.signature);

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

addMetadata();