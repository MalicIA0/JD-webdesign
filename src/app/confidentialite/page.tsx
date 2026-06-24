import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — JDesign',
  description: 'Comment JDesign collecte, utilise et protège vos données personnelles (RGPD).',
  robots: { index: true, follow: true },
}

export default function Confidentialite() {
  return (
    <main className="legal">
      <a href="/" className="legal-back">← Retour à l&apos;accueil</a>

      <h1>Politique de confidentialité</h1>
      <p className="updated">Dernière mise à jour : 16 juin 2026</p>

      <p>
        La présente politique explique comment <strong>JDesign</strong> collecte
        et traite vos données personnelles dans le respect du Règlement général sur la protection
        des données (RGPD) et de la loi « Informatique et Libertés ».
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>JDesign</strong>, joignable à
        l&apos;adresse <a href="mailto:jdwebdesign64@hotmail.com">jdwebdesign64@hotmail.com</a>.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
      <ul>
        <li>via le <strong>formulaire de contact</strong> : nom, adresse email, budget envisagé et contenu de votre message ;</li>
        <li>via le <strong>chatbot</strong> : le contenu des messages que vous y saisissez ;</li>
        <li>des <strong>données techniques</strong> (adresse IP, type de navigateur) collectées automatiquement à des fins de sécurité et de mesure d&apos;audience.</li>
      </ul>

      <h2>3. Finalités et base légale</h2>
      <ul>
        <li><strong>Répondre à vos demandes</strong> de contact ou de devis — base légale : votre consentement et les mesures précontractuelles ;</li>
        <li><strong>Assurer la sécurité</strong> du site et prévenir les abus — base légale : intérêt légitime ;</li>
        <li><strong>Mesurer l&apos;audience</strong> (si la mesure est activée) — base légale : votre consentement.</li>
      </ul>

      <h2>4. Destinataires et sous-traitants</h2>
      <p>
        Vos données sont destinées à JDesign uniquement. Elles ne sont jamais vendues. Pour
        fonctionner, le site s&apos;appuie sur des prestataires techniques (sous-traitants) :
      </p>
      <ul>
        <li><strong>Vercel Inc.</strong> — hébergement du site ;</li>
        <li><strong>Resend</strong> — acheminement des emails du formulaire de contact ;</li>
        <li><strong>Anthropic</strong> — traitement des messages du chatbot ;</li>
        <li><strong>Google Analytics</strong> — mesure d&apos;audience, le cas échéant.</li>
      </ul>
      <p>
        Certains de ces prestataires étant situés hors de l&apos;Union européenne (États-Unis), les
        transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la
        Commission européenne).
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les messages reçus via le formulaire sont conservés au maximum <strong>3 ans</strong> à
        compter du dernier contact, puis supprimés. Les données techniques sont conservées pour une
        durée limitée à des fins de sécurité.
      </p>

      <h2>6. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>droit d&apos;accès, de rectification et d&apos;effacement de vos données ;</li>
        <li>droit à la limitation et à l&apos;opposition au traitement ;</li>
        <li>droit à la portabilité de vos données ;</li>
        <li>droit de retirer votre consentement à tout moment.</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez à{' '}
        <a href="mailto:jdwebdesign64@hotmail.com">jdwebdesign64@hotmail.com</a>. Vous pouvez
        également introduire une réclamation auprès de la{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Ce site n&apos;utilise pas de cookies publicitaires. Seuls des outils de mesure d&apos;audience
        (Google Analytics) peuvent déposer des cookies, uniquement si vous y avez consenti. Vous pouvez
        configurer votre navigateur pour les refuser.
      </p>

      <h2>8. Sécurité</h2>
      <p>
        Le site met en œuvre des mesures techniques (connexion chiffrée HTTPS, en-têtes de sécurité,
        limitation des envois, validation des données) pour protéger vos informations contre tout
        accès non autorisé.
      </p>
    </main>
  )
}
