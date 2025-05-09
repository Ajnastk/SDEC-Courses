import Calendar from "./public/Images/Calendar.png";
import Mail from "./public/Images/Mail.png";
import Users from "./public/Images/Users.png";
import Earth from "./public/Images/earth.png";
import Flower from "./public/Images/flower.svg"

const contents = {
  BoostyourSkillsData: {
    title: "Boost Your Skills",
    description: `From critical skills to technical topics, we support your professional development 
    with courses that help you grow and succeed.`,
    cards: [
      {
        value: "100+",
        label: "Hours of Content",
        gradientFrom: "from-red-300",
        gradientTo: "to-red-400",
        icon: Calendar,
      },
      {
        value: "15+",
        label: "Courses in LMS",
        gradientFrom: "from-blue-300",
        gradientTo: "to-blue-400",
        icon: Mail,
      },
      {
        value: "20+",
        label: "Software engineers",
        gradientFrom: "from-purple-300",
        gradientTo: "to-purple-400",
        icon: Users,
      },
    ],
  },

  PremiumCoursesData: {
    heading: "Join Our Premium Courses",
    subheading: "Trusted by 70k+ students",
    rating: 4.8,
    reviews: 5467,
    plans: [
      {
        id: "starter",
        name: "Starter plan",
        price: "5,000",
        isPopular: false,
        duration:"7 days",
        features: [
          { name: "Limited Access to the platform", included: true },
          { name: "10 Free Courses", included: true },
          { name: "Limited Benefits", included: true },
          { name: "Agent", included: false },
          { name: "Live Chat Support", included: false },
          
        ],
      },
      {
        id: "pro",
        name: "Pro plan",
        price: "80,000",
        isPopular: true,
        duration:"7 months",
        features: [
          { name: "Full Access to the platform", included: true },
          { name: "20 Free Courses", included: true },
          { name: "Unlimited Benefits", included: true },
          { name: "Agent", included: true },
          { name: "Live Chat Support", included: false },
        ],
      },
      {
        id: "business",
        name: "Business plan",
        price: "200,000",
        isPopular: false,
        features: [
          { name: "Full Access to the platform", included: true },
          { name: "30 Free Courses", included: true },
          { name: "Unlimited Benefits", included: true },
          { name: "Agent", included: true },
          { name: "Live Chat Support", included: true },
        ],
      },
    ],
  },

  CommunityCard: {
    badgeIcon: "rocket", // identifier
    badgeText: "Community",
    title: "Join our community where creativity thrives.",
    description:
      "Unlock the amazing benefits of joining our community, growing your skills, and building connections.",
    learnHeading: "Start Learning Now",
    learnDesc: "This one is slightly better, it has more contrast",
    designNote: "Do you think this design is better?",
    image: Earth,
    Flower:Flower
  },
};

export default contents;
