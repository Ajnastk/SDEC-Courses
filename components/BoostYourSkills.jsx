import { Users, Calendar, Mail } from "lucide-react";
import contents from "@/contents";

export default function BoostYourSkills() {
  const data = contents.BoostyourSkillsData;
  return (
    <div className="bg-white py-16 px-4 w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-purple-100 p-2 rounded-full">
            <div className="text-purple-600 font-medium">We Offer</div>
          </div>
        </div>
        
        <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
         {data.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
        {/* Hours of Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center relative">
          <div className="absolute -top-12">
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <div className="bg-gradient-to-b from-red-300 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Calendar className="text-white w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-6xl font-bold mb-2">100+</h3>
            <p className="text-gray-600 uppercase tracking-wider text-sm">Hours of Content</p>
          </div>
        </div>

        {/* Courses Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center relative">
          <div className="absolute -top-12">
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <div className="bg-gradient-to-b from-blue-300 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Mail className="text-white w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-6xl font-bold mb-2">15+</h3>
            <p className="text-gray-600 uppercase tracking-wider text-sm">Courses</p>
          </div>
        </div>

        {/* Students Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center relative">
          <div className="absolute -top-12">
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <div className="bg-gradient-to-b from-purple-300 to-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Users className="text-white w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-6xl font-bold mb-2">20k+</h3>
            <p className="text-gray-600 uppercase tracking-wider text-sm">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}