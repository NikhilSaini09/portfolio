"use client";

import React, { useState, useEffect } from "react";
import {
  Radio,
  Zap,
  Server,
  ShieldAlert,
  RotateCcw,
  Activity,
  CheckCircle2,
  Terminal,
  Cpu,
  RefreshCw,
  Users,
} from "lucide-react";
import confetti from "canvas-confetti";

interface PeerNode {
  id: string;
  name: string;
  role: "coordinator" | "peer";
  status: "active" | "disconnected" | "migrating";
  latencyMs: number;
  packetsReceived: number;
}

export function DistributedMeshSimulator() {
  const [nodes, setNodes] = useState<PeerNode[]>([
    { id: "peer-0", name: "Peer-0 (Host Coordinator)", role: "coordinator", status: "active", latencyMs: 14, packetsReceived: 42 },
    { id: "peer-1", name: "Peer-1 (Alpha Node)", role: "peer", status: "active", latencyMs: 18, packetsReceived: 41 },
    { id: "peer-2", name: "Peer-2 (Beta Node)", role: "peer", status: "active", latencyMs: 16, packetsReceived: 40 },
    { id: "peer-3", name: "Peer-3 (Gamma Node)", role: "peer", status: "active", latencyMs: 21, packetsReceived: 39 },
  ]);

  const [logs, setLogs] = useState<string[]>([
    "[INIT] WebRTC P2P DataChannels negotiated over STUN/TURN",
    "[MESH] Full duplex topology established across 4 browser peers",
    "[HEARTBEAT] Ping-pong healthcheck active (1000ms interval)",
    "[SECURITY] Memory-tampering & rate-limiting guards initialized",
  ]);

  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 15)]);
  };

  // Broadcast state packet across the mesh
  const broadcastPacket = () => {
    if (isBroadcasting) return;
    setIsBroadcasting(true);
    addLog(`[TX] Broadcasting encrypted game state packet (Seq #${Math.floor(Math.random() * 900 + 100)})`);

    setTimeout(() => {
      setNodes((prev) =>
        prev.map((n) =>
          n.status === "active"
            ? { ...n, packetsReceived: n.packetsReceived + 1, latencyMs: Math.floor(Math.random() * 8 + 12) }
            : n
        )
      );
      addLog(`[ACK] All active peers acknowledged state in 17.4ms avg (zero packet loss)`);
      setIsBroadcasting(false);
    }, 400);
  };

  // Simulate Host Crash and Leader Election / Host Migration
  const simulateHostDropAndFailover = () => {
    if (isMigrating) return;
    setIsMigrating(true);

    addLog("[ALERT] Coordinator Peer-0 missed 3 consecutive heartbeat pings!");
    setNodes((prev) =>
      prev.map((n) => (n.id === "peer-0" ? { ...n, status: "disconnected" } : n))
    );

    setTimeout(() => {
      addLog("[FAILOVER] Initiating deterministic Leader Election protocol...");
      setNodes((prev) =>
        prev.map((n) => (n.id === "peer-1" ? { ...n, status: "migrating" } : n))
      );
    }, 600);

    setTimeout(() => {
      addLog("[STATE RECOVERY] Re-hydrating lobby JSON state snapshot onto Peer-1");
      addLog("[SUCCESS] Host Migration complete! Peer-1 elected as new Coordinator.");

      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === "peer-0") return { ...n, status: "disconnected" };
          if (n.id === "peer-1") return { ...n, role: "coordinator", status: "active", name: "Peer-1 (New Coordinator)" };
          return n;
        })
      );
      setIsMigrating(false);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#10b981", "#06b6d4"],
      });
    }, 1400);
  };

  // Simulate anti-exploit packet sanitization
  const simulateMaliciousPacket = () => {
    addLog("[INGRESS] Received untrusted client action with mutated card hand payload");
    setTimeout(() => {
      addLog("[SECURITY VIOLATION] State sanitization invariant check FAILED: unauthorized card index");
      addLog("[BLOCKED] Packet dropped silently. Sliding-window rate-limiter incremented.");
    }, 300);
  };

  // Reset simulator
  const resetMesh = () => {
    setIsBroadcasting(false);
    setIsMigrating(false);
    setNodes([
      { id: "peer-0", name: "Peer-0 (Host Coordinator)", role: "coordinator", status: "active", latencyMs: 14, packetsReceived: 42 },
      { id: "peer-1", name: "Peer-1 (Alpha Node)", role: "peer", status: "active", latencyMs: 18, packetsReceived: 41 },
      { id: "peer-2", name: "Peer-2 (Beta Node)", role: "peer", status: "active", latencyMs: 16, packetsReceived: 40 },
      { id: "peer-3", name: "Peer-3 (Gamma Node)", role: "peer", status: "active", latencyMs: 21, packetsReceived: 39 },
    ]);
    setLogs([
      "[RESET] Topology re-initialized to default baseline",
      "[MESH] Full duplex topology established across 4 browser peers",
      "[HEARTBEAT] Ping-pong healthcheck active (1000ms interval)",
    ]);
  };

  return (
    <section id="interactive-demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              Real-Time Systems Telemetry Lab
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Live WebRTC P2P Mesh & Host Migration Simulator
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Interactive simulation of the decentralized failover, leader election, and anti-tamper data synchronization engine built in Kaali Tirri.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-zinc-950/90 rounded-2xl border border-white/[0.08] p-6 sm:p-8 shadow-2xl">
          
          {/* Left: Active Peer Nodes Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/[0.06]">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                ACTIVE P2P MESH TOPOLOGY
              </span>
              <span className="text-emerald-400">
                {nodes.filter((n) => n.status !== "disconnected").length}/4 Peers Connected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    node.status === "disconnected"
                      ? "bg-red-950/20 border-red-500/30 opacity-60"
                      : node.role === "coordinator"
                      ? "bg-emerald-950/30 border-emerald-500/40 shadow-lg shadow-emerald-950/30"
                      : "bg-zinc-900/80 border-white/[0.08]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase">
                        {node.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          node.status === "disconnected"
                            ? "bg-red-900/50 text-red-400 border border-red-500/30"
                            : node.status === "migrating"
                            ? "bg-amber-900/50 text-amber-300 animate-pulse border border-amber-500/30"
                            : node.role === "coordinator"
                            ? "bg-emerald-900/60 text-emerald-300 border border-emerald-500/40"
                            : "bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {node.status === "disconnected"
                          ? "DROPPED"
                          : node.status === "migrating"
                          ? "ELECTING..."
                          : node.role === "coordinator"
                          ? "COORDINATOR"
                          : "PEER"}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white">{node.name}</h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">RTT Latency</span>
                    <span className="text-emerald-400 font-semibold">
                      {node.status === "disconnected" ? "INF ms" : `${node.latencyMs} ms`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Control Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={broadcastPacket}
                disabled={isBroadcasting || isMigrating}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium text-xs transition-all shadow-md shadow-emerald-950 active:scale-95"
              >
                <Zap className="w-4 h-4" />
                <span>Broadcast P2P State Packet</span>
              </button>

              <button
                onClick={simulateHostDropAndFailover}
                disabled={isMigrating || nodes.find((n) => n.id === "peer-0")?.status === "disconnected"}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/70 hover:bg-red-900/80 disabled:opacity-40 text-red-200 border border-red-500/30 font-medium text-xs transition-all active:scale-95"
              >
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>Simulate Host Drop & Failover</span>
              </button>

              <button
                onClick={simulateMaliciousPacket}
                disabled={isMigrating}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs border border-white/10 transition-all"
                title="Simulate Malicious Packet Payload"
              >
                <span>Test Anti-Tamper Filter</span>
              </button>

              <button
                onClick={resetMesh}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                title="Reset Mesh Topology"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Telemetry Terminal Console */}
          <div className="lg:col-span-5 flex flex-col h-full space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/[0.06]">
              <span className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                DISTRIBUTED TELEMETRY LOG
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">STREAM ACTIVE</span>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-zinc-300 h-80 overflow-y-auto space-y-2">
              {logs.map((log, idx) => {
                const isAlert = log.includes("ALERT") || log.includes("VIOLATION");
                const isSuccess = log.includes("SUCCESS") || log.includes("ACK");
                const isFailover = log.includes("FAILOVER") || log.includes("STATE RECOVERY");

                return (
                  <div
                    key={idx}
                    className={`leading-relaxed text-[11px] ${
                      isAlert
                        ? "text-red-400 font-semibold"
                        : isSuccess
                        ? "text-emerald-400 font-semibold"
                        : isFailover
                        ? "text-amber-300 font-semibold"
                        : "text-zinc-400"
                    }`}
                  >
                    &gt; {log}
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-zinc-500 leading-relaxed font-mono">
              Architecture verified in production: Serverless STUN/TURN traversal ensures low-latency P2P mesh across symmetric NATs without centralized relay bottlenecks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
