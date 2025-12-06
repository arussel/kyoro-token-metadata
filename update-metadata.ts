import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { keypairIdentity, publicKey } from '@metaplex-foundation/umi';
import { updateV1 } from '@metaplex-foundation/mpl-token-metadata';
import fs from 'fs';
import path from 'path';

const MINT_ADDRESS = 'AHgVJscCvsGR7jWX39VRFKvyZU1jjaNcARHawYsinM6d';
const METADATA_URI = 'https://raw.githubusercontent.com/arussel/kyoro-token-metadata/main/kyoro-metadata.json';

async function updateMetadata() {
    try {
        console.log('🔧 Updating KYORO metadata URI with explicit creator...');

        const umi = createUmi('https://api.mainnet-beta.solana.com');

        const keypairPath = path.join(process.env.HOME!, '.config/solana/id.json');
        const secretKey = JSON.parse(fs.readFileSync(keypairPath, 'utf8'));
        const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey));

        umi.use(keypairIdentity(keypair));

        console.log('📋 Updating with verified creator preserved...');

        const updateMetadataIx = updateV1(umi, {
            mint: publicKey(MINT_ADDRESS),
            authority: keypair,
            data: {
                name: 'KYORO',
                symbol: 'KYORO',
                uri: METADATA_URI,
                sellerFeeBasisPoints: 0,
                creators: [
                    {
                        address: publicKey('CmidxXKPyWhqpDEch8VQoTuDpHSzfmpFDXGRWQuUXLRX'),
                        verified: true,
                        share: 100,
                    }
                ],
                collection: null,
                uses: null,
            }
        });

        console.log('📤 Sending transaction...');
        const result = await updateMetadataIx.sendAndConfirm(umi);

        console.log('✅ Metadata updated!');
        console.log('Transaction signature:', result.signature);

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

updateMetadata();