const fs = require('fs');
fs.rmSync('src/app/(admin)', { recursive: true, force: true });
console.log('Deleted (admin)');
