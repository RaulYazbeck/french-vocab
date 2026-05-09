// french_decks_a1.js
// A1 — Beginner French vocabulary decks
// To add a new deck: add an object to DECKS_A1.decks
// Word fields: en (English), fr (French), hint (e.g. article / type), pl (plural, optional), examples (optional)

const DECKS_A1 = {
  id: "a1",
  name: "A1 — Beginner",
  icon: "🌱",
  decks: [
    {
      id: "a1_verbs_essential",
      name: "Essential Verbs",
      icon: "🏃",
      words: [
        {
          en: "to be",
          fr: "être",
          hint: "verb · irregular",
          examples: [
            { fr: "Je suis étudiant.", en: "I am a student." },
            { fr: "Elle est médecin.", en: "She is a doctor." }
          ]
        },
        {
          en: "to have",
          fr: "avoir",
          hint: "verb · irregular",
          examples: [
            { fr: "J'ai un chat.", en: "I have a cat." },
            { fr: "Tu as faim ?", en: "Are you hungry?" }
          ]
        },
        {
          en: "to go",
          fr: "aller",
          hint: "verb · irregular",
          examples: [
            { fr: "Je vais au marché.", en: "I am going to the market." },
            { fr: "On y va !", en: "Let's go!" }
          ]
        },
        {
          en: "to want",
          fr: "vouloir",
          hint: "verb · irregular",
          examples: [
            { fr: "Je veux un café.", en: "I want a coffee." },
            { fr: "Elle veut partir.", en: "She wants to leave." }
          ]
        },
        {
          en: "to come",
          fr: "venir",
          hint: "verb · irregular",
          examples: [
            { fr: "Tu viens avec moi ?", en: "Are you coming with me?" },
            { fr: "Il vient de Paris.", en: "He comes from Paris." }
          ]
        }
      ]
    }
  ]
};
