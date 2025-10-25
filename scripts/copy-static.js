import fs from 'fs';
import path from 'path';

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copy(src, dest) {
  fs.copyFileSync(src, dest);
  console.log(`[copy-static] copied`, path.basename(src), '->', path.relative(process.cwd(), dest));
}

(function main() {
  const projectRoot = process.cwd();
  const dist = path.join(projectRoot, 'dist');
  ensureDir(dist);

  const mappings = [
    // Video: keep original name and provide an alias without accent as fallback
    { src: path.join(projectRoot, 'mise_en_situation_vidéo.mp4'), dest: path.join(dist, 'mise_en_situation_vidéo.mp4') },
    { src: path.join(projectRoot, 'mise_en_situation_vidéo.mp4'), dest: path.join(dist, 'hero.mp4') },
    // Poster: keep original logo path for Header and provide explicit hero poster
    { src: path.join(projectRoot, 'logorvuv2.png'), dest: path.join(dist, 'logorvuv2.png') },
    { src: path.join(projectRoot, 'logorvuv2.png'), dest: path.join(dist, 'hero-poster.png') },
  ];

  for (const { src, dest } of mappings) {
    if (fs.existsSync(src)) {
      copy(src, dest);
    }
  }
})();
