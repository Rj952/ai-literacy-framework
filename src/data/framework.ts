// AI Literacy Framework Data
// Based on U.S. Department of Labor AI Literacy Framework
// Platform created by Rohan Jowallah

export interface ContentArea {
  id: number;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  colorPrimary: string;
  colorAccent: string;
  details: string[];
  assessmentQuestion: string;
}

export interface DeliveryPrinciple {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface PolicyAlignment {
  policy: string;
  source: string;
  year: string;
  connection: string;
}

export const CONTENT_AREAS: ContentArea[] = [
  {
    id: 1,
    title: 'Understand AI Principles',
    shortTitle: 'Understand',
    icon: 'ð§ ',
    description: 'Understanding AI\'s core concepts, capabilities, and limitations, creating the foundation for effective use. This area ensures individuals can distinguish between what AI can and cannot do, how AI systems learn from data, and why human oversight remains essential.',
    colorPrimary: '#0A4D8C',
    colorAccent: '#3B9AE1',
    details: [
      'Pattern recognition and probabilistic outputs',
      'Capabilities and modalities (text, audio, visual)',
      'Training versus inference processes',
      'Hallucinations and accuracy limits',
      'Human design and oversight requirements',
    ],
    assessmentQuestion: 'I can explain what AI is and describe its core capabilities and limitations to a colleague.',
  },
  {
    id: 2,
    title: 'Explore AI Uses',
    shortTitle: 'Explore',
    icon: 'ð',
    description: 'Directly exploring different AI tools and relevant use cases, and how AI can complement human expertise. This area encourages hands-on experimentation with AI tools across professional contexts to build practical familiarity.',
    colorPrimary: '#0B6E4F',
    colorAccent: '#2EC4A0',
    details: [
      'Productivity tools for drafting and analysis',
      'Information support and knowledge retrieval',
      'Creative assistance for content generation',
      'Task-specific applications such as coding and transcription',
      'Decision-support systems and forecasting',
    ],
    assessmentQuestion: 'I have explored and used AI tools relevant to my work to complete real tasks.',
  },
  {
    id: 3,
    title: 'Direct AI Effectively',
    shortTitle: 'Direct',
    icon: 'ð¯',
    description: 'Understanding how to provide the right context to AI and how to create clear prompts that produce effective outputs. This area develops the practical skill of communicating with AI systems through structured prompting techniques.',
    colorPrimary: '#7B2D8E',
    colorAccent: '#C084FC',
    details: [
      'Contextual framing for better responses',
      'Structured prompting techniques',
      'Supplying relevant input data',
      'Iterating and refining outputs',
      'Avoiding vague or misleading prompts',
    ],
    assessmentQuestion: 'I know how to write effective prompts with clear context to get useful AI outputs.',
  },
  {
    id: 4,
    title: 'Evaluate AI Outputs',
    shortTitle: 'Evaluate',
    icon: 'âï¸',
    description: 'Assessing AI-generated results for accuracy and relevance, and understanding how to iterate on AI outputs. This area builds critical thinking capacity for reviewing AI content before use in professional settings.',
    colorPrimary: '#B45309',
    colorAccent: '#F59E0B',
    details: [
      'Verifying factual accuracy against sources',
      'Assessing completeness and clarity',
      'Spotting gaps or logical errors',
      'Aligning with strategic intent',
      'Applying professional human judgment',
    ],
    assessmentQuestion: 'I can evaluate AI-generated content for accuracy, completeness, and fitness for purpose.',
  },
  {
    id: 5,
    title: 'Use AI Responsibly',
    shortTitle: 'Responsible',
    icon: 'ð¡ï¸',
    description: 'Using AI in ethical and secure ways, protecting critical information, and ensuring accountability for outcomes. This area addresses the governance, privacy, and ethical dimensions of AI adoption in professional and institutional contexts.',
    colorPrimary: '#991B1B',
    colorAccent: '#F87171',
    details: [
      'Protecting sensitive information',
      'Following workplace policies and rules',
      'Avoiding misuse or harm',
      'Managing context-specific risks',
      'Maintaining human accountability',
    ],
    assessmentQuestion: 'I understand data privacy, workplace AI policies, and my accountability for AI outputs.',
  },
];

export const DELIVERY_PRINCIPLES: DeliveryPrinciple[] = [
  {
    id: 1,
    title: 'Enable Experiential Learning',
    icon: 'ð¬',
    description: 'Delivering AI literacy through practical, hands-on experiences that allow AI skills to be practiced in real-world situations.',
  },
  {
    id: 2,
    title: 'Embed Learning in Context',
    icon: 'ð',
    description: 'Integrating into existing processes and in the context of the industry or characteristics that make it most actionable.',
  },
  {
    id: 3,
    title: 'Build Complementary Human Skills',
    icon: 'ð¤',
    description: 'Using AI to augment human skills such as judgment, creativity, communication, and problem-solving.',
  },
  {
    id: 4,
    title: 'Address Prerequisites to AI Literacy',
    icon: 'ð',
    description: 'Addressing barriers to participation and success with AI literacy, including digital literacy and broadband access.',
  },
  {
    id: 5,
    title: 'Create Pathways for Continued Learning',
    icon: 'ð¤ï¸',
    description: 'Providing structured routes to progress to more advanced, specialized AI skills and AI-related occupations.',
  },
  {
    id: 6,
    title: 'Prepare Enabling Roles',
    icon: 'ð¥',
    description: 'Equipping managers, counselors, and others who play a supportive role to a participant\'s AI learning.',
  },
  {
    id: 7,
    title: 'Design for Agility',
    icon: 'â¡',
    description: 'Ensuring there are proactive, built-in mechanisms to rapidly update content and delivery as AI capabilities evolve.',
  },
];

export const POLICY_ALIGNMENTS: PolicyAlignment[] = [
  {
    policy: 'U.S. Department of Labor AI Literacy Framework (2025)',
    source: 'U.S. Department of Labor',
    year: '2025',
    connection: 'Direct foundation â the platform\'s five content areas and seven delivery principles are built upon and extend the DOL\'s national AI literacy framework for workforce readiness.',
  },
  {
    policy: 'Executive Order 14110 on Safe, Secure, and Trustworthy AI (2023)',
    source: 'The White House',
    year: '2023',
    connection: 'Supports the Executive Order\'s mandate for AI workforce development, responsible AI use, and the establishment of AI literacy standards across federal agencies and the broader workforce.',
  },
  {
    policy: 'National AI Initiative Act (2020)',
    source: 'U.S. Congress',
    year: '2020',
    connection: 'Aligns with the Act\'s goals of expanding AI education, developing a skilled AI workforce, and ensuring public understanding of AI technologies across all sectors.',
  },
  {
    policy: 'NIST AI Risk Management Framework (AI RMF 1.0)',
    source: 'National Institute of Standards and Technology',
    year: '2023',
    connection: 'The platform\'s "Use AI Responsibly" content area directly maps to NIST\'s Govern, Map, Measure, and Manage functions for trustworthy AI systems.',
  },
  {
    policy: 'Blueprint for an AI Bill of Rights',
    source: 'White House Office of Science and Technology Policy',
    year: '2022',
    connection: 'Reinforces principles of safe and effective systems, algorithmic discrimination protections, data privacy, notice and explanation, and human alternatives â all reflected in the framework\'s responsible use content.',
  },
  {
    policy: 'Workforce Innovation and Opportunity Act (WIOA)',
    source: 'U.S. Department of Labor',
    year: '2014/Reauthorized',
    connection: 'Supports WIOA\'s emphasis on workforce training, digital literacy, and career pathway development â the platform enables organizations to build AI-specific learning pathways aligned with WIOA goals.',
  },
  {
    policy: 'National Artificial Intelligence Research Resource (NAIRR) Task Force Report',
    source: 'National Science Foundation',
    year: '2023',
    connection: 'Supports democratizing access to AI education resources, aligning with NAIRR\'s vision of equitable AI research and education infrastructure.',
  },
  {
    policy: 'Department of Education AI Guidance for Schools',
    source: 'U.S. Department of Education',
    year: '2023',
    connection: 'Complements the DOE\'s recommendations for integrating AI into educational settings with appropriate safeguards, training, and ethical guidelines.',
  },
];

export const ASSESSMENT_LEVELS = [
  { value: 1, label: 'Not Yet', description: 'I have not yet engaged with this area', color: '#94a3b8' },
  { value: 2, label: 'Emerging', description: 'I have basic awareness but limited practical experience', color: '#f59e0b' },
  { value: 3, label: 'Developing', description: 'I have moderate understanding and some practical experience', color: '#3b82f6' },
  { value: 4, label: 'Proficient', description: 'I have strong understanding and regular practical application', color: '#22c55e' },
];
