export type Project = {
    id: number;
    title: string;
    description: string;
    highlights: string[];
    image: string;
  };

export const projects: Project[] =  [
    {
      id: 1,
      title: "SwachhBot – AI-Powered Public Space Cleaning Robot",
      description:
        "An intelligent, solar-powered robotic system designed to autonomously identify, classify, and collect litter in public spaces.",
      highlights: [
        "Leverages computer vision and machine learning for smart waste detection.",
        "Ideal for deployment in campuses, municipal parks, and public institutions.",
        "Supports the Swachh Bharat mission and urban automation goals.",
        "Contributes to sustainable sanitation and civic engagement.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 2,
      title: "SakhiVend – Sanitary Napkin Vending & Disposal System",
      description:
        "A compact, solar-powered unit that dispenses sanitary pads and safely incinerates waste, ensuring hygiene and dignity for women.",
      highlights: [
        "Empowers adolescent girls through improved menstrual hygiene.",
        "Addresses school dropout rates among rural female students.",
        "Deployable in schools, public health centers, and community hubs.",
        "Fully automated with integrated disposal unit for minimal maintenance.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 3,
      title: "Trash-AI-SeparatoR – Smart Waste Segregation Bin",
      description:
        "An AI-driven smart bin capable of real-time segregation of wet, dry, and recyclable waste.",
      highlights: [
        "Promotes behavioral change through intelligent source segregation.",
        "Suitable for railway stations, hostels, classrooms, and urban areas.",
        "Enhances urban recycling infrastructure and reduces landfill dependency.",
        "Contributes to cleaner, smarter cities with minimal human intervention.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 4,
      title: "Smart Solar Streetlights (Rural & Campus)",
      description:
        "Autonomous, motion-sensitive solar lighting systems equipped with GSM fault alerts for rural and institutional installations.",
      highlights: [
        "Designed to improve safety, especially for women and children.",
        "Deployed in underserved villages lacking nighttime infrastructure.",
        "Energy-efficient, low-maintenance, and easy to scale.",
        "Enables sustainable electrification and digital inclusion in rural India.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 5,
      title: "SeedBot – Autonomous Reforestation Drone",
      description:
        "A GPS-guided drone designed for large-scale seed-ball dispersion, revolutionizing afforestation practices.",
      highlights: [
        "Enhances reforestation efforts with automation and precision.",
        "Equipped with manual override for field adaptability.",
        "Scalable for NGOs, forest departments, and CSR reforestation missions.",
        "Aligns with India’s climate and sustainability goals.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 6,
      title: "JalaRakshak – River Surface Cleaning Bot",
      description:
        "An autonomous floating vehicle engineered to collect solid waste from river surfaces, particularly during mass festivals.",
      highlights: [
        "Preserves aquatic biodiversity and ensures cleaner water bodies.",
        "Essential for religious festivals like Pushkarams where river pollution peaks.",
        "Supports ecotourism and sustainable cultural preservation.",
        "Ideal for CSR initiatives focused on environmental conservation.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 7,
      title: "Samuudramanthan – Coastal Cleaning BeachBot",
      description:
        "An AI-enabled robot that navigates sandy terrains to collect plastic and debris along beaches.",
      highlights: [
        "Designed for marine pollution hotspots like Vizag, Gokarna, and Chennai.",
        "Enhances cleanliness of public beaches and coastal biodiversity zones.",
        "Combats microplastic pollution through continuous surveillance.",
        "Symbolizes India's push toward blue economy sustainability.",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 8,
      title: "Auto-PaperGen – AI Question Paper Generator",
      description:
        "An AI-based tool that automates the generation of MCQs, case-based, and descriptive questions with formatting options.",
      highlights: [
        "Built using GPT APIs by IITNxt students.",
        "Saves 6–10 hours per exam cycle for educators.",
        "Allows output in Word, PDF, or Google Forms.",
        "Supports localization in regional languages (Hindi, Telugu, Odia).",
      ],
      image: "/PlaceholderRectangle.png",
    },
    {
        id: 9,
      title: "Village Innovation Clubs",
      description:
        "Grassroots tech clubs in government schools that host monthly innovation challenges for rural students.",
      highlights: [
        "Activities include robotics challenges, AI quizzes, and design contests.",
        "Top-performing students receive IIT campus visits and tech sponsorships.",
        "Builds early exposure to STEM and innovation culture in rural India.",
        "Scales student engagement through peer mentorship and hands-on learning.",
      ],
      image: "/PlaceholderRectangle.png",
    },
  ];
  