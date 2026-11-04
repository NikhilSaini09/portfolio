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

export type ProjectCategory =
  | "Systems & Real-Time"
  | "Full-Stack & Web"
  | "Applied AI"
  | "Algorithms & CV";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  period: string;
  category: ProjectCategory;
  categories?: ProjectCategory[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  bulletPoints: string[];
  media?: {
    primary?: ProjectMedia;
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

export interface SkillItem {
  name: string;
  level: string;
  tags: string[];
  proof?: string;
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
      "Full-Stack & Systems Engineer",
      "Real-Time Web Application Developer",
      "Competitive Programmer"
    ],
    availabilityStatus: "Available for Full-Stack, Backend, Systems & SWE Roles",
    location: "Mumbai, India",
    email: "nikhil1010saini@gmail.com",
    phone: "+91 9145990892",
    resumeUrl: "/Nikhil_Saini.pdf",
    shortBio:
      "Dual Degree graduate from IIT Bombay specializing in full-stack web development, real-time communications, and distributed systems. Ranked in the top 1% globally in competitive programming (LeetCode Guardian 2315, Codeforces Candidate Master 2043, CodeChef 5-Star 2047).",
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
      value: "2043",
      subValue: "Candidate Master",
      highlightText: "243+ Problems Solved",
      category: "Competitive Programming",
      link: "https://codeforces.com/profile/Nikhil45",
      iconName: "Flame",
    },
    {
      id: "lc-guardian",
      label: "LeetCode Rating",
      value: "2315",
      subValue: "Guardian (Top 1% Global)",
      highlightText: "1055+ Problems Solved",
      category: "Competitive Programming",
      link: "https://leetcode.com/u/LogicSynthesis/",
      iconName: "Trophy",
    },
    {
      id: "cc-5star",
      label: "CodeChef Rating",
      value: "2047",
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
    totalProblemsSolved: "2178+",
    platforms: {
      codeforces: {
        handle: "Nikhil45",
        peakRating: 2043,
        currentRank: "Candidate Master",
        problemsSolved: 243,
        profileUrl: "https://codeforces.com/profile/Nikhil45",
        history: [
          { contest: "Round 1101 (Div. 2)", rating: 515, date: "2026-05", rank: "3913" },
          { contest: "Round 1103 (Div. 3)", rating: 1555, date: "2026-06", rank: "265" },
          { contest: "Round 1111 (Div. 2)", rating: 1848, date: "2026-07", rank: "578" },
          { contest: "Round 1112 (Div. 2)", rating: 1941, date: "2026-07", rank: "96" },
          { contest: "Round 1120 (Div. 1)", rating: 2041, date: "2026-09", rank: "184" },
          { contest: "Round 1121 (Div. 2)", rating: 2043, date: "2026-09", rank: "221" },
        ],
      },
      leetcode: {
        handle: "LogicSynthesis",
        peakRating: 2315,
        currentRank: "Guardian (Top 1% Worldwide)",
        problemsSolved: 1055,
        profileUrl: "https://leetcode.com/u/LogicSynthesis/",
        history: [
          { contest: "Weekly 398", rating: 1850, date: "2026-05" },
          { contest: "Biweekly 133 (Knight)", rating: 2010, date: "2026-06" },
          { contest: "Weekly 410", rating: 2190, date: "2026-08" },
          { contest: "Weekly 416 (Guardian)", rating: 2315, date: "2026-09" },
        ],
      },
      codechef: {
        handle: "warm_hug_02",
        peakRating: 2047,
        currentRank: "5-Star Coder (Division 1)",
        problemsSolved: 880,
        profileUrl: "https://www.codechef.com/users/warm_hug_02",
        history: [
          { contest: "Starters 240", rating: 1432, date: "2026-05", rank: "307" },
          { contest: "Starters 242", rating: 1730, date: "2026-06", rank: "79" },
          { contest: "Starters 244 (4-Star)", rating: 1800, date: "2026-06", rank: "194" },
          { contest: "Starters 253 (5-Star)", rating: 2035, date: "2026-08", rank: "46" },
          { contest: "Starters 254 (Peak 2047)", rating: 2047, date: "2026-09", rank: "44" },
          { contest: "Starters 261", rating: 2000, date: "2026-10", rank: "28" },
        ],
      },
    },
  },

  projects: [
    {
      id: "kaali-tirri",
      slug: "kaali-tirri",
      title: "Kaali Tirri Web Multiplayer Game",
      tagline: "Peer-to-peer multiplayer card game built with WebRTC DataChannels, local validation, and graceful host migration.",
      period: "Sep 2026 - Oct 2026",
      category: "Systems & Real-Time",
      categories: ["Systems & Real-Time", "Full-Stack & Web"],
      technologies: ["WebRTC", "PeerJS", "STUN/TURN", "Web Audio API", "TypeScript", "JavaScript"],
      liveUrl: "https://nikhilsaini09.github.io/kaaliTirri/",
      githubUrl: "https://github.com/NikhilSaini09/kaaliTirri",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/kaali-tirri/demo-laptop.mp4",
          posterUrl: "/projects/kaali-tirri/poster.png",
          caption: "Desktop P2P WebRTC multiplayer card gameplay with host migration"
        },
        gallery: [
          { type: "video", url: "/projects/kaali-tirri/demo-mobile.mp4", posterUrl: "/projects/kaali-tirri/poster-mobile.png", caption: "Mobile Gameplay Demo (Cropped mobile responsive viewport)" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot1.png", caption: "Lobby Interface — Create Room, Join Room, or Play Offline with Bots" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot2.png", caption: "P2P Waiting Room — UUID room sharing, host controls, and bot slots" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot3.png", caption: "In-Game Table Chat — Real-time peer messaging with reaction emojis" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot4.png", caption: "Bidding Phase — Turn-based contract bidding with hand cards" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot5.png", caption: "Trick Evaluation — Center table card battle with trump suit indicators" },
          { type: "image", url: "/projects/kaali-tirri/Screenshot6.png", caption: "Multiplayer Bidding Round — High bid tracking and fold mechanics" },
        ]
      },
      keyMetrics: [
        { label: "Sync Latency", value: "< 20ms", desc: "Direct browser-to-browser data transfer" },
        { label: "Topology", value: "Full Mesh P2P", desc: "WebRTC DataChannels with STUN/TURN fallback" },
        { label: "Host Migration", value: "Graceful Handover", desc: "Triggered manually or on tab close (network drop acts like server down)" },
        { label: "Infrastructure", value: "Serverless P2P", desc: "No persistent game servers required" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Preventing illegal moves and out-of-turn plays without an authoritative game server.",
          solution: "Implemented local validation rules on every peer that check turn order and card legality before applying incoming actions to the local state.",
          impact: "Keeps game state synchronized and consistent across players without a backend server."
        },
        {
          challenge: "Allowing a game room to persist when the host leaves or wants to pass coordination duties.",
          solution: "Implemented graceful host migration: when the host manually transfers the room or closes their tab (intercepted via beforeunload), the latest game state snapshot is bundled and host authority is handed over to the next peer in the room. (If the host's network abruptly drops, it functions like a server crash where communication is lost).",
          impact: "Enables smooth handoffs when hosts intentionally leave without resetting active player hands."
        }
      ],
      bulletPoints: [
        "Built a peer-to-peer multiplayer card game in TypeScript using WebRTC DataChannels for direct client-to-client communication.",
        "Implemented a local game rule validator on every client to verify turn order, trick winners, and valid card plays without requiring a backend server.",
        "Engineered host migration that triggers when the host manually transfers authority or closes their tab, handing off the serialized game state to the next peer."
      ],
      architectureOverview: {
        problem: "Multiplayer turn-based games usually require backend game servers to maintain state, adding hosting costs and server latency for simple card moves.",
        systemDesign: "Built on a full-mesh P2P topology using WebRTC DataChannels. A signaling server is only used for initial peer discovery and ICE negotiation. Once connected, all player actions, chat, and state diffs flow directly between browsers.",
        keyAchievements: [
          "Low-latency peer-to-peer state synchronization without dedicated game servers",
          "Graceful host migration preserving round state when the host transfers duties or closes their browser tab",
          "Client-side rule verification preventing illegal moves or desynchronized hands"
        ],
        dataFlowSteps: [
          { step: 1, title: "Signaling & ICE Discovery", desc: "PeerJS connects to a signaling server to discover peers and exchange STUN/TURN candidates." },
          { step: 2, title: "DataChannel Mesh", desc: "Direct WebRTC DataChannels are established between all players in the room." },
          { step: 3, title: "Action Validation & Sync", desc: "Players broadcast card moves; peers validate the move locally before updating UI state." },
          { step: 4, title: "Host Migration Handover", desc: "When the host triggers migration or closes their tab, current game state and coordinator role transfer to the next peer." }
        ]
      }
    },
    {
      id: "discord-platform",
      slug: "discord-platform",
      title: "Discord-Style Real-Time Platform",
      tagline: "Full-stack communication platform with real-time text channels, direct messaging, and audio/video rooms powered by LiveKit and WebSockets.",
      period: "Aug 2025 - Sep 2025",
      category: "Systems & Real-Time",
      categories: ["Systems & Real-Time", "Full-Stack & Web"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "WebSockets", "LiveKit SFU", "Clerk", "ShadCN"],
      liveUrl: "https://discord-like-app-delta.vercel.app/",
      githubUrl: "https://github.com/NikhilSaini09/discord-like-app",
      featured: true,
      media: {
        primary: {
          type: "video",
          url: "/projects/discord-platform/demo-laptop.mp4",
          posterUrl: "/projects/discord-platform/poster.png",
          caption: "Desktop Application Demo — Servers, channels, and real-time chat"
        },
        gallery: [
          { type: "video", url: "/projects/discord-platform/demo-mobile.mp4", posterUrl: "/projects/discord-platform/poster-mobile.png", caption: "Mobile App Demo (Cropped mobile responsive viewport)" },
          { type: "image", url: "/projects/discord-platform/Screenshot1.png", caption: "Server Channels — Real-time text messaging, member roles, and live indicators" },
          { type: "image", url: "/projects/discord-platform/Screenshot2.png", caption: "Direct Messaging — 1-on-1 conversations with rich media (images, PDFs)" },
          { type: "image", url: "/projects/discord-platform/Screenshot3.png", caption: "Rich Media Uploads — Video attachment streaming and message deletion" },
          { type: "image", url: "/projects/discord-platform/Screenshot4.png", caption: "Channel Welcome — Instant WebSocket message dispatch and audit history" },
        ]
      },
      keyMetrics: [
        { label: "Audio & Video", value: "LiveKit SFU", desc: "Multi-user video calling and screen sharing" },
        { label: "Real-Time Chat", value: "WebSockets", desc: "Instant message delivery and typing indicators" },
        { label: "Database", value: "PostgreSQL & Prisma", desc: "Relational schema with cascade deletes and indexed keys" },
        { label: "Message Loading", value: "Cursor Pagination", desc: "Infinite scroll with batched database queries" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Handling high-bandwidth video and audio alongside high-frequency text chat without bottlenecking the application server.",
          solution: "Separated concerns by routing video and audio streams through LiveKit's Selective Forwarding Unit (SFU), while Next.js and Socket.io handle text messages, notifications, and database writes.",
          impact: "Smooth multi-user video calls and screen sharing without delaying chat messages."
        },
        {
          challenge: "Enforcing role-based access control cleanly across dynamic servers, channels, and direct messages.",
          solution: "Defined relational models for Servers, Members, Channels, and Roles in Prisma, validating user permissions on both API routes and Next.js middleware using Clerk session tokens.",
          impact: "Secure permissions where only admins and moderators can kick members, delete messages, or manage channels."
        }
      ],
      bulletPoints: [
        "Built a full-stack communication platform with text channels, 1-on-1 direct messages, and group video/audio rooms using Next.js and LiveKit SFU.",
        "Implemented role-based permissions (Admin, Moderator, Member) and authentication with Clerk backed by a PostgreSQL database via Prisma ORM.",
        "Created an interactive UI with infinite scroll cursor pagination, unread message indicators, dark mode, and file uploads via UploadThing."
      ],
      architectureOverview: {
        problem: "Real-time communication platforms need to handle disparate workloads: durable text messages with search and pagination, low-latency notifications, and heavy media streams.",
        systemDesign: "Next.js App Router handles frontend rendering and REST endpoints. Socket.io handles real-time message delivery and presence updates. LiveKit SFU manages audio/video tracks and active speaker detection, and PostgreSQL stores user data and chat history.",
        keyAchievements: [
          "Cursor-based infinite scroll for message history with minimal database overhead",
          "Low-latency group video calls and screen sharing via LiveKit SFU",
          "Role-based moderation tools for managing channels and members"
        ],
        dataFlowSteps: [
          { step: 1, title: "Auth & Permissions", desc: "Clerk session verified on Next.js middleware and matched against member roles in PostgreSQL." },
          { step: 2, title: "Chat Broadcast", desc: "Socket.io relays chat messages, reactions, and typing indicators to connected clients." },
          { step: 3, title: "SFU Media Routing", desc: "Audio, video, and screen-sharing tracks route through LiveKit's SFU to reduce client upload bandwidth." },
          { step: 4, title: "Optimistic UI", desc: "Messages render immediately in the UI while persisting to PostgreSQL in the background." }
        ]
      }
    },
    {
      id: "ai-crm",
      slug: "ai-crm",
      title: "AI-First CRM – Conversational Logger",
      tagline: "AI CRM assistant that parses meeting notes and conversation transcripts into structured database records using LangGraph and Llama 3.3.",
      period: "Jun 2026",
      category: "Applied AI",
      categories: ["Applied AI", "Full-Stack & Web"],
      technologies: ["FastAPI", "LangGraph", "LangChain", "Groq Llama 3.3 70B", "React", "Redux", "SQLite", "Python"],
      githubUrl: "https://github.com/NikhilSaini09/fullStack_AI_CRM",
      featured: true,
      media: {
        primary: {
          type: "image",
          url: "/projects/ai-crm/Screenshot1.png",
          caption: "AI CRM interface logging structured customer interactions and meeting notes"
        }
      },
      keyMetrics: [
        { label: "LLM Provider", value: "Groq (Llama 3.3 70B)", desc: "Fast inference for multi-turn tool calling" },
        { label: "Agent Pattern", value: "LangGraph StateGraph", desc: "Stateful cyclic workflow with custom tool execution" },
        { label: "Backend", value: "FastAPI & Python", desc: "Async endpoints with SQLite transactional persistence" },
        { label: "Frontend", value: "React & Redux", desc: "Real-time UI state sync with optimistic updates" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Free-form conversation transcripts often contain mixed topics, informal phrasing, or missing contact info.",
          solution: "Structured the LangGraph agent with Pydantic validation schemas and guardrail prompts so the model extracts verified contact details and asks follow-up questions instead of guessing.",
          impact: "Prevents erroneous writes and ensures clean, structured customer records."
        },
        {
          challenge: "Reflecting dynamic agent tool executions on the client dashboard without page freezes.",
          solution: "Streamed structured JSON deltas over FastAPI async endpoints into a Redux Toolkit store, updating individual record cards incrementally as tools finish.",
          impact: "Smooth UI updates that reflect backend changes in real time."
        }
      ],
      bulletPoints: [
        "Built an AI-assisted CRM tool that allows sales reps to log meetings and customer conversations through voice or text transcripts instead of filling out manual forms.",
        "Designed a LangGraph agent equipped with tools to extract customer information, detect deal stages, schedule follow-ups, and write records to SQLite using Llama 3.3 70B on Groq.",
        "Built a FastAPI backend with async endpoints that stream extracted fields and state updates to a React/Redux dashboard in real time."
      ],
      architectureOverview: {
        problem: "Sales representatives spend considerable time manually typing meeting notes into CRM software, leading to delayed follow-ups and incomplete records.",
        systemDesign: "FastAPI receives unstructured conversation transcripts and routes them to a LangGraph state machine powered by Llama 3.3 70B on Groq. The agent determines required actions, executes database tools, and sends updated pipeline data back to the React UI.",
        keyAchievements: [
          "Fast response times via Groq hardware-accelerated inference running Llama 3.3 70B",
          "Structured tool-calling pipeline that creates contacts, updates deal status, and schedules tasks",
          "Real-time UI updates reflecting database changes immediately"
        ],
        dataFlowSteps: [
          { step: 1, title: "Transcript Ingestion", desc: "User submits meeting notes or audio transcripts; FastAPI routes the payload to the agent." },
          { step: 2, title: "Intent & Entity Extraction", desc: "Llama 3.3 extracts contact details, action items, sentiment, and deal stages." },
          { step: 3, title: "Database Tool Execution", desc: "Agent executes SQLite read/write tools to persist customer records transactionally." },
          { step: 4, title: "Dashboard Update", desc: "Frontend receives the updated record payload and updates the Redux store." }
        ]
      }
    },
    {
      id: "3d-scene-sync",
      slug: "3d-scene-sync",
      title: "3D Scene Multi-Window Synchronization",
      tagline: "Real-time 3D simulation synchronized across multiple browser windows and monitors using Three.js and BroadcastChannel.",
      period: "2024",
      category: "Systems & Real-Time",
      categories: ["Systems & Real-Time", "Algorithms & CV"],
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
          { type: "image", url: "/projects/3d-scene-sync/Screenshot1.png", caption: "Multi-window viewport coordinate calculation and spatial camera offset" },
        ]
      },
      keyMetrics: [
        { label: "Rendering", value: "Three.js / WebGL", desc: "Hardware-accelerated 3D graphics locked at 60 FPS" },
        { label: "Inter-Tab Sync", value: "BroadcastChannel API", desc: "Client-side message passing between browser tabs" },
        { label: "Display Setup", value: "Multi-Monitor", desc: "Maps physical monitor coordinates to a shared 3D space" },
        { label: "Network Overhead", value: "Zero (Client-Side)", desc: "Runs entirely in the browser without a backend server" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Aligning the virtual 3D camera across multiple OS windows moving independently across different screens.",
          solution: "Polled window screen coordinates (`screenX`, `screenY`) and dimensions to calculate a global coordinate frame, adjusting each window's Three.js camera frustum on every animation frame.",
          impact: "Objects appear to move continuously across physical monitor boundaries at 60 FPS."
        }
      ],
      bulletPoints: [
        "Created an interactive 3D simulation in Three.js where objects pass smoothly between separate browser windows across multiple monitors.",
        "Calculated screen positions using window coordinates and pixel ratios to align the 3D camera view dynamically across each open window.",
        "Synchronized object positions and window bounds across tabs at 60 FPS using the BroadcastChannel API with LocalStorage fallback."
      ],
      architectureOverview: {
        problem: "Synchronizing 3D visuals across multiple browser windows typically relies on server-side WebSockets, adding network latency and requiring a running server.",
        systemDesign: "Uses local browser APIs (`screenX`, `screenY`, `innerWidth`, `innerHeight`) and the `BroadcastChannel` API to share window coordinates and object states locally between tabs with zero network roundtrips.",
        keyAchievements: [
          "Smooth 60 FPS object movement across distinct browser windows",
          "Pure client-side communication without needing a server",
          "Handles real-time window dragging and resizing gracefully"
        ],
        dataFlowSteps: [
          { step: 1, title: "Coordinate Polling", desc: "Calculates global screen offsets relative to device displays on each frame." },
          { step: 2, title: "Inter-Tab Broadcast", desc: "BroadcastChannel transmits window boundaries and object vectors to all tabs." },
          { step: 3, title: "Camera Alignment", desc: "Three.js camera offset updates dynamically to match each window's physical position." }
        ]
      }
    },
    {
      id: "sudoku-solver",
      slug: "sudoku-solver",
      title: "Image-Based Sudoku Solver & Computer Vision Pipeline",
      tagline: "Computer vision pipeline that extracts Sudoku grids from photos and solves them with bitmask-optimized backtracking.",
      period: "May 2024",
      category: "Algorithms & CV",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Backtracking Algorithms"],
      githubUrl: "https://github.com/NikhilSaini09/Sudoku_Solver",
      featured: false,
      keyMetrics: [
        { label: "Solver Speed", value: "< 1 ms", desc: "Bitmask-accelerated recursive backtracking" },
        { label: "Digit Recognition", value: "98% Accuracy", desc: "CNN trained with image preprocessing and thresholding" },
        { label: "Grid Extraction", value: "4-Point Warp", desc: "OpenCV perspective transform to rectify angles and tilt" },
        { label: "Search Strategy", value: "Constraint Pruning", desc: "Fills naked singles before exploring candidate branches" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Photos of newspaper puzzles often have curved paper, uneven lighting, shadows, and perspective tilt.",
          solution: "Applied Gaussian blur, adaptive thresholding to find the outer puzzle boundary, and a four-point perspective warp to generate a clean, square top-down image before splitting into 81 cells.",
          impact: "Accurate cell extraction and digit classification even on angled camera photos."
        }
      ],
      bulletPoints: [
        "Built an OpenCV image processing pipeline that isolates, straightens, and extracts individual cells from photos of Sudoku puzzles.",
        "Trained a CNN model on digit datasets to recognize cell values, using adaptive thresholding and contour detection to clean up image noise.",
        "Built an algorithmic solver using constraint propagation and bitmask-accelerated backtracking that solves valid 9x9 puzzles in under 1 millisecond.",
        "Overlaid the solved digits directly into empty puzzle spaces using OpenCV drawing functions and inverse perspective transformation to display the completed visual board."
      ],
      architectureOverview: {
        problem: "Extracting structured grid puzzles from everyday camera photos requires handling perspective distortion, shadows, and efficient constraint satisfaction.",
        systemDesign: "OpenCV detects the puzzle quadrilateral and applies a perspective transform. Individual cells are fed to a CNN to classify digits. The parsed 9x9 matrix is then solved by a bitmask backtracking engine, and solved digits are drawn back onto empty grid spaces.",
        keyAchievements: [
          "Sub-millisecond puzzle solving with bitwise candidate tracking",
          "Reliable grid detection and perspective correction from mobile photo angles",
          "Visual solution rendering printing solved numbers directly into empty cells onto the original image",
          "Clean separation between image extraction, algorithmic solving, and image drawing"
        ],
        dataFlowSteps: [
          { step: 1, title: "Contour Detection", desc: "OpenCV identifies the largest polygonal contour representing the Sudoku board." },
          { step: 2, title: "Perspective Rectification", desc: "Four-point transform warps the board into a normalized 450x450 square image." },
          { step: 3, title: "Digit Recognition", desc: "Each 50x50 cell is evaluated by the TensorFlow CNN model to identify starting numbers." },
          { step: 4, title: "Backtracking Search", desc: "Bitwise candidate tracking searches and prunes the solution tree in under 1ms." },
          { step: 5, title: "Solution Overlay", desc: "Draws and renders the solved numbers into empty grid spaces using OpenCV drawing libraries, warping them back onto the board image." }
        ]
      }
    },
    {
      id: "kanban-board",
      slug: "kanban-board",
      title: "Kanban Board Task Manager",
      tagline: "Interactive task board in React with dynamic grouping by status, user, or priority, and persistent view preferences.",
      period: "Mar 2025",
      category: "Full-Stack & Web",
      technologies: ["React.js", "REST API", "Axios", "CSS Modules", "LocalStorage"],
      githubUrl: "https://github.com/NikhilSaini09/kanban-board",
      featured: false,
      keyMetrics: [
        { label: "Task Grouping", value: "3 Dimensions", desc: "Group tickets by status, assigned user, or priority" },
        { label: "Persistence", value: "LocalStorage", desc: "Saves grouping and sorting preferences across visits" },
        { label: "Sorting", value: "Dual-Key Comparator", desc: "Sort by priority level or alphabetical title" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Switching between grouping dimensions (by Status, by User, by Priority) can cause re-render lag and lost filter settings.",
          solution: "Structured state with memoized grouping reducers and saved view preferences in LocalStorage so column layouts persist across reloads.",
          impact: "Fast tab switching with smooth column transitions."
        }
      ],
      bulletPoints: [
        "Built a responsive project task board in React that allows grouping tickets by status, assigned user, or priority level.",
        "Implemented client-side sorting by priority and title, saving view preferences in LocalStorage so layout settings persist across reloads.",
        "Fetched ticket data from REST APIs using Axios with loading states and graceful error handling."
      ],
      architectureOverview: {
        problem: "Users need flexible ways to visualize team tasks (by assignee, by progress, or by urgency) without losing their preferred view setup on page reload.",
        systemDesign: "React state drives dynamic column bucketing. When the user changes view settings, a reducer partitions the dataset and sorts each column, while syncing preferences to LocalStorage.",
        keyAchievements: [
          "Instant switching between status, user, and priority views",
          "Persistent display preferences stored in LocalStorage",
          "Clean, responsive column layout for desktop and mobile screens"
        ],
        dataFlowSteps: [
          { step: 1, title: "API Fetch", desc: "Axios fetches tickets and users from the REST endpoint." },
          { step: 2, title: "Grouping Reducer", desc: "Memoized reducer buckets tickets by active dimension (status, user, or priority)." },
          { step: 3, title: "Sorting Pass", desc: "Comparator applies user sorting preference (priority rating or alphabetical order)." }
        ]
      }
    },
    {
      id: "budget-tracker",
      slug: "budget-tracker",
      title: "Personal Budget & Expense Tracker",
      tagline: "Mobile expense tracking app built with Flutter and Firebase with offline support and spending breakdowns.",
      period: "May 2023 - Jul 2023",
      category: "Full-Stack & Web",
      technologies: ["Dart", "Flutter", "Cloud Firestore", "Firebase Auth", "Material 3"],
      githubUrl: "https://github.com/NikhilSaini09/Bugdet_tracker",
      featured: false,
      keyMetrics: [
        { label: "Database", value: "Cloud Firestore", desc: "Real-time synchronization across devices with local cache" },
        { label: "Framework", value: "Flutter & Dart", desc: "Single cross-platform codebase for iOS and Android" },
        { label: "Offline Mode", value: "Automatic Sync", desc: "Queues transactions locally when offline and commits on reconnect" }
      ],
      challengesAndTradeoffs: [
        {
          challenge: "Preventing data loss when users log expenses while traveling with poor or no cellular connectivity.",
          solution: "Enabled Firestore's offline persistence so new entries write immediately to local device cache and sync to the cloud when internet connection resumes.",
          impact: "Fast expense logging with zero lost transactions when offline."
        }
      ],
      bulletPoints: [
        "Built a cross-platform mobile app in Flutter to record, categorize, and track daily and monthly personal expenses.",
        "Integrated Cloud Firestore for real-time cloud backup across devices and Firebase Auth for email/password authentication.",
        "Added category spending charts and warning indicators when monthly expenses approach user-set budget limits."
      ],
      architectureOverview: {
        problem: "Expense trackers need to be fast to open and work reliably even in places where internet connection is spotty.",
        systemDesign: "Flutter front-end connected to Firebase Authentication and Cloud Firestore. Local state responds immediately to user actions, while Firestore handles background cloud sync.",
        keyAchievements: [
          "Offline-first transaction logging with automatic cloud sync on reconnect",
          "Visual category breakdowns and spending summaries",
          "Responsive mobile UI following Material Design guidelines"
        ],
        dataFlowSteps: [
          { step: 1, title: "User Action", desc: "User logs expense with amount, category, and date." },
          { step: 2, title: "Local Cache Write", desc: "Transaction immediately appears in local state via offline cache." },
          { step: 3, title: "Cloud Synchronization", desc: "Background thread commits record to Firestore when connection is live." }
        ]
      }
    }
  ] as Project[],

  skills: {
    languages: [
      { name: "C++", level: "Expert (CM Peak 2043)", tags: ["STL", "Data Structures", "Algorithms", "Optimization", "Bitmasks"], proof: "Codeforces Candidate Master (2043) & CodeChef 5-Star (2047)" },
      { name: "Python", level: "Advanced", tags: ["FastAPI", "LangGraph", "TensorFlow", "OpenCV", "NumPy", "Pydantic"], proof: "AI CRM & Sudoku CV Pipeline" },
      { name: "TypeScript / JavaScript", level: "Advanced", tags: ["Next.js 16", "React 19", "Node.js", "WebRTC", "WebSockets", "ES6+"], proof: "Kaali Tirri & Discord Clone" },
      { name: "SQL", level: "Proficient", tags: ["PostgreSQL", "SQLite", "Prisma ORM", "Relational Modeling", "Indexing"], proof: "Discord Schema & CRM DB" },
      { name: "Java", level: "Proficient", tags: ["OOP", "Design Patterns", "Core Java", "Collections Framework"], proof: "System Modeling" },
      { name: "Dart", level: "Proficient", tags: ["Flutter", "State Management", "Mobile Architecture", "Reactive UI"], proof: "Budget Tracker" },
    ],
    systemsAndRealtime: [
      { name: "WebRTC & PeerJS", level: "Advanced", tags: ["DataChannels", "STUN/TURN", "ICE NAT Traversal", "Mesh Topology"], proof: "Kaali Tirri P2P Engine" },
      { name: "WebSockets & LiveKit SFU", level: "Advanced", tags: ["Selective Forwarding", "Adaptive Bitrate", "Presence Pub/Sub", "Socket.io"], proof: "Discord Real-Time Platform" },
      { name: "P2P Host Migration", level: "Advanced", tags: ["State Serialization", "Graceful Handover", "Tab Close Handshake", "WebRTC Mesh"], proof: "Kaali Tirri Lobby Architecture" },
      { name: "Inter-Process Comm (IPC)", level: "Proficient", tags: ["BroadcastChannel API", "Window Screen Mapping", "LocalStorage Bus", "Matrix Math"], proof: "3D Scene Multi-Window" },
      { name: "Network Security & Concurrency", level: "Proficient", tags: ["Sliding-Window Rate Limiting", "State Checksums", "Packet Sanitization", "Memory Safety"], proof: "Anti-Exploit Invariant Engine" },
    ],
    web: [
      { name: "Next.js & React 19", level: "Advanced", tags: ["App Router", "Server Components", "Turbopack", "Partial Prefetching", "Hooks"], proof: "Discord Platform & Portfolio" },
      { name: "Tailwind CSS & Modern UI", level: "Advanced", tags: ["Tailwind v4", "ShadCN UI", "CSS Modules", "Accessible Radix Primitives"], proof: "Enterprise Responsive UIs" },
      { name: "State Management & Caching", level: "Advanced", tags: ["Redux Toolkit", "Context API", "Optimistic Updates", "LocalStorage Cache"], proof: "AI CRM & Kanban Board" },
      { name: "Three.js & WebGL", level: "Proficient", tags: ["Three.js", "WebGL Shaders", "Camera Frustum Math", "HTML5 Canvas", "60 FPS"], proof: "3D Multi-Window Spatial Engine" },
      { name: "Web Audio & Media Streams", level: "Proficient", tags: ["Web Audio API", "Low-Latency Buffers", "AudioContext", "MediaStreams"], proof: "Kaali Tirri & Discord App" },
    ],
    backendAndCloud: [
      { name: "FastAPI & Python Async", level: "Advanced", tags: ["Async Event Loop", "Streaming Responses", "Pydantic Schemas", "Uvicorn"], proof: "AI-First CRM Service" },
      { name: "PostgreSQL & SQLite", level: "Advanced", tags: ["Prisma ORM", "Cascade Deletes", "ACID Transactions", "Foreign Keys"], proof: "Discord Relational Store & CRM DB" },
      { name: "AWS Cloud Infrastructure", level: "Certified", tags: ["EC2", "S3", "CloudFront", "IAM Policies", "VPC & Security Groups"], proof: "GFG AWS Solutions Architect Certified" },
      { name: "Cloud Firestore & Firebase", level: "Proficient", tags: ["Reactive Stream Listeners", "Offline Persistence", "Firebase Auth JWT"], proof: "Cross-Platform Mobile App" },
      { name: "Docker & Containerization", level: "Proficient", tags: ["Docker Compose", "Multi-Stage Dockerfiles", "Container Isolation"], proof: "Isolated Deployment Workflows" },
    ],
    devopsAndTesting: [
      { name: "Automation QA & Testing", level: "Proficient", tags: ["Selenium WebDriver", "TestNG", "Cucumber BDD", "REST Assured"], proof: "GFG Full Stack Bootcamp" },
      { name: "Build Pipelines & CI/CD", level: "Proficient", tags: ["Maven", "Jenkins CI/CD", "GitHub Actions", "Vercel Deployments"], proof: "Automated Build Workflows" },
      { name: "Developer Tooling & Linux", level: "Advanced", tags: ["Git & GitHub Flow", "Postman", "Linux / Bash", "cURL", "VS Code"], proof: "Daily Development Environment" },
    ],
    certifications: [
      "GFG AWS Cloud Practitioner & Solutions Architect",
      "GFG Full Stack Development Bootcamp",
      "GFG Next.js Development Certification",
      "GFG React.js Development Certification",
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
