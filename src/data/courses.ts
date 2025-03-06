
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

// Corporate Training Courses
export const corporateCourses: CourseCardProps[] = [
  {
    id: "corp-1",
    title: "Equity & Diversity in the Tech Workplace",
    description: "A professional development program designed for tech corporations to foster inclusive workplaces and address unconscious bias.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Diversity & Inclusion", "Tech Industry", "Professional Development"]
  },
  {
    id: "corp-2",
    title: "Instructional Design for Tech Professionals",
    description: "A specialized training program helping technical experts develop effective teaching and training materials for diverse audiences.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Instructional Design", "Technical Training", "Knowledge Transfer"]
  },
  {
    id: "corp-3",
    title: "Digital Storytelling for Business",
    description: "A workshop teaching professionals how to leverage narrative techniques for impactful business communications and presentations.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Storytelling", "Business Communication", "Presentation Skills"]
  }
];

// ESL and Writing Courses
export const eslCourses: CourseCardProps[] = [
  {
    id: "esl-1",
    title: "Academic Writing for International Students",
    description: "A course designed to help international students develop strong academic writing skills in English for university contexts.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["Academic Writing", "ESL", "University Preparation"]
  },
  {
    id: "esl-2",
    title: "Business Communication for Global Professionals",
    description: "A practical course focusing on effective business communication strategies for multilingual professionals in global workplaces.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tags: ["Business English", "Global Communication", "Professional Writing"]
  },
  {
    id: "esl-3",
    title: "Writing in the Digital Age",
    description: "A course that explores effective writing across digital platforms, from blogs to social media to professional online content.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Writing", "Content Creation", "Online Communication"]
  }
];

// Non-Profit Courses
export const nonProfitCourses: CourseCardProps[] = [
  {
    id: "np-1",
    title: "Beyond Stereotypes: Asian Women in Leadership",
    description: "A community-based workshop addressing stereotypes affecting Asian women in professional settings and developing leadership strategies.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    tags: ["AAPI Community", "Leadership Development", "Identity & Empowerment"]
  },
  {
    id: "np-2",
    title: "Digital Advocacy for Community Organizations",
    description: "A training program teaching non-profit organizations how to leverage digital tools for effective advocacy and community engagement.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Advocacy", "Community Engagement", "Non-Profit Technology"]
  },
  {
    id: "np-3",
    title: "Women in EdTech: Breaking Barriers",
    description: "A workshop series focused on supporting women entering and advancing in educational technology fields through mentorship and skill development.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["Women in Tech", "EdTech", "Gender Equity"]
  }
];

// All courses combined
export const allCourses = [
  ...higherEdCourses,
  ...corporateCourses,
  ...eslCourses,
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
    id: "corporate",
    title: "Corporate Training",
    description: "Professional development programs emphasizing diversity, technical communication, and digital storytelling for business contexts."
  },
  {
    id: "esl-writing",
    title: "ESL & Writing Instruction",
    description: "Specialized courses supporting multilingual learners in academic and professional settings with a focus on digital communication."
  },
  {
    id: "non-profit",
    title: "Community & Non-Profit Initiatives",
    description: "Educational programs developed for community organizations, focusing on digital advocacy, AAPI leadership, and women in technology."
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
      "Identify and analyze stereotypes affecting Asian women in professional settings",
      "Develop authentic leadership approaches that honor cultural identity",
      "Create strategies for navigating bias and microaggressions",
      "Build community networks for ongoing support and mentorship"
    ],
    audience: "Asian and Asian American women in professional fields, community organizers, and AAPI advocacy organizations.",
    duration: "8 weeks (workshop series)",
    methodology: "The program combines personal narrative exploration, case studies, community-building activities, and action planning. Participants develop personal leadership philosophies while building supportive networks.",
    outcomes: [
      "Personal leadership development plan",
      "Community resource network",
      "Strategies for workplace advocacy and empowerment"
    ],
    testimonial: {
      quote: "This workshop transformed how I view my cultural identity in leadership contexts. The community we built continues to be a source of support and inspiration.",
      author: "Michelle Chen",
      title: "Education Technology Director"
    }
  },
  "esl-1": {
    objectives: [
      "Develop academic writing conventions for university contexts",
      "Build research and source integration skills",
      "Enhance critical thinking through written analysis",
      "Master editing and revision strategies for academic English"
    ],
    audience: "International and multilingual students preparing for or currently enrolled in university programs.",
    duration: "10 weeks",
    methodology: "The course uses a process-oriented approach to writing, with regular peer review, individual conferences, and scaffolded assignments that build toward major academic writing projects.",
    outcomes: [
      "Academic research paper demonstrating scholarly conventions",
      "Literature review synthesizing multiple sources",
      "Reflective portfolio documenting writing development"
    ]
  }
  // Additional details for other courses can be added as needed
};
