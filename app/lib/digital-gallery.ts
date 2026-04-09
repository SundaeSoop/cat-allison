export type DigitalCategory =
  | "neon"
  | "portraits"
  | "characters"
  | "cartoon"
  | "ink"
  | "studies";

export type DigitalPiece = {
  id: string;
  title: string;
  src: string; // public path, e.g. "/digital/neon/vaporwave.png"
  category: DigitalCategory;
};

export const DIGITAL_CATEGORIES: { key: DigitalCategory; label: string }[] = [
  { key: "neon", label: "Neon" },
  { key: "portraits", label: "Portraits" },
  { key: "characters", label: "Characters" },
  { key: "cartoon", label: "Cartoon" },
  { key: "ink", label: "Ink" },
  { key: "studies", label: "Studies" },
];

export const DIGITAL_PIECES: DigitalPiece[] = [
  // CARTOON
  { id: "cartoon-daisy", title: "Daisy", src: "/digital/cartoon/daisy.png", category: "cartoon" },
  { id: "cartoon-helltaker-01", title: "Helltaker 01", src: "/digital/cartoon/helltaker-01.png", category: "cartoon" },
  { id: "cartoon-helltaker-02", title: "Helltaker 02", src: "/digital/cartoon/helltaker-02.png", category: "cartoon" },
  { id: "cartoon-helltaker-03", title: "Helltaker 03", src: "/digital/cartoon/helltaker-03.png", category: "cartoon" },
  { id: "cartoon-kory-and-diana-01", title: "Kory & Diana 01", src: "/digital/cartoon/kory-and-diana-01.png", category: "cartoon" },
  { id: "cartoon-kory-and-diana-02", title: "Kory & Diana 02", src: "/digital/cartoon/kory-and-diana-02.png", category: "cartoon" },
  { id: "cartoon-kory-and-diana-03", title: "Kory & Diana 03", src: "/digital/cartoon/kory-and-diana-03.png", category: "cartoon" },

  // CHARACTERS
  { id: "characters-cyber-flames", title: "Cyber Flames", src: "/digital/characters/cyber-flames.png", category: "characters" },
  { id: "characters-joker-pt1", title: "Joker Act Pt. 1", src: "/digital/characters/joker-act-pt1.png", category: "characters" },
  { id: "characters-joker-pt2", title: "Joker Act Pt. 2", src: "/digital/characters/joker-act-pt2.png", category: "characters" },
  { id: "characters-kaiya", title: "Kaiya", src: "/digital/characters/kaiya.png", category: "characters" },
  { id: "characters-rhylie", title: "Rhylie", src: "/digital/characters/rhylie.png", category: "characters" },
  { id: "characters-sebille", title: "Sebille", src: "/digital/characters/sebille.png", category: "characters" },

  // INK
  { id: "ink-subliminal", title: "Subliminal", src: "/digital/ink/subliminal.jpg", category: "ink" },

  // NEON
  { id: "neon-cyborg", title: "Cyborg", src: "/digital/neon/cyborg.png", category: "neon" },
  { id: "neon-deon-demon", title: "Deon Demon", src: "/digital/neon/deon-demon.png", category: "neon" },
  { id: "neon-jazz-bar", title: "Jazz Bar", src: "/digital/neon/jazz-bar.png", category: "neon" },
  { id: "neon-neon-oni", title: "Neon Oni", src: "/digital/neon/neon-oni.png", category: "neon" },
  { id: "neon-sunset-blvd", title: "Sunset Blvd", src: "/digital/neon/sunset-blvd.png", category: "neon" },
  { id: "neon-vaporwave", title: "Vaporwave", src: "/digital/neon/vaporwave.png", category: "neon" },
  { id: "neon-victoria-destiny", title: "Victoria Destiny", src: "/digital/neon/victoria-destiny.png", category: "neon" },
  { id: "neon-v", title: "V", src: "/digital/neon/v.png", category: "neon" },

  // PORTRAITS
  { id: "portraits-angelina-michelle", title: "Angelina Michelle", src: "/digital/portraits/angelina-michelle.png", category: "portraits" },
  { id: "portraits-broken-wing", title: "Broken Wing", src: "/digital/portraits/broken-wing.png", category: "portraits" },
  { id: "portraits-cherry", title: "Cherry", src: "/digital/portraits/cherry.png", category: "portraits" },
  { id: "portraits-cupcake-eye", title: "Cupcake Eye", src: "/digital/portraits/cupcake-eye.png", category: "portraits" },
  { id: "portraits-emerald-haze", title: "Emerald Haze", src: "/digital/portraits/emerald-haze.png", category: "portraits" },
  { id: "portraits-emotions", title: "Emotions", src: "/digital/portraits/emotions.png", category: "portraits" },
  { id: "portraits-jimin", title: "Jimin", src: "/digital/portraits/jimin.png", category: "portraits" },
  { id: "portraits-pink-milk", title: "Pink Milk", src: "/digital/portraits/pink-milk.png", category: "portraits" },
  { id: "portraits-yennefer", title: "Yennefer", src: "/digital/portraits/yennefer.png", category: "portraits" },

  // STUDIES (dedicated page too)
  { id: "studies-2d-study", title: "2D Study", src: "/digital/studies/2d-study.png", category: "studies" },
  { id: "studies-hands-study", title: "Hands Study", src: "/digital/studies/hands-study.png", category: "studies" },
  { id: "studies-light-pt1", title: "Light Study Pt. 1", src: "/digital/studies/light-study-pt1.png", category: "studies" },
  { id: "studies-light-pt2", title: "Light Study Pt. 2", src: "/digital/studies/light-study-pt2.png", category: "studies" },
  { id: "studies-light-pt3", title: "Light Study Pt. 3", src: "/digital/studies/light-study-pt3.png", category: "studies" },
  { id: "studies-light-pt4", title: "Light Study Pt. 4", src: "/digital/studies/light-study-pt4.png", category: "studies" },
  { id: "studies-light-pt5", title: "Light Study Pt. 5", src: "/digital/studies/light-study-pt5.png", category: "studies" },
  { id: "studies-light-pt6", title: "Light Study Pt. 6", src: "/digital/studies/light-study-pt6.png", category: "studies" },
  { id: "studies-light-pt7", title: "Light Study Pt. 7", src: "/digital/studies/light-study-pt7.png", category: "studies" },
  { id: "studies-noodle", title: "Noodle Study", src: "/digital/studies/noodle-study.png", category: "studies" },
  { id: "studies-ratatoskr", title: "Ratatoskr Study", src: "/digital/studies/ratatoskr-study.png", category: "studies" },
  { id: "studies-01", title: "Study 01", src: "/digital/studies/study-01.png", category: "studies" },
  { id: "studies-02", title: "Study 02", src: "/digital/studies/study-02.png", category: "studies" },
  { id: "studies-03", title: "Study 03", src: "/digital/studies/study-03.png", category: "studies" },
  { id: "studies-04", title: "Study 04", src: "/digital/studies/study-04.png", category: "studies" },
  { id: "studies-tarzan", title: "Tarzan Study", src: "/digital/studies/tarzan-study.png", category: "studies" },
  { id: "studies-victoria-01", title: "Victoria Study 01", src: "/digital/studies/victoria-study-01.png", category: "studies" },
  { id: "studies-victoria-02", title: "Victoria Study 02", src: "/digital/studies/victoria-study-02.png", category: "studies" },
  { id: "studies-victoria-03", title: "Victoria Study 03", src: "/digital/studies/victoria-study-03.png", category: "studies" },
];