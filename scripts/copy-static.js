import fs from 'fs';
import path from 'path';

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copy(src, dest) {
  fs.copyFileSync(src, dest);
}

(function main() {
  const projectRoot = process.cwd();
  const dist = path.join(projectRoot, 'dist');
  ensureDir(dist);

  const mappings = [
    { src: path.join(projectRoot, 'mise_en_situation_vidéo.mp4'), dest: path.join(dist, 'hero.mp4') },
    { src: path.join(projectRoot, 'logorvuv2.png'), dest: path.join(dist, 'hero-poster.png') },
  ];

  for (const { src, dest } of mappings) {
    if (fs.existsSync(src)) {
      copy(src, dest);
    }
  }
})();
