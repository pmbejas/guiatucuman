import Link from 'next/link';
import { useTranslations } from 'next-intl';

/**
 * Pie de página del sitio con links y créditos del desarrollador.
 */
export function Footer() {
  const t = useTranslations('footer');

  return (
    <div className="contenedor-footer">
      <h4 className="mb-2">
        <Link className="texto-link-footer" href="/">
          {t('titulo')}
        </Link>
      </h4>
      <Link
        className="texto-link-footer-pmwebdeveloper"
        href="http://www.pmwebdeveloper.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t('desarrollador')}
      </Link>
    </div>
  );
}
