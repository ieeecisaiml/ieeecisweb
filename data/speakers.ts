export interface PlenaryPresenter {
  id: string
  name: string
  title: string
  organization: string
  topic: string
  bio: string
  image?: string
  dayNumber: number
  linkedin?: string
  scholar?: string
}

export interface Instructor {
  id: string
  name: string
  title: string
  organization: string
  topics: string[]
  bio: string
  image?: string
  linkedin?: string
  scholar?: string
}

export const plenaryPresenters: PlenaryPresenter[] = [
  {
    id: 'debmalya-biswas',
    name: 'Dr. Debmalya Biswas',
    title: 'Executive Director & AI CoE Lead',
    organization: 'UBS, Switzerland',
    topic: 'AI/ML, Big Data Analytics, Privacy & Security in LLM Systems',
    bio: 'Over 20 years of experience in AI, Machine Learning, Big Data Analytics, and Privacy & Security. Holds 50+ patents and authored 30+ scientific publications. Frequent speaker at leading international AI/ML conferences.',
    dayNumber: 1,
    image: '/speakers/debmalyabiswas.jpeg',
    linkedin: 'https://www.linkedin.com/in/debmalya-biswas-3975261/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=IoAMRcEAAAAJ',
  },
  {
    id: 'aniruddha-joshi',
    name: 'Dr. Aniruddha Joshi',
    title: 'Founder & CEO',
    organization: 'Atreya Innovations / IIT Bombay',
    topic: 'AI in Healthcare: Integrating LLMs with Interpretable Diagnostic Systems',
    bio: 'PhD from IIT Bombay. Pioneered Nadi Tarangini device for AI-enabled pulse-based diagnosis. Expert in medical AI, signal processing, and interpretable healthcare systems.',
    dayNumber: 2,
    image: '/speakers/aniruddhajoshi.jpeg',
    scholar: 'https://scholar.google.com/citations?user=bS9qm5UAAAAJ&hl=en&oi=ao',
  },
  {
    id: 'pratap-sanap',
    name: 'Dr. Pratap Sanap',
    title: 'Head of Research & Innovation',
    organization: 'Neilsoft, Pune',
    topic: 'Deploying LLMs at Scale: Serving Frameworks, Batching & Cost Optimization',
    bio: '23+ years in AI, computer vision, speech processing, and video analytics. Expert in translating cutting-edge research into scalable real-world applications for enterprise and industrial environments.',
    dayNumber: 3,
    image: '/speakers/pratapsanap.png',
    linkedin: 'https://www.linkedin.com/in/pratap-sanap/',
  },
  {
    id: 'sachin-pawar',
    name: 'Dr. Sachin Pawar',
    title: 'Researcher',
    organization: 'TCS Research',
    topic: 'Foundation Models & LLM Landscape: Architecture, Pretraining & Fine-Tuning',
    bio: 'Specializes in NLP and AI research. Focused on developing scalable NLP systems, language understanding models, and enterprise-grade AI applications.',
    dayNumber: 4,
    image: '/speakers/sachinpawar.png',
    imageAlign: 'top',
    linkedin: 'https://www.linkedin.com/in/pawarsachin/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=D6Tl2tkAAAAJ',
  },
  {
    id: 'surya-durbha',
    name: 'Prof. Dr. Surya Durbha',
    title: 'Professor & Head of CSRE',
    organization: 'IIT Bombay',
    topic: 'Efficient LLM Inference: Quantization, Pruning & Knowledge Distillation',
    bio: 'Expert in large-scale data systems and AI modeling. Research spans geospatial analytics, remote sensing, and AI-driven earth observation systems.',
    dayNumber: 5,
    image: '/speakers/suryadurbha.jpeg',
    scholar: 'https://scholar.google.com/citations?hl=en&user=_9b5RVUAAAAJ',
  },
  {
    id: 'rakshit-jain',
    name: 'Rakshit Jain',
    title: 'AI Systems Engineer',
    organization: 'PTC',
    topic: 'From Fine-Tuning to Inference: Designing Scalable LLM Systems with RAG and Graph-Based Retrieval',
    bio: 'Chair of IEEE Young Professionals Pune Section. Expert in GraphRAG, GraphNNs, fine-tuned LLMs, and production-grade AI solutions with focus on industrial automation.',
    dayNumber: 6,
    image: '/speakers/rakshitjain.jpeg',
    linkedin: 'https://www.linkedin.com/in/rakshit-a-n-jain/',
  },
]

