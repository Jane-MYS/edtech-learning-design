
import { CourseCardProps } from "@/components/CourseCard";

// Higher Education Courses
export const higherEdCourses: CourseCardProps[] = [
  {
    id: "he-1",
    title: "ZTSD: Design for Thinking",
    description: "A graduate course focused on design for thinking and the impact of human-centered approach in learning environment design.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["Graduate Education", "Design Thinking", "Human-Centered Design"]
  },
  {
    id: "he-2",
    title: "ELIT 697: New Media Studies Practicum",
    description: "A graduate practicum exploring digital media production and theory, focusing on interactive narratives and digital storytelling.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Media", "Interactive Narratives", "Graduate Seminar"]
  },
  {
    id: "he-3",
    title: "COMP 691: Games, Learning, & Society",
    description: "An interdisciplinary course examining the intersection of game design, learning theory, and social impact in digital game environments.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Game Design", "Learning Theory", "Digital Pedagogy"]
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
  "he-1": {
    objectives: [
      "Apply design thinking methodologies to educational contexts",
      "Develop human-centered approaches to learning experience design",
      "Create innovative learning solutions through iterative prototyping",
      "Evaluate the effectiveness of design-based learning interventions"
    ],
    audience: "Graduate students in education, instructional design, and related fields interested in design-based approaches to learning.",
    duration: "15 weeks (1 semester)",
    methodology: "This course employs studio-based learning with regular design critiques, collaborative projects, and theoretical discussions. Students engage in hands-on design challenges throughout the semester.",
    outcomes: [
      "Design thinking portfolio demonstrating process and solutions",
      "Research-based learning experience prototype",
      "Theoretical framework connecting design principles to learning science"
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
