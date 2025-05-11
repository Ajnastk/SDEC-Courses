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
        name: "Career Foundation Course",
        price: "5,000",
        isPopular: false,
        duration:"7 days",
        features: [
          { name: "Basic programming", included: true },
          { name: "career guidance", included: true },
          { name: "introduction to web development", included: true },
          { name: "portfolio building", included: true },
          { name: "Career Foundation Course", included: false },
          
        ],
      },
      {
        id: "pro",
        name: "Full Stack Developer Course",
        price: "80,000",
        isPopular: true,
        duration:"7 months",
        features: [
          { name: "HTML, CSS, JavaScript", included: true },
          { name: "React", included: true },
          { name: "Node.js, Express.js", included: true },
          { name: "MongoDB, SQL", included: true },
          { name: "Project Deployment, Full-stack architecture.", included: true },
        ],
      },
      {
        id: "business",
        name: " Aspiring Engineers Program ",
        price: "200,000",
        isPopular: false,
        duration:" 1.5 years (start earning in 6 months)",
        features: [
          { name: "Career Foundation Course", included: true },
          { name: "Front-End Developer Course", included: true },
          { name: "Back-End Developer Course", included: true },
          { name: "Freelance Master Course", included: true },
          { name: "Entrepreneur Course", included: true },
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
