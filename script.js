const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Grid columns 5 -> 3
  content = content.replace(/\.grid-team\s*\{\s*display:\s*grid;\s*grid-template-columns:\s*repeat\(5,\s*1fr\);/g, '.grid-team {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);');
  
  // 2. Remove Kamil
  content = content.replace(/<div\s+class="glass-panel team-card"\s+style="border-top:\s*3px\s+solid\s+var\(--accent-gold\);\s*overflow:\s*hidden">[\s\S]*?<div\s+class="team-desc"\s+style="position:\s*relative;\s*z-index:\s*2">[\s\S]*?<\/div>\s*<\/div>/g, '');
  
  // 3. Remove Miron
  content = content.replace(/<div\s+class="glass-panel team-card"\s+style="border-top:\s*3px\s+solid\s+#3b82f6;\s*overflow:\s*hidden">[\s\S]*?<div\s+class="team-desc"\s+style="position:\s*relative;\s*z-index:\s*2">[\s\S]*?<\/div>\s*<\/div>/g, '');

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('en/index.html');
