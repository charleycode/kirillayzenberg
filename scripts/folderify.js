const fs = require("fs");
const path = require("path");

const outDir = "./out";

fs.readdirSync(outDir).forEach((file) => {
  const filePath = path.join(outDir, file);
  const fileName = path.basename(filePath);

  // Only process .html files that are not index.html
  if (
    fs.lstatSync(filePath).isFile() &&
    fileName.endsWith(".html") &&
    fileName !== "index.html"
  ) {
    const baseName = fileName.replace(".html", "");
    const folderPath = path.join(outDir, baseName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    fs.renameSync(filePath, path.join(folderPath, "index.html"));
    console.log(`Moved ${fileName} to ${baseName}/index.html`);
  }
});
