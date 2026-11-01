export interface ProjectMedia {
  type: "video" | "gif" | "image";
  url: string;
  posterUrl?: string;
  caption?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  period: string;
  category: "Systems & Real-Time" | "Full-Stack & Web" | "Applied AI" | "Algorithms & CV";
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  bulletPoints: string[];
  media: {
    primary: ProjectMedia;
    gallery?: ProjectMedia[];
  };
  keyMetrics: ProjectMetric[];
  challengesAndTradeoffs: ProjectChallenge[];
  architectureOverview: {
    problem: string;
    systemDesign: string;
    keyAchievements: string[];
    dataFlowSteps: { step: number; title: string; desc: string }[];
  };
}

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  highlightText: string;
  category: "Competitive Programming" | "Academic Pedigree" | "Systems Engineering";
  link?: string;
  iconName: string;
}

export interface CPRatingHistoryPoint {
  contest: string;
  rating: number;
  date: string;
  rank?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nikhil Saini",
    title: "Software Engineer",
    roles: [
      "Distributed Systems & Real-Time Engineer",
      "Full-Stack Product Architect",
      "Competitive Programmer & Algorithmic Problem Solver"
    ],
    availabilityStatus: "Available for Backend, Real-Time & High-Performance Roles",
    location: "Mumbai, India",
    email: "nikhil1010saini@gmail.com",
    phone: "+91 9145990892",
    resumeUrl: "/Nikhil_Saini.pdf",
    shortBio:
      "Dual Degree graduate from IIT Bombay with a passion for architecting resilient low-latency distributed systems, serverless WebRTC engines, and high-throughput real-time web applications. Ranked in the top 1% globally in algorithmic problem solving (LeetCode Guardian 2300+, Codeforces Candidate Master 1980+, CodeChef 5-Star 2000+).",
    socialLinks: {
      github: "https://github.com/NikhilSaini09",
      linkedin: "https://linkedin.com/in/nikhil-saini-b252491ba/",
      leetcode: "https://leetcode.com/u/LogicSynthesis/",
      codeforces: "https://codeforces.com/profile/Nikhil45",
      codechef: "https://www.codechef.com/users/warm_hug_02",
    },
  },

  metrics: [
    {
      id: "cf-cm",
      label: "Codeforces Rating",
      value: "1980+",
      subValue: "Candidate Master",
      highlightText: "243+ Problems Solved",
      category: "Competitive Programming",
      link: "https://codeforces.com/profile/Nikhil45",
      iconName: "Flame",
    },
    {
      id: "lc-guardian",
      label: "LeetCode Rating",
      value: "2300+",
      subValue: "Guardian (Top 1% Global)",
      highlightText: "1055+ Problems Solved",
      category: "Competitive Programming",
      link: "https://leetcode.com/u/LogicSynthesis/",
      iconName: "Trophy",
    },
    {
      id: "cc-5star",
      label: "CodeChef Rating",
      value: "2000+",
      subValue: "5-Star Coder (Division 1)",
      highlightText: "880+ Problems Solved",
      category: "Competitive Programming",
      link: "https://www.codechef.com/users/warm_hug_02",
      iconName: "Award",
    },
    {
      id: "iitb-academics",
      label: "IIT Bombay Dual Degree",
      value: "11 AA Grades",
      subValue: "CAD & Automation + Electrical Minor",
      highlightText: "100%ile JEE Main Math",
      category: "Academic Pedigree",
      iconName: "GraduationCap",
    },
  ] as MetricCard[],

  cpAnalytics: {
    totalProblemsSolved: "2170+",
    platforms: {
      codeforces: {
        handle: "Nikhil45",
        peakRating: 1980,
        currentRank: "Candidate Master",
        problemsSolved: 243,
        profileUrl: "https://codeforces.com/profile/Nikhil45",
        history: [
          { contest: "Div. 3", rating: 1420, date: "2023-02" },
          { contest: "Div. 2", rating: 1610, date: "2023-08" },
          { contest: "Div. 2 (Specialist)", rating: 1740, date: "2024-01" },
          { contest: "Educational Round", rating: 1855, date: "2024-06" },
          { contest: "Div. 1+2 (Candidate Master)", rating: 1984, date: "2024-11" },
        ],
      },
      leetcode: {
        handle: "LogicSynthesis",
        peakRating: 2315,
        currentRank: "Guardian (Top 1% Worldwide)",
        problemsSolved: 1055,
        profileUrl: "https://leetcode.com/u/LogicSynthesis/",
        history: [
          { contest: "Weekly 340", rating: 1720, date: "2023-04" },
          { contest: "Biweekly 110", rating: 1950, date: "2023-09" },
          { contest: "Weekly 375 (Knight)", rating: 2110, date: "2024-02" },
          { contest: "Biweekly 130", rating: 2240, date: "2024-07" },
          { contest: "Weekly 410 (Guardian)", rating: 2315, date: "2024-10" },
        ],
      },
      codechef: {
        handle: "warm_hug_02",
        peakRating: 2018,
        currentRank: "5-Star Coder (Division 1)",
        problemsSolved: 880,
        profileUrl: "https://www.codechef.com/users/warm_hug_02",
        history: [
          { contest: "Starters 80 (3-Star)", rating: 1640, date: "2023-03" },
          { contest: "Starters 105 (4-Star)", rating: 1820, date: "2023-10" },
          { contest: "Cook-Off 150", rating: 1910, date: "2024-04" },
          { contest: "Starters 140 (5-Star Div 1)", rating: 2018, date: "2024-09" },
        ],
      },
    },
    topicMastery: [
      { topic: "Dynamic Programming & Optimization", proficiency: 96, solvedCount: 420 },
      { topic: "Graph Theory & Shortest Path / Tree DP", proficiency: 94, solvedCount: 380 },
      { topic: "Segment Trees, Fenwick Trees & Range Queries", proficiency: 91, solvedCount: 260 },
      { topic: "Combinatorics, Number Theory & Math", proficiency: 98, solvedCount: 340 },
      { topic: "Binary Search & Greedy Strategies", proficiency: 95, solvedCount: 430 },
      { topic: "Bitmasking & Hyper-Optimized Constraints", proficiency: 92, solvedCount: 220 },
    ],
  },

  projects: [
    {
      id: "kaali-tirri",
      slug: "kaali-tirri",
      title: "Kaali Tirri Web Multiplayer Game",
      tagline: "Serverless WebRTC P2P Multiplayer Engine with Host Migration & Anti-Exploit Layer",
      period: "Sep 2026 - Oct 2026",
      category: "Systems & Real-Time",
      technologies: ["WebRTC", "PeerJS", "STUN/TURN", "Web Audio API", "TypeScript", "JavaScript"],
      liveUrl: "https://nikhilsaini09.github.io/kaaliTirri/",
      githubUrl: "https://github.com/NikhilSaini09/kaaliTirri",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/kaali-tirri/demo.mp4",
          posterUrl: "/projects/kaali-tirri/poster.png",
          caption: "Live WebRTC peer mesh with real-time card state sync and zero-server latency"
        },
        gallery: [
          { type: "image", url: "/projects/kaali-tirri/screenshot-1.png", caption: "Peer lobby handshake & STUN candidate negotiation" },
          { type: "image", url: "/projects/kaali-tirri/screenshot-2.png", caption: "In-game deterministic card validation and trick evaluation" },
        ]
      },
      keyMetrics: [
        { label: "Sync Latency", value: "< 20ms", desc: "Peer-to-peer state sync across active NAT clients" },
        { label: "Topology", value: "Full Mesh P2P", desc: "Direct WebRTC DataChannels over STUN/TURN" },
        { label: "Host Migration", value: "Zero Downtime", desc: "Deterministic coordinator election on heartbeat timeout" },
        { label: "Infrastructure Cost", value: "$0 Servers", desc: "Fully client-orchestrated state distribution" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Preventing client-side memory tampering, hand-peeking, and malicious action packet forging without an authoritative game server.",
          solution: "Constructed a decentralized state validator where each peer executes an invariant rule engine. Action packets require sequential state checksums, and rate-limiting prevents packet flooding.",
          impact: "Achieved cheat-resistant gameplay with zero server infrastructure overhead."
        },
        {
          challenge: "Host disconnection immediately terminates game sessions in standard P2P lobbies.",
          solution: "Implemented continuous JSON state snapshotting and a heartbeat health-check loop. Upon 3 missed pings, the remaining peers trigger deterministic leader election, re-bind peer IDs, and resume the round seamlessly.",
          impact: "Guaranteed 100% session survivability without game restarts."
        }
      ],
      bulletPoints: [
        "Architected a serverless WebRTC multiplayer engine using STUN/TURN protocols for millisecond-level real-time state synchronization.",
        "Secured the P2P data layer with strict state sanitization against memory exploits and client-side tampering, coupled with sliding-window rate-limiting against network spam.",
        "Engineered zero-downtime host migration and seamless session recovery via JSON state persistence, peer ID remapping, and continuous heartbeat health checks."
      ],
      architectureOverview: {
        problem: "Traditional multiplayer card and strategy games rely on expensive, centralized game servers which introduce ping latency, cloud costs, and single points of failure.",
        systemDesign: "Built a fully decentralized Peer-to-Peer mesh topology. When the host peer creates a lobby, peer IDs are registered. Data channels stream state diffs directly between browser instances over WebRTC with STUN/TURN NAT traversal.",
        keyAchievements: [
          "Sub-20ms peer-to-peer state propagation without hosting dedicated WebSocket servers",
          "Automatic leader election & host migration preserving card hands and round state on disconnect",
          "Resilient state validation preventing unauthorized hand peeking or client memory modifications"
        ],
        dataFlowSteps: [
          { step: 1, title: "Lobby Handshake", desc: "PeerJS connects to signaling server; STUN discovers public ICE candidates across NATs." },
          { step: 2, title: "Mesh Channel Handshake", desc: "Direct WebRTC DataChannels opened with bidirectional JSON serialization." },
          { step: 3, title: "State Sync & Sanitization", desc: "Action packets verified against game rule invariants before committing to state." },
          { step: 4, title: "Heartbeat & Failover", desc: "Periodic ping/pong; if host drops, highest-ranked peer assumes coordinator role." }
        ]
      }
    },
    {
      id: "discord-platform",
      slug: "discord-platform",
      title: "Discord-Style Real-Time Platform",
      tagline: "Full-Stack Text, Voice & Video Communication Suite with LiveKit SFU & WebSockets",
      period: "Aug 2025 - Sep 2025",
      category: "Full-Stack & Web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "WebSockets", "LiveKit SFU", "Clerk", "ShadCN"],
      liveUrl: "https://discord-like-app-delta.vercel.app/",
      githubUrl: "https://github.com/NikhilSaini09/discord-like-app",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/discord-platform/demo.mp4",
          posterUrl: "/projects/discord-platform/poster.png",
          caption: "LiveKit SFU multi-participant video rooms and WebSocket dynamic messaging"
        },
        gallery: [
          { type: "image", url: "/projects/discord-platform/screenshot-1.png", caption: "Server management, channels hierarchy, and dynamic members sidebar" },
          { type: "image", url: "/projects/discord-platform/screenshot-2.png", caption: "Active speaker detection and low-latency screen sharing" },
        ]
      },
      keyMetrics: [
        { label: "Media Plane", value: "LiveKit SFU", desc: "Selective Forwarding Unit minimizing upstream client bandwidth" },
        { label: "Signaling & Chat", value: "WebSockets", desc: "Sub-50ms message broadcast & typing indicators" },
        { label: "Database", value: "PostgreSQL + Prisma", desc: "Relational schema with cascade deletes & foreign keys" },
        { label: "Pagination", value: "Infinite Cursor", desc: "Zero layout shift message streaming" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Decoupling high-bandwidth audio/video streams from high-frequency text chat without bottle-necking server resources.",
          solution: "Adopted a decoupled plane architecture: LiveKit SFU handles adaptive bitrate video tracks and active speaker detection, while Next.js route handlers and WebSockets handle state mutations and messaging.",
          impact: "Fluid multi-user video calls without degrading text message delivery speed."
        },
        {
          challenge: "Enforcing fine-grained role-based access control across dynamic servers, channels, and direct messages.",
          solution: "Normalized Prisma relational schema with role hierarchies (Admin, Moderator, Member) enforced via Clerk JWT verification at Edge Middleware.",
          impact: "Eliminated unauthorized channel reads/writes with OWASP-compliant authorization."
        }
      ],
      bulletPoints: [
        "Engineered full-stack real-time collaboration with dynamic text channels, 1-on-1 direct messaging, and low-latency audio/video rooms powered by LiveKit SFU.",
        "Implemented fine-grained role-based access control (Admin, Moderator, Member) and secure authentication via Clerk backed by a Prisma relational schema.",
        "Crafted a responsive UI with dark/light themes, infinite scroll message pagination, real-time unread badges, and fast media uploads via UploadThing."
      ],
      architectureOverview: {
        problem: "Simultaneous voice, video, and high-frequency messaging requires distinct scaling architectures—relational consistency for chat logs, low-latency WebSockets for notifications, and SFU selective forwarding for HD media.",
        systemDesign: "Decoupled media plane from data plane: LiveKit Selective Forwarding Units (SFU) handle high-bandwidth video/audio streams, while WebSockets broadcast live member status and Prisma manages relational queries.",
        keyAchievements: [
          "Infinite message pagination with cursor-based fetching and zero layout shifts",
          "Low-latency multi-participant audio/video rooms with screen sharing and active speaker detection",
          "Comprehensive server moderation tools with role-based member kicking and channel permission overrides"
        ],
        dataFlowSteps: [
          { step: 1, title: "Authentication & RBAC", desc: "Clerk JWT validated on Next.js Edge Middleware and synced with Prisma database." },
          { step: 2, title: "WebSocket Pub/Sub", desc: "Socket.io relays chat messages, reactions, and typing indicators in real time." },
          { step: 3, title: "LiveKit SFU Media Stream", desc: "Media tracks distributed through SFU, minimizing client upstream bandwidth." },
          { step: 4, title: "Optimistic UI Update", desc: "Local state rendered instantly with background retry on transient network drops." }
        ]
      }
    },
    {
      id: "ai-crm",
      slug: "ai-crm",
      title: "AI-First CRM – Conversational Logger",
      tagline: "Autonomous LangGraph Multi-Tool Agent Orchestrating Groq Llama 3.3 70B & FastAPI",
      period: "Jun 2026",
      category: "Applied AI",
      technologies: ["FastAPI", "LangGraph", "LangChain", "Groq Llama 3.3 70B", "React", "Redux", "SQLite", "Python"],
      githubUrl: "https://github.com/NikhilSaini09/fullStack_AI_CRM",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/ai-crm/demo.mp4",
          posterUrl: "/projects/ai-crm/poster.png",
          caption: "Autonomous multi-tool agent logging unstructured voice meetings into CRM pipelines"
        },
        gallery: [
          { type: "image", url: "/projects/ai-crm/screenshot-1.png", caption: "LangGraph tool execution state loop and real-time deal stage updater" },
        ]
      },
      keyMetrics: [
        { label: "Inference Latency", value: "< 850ms", desc: "Groq LPU hardware acceleration running Llama 3.3 70B" },
        { label: "Agent Pattern", value: "StateGraph Cyclic", desc: "Deterministic multi-turn tool invocation loop" },
        { label: "Backend", value: "FastAPI Async", desc: "Non-blocking event loop with SQLite transactional persistence" },
        { label: "Field Extraction", value: "99.2% Accuracy", desc: "Strict schema guardrails preventing hallucinated writes" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Unstructured sales audio and casual conversation contains ambiguous entities and erratic topic changes.",
          solution: "Designed a cyclic LangGraph state machine with 6 discrete tools (entity extractor, deal stage evaluator, follow-up scheduler, CRM database mutator) with guardrails preventing hallucinated writes.",
          impact: "Allowed sales reps to log deals hands-free in seconds rather than typing for 15+ minutes."
        },
        {
          challenge: "Synchronizing dynamic agent state mutations to a complex client frontend without flickering or stale state.",
          solution: "Streamed structured JSON deltas over FastAPI asynchronous endpoints into a normalized Redux Toolkit store, triggering animated DOM updates on target cards only.",
          impact: "Zero layout shifts with immediate visual confirmation of logged client meetings."
        }
      ],
      bulletPoints: [
        "Built an AI-first CRM allowing field sales reps to log unstructured customer interactions via conversational voice/text agents, eliminating tedious manual forms.",
        "Designed an autonomous LangGraph agent equipped with 6 custom tools to parse customer intent, extract entities, update deal pipelines, and schedule follow-ups using Groq-accelerated Llama 3.3 70B.",
        "Synchronized dynamic agent-extracted form fields to a React/Redux UI in real time using FastAPI asynchronous endpoints and SQLite persistence."
      ],
      architectureOverview: {
        problem: "Sales representatives spend over 30% of their working hours manually typing CRM entries, leading to outdated deal stages, missed follow-ups, and incomplete customer profiles.",
        systemDesign: "State machine driven by LangGraph where incoming voice/text is processed by an LLM with structured function calling. The agent validates constraints, calls backend tools, and pushes real-time diffs to the client dashboard.",
        keyAchievements: [
          "Sub-second inference responses powered by Groq LPU acceleration running Llama 3.3 70B",
          "Robust multi-turn tool calling with guardrails preventing hallucinated CRM record updates",
          "Bidirectional state reflection: voice inputs instantly highlight and populate form fields on the UI"
        ],
        dataFlowSteps: [
          { step: 1, title: "Conversational Ingestion", desc: "User inputs conversation transcript; FastAPI streams payload to LangGraph worker." },
          { step: 2, title: "Entity & Intent Extraction", desc: "Llama 3.3 70B extracts contact details, action items, sentiment, and deal stage." },
          { step: 3, title: "Tool Execution Loop", desc: "Agent cycles through CRM read/write tools, executing SQLite mutations transactionally." },
          { step: 4, title: "Redux Store Synchronization", desc: "Frontend receives structured delta payload, automatically animating updated cards." }
        ]
      }
    },
    {
      id: "3d-scene-sync",
      slug: "3d-scene-sync",
      title: "3D Scene Multi-Window Synchronization",
      tagline: "Cross-Window Real-Time State & Physics Synchronization via WebGL & BroadcastChannel",
      period: "2024",
      category: "Systems & Real-Time",
      technologies: ["Three.js", "WebGL", "TypeScript", "BroadcastChannel API", "LocalStorage Event Loop"],
      githubUrl: "https://github.com/NikhilSaini09/3dSceneMulipleWindow",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/3d-scene-sync/demo.mp4",
          posterUrl: "/projects/3d-scene-sync/poster.png",
          caption: "Continuous 3D spatial simulation spanning physical monitor boundaries"
        },
        gallery: [
          { type: "image", url: "/projects/3d-scene-sync/screenshot-1.png", caption: "Multi-window viewport coordinate matrix calculation" },
        ]
      },
      keyMetrics: [
        { label: "Frame Rate", value: "60 FPS Locked", desc: "Hardware-accelerated Three.js WebGL rendering" },
        { label: "Inter-Process Comm", value: "< 1ms", desc: "Zero-server BroadcastChannel event loop" },
        { label: "Display Topology", value: "Multi-Monitor", desc: "Continuous coordinate mapping across physical screen boundaries" },
        { label: "Network Overhead", value: "0 bytes", desc: "Pure client-side inter-tab messaging" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Calculating true physical monitor offsets across separate operating system windows without browser extensions.",
          solution: "Polled `window.screenX`, `window.screenY`, and device pixel ratios to establish a shared canvas coordinate space, offsetting the Three.js camera frustum per window in real time.",
          impact: "Meshes fly seamlessly through one physical monitor into the next with 60fps continuity."
        }
      ],
      bulletPoints: [
        "Built an interactive 3D spatial simulation in Three.js synchronized continuously across multiple distinct browser windows and screens.",
        "Engineered real-time window screen coordinates mapping and viewport boundary calculations to seamlessly connect 3D meshes passing from one monitor to another.",
        "Implemented high-frequency message broadcasting via BroadcastChannel API with zero-latency fallback to LocalStorage event hooks."
      ],
      architectureOverview: {
        problem: "Rendering unified continuous 3D environments across distinct browser tabs and physical monitors without needing a remote cloud WebSocket server.",
        systemDesign: "Utilizes client-side screen geometry APIs (`window.screenX`, `window.screenY`, `window.innerWidth`) and local inter-process event buses to calculate global coordinate matrices.",
        keyAchievements: [
          "Fluid 60fps mesh continuity across arbitrary browser windows and physical displays",
          "Zero-server local communication through BroadcastChannel protocol",
          "Dynamic window resizing and mesh collision calculation"
        ],
        dataFlowSteps: [
          { step: 1, title: "Window Coordinate Polling", desc: "Calculates global screen offsets relative to device displays." },
          { step: 2, title: "Inter-Tab Broadcast", desc: "BroadcastChannel transmits window boundaries and particle vectors." },
          { step: 3, title: "Matrix Alignment", desc: "Three.js camera view frustum offsets dynamically to match physical window position." }
        ]
      }
    },
    {
      id: "sudoku-solver",
      slug: "sudoku-solver",
      title: "Image-Based Sudoku Solver & Computer Vision Pipeline",
      tagline: "Computer Vision Preprocessing Pipeline with CNN Inference & Backtracking Engine",
      period: "May 2024",
      category: "Algorithms & CV",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Backtracking Algorithms"],
      githubUrl: "https://github.com/NikhilSaini09/Sudoku_Solver",
      featured: false,
      media: {
        primary: {
          type: "image",
          url: "/projects/sudoku-solver/demo.png",
          caption: "OpenCV perspective warp and contour detection pipeline"
        }
      },
      keyMetrics: [
        { label: "Solve Latency", value: "0.6 ms", desc: "Bitmask-accelerated constraint propagation engine" },
        { label: "CNN Accuracy", value: "98.2%", desc: "Digit recognition on MNIST with morphological noise reduction" },
        { label: "Image Warp", value: "4-Point Transform", desc: "OpenCV contour rectification from mobile angles" },
        { label: "Search Pruning", value: "Naked Singles First", desc: "Early constraint propagation before recursive branching" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Parsing warped real-world physical puzzle photos under varying lighting conditions and shadows.",
          solution: "Applied adaptive Gaussian thresholding, contour perimeter approximations to isolate the outer grid quadrilateral, and a four-point perspective transform to rectify into a 450x450 square before cell splitting.",
          impact: "Reliable digit recognition across varying lighting conditions and angles."
        }
      ],
      bulletPoints: [
        "Constructed an end-to-end computer vision pipeline with OpenCV to detect, warp, and crop Sudoku grids from arbitrary camera images.",
        "Trained a convolutional neural network on MNIST achieving 98% digit classification accuracy with adaptive thresholding, Gaussian blurring, and morphological noise removal.",
        "Implemented a bitmask-accelerated backtracking algorithm that solves arbitrary 9x9 Sudoku puzzles in just 0.6 milliseconds."
      ],
      architectureOverview: {
        problem: "Parsing warped real-world physical puzzle photos under varying lighting conditions and resolving combinatorial constraint satisfaction problems within interactive time budgets.",
        systemDesign: "Image processing extracts contours and applies four-point perspective transforms. Digits are classified via CNN. The grid is fed to an algorithm employing constraint propagation (naked singles) before recursive backtracking.",
        keyAchievements: [
          "0.6ms average solve latency using bitmask candidate representation",
          "98% accuracy on real-world photo inputs with automatic noise filtering",
          "Efficient perspective warping from mobile camera angles"
        ],
        dataFlowSteps: [
          { step: 1, title: "Contour Detection", desc: "OpenCV finds largest polygonal contour representing the Sudoku board." },
          { step: 2, title: "Perspective Rectification", desc: "Four-point transform warps the board into a normalized 450x450 pixel square." },
          { step: 3, title: "CNN Digit Inference", desc: "Each 50x50 cell evaluated by TensorFlow model to identify initial clue values." },
          { step: 4, title: "Backtracking Search", desc: "Bitwise candidate tracking searches and prunes decision tree in 0.6ms." }
        ]
      }
    },
    {
      id: "kanban-board",
      slug: "kanban-board",
      title: "Kanban Board Enterprise Workflow App",
      tagline: "Dynamic Task Orchestration with Multi-Dimensional Grouping & Persistent State",
      period: "Mar 2025",
      category: "Full-Stack & Web",
      technologies: ["React.js", "REST API", "Axios", "CSS Modules", "LocalStorage"],
      githubUrl: "https://github.com/NikhilSaini09/kanban-board",
      featured: false,
      media: {
        primary: {
          type: "image",
          url: "/projects/kanban-board/demo.png",
          caption: "Multi-dimensional ticket grouping by status, user, and priority"
        }
      },
      keyMetrics: [
        { label: "Render Overhead", value: "Zero Jitter", desc: "Memoized multi-dimensional bucket selectors" },
        { label: "Persistence", value: "Offline-First", desc: "LocalStorage state synchronization" },
        { label: "Sorting Engine", value: "O(N log N)", desc: "Dynamic multi-key comparator (priority + title)" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Switching between grouping dimensions (by Status, by User, by Priority) caused re-render lag and lost filter state.",
          solution: "Utilized memoized selectors and stable array keys to prevent DOM thrashing, preserving filter states in LocalStorage.",
          impact: "Instant tab switching with smooth layout transitions."
        }
      ],
      bulletPoints: [
        "Built a responsive project management board in React enabling multi-dimensional ticket grouping by status, user, and priority.",
        "Engineered client-side sorting algorithms (by priority descending, title ascending) with persistent LocalStorage state retention.",
        "Integrated RESTful API data using Axios with graceful error boundaries and optimistic state updates."
      ],
      architectureOverview: {
        problem: "Users need fluid, customizable views across diverse project dimensions without sluggish re-renders or losing their filter state on page reload.",
        systemDesign: "Built with functional React components utilizing memoized selectors to partition tasks into columns dynamically based on user preferences.",
        keyAchievements: [
          "Zero layout flicker across sorting and grouping transitions",
          "Fully offline-first preference persistence via LocalStorage",
          "Semantic color-coded priority and status indicator system"
        ],
        dataFlowSteps: [
          { step: 1, title: "API Fetch", desc: "Axios fetches tickets and users from endpoint." },
          { step: 2, title: "Grouping Matrix", desc: "Memoized reducer buckets tickets by active dimension (status, user, or priority)." },
          { step: 3, title: "Sort Pass", desc: "Sorting comparator applies user preference (priority rating or lexical order)." }
        ]
      }
    },
    {
      id: "budget-tracker",
      slug: "budget-tracker",
      title: "Cross-Platform Personal Budget Tracker",
      tagline: "Mobile Financial Analytics with Real-Time Firestore Sync & Firebase Auth",
      period: "May 2023 - Jul 2023",
      category: "Full-Stack & Web",
      technologies: ["Dart", "Flutter", "Cloud Firestore", "Firebase Auth", "Material 3"],
      githubUrl: "https://github.com/NikhilSaini09/Bugdet_tracker",
      featured: false,
      media: {
        primary: {
          type: "image",
          url: "/projects/budget-tracker/demo.png",
          caption: "Reactive category analytics with real-time cloud sync"
        }
      },
      keyMetrics: [
        { label: "Sync Protocol", value: "Real-Time", desc: "Cloud Firestore reactive stream listener" },
        { label: "Platform", value: "Flutter / Dart", desc: "Unified single codebase for iOS and Android" },
        { label: "Offline Resilience", value: "Local Queue", desc: "Automatic background write reconciliation on network reconnect" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "User expense entry drops when mobile connectivity is intermittent.",
          solution: "Architected an offline-first caching layer where writes commit immediately to local cache and sync upstream asynchronously with conflict resolution.",
          impact: "Zero lost transactions and sub-second UI response time."
        }
      ],
      bulletPoints: [
        "Developed a fluid mobile application using Flutter to track, categorize, and visually breakdown personal daily/monthly expenditures.",
        "Integrated Cloud Firestore for instant real-time data sync across devices and Firebase Auth for secure multi-factor authentication.",
        "Implemented interactive charts and budget warnings when approaching category thresholds."
      ],
      architectureOverview: {
        problem: "Users often abandon budgeting apps when transaction entry is slow or offline connectivity causes lost entries.",
        systemDesign: "Flutter reactive UI bound to Firestore offline cache streams, ensuring immediate responsiveness even with zero cellular signal.",
        keyAchievements: [
          "Instant offline-to-online reconciliation using Firestore local cache",
          "Interactive spending category breakdowns with visual analytics",
          "Smooth 60fps animations across iOS and Android"
        ],
        dataFlowSteps: [
          { step: 1, title: "User Action", desc: "User logs expense with amount, category, and date." },
          { step: 2, title: "Local Cache Write", desc: "Transaction immediately appears in local state." },
          { step: 3, title: "Cloud Synchronization", desc: "Background thread commits record to Firestore when connection is live." }
        ]
      }
    }
  ] as Project[],

  skills: {
    languages: [
      { name: "C++", level: "Expert (CP / Candidate Master)", tags: ["STL", "Data Structures", "Algorithms", "Optimization"], proof: "Codeforces Candidate Master (1980+)" },
      { name: "Python", level: "Advanced", tags: ["FastAPI", "TensorFlow", "OpenCV", "LangGraph", "NumPy"], proof: "AI CRM & Sudoku CV" },
      { name: "TypeScript / JavaScript", level: "Advanced", tags: ["Next.js 15", "React 19", "Node.js", "WebRTC", "WebSockets"], proof: "Kaali Tirri & Discord Clone" },
      { name: "SQL", level: "Proficient", tags: ["PostgreSQL", "SQLite", "Prisma ORM", "Relational Modeling"], proof: "Discord Schema & CRM DB" },
      { name: "Java", level: "Proficient", tags: ["OOP", "Design Patterns", "Core Java"], proof: "System Modeling" },
      { name: "Dart", level: "Intermediate", tags: ["Flutter", "Cross-Platform", "Mobile"], proof: "Budget Tracker" },
    ],
    systemsAndRealtime: [
      { name: "WebRTC & PeerJS", highlight: "Serverless P2P state sync, STUN/TURN ICE NAT traversal", proofProject: "Kaali Tirri" },
      { name: "WebSockets & Socket.io", highlight: "Bidirectional sub-50ms chat, presence & pub/sub events", proofProject: "Discord Platform" },
      { name: "LiveKit SFU", highlight: "Selective Forwarding Unit audio/video routing & dynamic tracks", proofProject: "Discord Platform" },
      { name: "Host Migration & Failover", highlight: "Leader election, heartbeat pinging & state snapshot recovery", proofProject: "Kaali Tirri" },
      { name: "Concurrency & Memory Safety", highlight: "Anti-exploit state sanitization, sliding-window rate limiting", proofProject: "Kaali Tirri" },
    ],
    frameworksAndTools: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "FastAPI",
      "Redux Toolkit",
      "Prisma ORM",
      "ShadCN UI",
      "Framer Motion",
      "Docker / Containers",
      "Git & GitHub",
      "Postman",
      "LangGraph / LangChain",
      "Groq & Llama 3.3",
      "AWS (GFG Certified Solutions Architect & Cloud Practitioner)",
    ],
    testingAndDevOps: [
      "Selenium",
      "TestNG",
      "Cucumber BDD",
      "Maven",
      "Jenkins CI/CD",
      "REST Assured",
    ],
    certifications: [
      "GFG AWS Cloud Practitioner & Solutions Architect",
      "GFG Full Stack Development Bootcamp",
      "GFG Next.js Development Certification",
      "GFG React.js Development Certification",
      "CS Core (Operating Systems, DBMS, Computer Networks)",
    ],
  },

  experience: [
    {
      role: "Teaching Assistant",
      organization: "Indian Institute of Technology Bombay",
      course: "Statistical Machine Learning & Data Mining (Prof. Asim Tewari)",
      period: "Aug 2024 - Nov 2024",
      location: "Mumbai, India",
      points: [
        "Assisted Prof. Asim Tewari in instructing and mentoring a cohort of 300+ undergraduate and graduate students.",
        "Coordinated with a 17-member Teaching Assistant team to design, administer, and grade weekly assessments and programming assignments.",
        "Conducted problem-solving tutorial sessions covering supervised learning, classification, clustering, and dimensional reduction techniques."
      ]
    },
    {
      role: "Project Manager",
      organization: "Enactus, IIT Bombay",
      course: "Social Entrepreneurship & Web Strategy",
      period: "May 2023 - May 2024",
      location: "Mumbai, India",
      points: [
        "Architected and deployed a responsive web portal showcasing 4+ social entrepreneurship ventures using React.js.",
        "Produced and edited the showcase video for the National Enactus Competition, synthesizing key organizational milestones and impact metrics."
      ]
    }
  ],

  education: {
    institution: "Indian Institute of Technology Bombay (IIT Bombay)",
    degree: "Dual Degree (B.Tech. + M.Tech.) in Mechanical Engineering – CAD & Automation",
    minor: "Minor in Electrical Engineering",
    period: "2020 – 2025",
    cpi: "7.89 / 10",
    highlights: [
      "Awarded the academic distinction of AA grade in 11 courses across 10 semesters.",
      "Achieved a perfect 100 percentile in Mathematics in JEE Main.",
      "Secured top 3 percentile ranking in JEE Advanced nationwide."
    ]
  }
};
