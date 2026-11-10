// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  EPL ISMA — Djamakpota, Lomé
//  Données vérifiées : nom, statut (privé laïc agréé par l'État), téléphone, quartier,
//  cycles et classes, examens (CEPE, BEPC), pièces d'inscription.
//  À CONFIRMER : ouverture effective du collège (6e–3e) ; commune exacte (Golfe 1 ou Golfe 6).
//  Pour retirer le collège : supprimer le bloc « name: 'Collège' » dans `cycles` ci-dessous.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation, fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'epl-isma-djamakpota',
  logo: '/epl-isma-logo.png',
  settings: {
    name: 'École Privée Laïque ISMA',
    shortName: 'EPL ISMA',
    slogan: 'PROXIMITÉ, RIGUEUR ET RÉUSSITE',
    address: 'Quartier Djamakpota (Diamakpota), Lomé — Togo',
    email: 'contact@epl-isma.tg',
    phone: '+228 91 86 70 16',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 65000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'École privée laïque agréée par l’État togolais, au cœur de Djamakpota : un accueil familial, un suivi rigoureux et un encadrement de qualité, accessibles aux familles du quartier.',
  hero: {
    eyebrow: 'ACCUEIL - SUIVI - RÉUSSITE',
    titleLines: ['École Privée', 'Laïque'],
    highlight: 'ISMA',
    intro:
      'Bienvenue à l’EPL ISMA, au cœur du quartier Djamakpota à Lomé. Une école de proximité où chaque enfant est accueilli comme en famille, suivi de près et encadré avec rigueur, de la maternelle jusqu’aux examens officiels.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur de l’EPL ISMA',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Une école de quartier,', 'une exigence de qualité.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'L’EPL ISMA est née d’une idée simple : offrir aux familles de Djamakpota une école proche de chez elles, où chaque enfant est connu par son nom et suivi avec attention, sans avoir à traverser la ville.',
      'Établissement laïc agréé par l’État, nous accueillons tous les enfants sans distinction. Notre engagement : un encadrement pédagogique de qualité, une vraie discipline et des frais accessibles aux ménages du quartier.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'L’École Privée Laïque ISMA est ancrée au cœur du quartier Djamakpota, une zone résidentielle et populaire de la banlieue est de Lomé, non loin d’Adakpamé et de Baguida.',
      'Elle a été pensée comme une solution scolaire de proximité pour toutes les familles de la zone : un accueil familial, un suivi rigoureux de chaque enfant et un encadrement pédagogique de qualité, à un coût accessible.',
      'Agréée par l’État togolais, l’école suit les programmes officiels de l’enseignement général et prépare ses élèves aux examens nationaux : le CEPE en fin de primaire, puis le BEPC en fin de collège.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'heart',
      title: 'Accueil familial',
      text: 'Chaque enfant est connu, écouté et accompagné comme en famille.',
    },
    {
      icon: 'users',
      title: 'Suivi rigoureux',
      text: 'Un suivi personnalisé et un dialogue régulier avec les parents.',
    },
    {
      icon: 'shield',
      title: 'Discipline',
      text: 'Ponctualité, respect et sérieux dans le travail.',
    },
    {
      icon: 'graduation',
      title: 'Encadrement de qualité',
      text: 'Des enseignants engagés, à un coût accessible aux familles.',
    },
  ],
  faq: [
    {
      q: 'Où se trouve l’école ?',
      a: 'Au cœur du quartier Djamakpota (Diamakpota), dans la banlieue est de Lomé, non loin d’Adakpamé et de Baguida. Appelez-nous ou écrivez-nous sur WhatsApp au +228 91 86 70 16 pour être guidé.',
    },
    {
      q: 'Que signifie « EPL » ?',
      a: 'EPL signifie École Privée Laïque. L’EPL ISMA est un établissement d’enseignement général privé laïc, agréé par l’État togolais, qui accueille tous les enfants sans distinction.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'La maternelle (petite, moyenne et grande section), le primaire (du CP1 au CM2) et le collège (de la 6e à la 3e).',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 bénéficient d’une préparation renforcée au CEPE et y sont présentés ; les élèves de 3e sont préparés à l’examen officiel du BEPC.',
    },
    {
      q: 'À combien s’élèvent les frais de scolarité ?',
      a: 'Nos frais sont pensés pour rester accessibles aux familles du quartier. La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité ; le paiement peut se faire en trois tranches.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (cycle préscolaire) est la première étape du parcours scolaire. Elle développe l’éveil, la motricité et la vie en groupe, et prépare à la lecture.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et motricité',
        'Développement du langage',
        'Pré-lecture et premiers nombres',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), obligatoire pour le passage en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Préparation renforcée au CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et prépare les élèves à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) extrait d’acte de naissance',
      'Le carnet de notes de l’école précédente (sauf entrée en petite section)',
      'Deux (2) photos d’identité récentes',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
