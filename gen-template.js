import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import process from 'process';

const kataID = process.argv[2];
const kataName = process.argv[3];

const API_URL = `https://www.codewars.com/api/v1/code-challenges/${kataID}`;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

if (!kataID || !kataName) {
    console.log('Please provide kata ID and kata name');
    process.exit(1);
}

fetch(API_URL)
    .then((response) => response.json())
    .then(({ rank, description, url }) => {
        let rankName = rank.name.replace('k', 'K').replace(' ', '_');

        let newDir = path.join(__dirname, rankName, kataName);

        fs.mkdir(newDir, { recursive: true }, (err) => {
            if (err) throw err;

            let descriptionFile = path.join(newDir, 'README.md');

            let solutionFile = path.join(newDir, 'solution.js');

            fs.writeFile(`${descriptionFile}`, description, (err) => {
                if (err) throw err;
                console.log('Description file has been created');
            });

            fs.writeFile(`${solutionFile}`, `//${url}\n\n\n // Write your solution here`, (err) => {
                if (err) throw err;
                console.log('Solution file has been created');
            });
        });
    });
