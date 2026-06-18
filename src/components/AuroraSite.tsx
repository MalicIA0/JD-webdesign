'use client'

import { useEffect } from 'react'

/**
 * Site « Aurora » — balisage statique (rendu côté serveur pour le SEO)
 * + interactions client gérées dans un seul effet, avec nettoyage complet.
 * Le contenu est 100% statique et de confiance (aucune donnée utilisateur),
 * donc l'injection HTML est sûre ici.
 */
const MARKUP = `
  <a class="skip-link" href="#main">Aller au contenu</a>

  <div class="loader" id="loader" aria-hidden="true">
    <div class="orbit"></div>
    <p style="font-family:var(--script);font-weight:700;font-size:34px;letter-spacing:0;text-transform:none;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;">JD <span style="font-family:var(--m);font-size:11px;letter-spacing:0.4em;color:var(--muted);">Web Design</span></p>
  </div>

  <div class="sky" aria-hidden="true">
    <div class="blob a"></div><div class="blob b"></div><div class="blob c"></div>
  </div>
  <div class="grain" aria-hidden="true"></div>
  <div class="glowcur" aria-hidden="true"></div>
  <div class="dotcur" aria-hidden="true"></div>
  <div class="progress" id="prog" aria-hidden="true"></div>

  <nav class="nav" id="nav" aria-label="Navigation principale">
    <a href="#" class="brand" aria-label="JD Web Design — Accueil">
      <span class="jd">JD</span>
      <span class="bd"><b>Web</b> Design</span>
    </a>
    <a href="#services" class="lnk">Services</a>
    <a href="#tarifs" class="lnk">Tarifs</a>
    <a href="#contact" class="cta">Contact</a>
  </nav>

  <main id="main">
    <section class="hero" aria-label="Introduction">
      <canvas id="stars" aria-hidden="true"></canvas>
      <div class="hero-in">
        <p class="tag">Freelance en design &amp; développement web</p>
        <h1>
          <span class="l"><span>Et si on vous reconnaissait,</span></span>
          <span class="l"><span>par votre <em class="shine" style="font-style:normal">site</em> ?</span></span>
          <span class="l"><span><span class="tickbox" id="tick"><span class="on">Design.</span><span>Code.</span><span>Craft.</span><span>Vision.</span></span></span></span>
        </h1>
        <p class="hero-sub">Freelance spécialisé en design et développement web. Création de sites internets — élégants, uniques, fonctionnels, une seconde vitrine accessible en un clic.</p>
        <div class="hero-ctas">
          <a href="#contact" class="b-grad">Démarrer un projet (devis gratuit) <span>→</span></a>
          <a href="#services" class="b-ghost">Voir mes services</a>
        </div>
        <div class="hero-meta">
          <span class="meta-chip"><b>14 j</b> max pour livrer le site</span>
          <span class="meta-chip"><b>100%</b> Personnalisable</span>
          <span class="meta-chip"><b>12 H</b> Temps de réponse</span>
        </div>
      </div>
    </section>

    <div class="chrome" aria-hidden="true">
      <div class="chrome-track" id="ctrack">
        <span>Création de sites <i class="sp">✦</i></span>
        <span>À l'écoute de vos attentes <i class="sp">✦</i></span>
        <span>Un projet bâti ensemble <i class="sp">✦</i></span>
        <span>Vous ne vous occupez de rien <i class="sp">✦</i></span>
        <span>Sites modernes et sécurisés <i class="sp">✦</i></span>
      </div>
    </div>

    <section class="deck-sec" id="services">
      <div class="wrap">
        <div class="deck-head rv">
          <p class="tag">Ce que je fais</p>
          <h2 class="h2">Ce que je <span class="shine">propose</span> :</h2>
        </div>
        <div class="deck" id="deck">
          <article class="dcard">
            <span class="dnum">01</span>
            <div>
              <h3><span class="ic">◈</span>Premiere étape : analyse</h3>
              <p>Comprendre vos besoins, vos objectifs et votre public cible pour créer une solution sur mesure.</p>
              <ul class="dtags"><li>écoute</li><li>photos</li><li>étude du projet</li></ul>
            </div>
          </article>
          <article class="dcard">
            <span class="dnum">02</span>
            <div>
              <h3><span class="ic">⬡</span>Développement Web</h3>
              <p>J'applique vos attentes, fais une maquette pour mettre en place la suite de la premiere étape.</p>
              <ul class="dtags"><li>codage du site en local</li><li>maquette</li><li>présentation du prototype</li></ul>
            </div>
          </article>
          <article class="dcard">
            <span class="dnum">03</span>
            <div>
              <h3><span class="ic">◎</span>Identité de Marque</h3>
              <p>Identité visuelle cohérente qui parle avant même qu'on lise un mot.</p>
              <ul class="dtags"><li>Logo</li><li>véritable cohérence entre votre boutique et votre identité</li><li>présentation complete du site</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="gallery-sec" id="galerie">
      <div class="wrap">
        <div class="gallery-head rv">
          <p class="tag">En coulisses</p>
          <h2 class="h2">Du <span class="shine">code</span> propre, livré.</h2>
        </div>
        <div class="gallery">
          <figure class="shot rv" data-src="/img/shot-1.jpg" data-fallback="/img/shot-1.svg" data-title="Composant — structure HTML">
            <img src="/img/shot-1.jpg" alt="Aperçu de code : structure HTML d'un composant" loading="lazy">
            <figcaption class="ov"><span class="nm">01 — Structure HTML</span><span class="zoom">⤢</span></figcaption>
          </figure>
          <figure class="shot rv" data-d="1" data-src="/img/shot-2.jpg" data-fallback="/img/shot-2.svg" data-title="E-commerce — grille produits">
            <img src="/img/shot-2.jpg" alt="Aperçu de code : grille de produits e-commerce" loading="lazy">
            <figcaption class="ov"><span class="nm">02 — Grille produits</span><span class="zoom">⤢</span></figcaption>
          </figure>
          <figure class="shot rv" data-d="2" data-src="/img/shot-3.jpg" data-fallback="/img/shot-3.svg" data-title="Navigation — menu multi-niveaux">
            <img src="/img/shot-3.jpg" alt="Aperçu de code : navigation multi-niveaux" loading="lazy">
            <figcaption class="ov"><span class="nm">03 — Navigation</span><span class="zoom">⤢</span></figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="arts-sec" id="articles">
      <div class="wrap">
        <div class="arts-head rv">
          <p class="tag">Contenu &amp; Rédaction</p>
          <h2 class="h2">Vos produits <span class="shine">prennent vie</span>.</h2>
          <p class="arts-tagline"><em>totalement personnalisable</em></p>
          <p class="arts-sub">Je transforme vos textes en pages qui captivent, fidélisent et convertissent — lisibles sur tous les écrans.</p>
        </div>
        <div class="arts-grid">
          <article class="acard rv">
            <div class="acard-img ai-1">
              <div class="acard-deco"><span class="ad-sym">✦</span><span class="ad-l"></span><span class="ad-l"></span><span class="ad-l ad-ls"></span></div>
              <span class="acard-cat">Conseil</span>
            </div>
            <div class="acard-body">
              <h3 class="acard-title">5 raisons d'avoir un site vitrine en 2026</h3>
              <p class="acard-excerpt">Votre boutique physique est votre premier chez-vous. Votre site, c'est votre vitrine accessible 24h/24. Découvrez pourquoi c'est devenu indispensable.</p>
            </div>
          </article>
          <article class="acard rv" data-d="1">
            <div class="acard-img ai-2">
              <div class="acard-deco"><span class="ad-sym">◉</span><span class="ad-l"></span><span class="ad-l"></span><span class="ad-l ad-ls"></span></div>
              <span class="acard-cat">SEO</span>
            </div>
            <div class="acard-body">
              <h3 class="acard-title">Comment le SEO local peut doubler votre clientèle</h3>
              <p class="acard-excerpt">Apparaître en tête de Google pour votre activité locale peut changer radicalement votre quotidien. Voici les bases que j'applique pour chaque site.</p>
            </div>
          </article>
          <article class="acard rv" data-d="2">
            <div class="acard-img ai-3">
              <div class="acard-deco"><span class="ad-sym">◈</span><span class="ad-l"></span><span class="ad-l"></span><span class="ad-l ad-ls"></span></div>
              <span class="acard-cat">Design</span>
            </div>
            <div class="acard-body">
              <h3 class="acard-title">Ce que vos visiteurs regardent en premier (et pourquoi ça change tout)</h3>
              <p class="acard-excerpt">En moins de 3 secondes, un visiteur décide s'il reste ou s'en va. Un bon design ne se voit pas — il se ressent.</p>
            </div>
          </article>
        </div>
        <div class="arts-feature rv">
          <div class="af-media">
            <div class="af-frame">
              <video src="/video/burger.mp4" autoplay muted loop playsinline></video>
              <div class="af-nowm"></div>
            </div>
            <p class="af-disclaimer"><em>* ces articles ne sont pas à vendre, ce sont une démonstration de ce que vous pouvez faire.</em></p>
          </div>
          <div class="af-content">
            <h3 class="af-title">Burger Maison</h3>
            <p class="af-label">Ingrédients</p>
            <p class="af-ingr">Bun's maison, salade, steaks boucher 130g, cheddar fumé, cornichons, oignons caramélisés, sauce maison.</p>
            <p class="af-allerg"><em>Allergènes : gluten, sésame, lactose.</em></p>
          </div>
        </div>
        <div class="arts-feature rv">
          <div class="af-media">
            <div class="af-frame">
              <video src="/video/robe.mp4" autoplay muted loop playsinline></video>
              <div class="af-nowm af-nowm-w"></div>
            </div>
            <p class="af-disclaimer"><em>* ces articles ne sont pas à vendre, ce sont une démonstration de ce que vous pouvez faire.</em></p>
          </div>
          <div class="af-content">
            <h3 class="af-title">Robe Été</h3>
            <p class="af-label">Description</p>
            <p class="af-ingr">Polyvalente et raffinée, cette robe à encolure en V est conçue pour sublimer la silhouette. Adaptée aussi bien aux sorties décontractées qu'aux occasions habillées, elle est confectionnée dans des matières respirantes qui allient confort et style au quotidien.</p>
            <p class="af-allerg"><em>Matière : polyester · Taille : S au XL · Coloris : vert, beige, rouge.</em></p>
          </div>
        </div>
        <div class="arts-cta rv">
          <a href="#contact" class="b-ghost">Donnez vie à vos contenus →</a>
        </div>
      </div>
    </section>

    <section class="stats" aria-label="Chiffres clés">
      <div class="wrap stats-g">
        <div class="stat rv"><div class="n"><span class="cnt" data-t="14">0</span></div><p class="lab">Jours max pour livrer le site</p></div>
        <div class="stat rv" data-d="1"><div class="n"><span class="cnt" data-t="100">0</span>%</div><p class="lab">Personnalisable</p></div>
        <div class="stat rv" data-d="2"><div class="n"><span class="cnt" data-t="12">0</span>&nbsp;H</div><p class="lab">Temps de réponse</p></div>
      </div>
    </section>

    <section class="bento-sec" id="engagement">
      <div class="wrap">
        <div class="bento-head rv">
          <p class="tag">Mon engagement</p>
          <h2 class="h2">Pas juste un prestataire.<br><span class="shine">Un partenaire.</span></h2>
        </div>
        <div class="bento">
          <article class="tile big rv">
            <span class="badge">Tout inclus</span>
            <div>
              <span class="ic">◉</span>
              <h3>Accompagnement complet</h3>
              <p>De l'idée à la mise en ligne, à vos côtés à chaque étape. Stratégie, design, développement, référencement.</p>
            </div>
          </article>
          <article class="tile one rv" data-d="1">
            <span class="badge">Chaque jour</span>
            <span class="ic">◈</span>
            <h3>Suivi journalier</h3>
            <p>Chaque jour ouvré, vous recevez un point d'avancement. Vous savez exactement où en est votre projet.</p>
          </article>
          <article class="tile two rv" data-d="2">
            <span class="badge">Réponse &lt; 12h</span>
            <span class="ic">◎</span>
            <h3>À votre écoute</h3>
            <p>Vos retours sont intégrés sous 12h. Communication directe, humaine, réactive.</p>
          </article>
          <article class="tile three rv" data-d="3">
            <span><b>✓</b> Réponse garantie en moins de 12 heures</span>
            <span><b>✓</b> Point quotidien sur l'avancement</span>
            <span><b>✓</b> Modifications illimitées pendant le projet</span>
          </article>
        </div>
      </div>
    </section>

    <section class="flow" id="process">
      <div class="wrap">
        <div class="flow-head rv">
          <p class="tag">Comment ça marche</p>
          <h2 class="h2">Votre projet,<br><span class="dim">étape par étape.</span></h2>
        </div>
        <div class="flow-line" id="flowline">
          <span class="flow-fill" id="flowfill"></span>
          <div class="fstep rv"><span class="bead"></span><span class="fs-n">01</span><h3>Découverte</h3><p>Entretien physique, prises de notes sur vos attentes.</p></div>
          <div class="fstep rv"><span class="bead"></span><span class="fs-n">02</span><h3>Conception</h3><p>Maquettes et prototypes. Vous voyez le résultat avant la moindre ligne de code.</p></div>
          <div class="fstep rv"><span class="bead"></span><span class="fs-n">03</span><h3>Production</h3><p>Je vous montre le résultat. Aucune surprise en fin de projet.</p></div>
          <div class="fstep rv"><span class="bead"></span><span class="fs-n">04</span><h3>Livraison</h3><p>Mise en ligne, formation et support post-lancement inclus. Vous repartez avec les clés.</p></div>
        </div>
      </div>
    </section>

    <section class="plans-sec" id="tarifs">
      <div class="wrap">
        <div class="plans-head rv">
          <p class="tag">Tarifs</p>
          <h2 class="h2">Simple &amp; <span class="shine">transparent</span>.</h2>
          <p class="plans-sub">Sans engagement. Résiliation à tout moment. Hébergement &amp; domaine inclus la 1ère année.</p>
        </div>

        <div class="bill rv" role="group" aria-label="Facturation">
          <span class="o on" id="om">Mensuel</span>
          <button class="bsw" id="bsw" role="switch" aria-checked="false" aria-label="Basculer en annuel"></button>
          <span class="o" id="oa">Annuel</span>
          <span class="bchip">−20%</span>
        </div>

        <div class="plans">
          <article class="plan rv tilt">
            <p class="pl">Plan</p>
            <h3>Économique</h3>
            <div class="crea">
              <p class="lbl">Création</p>
              <p><span class="v">500€</span><span class="meta">· Livraison en 14 jours</span></p>
            </div>
            <div class="mois">
              <span class="amt pr" data-m="90" data-a="72">90€</span><span class="per">/ mois</span>
              <p class="note">sans engagement</p>
            </div>
            <ul class="feats">
              <li><span class="c">✓</span> Site vitrine</li>
              <li><span class="c">✓</span> Design sur-mesure ensemble</li>
              <li><span class="c">✓</span> SEO de base</li>
              <li><span class="c">✓</span> Nom de domaine</li>
              <li><span class="c">✓</span> Hébergement</li>
              <li><span class="c">✓</span> Mises à jour de contenu</li>
              <li><span class="c">✓</span> Débrief mensuel</li>
            </ul>
            <a href="#contact" class="b-ghost">Démarrer avec Économique</a>
          </article>

          <article class="plan pro rv tilt" data-d="1">
            <span class="reco">⭐ Recommandé</span>
            <p class="pl">Plan</p>
            <h3>Pro</h3>
            <div class="crea">
              <p class="lbl">Création</p>
              <p><span class="v">800€</span><span class="meta">· Livraison en 14 jours</span></p>
            </div>
            <div class="mois">
              <span class="amt pr" data-m="130" data-a="104">130€</span><span class="per">/ mois</span>
              <p class="note">sans engagement</p>
            </div>
            <ul class="feats">
              <li><span class="c">✓</span> Inclut tous les services du plan Économique</li>
              <li><span class="c">✓</span> Référencement (SEO) premium</li>
              <li><span class="c">✓</span> Stratégie de contenu</li>
              <li><span class="c">✓</span> Chatbot IA personnalisé</li>
              <li><span class="c">✓</span> Animations du site</li>
              <li><span class="c">✓</span> Création d'un logo</li>
              <li><span class="c">✓</span> Mises à jour illimitées</li>
              <li><span class="c">✓</span> Support 7j/7</li>
              <li><span class="c">✓</span> Dashboard que vous contrôlez</li>
              <li><span class="c">✓</span> Choix entre deux maquettes</li>
            </ul>
            <a href="#contact" class="b-grad">Démarrer avec Pro</a>
          </article>
        </div>

        <p class="plans-note rv">Résiliation à tout moment · Aucuns frais cachés · Hébergement &amp; nom de domaine inclus la 1ère année</p>
      </div>
    </section>

    <section class="voices rv" aria-label="Témoignages">
      <div class="wrap">
        <p class="tag">Ils témoignent</p>
        <h2 class="h2">Ce qu'ils en <span class="shine">disent</span>.</h2>
        <div class="vbox" id="vbox">
          <div class="vq on">
            <p class="st">★★★★★</p>
            <blockquote>Encadrement complet, a su être à mon écoute pour valoriser mon activité.</blockquote>
            <p class="who"><b>Laetitia L.</b> — Laetitia Hypnothérapeute</p>
          </div>
          <div class="vq">
            <p class="st">★★★★★</p>
            <blockquote>Livré en avance, sans un seul bug. Rare. L'interface est devenue notre meilleur argument de vente.</blockquote>
            <p class="who"><b>Lucas B.</b></p>
          </div>
          <div class="vq">
            <p class="st">★★★★★</p>
            <blockquote>L'identité qu'on a créée ensemble parle mieux de nous que n'importe quel discours commercial.</blockquote>
            <p class="who"><b>Camille V.</b></p>
          </div>
        </div>
        <div class="vdots" id="vdots" role="tablist">
          <button class="on" aria-label="Témoignage 1"></button>
          <button aria-label="Témoignage 2"></button>
          <button aria-label="Témoignage 3"></button>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="wrap">
        <div class="cgrid rv">
          <div class="cleft">
            <p class="tag">Contact</p>
            <h2 class="h2">Votre prochain<br>projet <span class="shine">part d'ici</span>.</h2>
            <p class="csub">Vous avez une idée ? Je suis disponible pour de nouveaux projets. Réponse garantie en moins de 12h.</p>
          </div>
          <form class="cform" id="cform" novalidate>
            <input type="text" name="honeypot" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
            <div class="cf">
              <label for="fn">Nom *</label>
              <input id="fn" name="name" type="text" placeholder="Jean Dupont" required autocomplete="name" maxlength="100">
            </div>
            <div class="cf">
              <label for="fe">Email *</label>
              <input id="fe" name="email" type="email" placeholder="jean@exemple.fr" required autocomplete="email" maxlength="254">
            </div>
            <div class="cf">
              <label>Budget *</label>
              <div class="bgrp" id="bgrp">
                <button type="button" data-v="500€">500€</button>
                <button type="button" data-v="800€">800€</button>
                <button type="button" data-v="Autre">Autre</button>
              </div>
            </div>
            <div class="cf">
              <label for="fm">Message *</label>
              <textarea id="fm" name="message" rows="4" placeholder="Décrivez votre projet en quelques mots..." required minlength="20" maxlength="2000"></textarea>
            </div>
            <button type="submit" class="b-grad" id="csubmit">Envoyer le message →</button>
            <p class="fmsg" id="fmsg"></p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Visionneuse d'image">
    <div class="lb-back" id="lbBack"></div>
    <div class="lb-win">
      <div class="lb-bar">
        <div class="lb-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <span class="lb-title" id="lbTitle">Aperçu</span>
        <button class="lb-close" id="lbClose" aria-label="Fermer">✕</button>
      </div>
      <div class="lb-stage" id="lbStage">
        <img class="lb-img" id="lbImg" src="" alt="">
        <span class="lb-hint" id="lbHint">Glissez pour incliner · molette pour zoomer</span>
      </div>
      <div class="lb-tools">
        <button class="tool" data-act="left" title="Pivoter à gauche"><svg viewBox="0 0 24 24"><path d="M9 5L4 10l5 5"/><path d="M4 10h11a5 5 0 0 1 5 5v0"/></svg><span>Gauche 90°</span></button>
        <button class="tool" data-act="right" title="Pivoter à droite"><svg viewBox="0 0 24 24"><path d="M15 5l5 5-5 5"/><path d="M20 10H9a5 5 0 0 0-5 5v0"/></svg><span>Droite 90°</span></button>
        <button class="tool reset" data-act="reset" title="Réinitialiser"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg><span>Reset</span></button>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="fbrand" aria-hidden="true"><span class="fjd">JD</span><span class="fbd">Web Design</span></div>
    <div class="frow">
      <a href="/mentions-legales">Mentions légales</a>
      <a href="/confidentialite">Confidentialité</a>
    </div>
    <p class="fcopy">© 2026 JDesign · Fait avec précision en France</p>
  </footer>
`

