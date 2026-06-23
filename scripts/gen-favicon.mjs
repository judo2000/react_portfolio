import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("public/favicon.svg");

const pngBuf = (size) =>
  sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();

const pngs = await Promise.all([16, 32, 48].map(pngBuf));
await sharp(svg, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");

const ico = await pngToIco(pngs);
writeFileSync("public/favicon.ico", ico);
console.log(`OK: favicon.ico = ${ico.length} bytes, apple-touch-icon.png written`);
