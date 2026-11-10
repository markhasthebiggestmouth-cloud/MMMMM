const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

const xmlData = fs.readFileSync('data.xml', 'utf8');

const parser = new XMLParser();
const result = parser.parse(xmlData);

console.log('--- XML PARSER OUTPUT ---');
console.log(`Project Status: ${result.project.status}`);
console.log(`Message: ${result.project.message}`);
