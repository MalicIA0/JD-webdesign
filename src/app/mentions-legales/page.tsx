import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — JDesign',
  description: 'Mentions légales du site JDesign, freelance design & développement web.',
  robots: { index: true, follow: true },
}

export default function MentionsLegales() {
  return (
    <main className="legal">
      <a href="/" className="legal-back">← Retour à l&apos;accueil</a>

      <h1>Mentions légales</h1>
      <p className="updated">Dernière mise à jour : 16 juin 2026</p>

      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>JDesign</strong>, entrepreneur individuel.
      </p>
      <ul>
        <li>Statut juridique : <span className="todo">micro-entreprise — à confirmer</span></li>
        <li>Numéro SIRET : <span className="todo">à compléter</span></li>
        <li>Adresse : <span className="todo">à compléter</span></li>
        <li>Téléphone : <a href="tel:+33782755924">07 82 75 59 24</a></li>
        <li>Email : <a href="mailto:jdwebdesign64@hotmail.com">jdwebdesign64@hotmail.com</a></li>
        <li>TVA : <span className="todo">TVA non applicable, art. 293 B du CGI — à confirmer</span></li>
      </ul>

      <h2>2. Directeur de la publication</h2>
      <p>Le directeur de la publication est <strong>JDesign</strong>.</p>

      <h2>3. Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut,
        CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments composant ce site (textes, visuels, code, charte graphique,
        logo) est, sauf mention contraire, la propriété exclusive de JDesign.
        Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
        écrite préalable, est interdite et constituerait une contrefaçon au sens des articles
        L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>5. Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site sont fournies à titre indicatif et peuvent être
        modifiées à tout moment. JDesign s&apos;efforce d&apos;en assurer l&apos;exactitude mais ne
        saurait être tenu responsable des erreurs, omissions ou d&apos;une indisponibilité
        temporaire du site.
      </p>

      <h2>6. Liens externes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers. JDesign n&apos;exerce aucun contrôle
        sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Le traitement de vos données personnelles est détaillé dans notre{' '}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, les
        tribunaux français seront seuls compétents.
      </p>
    </main>
  )
}
