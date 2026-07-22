/**
 * optimize-og-image.mjs
 *
 * Redimensiona y comprime la imagen usada para compartir en redes
 * (og:image / twitter:image) al tamaño recomendado (1200x630) y a JPEG,
 * ya que la imagen original no usa transparencia y JPEG comprime mucho
 * mejor que PNG para este tipo de contenido.
 *
 * Uso:
 *   node scripts/optimize-og-image.mjs <archivo-de-entrada>
 *
 * Por defecto toma public/og-image-source.png si no se pasa argumento,
 * y siempre escribe el resultado en public/og-image.jpg (la ruta que
 * usa index.html).
 */
import sharp from 'sharp';
import path from 'node:path';
import { existsSync } from 'node:fs';

const input = process.argv[2] || path.join('public', 'og-image-source.png');
const output = path.join('public', 'og-image.jpg');

if (!existsSync(input)) {
  console.error(`No se encontró el archivo de entrada: ${input}`);
  console.error('Uso: node scripts/optimize-og-image.mjs <archivo-de-entrada>');
  process.exit(1);
}

const info = await sharp(input)
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(output);

console.log(`✅ ${output} generado — ${(info.size / 1024).toFixed(0)} KB (${info.width}x${info.height})`);
