import { Storage } from '@google-cloud/storage';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;

if (!bucketId) {
  console.error('DEFAULT_OBJECT_STORAGE_BUCKET_ID not set');
  process.exit(1);
}

const storage = new Storage();
const bucket = storage.bucket(bucketId);

const videoPath = join('/home/runner/workspace/artifacts/portfolio/public/intro.mp4');
console.log('Uploading video from:', videoPath);
console.log('Bucket:', bucketId);

try {
  await bucket.upload(videoPath, {
    destination: 'public/intro.mp4',
    metadata: {
      contentType: 'video/mp4',
      cacheControl: 'public, max-age=86400',
    },
  });
  
  // Make public
  await bucket.file('public/intro.mp4').makePublic();
  
  const publicUrl = `https://storage.googleapis.com/${bucketId}/public/intro.mp4`;
  console.log('SUCCESS! Public URL:', publicUrl);
} catch (err) {
  console.error('Upload failed:', err.message);
  process.exit(1);
}
