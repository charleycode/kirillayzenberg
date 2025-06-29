const fs = require("fs");
const path = require("path");

const outDir = "./out";

fs.readdirSync(outDir).forEach((file) => {
  const filePath = path.join(outDir, file);

  // Process only .html files at the root (skip index.html)
  if (
    fs.lstatSync(filePath).isFile() &&
    file.endsWith(".html") &&
    file !== "index.html"
  ) {
    const baseName = file.replace(".html", "");
    const folderPath = path.join(outDir, baseName);

    // Create folder
    fs.mkdirSync(folderPath);

    // Move file inside as index.html
    fs.renameSync(filePath, path.join(folderPath, "index.html"));

    console.log(`Moved ${file} to ${baseName}/index.html`);
  }
});
