export const CONTENT_AREAS = [
  {
    id: 1, title: 'Understand AI Principles', shortTitle: 'AI Principles', icon: '🧠',
    description: 'Understand what AI is, how it works, and its capabilities and limitations.',
    colorPrimary: 'blue', colorAccent: '#3b82f6',
    details: ['What AI is and how it works', 'Types of AI systems', 'Capabilities and limitations', 'How AI learns from data'],
    assessmentQuestion: 'How confident are you in explaining what AI is and how it works?'
  },
  {
    id: 2, title: 'Explore AI Uses', shortTitle: 'AI Uses', icon: '🔍',
    description: 'Identify and evaluate how AI is used in different work contexts.',
    colorPrimary: 'green', colorAccent: '#22c55e',
    details: ['AI applications in your field', 'Evaluating AI tool suitability', 'Understanding automation vs augmentation', 'Identifying AI in daily workflows'],
    assessmentQuestion: 'How confident are you in identifying AI applications in your work?'
  },
  {
    id: 3, title: 'Direct AI Effectively', shortTitle: 'Direct AI', icon: '🎯',
    description: 'Learn to interact with and direct AI systems effectively.',
    colorPrimary: 'purple', colorAccent: '#a855f7',
    details: ['Crafting effective prompts', 'Iterating on AI outputs', 'Customizing AI behavior', 'Integrating AI into workflows'],
    assessmentQuestion: 'How confident are you in effectively directing AI tools?'
  },
  {
    id: 4, title: 'Evaluate AI Outputs', shortTitle: 'Evaluate AI', icon: '⚖️',
    description: 'Critically evaluate AI-generated content and decisions.',
    colorPrimary: 'amber', colorAccent: '#f59e0b',
    details: ['Assessing accuracy and reliability', 'Identifying bias in AI outputs', 'Fact-checking AI-generated content', 'Understanding confidence levels'],
    assessmentQuestion: 'How confident are you in evaluating AI-generated content?'
  },
  {
    id: 5, title: 'Use AI Responsibly', shortTitle: 'Responsible AI', icon: '🛡️',
    description: 'Apply ethical principles and responsible practices when using AI.',
    colorPrimary: 'red', colorAccent: '#ef4444',
    details: ['Data privacy and security', 'Ethical considerations', 'Transparency and disclosure', 'Organizational AI policies'],
    assessmentQuestion: 'How confident are you in using AI responsibly and ethically?'
  }
];

export const DELIVERY_PRINCIPLES = [
  { id: 1, title: 'Enable Experiential Learning', icon: '🔬', description: 'Provide hands-on opportunities to practice with AI tools.' },
  { id: 2, title: 'Embed Learning in Context', icon: '🏢', description: 'Ground AI literacy in real workplace scenarios.' },
  { id: 3, title: 'Build Complementary Human Skills', icon: '🤝', description: 'Strengthen critical thinking, creativity, and judgment.' },
  { id: 4, title: 'Address Prerequisites', icon: '📚', description: 'Ensure foundational digital literacy skills are in place.' },
  { id: 5, title: 'Create Pathways for Continued Learning', icon: '🛤️', description: 'Establish progression from basic to advanced AI skills.' },
  { id: 6, title: 'Prepare Enabling Roles', icon: '👥', description: 'Train leaders and managers to support AI adoption.' },
  { id: 7, title: 'Design for Agility', icon: '⚡', description: 'Build adaptable programs that evolve with AI technology.' }
];

export const POLICY_ALIGNMENTS = [
  { policy: 'U.S. DOL AI Literacy Framework', source: 'Department of Labor', year: '2025', connection: 'Direct foundation for all 5 content areas and 7 delivery principles.' },
  { policy: 'Executive Order 14110', source: 'White House', year: '2023', connection: 'Safe, secure, and trustworthy AI development and deployment.' },
  { policy: 'National AI Initiative Act', source: 'Congress', year: '2020', connection: 'National strategy for AI research and workforce preparation.' },
  { policy: 'NIST AI RMF 1.0', source: 'NIST', year: '2023', connection: 'Risk management framework for AI systems.' },
  { policy: 'Blueprint for an AI Bill of Rights', source: 'OSTP', year: '2022', connection: 'Principles for responsible AI protecting civil rights.' },
  { policy: 'WIOA', source: 'Department of Labor', year: '2014', connection: 'Workforce development and training alignment.' },
  { policy: 'NAIRR Task Force Report', source: 'NSF', year: '2023', connection: 'National AI research resource accessibility.' },
  { policy: 'DOE AI Guidance', source: 'Dept of Education', year: '2023', connection: 'Educational technology and AI integration guidance.' }
];

export const ASSESSMENT_LEVELS = [
  { value: 1, label: 'Not Yet', description: 'No experience or understanding' },
  { value: 2, label: 'Emerging', description: 'Basic awareness, limited practice' },
  { value: 3, label: 'Developing', description: 'Growing understanding, some application' },
  { value: 4, label: 'Proficient', description: 'Strong understanding, regular application' }
];
