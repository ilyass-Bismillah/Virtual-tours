import { Box, TrendingUp, Link2 } from "lucide-react";

const features = [
  {
    icon: Box,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-950/40 border-cyan-800/30",
    title: "Réalité immersive",
    description:
      "Vos visiteurs se déplacent dans un espace à l'échelle réelle, vérifient les perspectives et ressentent la circulation d'une pièce — bien avant de réserver une visite.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-950/40 border-purple-800/30",
    title: "Ventes boostées",
    description:
      "Les annonces avec une visite 3D interactive convertissent davantage de demandes en visites programmées, car la confiance est déjà installée avant le premier appel.",
  },
  {
    icon: Link2,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-950/40 border-emerald-800/30",
    title: "Intégration fluide",
    description:
      "Intégrez votre visite sur votre site, votre bio Instagram, WhatsApp ou votre fiche Google Business en un clic. Aucun plugin, aucun développeur requis.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto py-20 px-5 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between py-10 space-y-3 md:space-y-0">
        <h2 className="text-3xl max-w-lg">
          Pourquoi les équipes font passer leurs annonces en 3D
        </h2>
        <p className="text-gray-400 max-w-lg">
          Les photos classiques demandent à imaginer. Une visite Parallax permet
          de vivre l&apos;expérience — et cela change la vitesse de décision.
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
              className="relative p-8 rounded-3xl bg-[#16191d] border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Chamfered / Cut top-right corner effect */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-8 bg-[#141619] border-white/5">
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-[#8c9096] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
