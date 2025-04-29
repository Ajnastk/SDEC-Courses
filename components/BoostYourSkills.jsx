import { Users, Calendar, Rocket, Mail } from "lucide-react";
import contents from "@/Contents";

const icons = {
  Calendar,
  Mail,
  Users,
};


export default function BoostYourSkills() {
  const data = contents.BoostyourSkillsData;
  return (
    <div className="bg-white py-16 px-4 w-full mx-auto relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-16 opacity-10">
        <div className="text-purple-300 text-8xl">✳</div>
      </div>
      <div className="absolute bottom-16 right-16 opacity-10">
        <div className="text-purple-300 text-8xl">✳</div>
      </div>

      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
            <div className="text-black font-medium w-[110px] text-sm flex items-center gap-4">
              <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                <span className="text-purple-600">{<Rocket />}</span>
              </span>
              We Offer
            </div>
          </div>
        </div>

        <h2 className="text-4xl text-black mb-4">{data.title}</h2>
        <p className="text-black max-w-xl mx-auto">{data.description}</p>
      </div>

      <div className="flex px-22 flex-col md:flex-row justify-between gap-0 mt-16">
        {data.cards.map((card, index) => {
          const Icon = icons[card.icon];
          return (
            <div
              key={index}
              className={`bg-white md:h-[370px] w-[370px] backdrop-blur-sm p-8 text-center transition-transform relative rounded-3xl md:flex md:flex-col justify-center items-center md:gap-5`}
              style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255,255,255,0.2)",
                transform:
                  index === 0
                    ? "perspective(180px) rotateY(3deg) rotateX(0deg) rotate(-0deg) translateX(60px)"
                    : index === 2
                    ? "perspective(180px) rotateY(-3deg) rotateX(0deg) rotate(-0deg) translateX(-60px)"
                    : "none",
              }}
            >
              <div className="flex justify-center mb-6">
                <div
                  style={{
                    boxShadow:
                      "0 5px 30px rgba(0,0,0,0.1), -20px 0px 30px rgba(0,0,0,0.02)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                  className="bg-white md:w-[120px] md:h-[120px] flex justify-center items-center rounded-2xl p-4"
                >
                  <div
                    className={`bg-gradient-to-b ${card.gradientFrom} ${card.gradientTo} w-20 h-20 rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-5xl font-extrabold text-black mb-1">
                  {card.value}
                </h3>
                <p className="text-gray-600 text-xs tracking-widest uppercase">
                  {card.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
