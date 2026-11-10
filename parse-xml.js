
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

// Read the XML file from the repository
const xmlData = fs.readFileSync('data.xml', 'utf8');

// Parse XML string into a JavaScript object
const parser = new XMLParser();
const result = parser.parse(xmlData);

// Print the values in the GitHub Actions log
console.log('--- XML PARSER OUTPUT ---');
console.log(`Project Status: ${result.project.status}`);
console.log(`Message: ${result.project.message}`);
