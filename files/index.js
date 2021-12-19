const fs = require('fs');

try {
  const data = fs.readFileSync('./doc1.html', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
