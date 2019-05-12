const Redis = require('ioredis');
const fs = require('fs');
const _ = require('lodash');

if (!process.env.REDIS_URL) {
    throw Error('Environment REDIS_URL not defined');
}

const client = new Redis(process.env.REDIS_URL);

async function batchUpload(batch) {
    const cmd = ['wings'];
    for (const file of batch) {
        let member = fs.readFileSync(`${__dirname}/../locations/${file}`, 'utf8');
        member = JSON.parse(member);
        const {
            geometry: {
                coordinates: [lat, lng]
            }
        } = member;
        cmd.push(lng, lat, JSON.stringify(member));
    }
    console.log(cmd);
    await client.geoadd(cmd);
    console.log('batch uploaded');
}

async function upload() {
    const files = fs.readdirSync(`${__dirname}/../locations`);
    const batches = _.chunk(files, 20);
    await Promise.all(
        batches.map(batchUpload),
    );
    process.exit(0);
}

upload();
