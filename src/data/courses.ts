
import { CourseCardProps } from "@/components/CourseCard";

// Higher Education Courses
export const higherEdCourses: CourseCardProps[] = [
  {
    id: "he-4",
    title: "Instructional Excellence & Performance Development",
    description: "A comprehensive training program that equips tutors with foundational skills in pedagogy, student engagement, and effective tutoring methodologies.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    tags: ["Tutor Training", "Pedagogy", "Student Engagement"]
  },
  {
    id: "he-5",
    title: "New Student Orientation Program (Higher Ed in China)",
    description: "A specialized program designed to help international students adapt to Chinese higher education and university life for smooth cultural and academic integration.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["International Education", "Cultural Integration", "Chinese Higher Ed"]
  },
  {
    id: "he-6",
    title: "ESL & Test Prep Instructional Programs",
    description: "Structured ESL and test preparation support for adult learners and college students to ensure language proficiency and test readiness.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["ESL", "Test Preparation", "Language Proficiency"]
  }
];

// Non-Profit Courses
export const nonProfitCourses: CourseCardProps[] = [
  {
    id: "np-1",
    title: "Uncoding Inequality: Women in AI & Social Justice",
    description: "An in-depth exploration of women's contributions and challenges in AI, examining bias in algorithms and fostering more inclusive AI development approaches.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    tags: ["Women in Tech", "AI Ethics", "Social Justice", "Gender Equity"]
  },
  {
    id: "np-2",
    title: "Inclusive EdTech: Women Shaping Digital Learning",
    description: "A comprehensive course exploring women's impact in educational technology, addressing gender gaps in tech leadership, and developing strategies for inclusive digital learning.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    tags: ["EdTech", "Digital Inclusion", "Women Leaders", "Education Innovation"]
  },
  {
    id: "np-3",
    title: "Beyond Stereotypes: Asian Women in Activism & Leadership",
    description: "A transformative course examining the historical and contemporary roles of Asian women in social movements, challenging stereotypes, and developing strategies for advocacy.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    tags: ["AAPI Leadership", "Intersectionality", "Social Activism", "Identity"]
  }
];

// All courses combined
export const allCourses = [
  ...higherEdCourses,
  ...nonProfitCourses
];

// Get course by ID
export const getCourseById = (id: string): CourseCardProps | undefined => {
  return allCourses.find(course => course.id === id);
};

// Course categories with descriptions
export const categories = [
  {
    id: "higher-ed",
    title: "Higher Education",
    description: "Graduate-level courses designed for diverse learners, focusing on digital media, design thinking, and game-based learning."
  },
  {
    id: "non-profit",
    title: "Community & Non-Profit Initiatives",
    description: "Educational programs developed for community organizations, focusing on gender equity, women in technology, and inclusive leadership."
  }
];

