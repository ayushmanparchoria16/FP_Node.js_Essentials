const fs = require('fs');

// Create a read stream for data_file.txt
const readStream = fs.createReadStream('data_file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log(`Chunk size: ${chunk.length}`);
});

readStream.on('end', () => {
    console.log('Finished reading data_file.txt');
});

readStream.on('error', (err) => {
    console.error('Error occurred:', err);
});
