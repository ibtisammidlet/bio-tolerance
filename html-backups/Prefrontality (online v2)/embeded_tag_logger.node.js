const fs = require('fs');

function getDirectories(path) {
  const directories = [];
  const files = fs.readdirSync(path);

  for (const file of files) {
    const filePath = `${path}/${file}`;
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      directories.push(file);
    }
  }

  return directories;
}

const directoryPath = './';
const directoriesArray = getDirectories(directoryPath);

for (let i = 0; i < directoriesArray.length; i++) {
  console.log('<embed  src="./'+directoriesArray[i]+'" frameborder="0"></embed>');
}
