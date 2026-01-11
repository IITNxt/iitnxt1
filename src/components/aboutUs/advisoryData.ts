// /app/(main)/about/advisoryData.ts
export interface AdvisoryMember {
    name: string;
    position: string;
    qualification: string;
    img: string;
  }
  
  const advisoryData: AdvisoryMember[] = [
    {
      name: "Sanjay Jaiswal",
      position: "Senior Consultant - Stratergy",
      qualification: "IIT Kanpur, 1989",
      img: "/team/advisoryCommitte/1.png",
    },
    {
      name: "CMA Partha Saradhi",
      position: "Advisor",
      qualification: "Institute of Cost Accountants of India, Tirupati Chapter",
      img: "/team/advisoryCommitte/2.png",
    },
    {
      name: "Venkata Narayana",
      position: "Facilitator",
      qualification: "NIT AP Proffessor",
      img: "/team/advisoryCommitte/3.png",
    },
  ];
  
  export default advisoryData;
  