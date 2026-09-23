const useCases = [
  {
    title: "Immobilier",
    description:
      "Vendez le bien avant même la journée portes ouvertes. Les acheteurs se qualifient eux-mêmes, vous ne consacrez vos week-ends qu'aux visites sérieuses.",
    tag: "Moins de rendez-vous manqués, ventes plus rapides",
    tagStyles: "bg-pink-950/40 text-pink-400 border-pink-800/40",
    gradient: "from-pink-950/40 via-pink-900/10 to-transparent",
  },
  {
    title: "Hôtellerie",
    description:
      "Laissez vos clients parcourir le lobby, les suites et le rooftop avant de réserver. Moins d'annulations, plus de réservations directes.",
    tag: "Des réservations directes, pas juste des clics",
    tagStyles: "bg-pink-950/40 text-pink-400 border-pink-800/40",
    gradient: "from-pink-950/40 via-pink-900/10 to-transparent",
  },
  {
    title: "Commerce",
    description:
      "Montrez votre agencement, vos vitrines et votre ambiance aux clients qui hésitent encore à sortir de chez eux.",
    tag: "Transformez les curieux en visiteurs",
    tagStyles: "bg-pink-950/40 text-pink-400 border-pink-800/40",
    gradient: "from-pink-950/40 via-pink-900/10 to-transparent",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-15 bg-[#050608] text-white">
      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto px-5 lg:px-0">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] max-w-xl">
            Conçu pour les espaces où l&apos;on décide en marchant
          </h2>
          <p className="text-sm sm:text-base text-[#A19E9B] max-w-sm md:text-left leading-relaxed font-light">
            Partout où une décision se prend en visitant un lieu, une visite
            Vortex 3D tours arrive la première.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-[#0b0d10] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/15 transition-colors duration-300"
            >
              {/* Top Visual Area with Subtle Ambient Gradient */}
              <div
                className={`relative h-60 w-full bg-linear-to-b ${card.gradient}`}
              />

              {/* Card Content */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#A19E9B] leading-relaxed font-normal mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag Pill */}
                <div className="pt-2">
                  <span
                    className={`inline-block text-xs font-medium px-4 py-2 rounded-full border ${card.tagStyles}`}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
