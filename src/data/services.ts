export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  description: string[];
  benefits: string[];
  items?: { name: string; text: string }[];
  pricingNote: string;
  image: string;
  accent: string;
};

export const services: Service[] = [
  {
    slug: "vitaliteit",
    title: "Vitaliteit",
    short:
      "Pre-diabetes scan, DNA-profiel en professionele GLP1/Mounjaro-begeleiding voor duurzaam gewichtsverlies.",
    intro: "Vitaliteit begint van binnenuit — met inzicht in jouw lichaam.",
    description: [
      "Echte vitaliteit is meer dan de afwezigheid van klachten. Met moderne diagnostiek brengen wij in kaart hoe jouw lichaam functioneert: van bloedsuikerregulatie tot genetische aanleg.",
      "Op basis van deze inzichten stellen we een persoonlijk plan op. Geen standaardadvies, maar begeleiding die past bij jouw lichaam, leefstijl en doelen.",
    ],
    items: [
      {
        name: "Pre-diabetes scan",
        text: "Vroegtijdig inzicht in je bloedsuikerregulatie, zodat je diabetes type 2 vóór kunt blijven.",
      },
      {
        name: "DNA-profiel",
        text: "Ontdek hoe jouw genen reageren op voeding, beweging en stress — de basis voor een écht persoonlijk plan.",
      },
      {
        name: "GLP1 / Mounjaro-begeleiding",
        text: "Medisch verantwoorde begeleiding bij het gebruik van GLP1-medicatie, met aandacht voor voeding en behoud van spiermassa.",
      },
    ],
    benefits: [
      "Vroegtijdige signalering van gezondheidsrisico's",
      "Persoonlijk plan op basis van jouw metingen en DNA",
      "Duurzaam gewichtsverlies zonder jojo-effect",
      "Vaste begeleider gedurende het hele traject",
    ],
    pricingNote:
      "De kosten zijn afhankelijk van het gekozen traject. Neem contact op voor een vrijblijvend kennismakingsgesprek.",
    image: "/Afslanken.png",
    accent: "blue",
  },
  {
    slug: "orthomoleculaire-therapie",
    title: "Orthomoleculaire therapie",
    short:
      "Herstel de balans in je lichaam met voeding, suppletie en leefstijl — wetenschappelijk onderbouwd.",
    intro: "Voeding als medicijn: herstel van binnenuit.",
    description: [
      "Orthomoleculaire therapie richt zich op het herstellen van de biochemische balans in je lichaam met de juiste voedingsstoffen, vitamines en mineralen.",
      "Onze therapeut kijkt naar de oorzaak van klachten — vermoeidheid, darmproblemen, hormonale disbalans — in plaats van alleen symptomen te bestrijden.",
    ],
    benefits: [
      "Aanpak van de oorzaak, niet alleen het symptoom",
      "Persoonlijk voedings- en suppletieadvies",
      "Meer energie en een sterker immuunsysteem",
      "Begeleiding door een MBOG-geregistreerd therapeut",
    ],
    pricingNote:
      "Orthomoleculair advies wordt deels vergoed vanuit de aanvullende verzekering. Een verwijzing verloopt via de MBOG-registratie; vraag je zorgverzekeraar naar de voorwaarden.",
    image: "/Voeding-en-suplementen.png",
    accent: "sage",
  },
  {
    slug: "bewegen",
    title: "Bewegen",
    short:
      "Beweegprogramma's op maat die passen bij jouw lichaam, conditie en dagelijks leven.",
    intro: "In beweging komen — op een manier die bij jou past.",
    description: [
      "Bewegen is een onmisbare pijler van vitaliteit. Toch is het voor veel mensen lastig om structureel in beweging te komen én te blijven.",
      "Wij stellen een beweegprogramma samen dat aansluit bij jouw niveau en doelen, en combineren dit waar zinvol met voedings- en leefstijladvies.",
    ],
    benefits: [
      "Programma afgestemd op jouw conditie en agenda",
      "Ondersteunt gewichtsverlies en spierbehoud",
      "Meer energie, betere nachtrust",
      "Laagdrempelige begeleiding, ook voor beginners",
    ],
    pricingNote:
      "Beweegbegeleiding is onderdeel van onze leefstijltrajecten. Vraag naar de mogelijkheden tijdens een kennismakingsgesprek.",
    image: "/Bewegen-e1711354436764.png",
    accent: "orange",
  },
  {
    slug: "lpg-endermologie",
    title: "LPG Endermologie Lipomassage",
    short:
      "Figuurcorrectie, huidverbetering en anti-aging met de bewezen LPG Endermologie-techniek.",
    intro: "Natuurlijke figuurcorrectie en huidverbetering — zonder ingreep.",
    description: [
      "LPG Endermologie is een wetenschappelijk onderbouwde, niet-invasieve behandelmethode die de huid stimuleert om vet af te voeren, collageen aan te maken en de doorbloeding te verbeteren.",
      "De behandeling wordt ingezet voor figuurcorrectie, het verminderen van cellulite, huidverstrakking en anti-aging — volledig pijnloos en zonder hersteltijd.",
    ],
    benefits: [
      "Zichtbare figuurcorrectie en vermindering van cellulite",
      "Stevigere, gladdere huid door natuurlijke collageenaanmaak",
      "Pijnloos en zonder hersteltijd",
      "Geschikt als aanvulling op een afslanktraject",
    ],
    pricingNote:
      "Behandelingen zijn los of als kuur te boeken. Neem contact op voor actuele tarieven en een gratis intake.",
    image: "/Lipomassage-e1711354474270.png",
    accent: "blue",
  },
];