export const instructors: Instructor[] = [
  {
    id: 'kishor-burchundi',
    name: 'Dr. Kishor Burchundi',
    title: 'Professor',
    organization: 'VNIT Nagpur',
    topics: ['LLM Architectures', 'Transformers', 'Tokenization'],
    bio: '25+ years in applied AI, pattern recognition, and computer vision. Expert in foundational AI techniques and real-time image analysis systems.',
    image: '/speakers/kishorbhurchandi.jpg',
    scholar: 'https://scholar.google.com/citations?hl=en&user=RfarD8wAAAAJ',
  },
  {
    id: 'nikhil-pal',
    name: 'Prof. Nikhil R. Pal',
    title: 'Professor & Fellow IEEE',
    organization: 'Indian Statistical Institute, Kolkata',
    topics: ['LoRA', 'Parameter-Efficient Fine-Tuning', 'Optimization'],
    bio: 'Fellow of IEEE and INAE. 250+ research publications in fuzzy systems, neural networks, and computational intelligence. Former Editor-in-Chief of IEEE Transactions on Fuzzy Systems.',
  },
  {
    id: 'leelavati-narlikar',
    name: 'Dr. Leelavati Narlikar',
    title: 'Associate Professor & Deputy Chair',
    organization: 'IISER Pune',
    topics: ['Instruction Tuning', 'RLHF', 'Direct Preference Optimization'],
    bio: '17+ years in machine learning, computational biology, and AI research. Expert in building interpretable and efficient deep learning models for healthcare and genomics.',
    image: '/speakers/leelavatinarlikar.jpg',
    linkedin: 'https://www.linkedin.com/in/leelavati-narlikar-47a72213/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=6AhiMp0AAAAJ',
  },
  {
    id: 'mita-gaware',
    name: 'Ms. Mita Gaware',
    title: 'R&D Software Development Manager',
    organization: 'Dassault Systèmes',
    topics: ['Quantization', 'INT8/INT4', 'GPTQ', 'AWQ'],
    bio: 'Expertise in NLP, enterprise AI systems, and scalable software development. Expert in optimizing model performance in production environments.',
    image: '/speakers/mita.jpeg',
    linkedin: 'https://www.linkedin.com/in/mita-gaware-21b43a65/',
  },
  {
    id: 'uday-khedkar',
    name: 'Dr. Uday Khedkar',
    title: 'Professor',
    organization: 'IIT Bombay',
    topics: ['Training Pipelines', 'Compiler Optimizations', 'System Design'],
    bio: 'Extensive experience in programming languages, compilers, and ML. Expert in structured prediction and system-level optimizations for LLMs.',
    image: '/speakers/udaykhedkar.jpg',
    scholar: 'https://scholar.google.com/citations?user=mMX9vxkAAAAJ&hl=en&oi=ao',
  },
  {
    id: 'atul-kamble',
    name: 'Atul Kamble',
    title: 'AI/ML Expert',
    organization: 'Cariad, Volkswagen Group',
    topics: ['Business-AI Integration', 'Real-World Systems', 'Scalable Solutions'],
    bio: 'Decade+ of experience in Machine Learning and AI systems. Expert in aligning AI with business needs and designing scalable solutions.',
    image: '/speakers/atulkamble.jpeg',
    linkedin: 'https://www.linkedin.com/in/atulmkamble/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=wAVfb48AAAAJ',
  },
  {
    id: 'bhushan-borotikar',
    name: 'Dr. Bhushan Borotikar',
    title: 'Associate Professor & Research Head',
    organization: 'Symbiosis Centre for Medical Image Analysis',
    topics: ['Healthcare AI', 'Clinical Decision Support', 'Medical Imaging'],
    bio: '20+ years in medical imaging, biomechanics, and AI-driven healthcare analytics. Expert in intelligent diagnostic systems.',
    image: '/speakers/bhushan.jpeg',
    linkedin: 'https://www.linkedin.com/in/bhushan-borotikar-0773514/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=u4wHEJoAAAAJ',
  },
  {
    id: 'dipesh-walte',
    name: 'Dr. Dipesh Walte',
    title: 'Managing Director',
    organization: 'Brainchain MPI People Pvt. Ltd.',
    topics: ['Enterprise Deployment', 'Scalable Systems', 'Workforce Analytics'],
    bio: 'Experienced AI practitioner specializing in deploying scalable AI systems. Expert in enterprise solutions and real-world system integration.',
    image: '/speakers/dipesh.jpeg',
    linkedin: 'https://www.linkedin.com/in/dipesh-walte-45917157/?skipRedirect=true',
  },
  {
    id: 'tejas-gajare',
    name: 'Tejas Gajare',
    title: 'Technology Professional',
    organization: 'Hewlett Packard Enterprise',
    topics: ['Backend Infrastructure', 'System Design', 'Performance Optimization'],
    bio: 'Expertise in backend systems, computer vision, and enterprise software. Expert in designing scalable applications and optimizing performance.',
    image: '/speakers/tejasgajare.jpeg',
    linkedin: 'https://www.linkedin.com/in/tejasgajare/',
  },
  {
    id: 'abhishek-gaikwad',
    name: 'Abhishek Gaikwad',
    title: 'Data Engineer',
    organization: 'NVIDIA, California',
    topics: ['Data Pipelines', 'Large-Scale Infrastructure', 'Distributed Systems'],
    bio: 'Specializes in large-scale data processing and AI infrastructure. Expert in distributed systems and optimizing data workflows for modern AI.',
    image: '/speakers/abhishek.jpeg',
    linkedin: 'https://www.linkedin.com/in/gaikwadabhishek/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=ZnO3YQYAAAAJ',
  },
  {
    id: 'yogesh-kulkarni',
    name: 'Dr. Yogesh Kulkarni',
    title: 'AI Advisor & Founder',
    organization: 'Pune AI Community',
    topics: ['Generative AI', 'NLP', 'AI Ecosystems'],
    bio: 'Over 20 years of experience in AI, CAD systems, and generative AI. Actively mentors startups, leads AI initiatives, and contributes to building a strong AI ecosystem.',
    image: '/speakers/yogeshkulkarni.jpeg',
    linkedin: 'https://www.linkedin.com/in/yogeshkulkarni/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=RuELzwYAAAAJ',
  },
  {
    id: 'jayashree-prasad',
    name: 'Dr. Jayashree Prasad',
    title: 'Chair & Data Analyst',
    organization: 'IEEE CIS Pune Chapter / IBM',
    topics: ['Responsible AI', 'Ethics', 'Data Analytics'],
    bio: 'Chair of the IEEE Computational Intelligence Society (CIS), Pune Chapter, and a data analytics professional at IBM. Emphasizes responsible AI practices and ethical deployment of intelligent systems.',
    image: '/speakers/jayashree.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-jayashree-rajesh-prasad-3256621b/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=i8aabkkAAAAJ',
  },
  {
    id: 'anuradha-thakre',
    name: 'Dr. Anuradha Thakre',
    title: 'Head of CSE (AI & ML)',
    organization: 'PCCOE',
    topics: ['Machine Learning', 'Evolutionary Computing', 'Data Science'],
    bio: 'Head of the Department of CSE (AI & ML) at PCCoE with extensive experience in data science, intelligent systems, and machine learning.',
    image: '/speakers/anuradhathakare.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-anuradha-thakare-41541abb/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=sjE0ZZAAAAAJ',
  },
  {
    id: 'sonal-gore',
    name: 'Dr. Sonal Gore',
    title: 'Associate Professor, CSE (AI & ML)',
    organization: 'PCCOE',
    topics: ['Healthcare AI', 'Medical Image Analysis', 'Applied AI'],
    bio: 'Associate Professor in the Department of CSE (AI & ML) at PCCoE, specializing in medical image analysis and artificial intelligence.',
    image: '/speakers/sonalgore.jpg',
    linkedin: 'https://www.linkedin.com/in/dr-sonal-gore-66a47822/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=xAin70UAAAAJ',
  },
]
