"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor: _lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 140, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-[2/1] relative font-sans overflow-hidden" 
         style={{
           background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
           borderRadius: '12px',
           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
           border: '1px solid rgba(0, 0, 0, 0.05)',
         }}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full opacity-30 pointer-events-none select-none transition-opacity duration-700"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        style={{
          filter: 'contrast(1.1) brightness(0.9)',
        }}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              {/* Background glow line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-glow)"
                strokeWidth="3"
                opacity="0.3"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6 * i,
                  ease: [0.4, 0, 0.2, 1],
                }}
                key={`glow-${i}`}
              />
              {/* Main line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.5 * i,
                  ease: [0.4, 0, 0.2, 1],
                }}
                key={`main-${i}`}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="5%" stopColor="#1a1a1a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#000000" stopOpacity="1" />
            <stop offset="95%" stopColor="#1a1a1a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="path-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="10%" stopColor="#666666" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#333333" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#666666" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2.5"
                fill="#1a1a1a"
                style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                }}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2.5"
                fill="#333333"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="2.5;10;2.5"
                  dur="3s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4,0,0.2,1;0.4,0,0.2,1"
                  keyTimes="0;0.5;1"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="3s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4,0,0.2,1;0.4,0,0.2,1"
                  keyTimes="0;0.5;1"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2.5"
                fill="#1a1a1a"
                style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                }}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2.5"
                fill="#333333"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="2.5;10;2.5"
                  dur="3s"
                  begin={`${i * 0.3 + 0.5}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4,0,0.2,1;0.4,0,0.2,1"
                  keyTimes="0;0.5;1"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="3s"
                  begin={`${i * 0.3 + 0.5}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4,0,0.2,1;0.4,0,0.2,1"
                  keyTimes="0;0.5;1"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}