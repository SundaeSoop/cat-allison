import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../app/lib/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const watercolorPieces: (typeof schema.watercolorPieces.$inferInsert)[] = [
  { id: "amber-glow", title: "Amber Glow", imageUrl: "/watercolor/amber-glow.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "Warm afternoon light caught in motion — this one started as a color study and became something more.", position: 0 },
  { id: "floral-gaze", title: "Floral Gaze", imageUrl: "/watercolor/floral-gaze.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "A face half-hidden behind petals, where the flower becomes the focus and the figure becomes the feeling.", position: 10 },
  { id: "held-in-bloom", title: "Held in Bloom", imageUrl: "/watercolor/held-in-bloom.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "There's something about the weight of holding flowers that feels like holding a secret.", position: 20 },
  { id: "happy-mistake", title: "Happy Mistake", imageUrl: "/watercolor/happy-mistake.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "A palette that wasn't planned, a composition that emerged on its own. Some of the best work starts as a mistake.", position: 30 },
  { id: "happy-mistake02", title: "Happy Mistake II", imageUrl: "/watercolor/happy-mistake02.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "A follow-up to Happy Mistake — same spirit, different outcome.", position: 40 },
  { id: "where-the-light-settles", title: "Where the Light Settles", imageUrl: "/watercolor/where-the-light-settles.jpg", price: 250, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "Available", description: "The moment just after the light shifts. Fern fronds, still air, and the quiet that follows.", position: 50 },
  { id: "self-portrait-01", title: "Self Portrait I", imageUrl: "/watercolor/self-portrait-01.png", price: 0, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "NFS", position: 60 },
  { id: "self-portrait-02", title: "Self Portrait II", imageUrl: "/watercolor/self-portrait-02.png", price: 0, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "NFS", position: 70 },
  { id: "self-portrait-03", title: "Self Portrait III", imageUrl: "/watercolor/self-portrait-03.png", price: 0, medium: "Watercolor on paper", size: '9"×12"', year: "2026", status: "NFS", position: 80 },
];

const watercolorStudies: (typeof schema.watercolorStudies.$inferInsert)[] = [
  { id: "reflection-study", title: "Reflection Study", imageUrl: "/watercolor/studies/reflection-study.jpg", price: 250, medium: "Watercolor study", year: "2026", status: "Available", position: 0 },
  { id: "study-01", title: "Study 01", imageUrl: "/watercolor/studies/study-01.jpg", price: 250, medium: "Watercolor study", year: "2026", status: "Available", position: 10 },
];

const digitalPieces: (typeof schema.digitalPieces.$inferInsert)[] = [
  // Cartoon
  { id: "cartoon-daisy", title: "Daisy", srcUrl: "/digital/cartoon/daisy.png", category: "cartoon", position: 0 },
  { id: "cartoon-helltaker-01", title: "Helltaker 01", srcUrl: "/digital/cartoon/helltaker-01.png", category: "cartoon", position: 10 },
  { id: "cartoon-helltaker-02", title: "Helltaker 02", srcUrl: "/digital/cartoon/helltaker-02.png", category: "cartoon", position: 20 },
  { id: "cartoon-helltaker-03", title: "Helltaker 03", srcUrl: "/digital/cartoon/helltaker-03.png", category: "cartoon", position: 30 },
  { id: "cartoon-kory-and-diana-01", title: "Kory & Diana 01", srcUrl: "/digital/cartoon/kory-and-diana-01.png", category: "cartoon", position: 40 },
  { id: "cartoon-kory-and-diana-02", title: "Kory & Diana 02", srcUrl: "/digital/cartoon/kory-and-diana-02.png", category: "cartoon", position: 50 },
  { id: "cartoon-kory-and-diana-03", title: "Kory & Diana 03", srcUrl: "/digital/cartoon/kory-and-diana-03.png", category: "cartoon", position: 60 },
  // Characters
  { id: "characters-cyber-flames", title: "Cyber Flames", srcUrl: "/digital/characters/cyber-flames.png", category: "characters", position: 0 },
  { id: "characters-joker-pt1", title: "Joker Act Pt. 1", srcUrl: "/digital/characters/joker-act-pt1.png", category: "characters", position: 10 },
  { id: "characters-joker-pt2", title: "Joker Act Pt. 2", srcUrl: "/digital/characters/joker-act-pt2.png", category: "characters", position: 20 },
  { id: "characters-kaiya", title: "Kaiya", srcUrl: "/digital/characters/kaiya.png", category: "characters", position: 30 },
  { id: "characters-rhylie", title: "Rhylie", srcUrl: "/digital/characters/rhylie.png", category: "characters", position: 40 },
  { id: "characters-sebille", title: "Sebille", srcUrl: "/digital/characters/sebille.png", category: "characters", position: 50 },
  // Ink
  { id: "ink-subliminal", title: "Subliminal", srcUrl: "/digital/ink/subliminal.jpg", category: "ink", position: 0 },
  // Neon
  { id: "neon-cyborg", title: "Cyborg", srcUrl: "/digital/neon/cyborg.png", category: "neon", position: 0 },
  { id: "neon-deon-demon", title: "Deon Demon", srcUrl: "/digital/neon/deon-demon.png", category: "neon", position: 10 },
  { id: "neon-jazz-bar", title: "Jazz Bar", srcUrl: "/digital/neon/jazz-bar.png", category: "neon", position: 20 },
  { id: "neon-neon-oni", title: "Neon Oni", srcUrl: "/digital/neon/neon-oni.png", category: "neon", position: 30 },
  { id: "neon-sunset-blvd", title: "Sunset Blvd", srcUrl: "/digital/neon/sunset-blvd.png", category: "neon", position: 40 },
  { id: "neon-vaporwave", title: "Vaporwave", srcUrl: "/digital/neon/vaporwave.png", category: "neon", position: 50 },
  { id: "neon-victoria-destiny", title: "Victoria Destiny", srcUrl: "/digital/neon/victoria-destiny.png", category: "neon", position: 60 },
  { id: "neon-v", title: "V", srcUrl: "/digital/neon/v.png", category: "neon", position: 70 },
  // Portraits
  { id: "portraits-angelina-michelle", title: "Angelina Michelle", srcUrl: "/digital/portraits/angelina-michelle.png", category: "portraits", position: 0 },
  { id: "portraits-broken-wing", title: "Broken Wing", srcUrl: "/digital/portraits/broken-wing.png", category: "portraits", position: 10 },
  { id: "portraits-cherry", title: "Cherry", srcUrl: "/digital/portraits/cherry.png", category: "portraits", position: 20 },
  { id: "portraits-cupcake-eye", title: "Cupcake Eye", srcUrl: "/digital/portraits/cupcake-eye.png", category: "portraits", position: 30 },
  { id: "portraits-emerald-haze", title: "Emerald Haze", srcUrl: "/digital/portraits/emerald-haze.png", category: "portraits", position: 40 },
  { id: "portraits-emotions", title: "Emotions", srcUrl: "/digital/portraits/emotions.png", category: "portraits", position: 50 },
  { id: "portraits-jimin", title: "Jimin", srcUrl: "/digital/portraits/jimin.png", category: "portraits", position: 60 },
  { id: "portraits-pink-milk", title: "Pink Milk", srcUrl: "/digital/portraits/pink-milk.png", category: "portraits", position: 70 },
  { id: "portraits-yennefer", title: "Yennefer", srcUrl: "/digital/portraits/yennefer.png", category: "portraits", position: 80 },
  // Studies
  { id: "studies-2d-study", title: "2D Study", srcUrl: "/digital/studies/2d-study.png", category: "studies", position: 0 },
  { id: "studies-hands-study", title: "Hands Study", srcUrl: "/digital/studies/hands-study.png", category: "studies", position: 10 },
  { id: "studies-light-pt1", title: "Light Study Pt. 1", srcUrl: "/digital/studies/light-study-pt1.png", category: "studies", position: 20 },
  { id: "studies-light-pt2", title: "Light Study Pt. 2", srcUrl: "/digital/studies/light-study-pt2.png", category: "studies", position: 30 },
  { id: "studies-light-pt3", title: "Light Study Pt. 3", srcUrl: "/digital/studies/light-study-pt3.png", category: "studies", position: 40 },
  { id: "studies-light-pt4", title: "Light Study Pt. 4", srcUrl: "/digital/studies/light-study-pt4.png", category: "studies", position: 50 },
  { id: "studies-light-pt5", title: "Light Study Pt. 5", srcUrl: "/digital/studies/light-study-pt5.png", category: "studies", position: 60 },
  { id: "studies-light-pt6", title: "Light Study Pt. 6", srcUrl: "/digital/studies/light-study-pt6.png", category: "studies", position: 70 },
  { id: "studies-light-pt7", title: "Light Study Pt. 7", srcUrl: "/digital/studies/light-study-pt7.png", category: "studies", position: 80 },
  { id: "studies-noodle", title: "Noodle Study", srcUrl: "/digital/studies/noodle-study.png", category: "studies", position: 90 },
  { id: "studies-ratatoskr", title: "Ratatoskr Study", srcUrl: "/digital/studies/ratatoskr-study.png", category: "studies", position: 100 },
  { id: "studies-01", title: "Study 01", srcUrl: "/digital/studies/study-01.png", category: "studies", position: 110 },
  { id: "studies-02", title: "Study 02", srcUrl: "/digital/studies/study-02.png", category: "studies", position: 120 },
  { id: "studies-03", title: "Study 03", srcUrl: "/digital/studies/study-03.png", category: "studies", position: 130 },
  { id: "studies-04", title: "Study 04", srcUrl: "/digital/studies/study-04.png", category: "studies", position: 140 },
  { id: "studies-tarzan", title: "Tarzan Study", srcUrl: "/digital/studies/tarzan-study.png", category: "studies", position: 150 },
  { id: "studies-victoria-01", title: "Victoria Study 01", srcUrl: "/digital/studies/victoria-study-01.png", category: "studies", position: 160 },
  { id: "studies-victoria-02", title: "Victoria Study 02", srcUrl: "/digital/studies/victoria-study-02.png", category: "studies", position: 170 },
  { id: "studies-victoria-03", title: "Victoria Study 03", srcUrl: "/digital/studies/victoria-study-03.png", category: "studies", position: 180 },
];

async function seed() {
  console.log("Seeding database…");

  await db.insert(schema.watercolorPieces).values(watercolorPieces).onConflictDoNothing();
  console.log(`  ✓ ${watercolorPieces.length} watercolor pieces`);

  await db.insert(schema.watercolorStudies).values(watercolorStudies).onConflictDoNothing();
  console.log(`  ✓ ${watercolorStudies.length} watercolor studies`);

  await db.insert(schema.digitalPieces).values(digitalPieces).onConflictDoNothing();
  console.log(`  ✓ ${digitalPieces.length} digital pieces`);

  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
