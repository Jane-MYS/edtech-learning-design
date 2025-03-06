
import { CourseCardProps } from "@/components/CourseCard";

// Higher Education Courses
export const higherEdCourses: CourseCardProps[] = [
  {
    id: "he-1",
    title: "Interactive Media for Digital Learning",
    description: "A comprehensive course exploring how interactive media can enhance digital learning experiences in higher education settings.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["Interactive Design", "Digital Media", "Educational Technology"]
  },
  {
    id: "he-2",
    title: "Research Methods in Education",
    description: "A methodological course teaching qualitative and quantitative research approaches for educational contexts.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["Research", "Methodology", "Data Analysis"]
  },
  {
    id: "he-3",
    title: "Curriculum Development Fundamentals",
    description: "An in-depth exploration of curriculum design principles and best practices for higher education programs.",
    category: "Higher Education",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Curriculum Design", "Course Planning", "Assessment"]
  }
];

// Corporate Training Courses
export const corporateCourses: CourseCardProps[] = [
  {
    id: "corp-1",
    title: "Leadership Development Program",
    description: "A comprehensive training program designed to develop effective leadership skills for managers and executives.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Leadership", "Management", "Professional Development"]
  },
  {
    id: "corp-2",
    title: "Digital Transformation Strategies",
    description: "A course helping organizations navigate the challenges of digital transformation through strategic planning and implementation.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Strategy", "Innovation", "Change Management"]
  },
  {
    id: "corp-3",
    title: "Data-Driven Decision Making",
    description: "A practical course teaching professionals how to leverage data for informed business decision making.",
    category: "Corporate Training",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Data Analysis", "Business Intelligence", "Decision Making"]
  }
];

// ESL and Writing Courses
export const eslCourses: CourseCardProps[] = [
  {
    id: "esl-1",
    title: "Academic Writing for ESL Learners",
    description: "A specialized course designed to help non-native English speakers develop strong academic writing skills.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["Academic Writing", "ESL", "Language Skills"]
  },
  {
    id: "esl-2",
    title: "Business Communication for International Professionals",
    description: "A practical course focusing on effective business communication strategies for non-native English speakers.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tags: ["Business English", "Communication", "Professional Development"]
  },
  {
    id: "esl-3",
    title: "Creative Writing Workshop",
    description: "An engaging workshop that helps adult learners develop their creative writing skills in English.",
    category: "ESL & Writing",
    imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    tags: ["Creative Writing", "Storytelling", "Narrative Skills"]
  }
];

// Non-Profit Courses
export const nonProfitCourses: CourseCardProps[] = [
  {
    id: "np-1",
    title: "Beyond Stereotypes: Asian Women in Leadership",
    description: "A transformative course addressing stereotypes and empowering Asian women in leadership roles within technology sectors.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    tags: ["Leadership", "Diversity", "Empowerment"]
  },
  {
    id: "np-2",
    title: "Building Inclusive EdTech Communities",
    description: "A course designed to help organizations create more inclusive and diverse educational technology environments.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["Inclusion", "Community Building", "EdTech"]
  },
  {
    id: "np-3",
    title: "Advocacy Through Digital Storytelling",
    description: "A workshop teaching digital storytelling techniques for effective advocacy and awareness campaigns.",
    category: "Non-Profit",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Storytelling", "Advocacy", "Social Impact"]
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
    description: "Innovative courses designed for university settings, focusing on modern pedagogical approaches and digital learning."
  },
  {
    id: "corporate",
    title: "Corporate Training",
    description: "Professional development programs crafted for the private sector, addressing leadership, innovation, and digital transformation."
  },
  {
    id: "esl-writing",
    title: "ESL & Writing Instruction",
    description: "Specialized courses for language learners and adult education, focusing on academic writing and communication skills."
  },
  {
    id: "non-profit",
    title: "Non-Profit Initiatives",
    description: "Educational programs developed for non-profit organizations, with a focus on diversity, inclusion, and women in technology."
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
      "Analyze different interactive media formats for educational purposes",
      "Design engaging digital learning experiences using multimedia elements",
      "Evaluate the effectiveness of interactive content in educational settings",
      "Implement accessibility standards in digital learning materials"
    ],
    audience: "Instructional designers, educational technologists, and faculty members interested in enhancing their digital teaching materials.",
    duration: "12 weeks",
    methodology: "This course employs a project-based learning approach, with participants creating their own interactive learning modules. Regular peer feedback sessions and expert consultations help refine designs.",
    outcomes: [
      "Creation of an interactive learning module",
      "Development of a digital learning strategy",
      "Portfolio of interactive educational assets"
    ]
  },
  "np-1": {
    objectives: [
      "Identify and analyze stereotypes affecting Asian women in technology fields",
      "Develop leadership strategies to overcome systemic barriers",
      "Create supportive networks and mentorship opportunities",
      "Design inclusive policies and practices for organizations"
    ],
    audience: "Women of Asian descent in technology fields, organizational diversity leaders, and EdTech professionals.",
    duration: "8 weeks",
    methodology: "The program combines case studies, interactive workshops, and mentorship connections. Participants engage in reflection activities and collaborative problem-solving.",
    outcomes: [
      "Personal leadership development plan",
      "Organizational inclusion strategy",
      "Network of peer support and resources"
    ],
    testimonial: {
      quote: "This course transformed how I approach leadership in my organization. The strategies I learned have helped me navigate challenges and create more inclusive teams.",
      author: "Michelle Chen",
      title: "Education Technology Director"
    }
  },
  "esl-1": {
    objectives: [
      "Master academic writing conventions and structures",
      "Develop research and citation skills for academic contexts",
      "Refine grammar and vocabulary for scholarly writing",
      "Practice revision and editing techniques"
    ],
    audience: "Non-native English speakers in higher education or preparing for academic programs.",
    duration: "16 weeks",
    methodology: "The course uses a scaffolded approach, gradually building complexity through regular writing assignments. Peer review and individual feedback are emphasized.",
    outcomes: [
      "Portfolio of academic writing samples",
      "Research paper meeting academic standards",
      "Enhanced editing and revision skills"
    ]
  }
  // Additional details for other courses can be added as needed
};
