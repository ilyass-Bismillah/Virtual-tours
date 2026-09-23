import { Box, TrendingUp, Link2 } from "lucide-react";

const features = [
  {
    icon: Box,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-950/40 border-pink-800/30",
    title: "Réalité immersive",
    description:
      "Vos visiteurs se déplacent dans un espace à l'échelle réelle, vérifient les perspectives et ressentent la circulation d'une pièce — bien avant de réserver une visite.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-950/40 border-pink-800/30",
    title: "Ventes boostées",
    description:
      "Les annonces avec une visite 3D interactive convertissent davantage de demandes en visites programmées, car la confiance est déjà installée avant le premier appel.",
  },
  {
    icon: Link2,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-950/40 border-pink-800/30",
    title: "Intégration fluide",
    description:
      "Intégrez votre visite sur votre site, votre bio Instagram, WhatsApp ou votre fiche Google Business en un clic. Aucun plugin, aucun développeur requis.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto py-15 px-5 lg:px-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] max-w-xl">
          Pourquoi les équipes font passer leurs annonces en 3D
        </h2>
        <p className="text-sm sm:text-base text-[#A19E9B] max-w-sm md:text-left leading-relaxed font-light">
          Les photos classiques demandent à imaginer. Une visite Vortex 3D tours
          permet de vivre l&apos;expérience — et cela change la vitesse de
          décision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
              }}
              key={idx}
              className="relative p-8 rounded-3xl bg-[#1d161b] border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Chamfered / Cut top-right corner effect */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-8 bg-[#191418] border-white/5">
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-[#A19E9B] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