// Course details (expanded information for detail pages)
export const courseDetails: Record<string, {
  objectives: string[];
  audience: string;
  duration: string;
  methodology: string;
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  }
}> = {
  "he-4": {
    objectives: [
      "Equip tutors with foundational skills in pedagogy and effective teaching methods",
      "Develop student engagement strategies for diverse learning environments",
      "Practice active listening and problem-solving in tutoring scenarios",
      "Implement inclusive tutoring approaches for various learning needs"
    ],
    audience: "New and returning tutors, faculty members overseeing tutoring services",
    duration: "8 weeks",
    methodology: "This program combines hands-on role-playing activities, real-world tutoring scenarios, and digital learning resources including video tutorials, interactive assessments, and case studies.",
    outcomes: [
      "Enhanced tutoring skills for improved student learning outcomes",
      "Practical experience through simulated tutoring scenarios",
      "Digital portfolio of tutoring strategies and resources"
    ]
  },
  "he-5": {
    objectives: [
      "Introduce international students to Chinese higher education systems and academic expectations",
      "Facilitate cultural adaptation through language basics and etiquette training",
      "Provide comprehensive orientation on university policies and available student services",
      "Establish peer mentoring relationships for ongoing student support"
    ],
    audience: "Incoming international students, university administrators, faculty mentors",
    duration: "3 weeks",
    methodology: "This orientation program features interactive workshops on university policies and academic systems, cultural adaptation training, language basics, and a structured peer mentoring system for additional support.",
    outcomes: [
      "Improved academic readiness for the Chinese educational environment",
      "Enhanced cultural competence and social integration strategies",
      "Established support network through peer mentoring connections"
    ]
  },
  "he-6": {
    objectives: [
      "Develop ESL learners' grammar and writing skills for academic contexts",
      "Prepare students for standardized language tests including TOEFL, IELTS, and Duolingo",
      "Enhance speaking proficiency through structured practice sessions",
      "Create individualized study plans based on specific learning needs"
    ],
    audience: "ESL learners, international students, working professionals preparing for standardized exams",
    duration: "12 weeks",
    methodology: "This program provides grammar and writing workshops tailored for non-native speakers, test preparation with targeted exercises and practice tests, speaking practice sessions with AI-powered feedback, and customizable study plans.",
    outcomes: [
      "Improved standardized test scores and overall language proficiency",
      "Enhanced confidence in academic and professional English usage",
      "Personalized language development strategies for continued growth"
    ]
  },
  "np-1": {
    objectives: [
      "Understand women's contributions and challenges in AI fields",
      "Examine bias in AI algorithms and how it impacts marginalized communities",
      "Learn about women leaders and pioneers in AI",
      "Explore DEI strategies for fostering more inclusive AI development",
      "Develop solutions to reduce bias and increase gender equity in AI"
    ],
    audience: "Women in AI & data science, tech professionals, DEI advocates, educators, and those interested in AI ethics and gender equity.",
    duration: "12 weeks",
    methodology: "This course combines case studies, TED talks, panel discussions with AI experts, hands-on bias exploration activities, and a culminating project focused on gender-equitable AI.",
    outcomes: [
      "Critical analysis framework for identifying gender bias in AI systems",
      "Portfolio of case studies examining ethical AI development",
      "Action plan for implementing inclusive AI practices"
    ],
    testimonial: {
      quote: "This course transformed my understanding of how gender impacts AI development. I've implemented new bias detection processes in our company's machine learning pipeline as a direct result.",
      author: "Sophia Chen",
      title: "Machine Learning Engineer"
    }
  },
  "np-2": {
    objectives: [
      "Understand the history, impact, and contributions of women in EdTech",
      "Explore the gender gap in technology and leadership within education",
      "Examine how EdTech can advance or hinder equity in education",
      "Learn from women leaders, entrepreneurs, and policymakers in EdTech",
      "Develop strategies for inclusive digital learning and innovation"
    ],
    audience: "Educators, instructional designers, women in tech & leadership, entrepreneurs, and professionals interested in inclusive educational technology.",
    duration: "10 weeks",
    methodology: "The program features case studies of women-led EdTech initiatives, multimedia analysis, guest speakers from the industry, and action-based projects designed to address real-world EdTech challenges.",
    outcomes: [
      "Framework for evaluating educational technology for inclusivity",
      "Inclusive EdTech initiative design proposal",
      "Professional network of women in educational technology"
    ]
  },
  "np-3": {
    objectives: [
      "Understand the historical and contemporary challenges Asian women face globally",
      "Explore intersectionality and how gender, race, and culture shape identity",
      "Analyze Asian women's roles in social justice movements and activism",
      "Recognize stereotypes and biases affecting Asian women's experiences",
      "Develop strategies for advocacy, allyship, and policy change"
    ],
    audience: "College students, educators, corporate DEI trainers, social justice advocates, and anyone interested in gender studies, feminism, or Asian studies.",
    duration: "8 weeks",
    methodology: "This workshop series combines case studies of key figures in Asian women's activism, multimedia analysis, panel discussions with community leaders, reflective writing, and action-based learning projects.",
    outcomes: [
      "Enhanced understanding of intersectionality and Asian women's experiences",
      "Advocacy toolbox for addressing stereotypes and promoting inclusion",
      "Personal action plan for allyship and community engagement"
    ],
    testimonial: {
      quote: "This program gave me the language and framework to understand my experiences as an Asian American woman in leadership. The community we built continues to be a source of support and inspiration.",
      author: "Michelle Park",
      title: "Community Organizer & Educator"
    }
  }
};