export default function AuroraSite() {
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ac = new AbortController()
    const sig = ac.signal
    const intervals: ReturnType<typeof setInterval>[] = []
    const observers: IntersectionObserver[] = []
    let killed = false

    const $ = (id: string) => document.getElementById(id)
    const qsa = (sel: string) => Array.from(document.querySelectorAll(sel)) as HTMLElement[]

    // ---------- Préloader (le 'load' est déjà passé en SPA) ----------
    const showSite = () => {
      $('loader')?.classList.add('done')
      document.body.classList.add('go')
    }
    const tLoad = setTimeout(showSite, rm ? 50 : 500)

    // ---------- Curseur lumineux ----------
    if (window.matchMedia('(pointer: fine)').matches && !rm) {
      const g = document.querySelector('.glowcur') as HTMLElement | null
      const d = document.querySelector('.dotcur') as HTMLElement | null
      if (g && d) {
        let gx = -500, gy = -500, tx = -500, ty = -500
        document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY }, { passive: true, signal: sig })
        const cl = () => {
          if (killed) return
          gx += (tx - gx) * 0.09; gy += (ty - gy) * 0.09
          g.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`
          d.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`
          requestAnimationFrame(cl)
        }
        cl()
        qsa('a, button, .tile, .plan, .acard').forEach((el) => {
          el.addEventListener('mouseenter', () => document.body.classList.add('cur-on'), { signal: sig })
          el.addEventListener('mouseleave', () => document.body.classList.remove('cur-on'), { signal: sig })
        })
      }
    }

    // ---------- Constellation ----------
    ;(() => {
      const cv = $('stars') as HTMLCanvasElement | null
      const hero = document.querySelector('.hero') as HTMLElement | null
      if (!cv || !hero) return
      const ctx = cv.getContext('2d')
      if (!ctx) return
      let W = 0, H = 0
      const DPR = Math.min(window.devicePixelRatio || 1, 1.5)
      type Star = { x: number; y: number; z: number; vx: number; vy: number; r: number; c: string; tw: number }
      let stars: Star[] = []
      const mouse = { x: -9999, y: -9999 }
      const COLORS = ['237,240,255', '94,230,255', '139,124,255']
      const build = () => {
        W = hero.clientWidth; H = hero.clientHeight
        cv.width = W * DPR; cv.height = H * DPR
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
        stars = []
        const n = Math.min(170, Math.round((W * H) / 9000))
        for (let i = 0; i < n; i++) {
          const depth = Math.random()
          stars.push({
            x: Math.random() * W, y: Math.random() * H, z: depth,
            vx: (Math.random() - 0.5) * 0.15 * (0.4 + depth),
            vy: (Math.random() - 0.5) * 0.15 * (0.4 + depth),
            r: 0.6 + depth * 1.7,
            c: COLORS[Math.random() < 0.75 ? 0 : (Math.random() < 0.5 ? 1 : 2)],
            tw: Math.random() * 6.28,
          })
        }
      }
      build()
      window.addEventListener('resize', build, { passive: true, signal: sig })
      hero.addEventListener('mousemove', (e) => {
        const r = cv.getBoundingClientRect()
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
      }, { passive: true, signal: sig })
      hero.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 }, { signal: sig })
      let t = 0, running = true
      const frame = () => {
        t += 0.016
        ctx.clearRect(0, 0, W, H)
        const LINK = 110
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i]
          s.x += s.vx; s.y += s.vy
          if (s.x < -10) s.x = W + 10; if (s.x > W + 10) s.x = -10
          if (s.y < -10) s.y = H + 10; if (s.y > H + 10) s.y = -10
          for (let j = i + 1; j < stars.length; j++) {
            const o = stars[j], dx = s.x - o.x, dy = s.y - o.y, d2 = dx * dx + dy * dy
            if (d2 < LINK * LINK) {
              const a = (1 - Math.sqrt(d2) / LINK) * 0.14
              ctx.strokeStyle = `rgba(139,124,255,${a.toFixed(3)})`
              ctx.lineWidth = 0.7
              ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(o.x, o.y); ctx.stroke()
            }
          }
          const mdx = s.x - mouse.x, mdy = s.y - mouse.y, md2 = mdx * mdx + mdy * mdy
          if (md2 < 26000) {
            const ma = (1 - md2 / 26000) * 0.5
            ctx.strokeStyle = `rgba(94,230,255,${ma.toFixed(3)})`
            ctx.lineWidth = 0.8
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
          }
          const twinkle = 0.55 + Math.sin(t * 1.8 + s.tw) * 0.35
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283)
          ctx.fillStyle = `rgba(${s.c},${(twinkle * (0.35 + s.z * 0.6)).toFixed(3)})`
          ctx.fill()
        }
      }
      if (rm) { frame() } else {
        const loop = () => { if (killed) return; if (running && document.visibilityState === 'visible') frame(); requestAnimationFrame(loop) }
        loop()
        const ob = new IntersectionObserver((en) => { running = en[0].isIntersecting })
        ob.observe(hero); observers.push(ob)
      }
    })()

    // ---------- Ticker ----------
    const tk = qsa('#tick span')
    if (!rm && tk.length) {
      let ti = 0
      intervals.push(setInterval(() => {
        const c = tk[ti]; ti = (ti + 1) % tk.length; const n = tk[ti]
        c.classList.remove('on'); c.classList.add('out')
        setTimeout(() => c.classList.remove('out'), 650)
        n.classList.add('on')
      }, 2200))
    }

    // ---------- Marquee ----------
    const ct = $('ctrack'); if (ct) ct.innerHTML += ct.innerHTML

    // ---------- Scroll : progression, nav, deck, zigzag ----------
    const nav = $('nav'), prog = $('prog')
    const flowline = $('flowline'), flowfill = $('flowfill')
    const dcards = qsa('.dcard'), fsteps = qsa('.fstep')
    let lastY = 0, tickQ = false
    const onScroll = () => {
      const y = window.scrollY
      const dh = document.documentElement.scrollHeight - window.innerHeight
      if (prog) prog.style.width = `${dh > 0 ? (y / dh) * 100 : 0}%`
      if (nav) nav.classList.toggle('hide', y > lastY && y > 360)
      lastY = y
      dcards.forEach((c, i) => {
        const next = dcards[i + 1]; if (!next) return
        const r = c.getBoundingClientRect(), nr = next.getBoundingClientRect()
        const overlap = Math.min(1, Math.max(0, (r.bottom - nr.top) / r.height))
        c.style.transform = `scale(${1 - overlap * 0.06}) translateY(${-overlap * 14}px)`
        c.style.filter = `brightness(${1 - overlap * 0.35})`
      })
      if (flowline && flowfill) {
        const fr = flowline.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - fr.top) / fr.height))
        flowfill.style.height = `${p * 100}%`
        fsteps.forEach((s, i) => s.classList.toggle('passed', p > (i + 0.45) / fsteps.length))
      }
      tickQ = false
    }
    window.addEventListener('scroll', () => { if (!tickQ) { requestAnimationFrame(onScroll); tickQ = true } }, { passive: true, signal: sig })
    onScroll()

    // ---------- Reveal ----------
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    qsa('.rv').forEach((el) => io.observe(el)); observers.push(io)

    // ---------- Compteurs ----------
    const cio = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return
        cio.unobserve(e.target)
        const el = e.target as HTMLElement
        const target = parseInt(el.dataset.t || '0', 10)
        if (rm) { el.textContent = String(target); return }
        let t0: number | null = null
        const step = (ts: number) => {
          if (killed) return
          if (!t0) t0 = ts
          const k = Math.min(1, (ts - t0) / 1500)
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))))
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.5 })
    qsa('.cnt').forEach((el) => cio.observe(el)); observers.push(cio)

    // ---------- Spotlight bento + tilt tarifs ----------
    qsa('.tile').forEach((tile) => {
      tile.addEventListener('mousemove', (e) => {
        const ev = e as MouseEvent
        const r = tile.getBoundingClientRect()
        tile.style.setProperty('--gx', `${ev.clientX - r.left}px`)
        tile.style.setProperty('--gy', `${ev.clientY - r.top}px`)
      }, { signal: sig })
    })
    if (!rm && window.matchMedia('(pointer: fine)').matches) {
      qsa('.tilt').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const ev = e as MouseEvent
          const r = card.getBoundingClientRect()
          const rx = ((ev.clientY - r.top) / r.height - 0.5) * -5
          const ry = ((ev.clientX - r.left) / r.width - 0.5) * 5
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-7px)`
        }, { signal: sig })
        card.addEventListener('mouseleave', () => { card.style.transform = '' }, { signal: sig })
      })
    }

    // ---------- Toggle tarifs ----------
    const bsw = $('bsw'), om = $('om'), oa = $('oa')
    if (bsw) {
      let an = false
      bsw.addEventListener('click', () => {
        an = !an
        bsw.classList.toggle('an', an)
        bsw.setAttribute('aria-checked', String(an))
        om?.classList.toggle('on', !an); oa?.classList.toggle('on', an)
        qsa('.pr').forEach((el) => { el.textContent = `${an ? el.dataset.a : el.dataset.m}€` })
        qsa('.mois .note').forEach((el) => { el.textContent = an ? 'sans engagement · facturation annuelle' : 'sans engagement' })
      }, { signal: sig })
    }

    // ---------- Témoignages ----------
    const vqs = qsa('.vq'), vds = qsa('#vdots button')
    if (vqs.length) {
      let vi = 0, vPause = false
      const goV = (i: number) => {
        vqs[vi].classList.remove('on'); vds[vi]?.classList.remove('on')
        vi = i % vqs.length
        vqs[vi].classList.add('on'); vds[vi]?.classList.add('on')
      }
      vds.forEach((b, i) => b.addEventListener('click', () => { goV(i); vPause = true }, { signal: sig }))
      const vbox = $('vbox')
      vbox?.addEventListener('mouseenter', () => { vPause = true }, { signal: sig })
      vbox?.addEventListener('mouseleave', () => { vPause = false }, { signal: sig })
      intervals.push(setInterval(() => { if (!vPause && !rm) goV(vi + 1) }, 5200))
    }

    // ---------- Galerie + micro-fenêtre rotative ----------
    ;(() => {
      const shots = qsa('.shot')
      shots.forEach((sh) => {
        const im = sh.querySelector('img') as HTMLImageElement | null
        if (!im) return
        const applyFallback = () => {
          if (sh.dataset.fallback && im.src !== sh.dataset.fallback) im.src = sh.dataset.fallback
        }
        im.addEventListener('error', applyFallback, { signal: sig })
        // L'erreur peut survenir avant l'attache de l'écouteur (404 en cache) :
        // si l'image est déjà cassée, on bascule tout de suite sur le repli SVG.
        if (im.complete && im.naturalWidth === 0) applyFallback()
      })
      const lb = $('lb'), lbImg = $('lbImg') as HTMLImageElement | null, lbTitle = $('lbTitle')
      const lbClose = $('lbClose'), lbBack = $('lbBack'), stage = $('lbStage')
      if (!lb || !lbImg || !stage) return
      let lastFocus: HTMLElement | null = null, raf: number | null = null
      const MAX_TILT = 18
      let trx = 0, try_ = 0, trz = 0, ts = 1, crx = 0, cry = 0, crz = 0, cs = 1
      let dragging = false, lastPX = 0, lastPY = 0
      const EASE_F = rm ? 1 : 0.16
      const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)
      const loop = () => {
        if (killed) return
        crx += (trx - crx) * EASE_F; cry += (try_ - cry) * EASE_F
        crz += (trz - crz) * EASE_F; cs += (ts - cs) * EASE_F
        lbImg.style.transform = `scale(${cs.toFixed(4)}) rotateX(${crx.toFixed(2)}deg) rotateY(${cry.toFixed(2)}deg) rotateZ(${crz.toFixed(2)}deg)`
        raf = requestAnimationFrame(loop)
      }
      const open = (sh: HTMLElement) => {
        const im = sh.querySelector('img') as HTMLImageElement | null
        trx = try_ = trz = 0; crx = cry = crz = 0; ts = cs = 1
        if (im) { lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt }
        if (lbTitle) lbTitle.textContent = sh.dataset.title || 'Aperçu'
        lb.classList.add('open')
        document.body.style.overflow = 'hidden'
        lastFocus = document.activeElement as HTMLElement
        lbClose?.focus()
        if (!raf) loop()
      }
      const close = () => {
        lb.classList.remove('open')
        document.body.style.overflow = ''
        if (raf) { cancelAnimationFrame(raf); raf = null }
        lastFocus?.focus()
      }
      shots.forEach((sh) => {
        sh.setAttribute('tabindex', '0'); sh.setAttribute('role', 'button')
        sh.addEventListener('click', () => open(sh), { signal: sig })
        sh.addEventListener('keydown', (e) => {
          const ev = e as KeyboardEvent
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(sh) }
        }, { signal: sig })
      })
      stage.addEventListener('pointerdown', (e) => {
        dragging = true; lastPX = e.clientX; lastPY = e.clientY
        stage.classList.add('grabbing'); lb.classList.add('grabbed')
        try { stage.setPointerCapture(e.pointerId) } catch { /* ignore */ }
      }, { signal: sig })
      stage.addEventListener('pointermove', (e) => {
        if (!dragging) return
        const dx = e.clientX - lastPX, dy = e.clientY - lastPY
        lastPX = e.clientX; lastPY = e.clientY
        try_ = clamp(try_ + dx * 0.28, -MAX_TILT, MAX_TILT)
        trx = clamp(trx - dy * 0.28, -MAX_TILT, MAX_TILT)
      }, { signal: sig })
      const endDrag = () => { dragging = false; stage.classList.remove('grabbing') }
      stage.addEventListener('pointerup', endDrag, { signal: sig })
      stage.addEventListener('pointercancel', endDrag, { signal: sig })
      stage.addEventListener('pointerleave', () => { if (dragging) endDrag() }, { signal: sig })
      stage.addEventListener('wheel', (e) => { e.preventDefault(); ts = clamp(ts - e.deltaY * 0.0012, 0.5, 2.6) }, { passive: false, signal: sig })
      qsa('.lb-tools .tool').forEach((btn) => {
        btn.addEventListener('click', () => {
          const a = btn.dataset.act
          if (a === 'left') trz -= 90
          else if (a === 'right') trz += 90
          else if (a === 'reset') { trx = try_ = trz = 0; ts = 1 }
        }, { signal: sig })
      })
      lbClose?.addEventListener('click', close, { signal: sig })
      lbBack?.addEventListener('click', close, { signal: sig })
      document.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('open')) return
        if (e.key === 'Escape') close()
        else if (e.key === 'ArrowLeft') trz -= 90
        else if (e.key === 'ArrowRight') trz += 90
        else if (e.key.toLowerCase() === 'r') { trx = try_ = trz = 0; ts = 1 }
      }, { signal: sig })
    })()

    // ---------- Formulaire → API Resend ----------
    const cform = $('cform') as HTMLFormElement | null
    if (cform) {
      let bud = ''
      qsa('#bgrp button').forEach((b) => {
        b.addEventListener('click', () => {
          qsa('#bgrp button').forEach((x) => x.classList.remove('sel'))
          b.classList.add('sel'); bud = b.dataset.v || ''
        }, { signal: sig })
      })
      const msg = $('fmsg'), submit = $('csubmit') as HTMLButtonElement | null
      const setMsg = (text: string, err: boolean) => {
        if (!msg) return
        msg.textContent = text
        msg.classList.toggle('err', err)
        msg.classList.add('show')
      }
      cform.addEventListener('submit', async (e) => {
        e.preventDefault()
        const hp = cform.elements.namedItem('honeypot') as HTMLInputElement | null
        if (hp && hp.value) return
        if (!cform.reportValidity()) return
        if (!bud) { setMsg('Merci de choisir un budget.', true); return }
        const name = ($('fn') as HTMLInputElement).value
        const email = ($('fe') as HTMLInputElement).value
        const message = ($('fm') as HTMLTextAreaElement).value
        const original = submit ? submit.textContent : ''
        if (submit) { submit.disabled = true; submit.textContent = 'Envoi en cours…' }
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, budget: bud, message, honeypot: '' }),
          })
          if (res.ok) {
            setMsg('Merci ! Votre message a bien été envoyé — réponse sous 12h.', false)
            cform.reset()
            qsa('#bgrp button').forEach((x) => x.classList.remove('sel')); bud = ''
          } else {
            const data = await res.json().catch(() => ({}))
            setMsg(data.error || "Erreur lors de l'envoi. Réessayez ou écrivez-moi directement.", true)
          }
        } catch {
          setMsg('Erreur réseau. Réessayez ou écrivez-moi directement.', true)
        } finally {
          if (submit) { submit.disabled = false; submit.textContent = original }
        }
      }, { signal: sig })
    }

    // ---------- Nettoyage ----------
    return () => {
      killed = true
      ac.abort()
      clearTimeout(tLoad)
      intervals.forEach((id) => clearInterval(id))
      observers.forEach((o) => o.disconnect())
      document.body.style.overflow = ''
      document.body.classList.remove('go', 'cur-on')
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
