"use client";

import { motion } from "framer-motion";

// Node positions for the SVG visualization
const NODES = [
  { id: "client", x: 250, y: 200, label: "Your Site", size: 44 },
  { id: "google", x: 80, y: 80, label: "Google", size: 32 },
  { id: "chatgpt", x: 420, y: 80, label: "ChatGPT", size: 32 },
  { id: "gemini", x: 80, y: 320, label: "Gemini", size: 32 },
  { id: "perplexity", x: 420, y: 320, label: "Perplexity", size: 32 },
] as const;

const CONNECTIONS: [string, string][] = [
  ["client", "google"],
  ["client", "chatgpt"],
  ["client", "gemini"],
  ["client", "perplexity"],
];

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function GeoVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram showing your website connected to Google, ChatGPT, Gemini, and Perplexity"
      >
        {/* Connection lines */}
        {CONNECTIONS.map(([fromId, toId], i) => {
          const from = getNode(fromId);
          const to = getNode(toId);
          return (
            <motion.line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#DFFF00"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
            />
          );
        })}

        {/* Animated pulse rings on connections */}
        {CONNECTIONS.map(([fromId, toId], i) => {
          const from = getNode(fromId);
          const to = getNode(toId);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          return (
            <motion.circle
              key={`pulse-${fromId}-${toId}`}
              cx={midX}
              cy={midY}
              r="4"
              fill="#DFFF00"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <g key={node.id}>
            {/* Glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 8}
              fill="none"
              stroke="#DFFF00"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            />
            {/* Node background */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.id === "client" ? "#DFFF00" : "#111111"}
              stroke={node.id === "client" ? "#DFFF00" : "#1F1F1F"}
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            />
            {/* Label */}
            <motion.text
              x={node.x}
              y={node.y + node.size + 18}
              textAnchor="middle"
              fill={node.id === "client" ? "#DFFF00" : "#A3A3A3"}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              {node.label}
            </motion.text>
            {/* Icon text inside node */}
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill={node.id === "client" ? "#080808" : "#FFFFFF"}
              fontSize={node.id === "client" ? "16" : "13"}
              fontWeight="bold"
              fontFamily="system-ui"
            >
              {node.id === "client"
                ? "⚡"
                : node.id === "google"
                  ? "G"
                  : node.id === "chatgpt"
                    ? "✦"
                    : node.id === "gemini"
                      ? "◈"
                      : "?"}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
