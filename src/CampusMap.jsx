import React, { useState } from "react";
import mapImage from "./assets/CampusMap.jpg";
import img2 from "./assets/Dept.2.jpg";
import img11 from "./assets/Dept.11.jpg";
import img15 from "./assets/Dept.15.jpg";
import img22 from "./assets/Dept.22.jpg";
import img24 from "./assets/Dept.24.jpg";
import img27 from "./assets/Dept.27.jpg";
import gym from "./assets/Gymnasium.jpg";
import museum from "./assets/Mueseum.jpg";
import auditorium from "./assets/Auditorium.jpg";
import library from "./assets/Library.jpg";
import horticulture from "./assets/HorticultureArea.jpg";

const departments = [
  {
    id: 1,
    name: "Forestry & NR",
    x: "31.54%",
    y: "55.5%",
    image: "",
  },
  {
    id: 2,
    name: "Horticulture Dept",
    x: "33.66%",
    y: "53.17%",
    image: img2,
  },
  {
    id: 3,
    name: "Horticulture Dept B.Sc",
    x: "28.69%",
    y: "52.39%",
    image: "",
  },
  {
    id: 4,
    name: "Environmental Sci",
    x: "31.27%",
    y: "49.79%",
    image: "",
  },
  {
    id: 5,
    name: "Business Management",
    x: "33.93%",
    y: "47.45%",
    image: "",
  },
  {
    id: 6,
    name: "Yoga, Biochemistry & Rural Tech",
    x: "30.44%",
    y: "43.03%",
    image: "",
  },
  {
    id: 7,
    name: "Seed Sci",
    x: "32.46%",
    y: "39.13%",
    image: "",
  },
  {
    id: 8,
    name: "Mathematics Dept",
    x: "34.21%",
    y: "39.78%",
    image: "",
  },
  {
    id: 9,
    name: "Statistics",
    x: "32.46%",
    y: "41.6%",
    image: "",
  },
  {
    id: 10,
    name: "Mechanical Engineering Workshop",
    x: "36.05%",
    y: "38.74%",
    image: "",
  },
  {
    id: 11,
    name: "Zoology",
    x: "41.19%",
    y: "25.62%",
    image: img11,
  },
  {
    id: 12,
    name: "Botany",
    x: "43.58%",
    y: "25.62%",
    image: "",
  },
  {
    id: 13,
    name: "Microbiology Wing-C",
    x: "43.58%",
    y: "28.09%",
    image: "",
  },
  {
    id: 14,
    name: "Biotechnology Wing-C",
    x: "41.29%",
    y: "27.96%",
    image: "",
  },
  {
    id: 15,
    name: "Remote Sensing and GIS Applications",
    x: "44.32%",
    y: "21.33%",
    image: img15 
  },
  {
    id: 16,
    name: "Physics",
    x: "48%",
    y: "23.28%",
    image: "",
  },
  {
    id: 17,
    name: "Chemistry",
    x: "46.43%",
    y: "23.15%",
    image: "",
  },
  {
    id: 18,
    name: "Geology",
    x: "51.21%",
    y: "23.41%",
    image: "",
  },
  {
    id: 19,
    name: "Geography",
    x: "53.42%",
    y: "23.28%",
    image: "",
  },
  {
    id: 20,
    name: "Anthropology",
    x: "52.96%",
    y: "43.29%",
    image: "",
  },
  {
    id: 21,
    name: "History and Archaeology",
    x: "51.21%",
    y: "45.37%",
    image: "",
  },
  {
    id: 22,
    name: "Mass Communication",
    x: "47.17%",
    y: "43.55%",
    image: img22 
  },
  {
    id: 23,
    name: "School of Commerce",
    x: "42.11%",
    y: "42.25%",
    image: "",
  },
  {
    id: 24,
    name: "Astro Physics",
    x: "38.99%",
    y: "32.38%",
    image: img24 
  },
  {
    id: 25,
    name: "Engineering and Technology",
    x: "47.26%",
    y: "37.96%",
    image: "",
  },
  {
    id: 26,
    name: "Computer Science Engineering",
    x: "51.21%",
    y: "36.53%",
    image: "",
  },
  {
    id: 27,
    name: "Pharmaceutical Sciences",
    x: "36.78%",
    y: "47.32%",
    image: img27 
  },
  {
    id: 28,
    name: "Mountain, Tourism & Hospitality",
    x: "39.91%",
    y: "64.21%",
    image: "",
  },
  {
    id: 29,
    name: "HAPRAC",
    x: "46.62%",
    y: "13.3%",
    image: "",
  },
  {
    id: 30,
    name: "Biotechnology",
    x: "46.34%",
    y: "15.31%",
    image: "",
  },
  { 
    id: 31,
    name: "Gymnasium", 
    x: "49.56%", 
    y: "57.3%",
    image: gym
  },
  { 
    id: 32, 
    name: "Museum", 
    x: "51.21%", 
    y: "40.54%",
    image: museum
  },
  { 
    id: 33, 
    name: "Swami Manmathan Auditorium", 
    x: "56.82%", 
    y: "27.8%",
    image: auditorium
  },
  { 
    id: 34, 
    name: "Library", 
    x: "46.8%", 
    y: "32.09%",
    image: library
  },
  { 
    id: 35, 
    name: "Horticulture Area", 
    x: "27.96%", 
    y: "65.22%",
    image: horticulture
  },
];

export default function CampusMap() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  // Detect if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Get responsive marker size
  const getMarkerSize = () => {
    if (isMobile) return 5;
    return 10;
  };

  // Get responsive font size for markers
  const getMarkerFontSize = () => {
    if (isMobile) return 2.5;
    return 3;
  };

  // Function to calculate popup position
  const getPopupPosition = (dept) => {
    const xPercent = parseFloat(dept.x);
    const yPercent = parseFloat(dept.y);
    
    // Desktop positioning
    if (!isMobile) {
      let top = dept.y;
      let left = dept.x;
      let transform = "translate(0%, -50%)";
      
      if (xPercent > 65) {
        left = dept.x;
        transform = "translate(-100%, -50%)";
      }
      
      if (yPercent < 20) {
        top = "20%";
        transform = transform.replace("-50%", "0%");
      } else if (yPercent > 80) {
        top = "80%";
        transform = transform.replace("-50%", "-100%");
      }
      
      return { top, left, transform };
    }

    // Mobile positioning
    let top = dept.y;
    let left = dept.x;
    let transform = "translate(0%, -50%)";
    
    if (xPercent < 75) {
      transform = "translate(0%, -50%)";
    } else {
      transform = "translate(-100%, -50%)";
    }
    
    if (yPercent < 15) {
      top = "15%";
      transform = transform.replace("-50%", "0%");
    } else if (yPercent > 85) {
      top = "85%";
      transform = transform.replace("-50%", "-100%");
    }
    
    if (xPercent > 90) {
      left = "90%";
    } else if (xPercent < 5) {
      left = "5%";
    }
    
    return { top, left, transform };
  };

  // Handle touch events for mobile
  const handleTouchStart = (dept) => {
    if (isMobile) {
      setSelected(selected && selected.id === dept.id ? null : dept);
      setHovered(null);
    }
  };

  // Handle mouse events for desktop
  const handleMouseEnter = (dept) => {
    if (!isMobile) {
      setHovered(dept);
    }
  };

  const handleMouseLeave = (dept) => {
    if (!isMobile) {
      setHovered(null);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: isMobile ? "100%" : 1100,
        margin: "16px auto",
        minHeight: isMobile ? "400px" : "auto",
      }}
    >
      {/* Map image (responsive) */}
      <img
        src={mapImage}
        alt="Campus Map"
        style={{
          width: "100%",
          height: "auto",
          minHeight: isMobile ? "400px" : "auto",
          display: "block",
          borderRadius: 8,
          userSelect: "none",
          touchAction: "manipulation",
        }}
        draggable={false}
      />

      {/* Markers */}
      {departments.map((d) => (
        <div
          key={d.id}
          onMouseEnter={() => handleMouseEnter(d)}
          onMouseLeave={() => handleMouseLeave(d)}
          onTouchStart={(e) => {
            e.preventDefault();
            handleTouchStart(d);
          }}
          onClick={() => {
            if (!isMobile) {
              setSelected(selected && selected.id === d.id ? null : d);
            }
          }}
          role="button"
          aria-label={`Open ${d.name}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelected(selected && selected.id === d.id ? null : d);
            }
          }}
          style={{
            position: "absolute",
            top: d.y,
            left: d.x,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 5,
            width: isMobile ? "24px" : "auto",
            height: isMobile ? "24px" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: getMarkerSize(),
              height: getMarkerSize(),
              borderRadius: "50%",
              background: "transparent",
              color: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: getMarkerFontSize(),
              fontWeight: 700,
              boxShadow: isMobile ? "0 1px 3px rgba(0,0,0,0.3)" : "0 2px 6px rgba(0,0,0,0.3)",
              transition: "all 0.2s ease",
            }}
            title={d.name}
          >
            {isMobile ? "" : d.id}
          </div>
        </div>
      ))}

      {/* Hover label (desktop only) */}
      {!isMobile && hovered && !selected && (
        <div
          style={{
            position: "absolute",
            top: hovered.y,
            left: hovered.x,
            transform: "translate(-50%, -140%)",
            pointerEvents: "none",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "6px 8px",
            borderRadius: 6,
            fontSize: 13,
            zIndex: 20,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {hovered.id}. {hovered.name}
        </div>
      )}

      {/* Touch hint for mobile */}
      {isMobile && !selected && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 20,
            fontSize: 12,
            zIndex: 30,
            whiteSpace: "nowrap",
            opacity: 0.9,
          }}
        >
          Tap markers to view details
        </div>
      )}

      {/* Smaller Persistent popup */}
      {selected && (
        <div
          style={{
            position: "absolute",
            ...getPopupPosition(selected),
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
            zIndex: 1000,
            width: isMobile ? "240px" : "220px", // Much smaller!
            maxWidth: isMobile ? "85vw" : "240px",
            minWidth: isMobile ? "220px" : "200px",
            overflow: "hidden",
            maxHeight: "70vh",
          }}
        >
          {/* Arrow styling */}
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              border: "6px solid transparent", // Smaller arrow
              zIndex: 1001,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {parseFloat(selected.x) < 75 ? (
              <div
                style={{
                  borderRightColor: "#fff",
                  left: "-12px",
                }}
              />
            ) : (
              <div
                style={{
                  borderLeftColor: "#fff",
                  right: "-12px",
                }}
              />
            )}
          </div>
          
          <div style={{ padding: isMobile ? "10px" : "12px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px", // Reduced spacing
              }}
            >
              <strong 
                style={{ 
                  fontSize: isMobile ? 13 : 14, // Smaller text
                  lineHeight: isMobile ? "1.2" : "1.3",
                  fontWeight: 600,
                }}
              >
                {selected.name} {/* Removed ID from title to save space */}
              </strong>
              <button
                onClick={() => setSelected(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: isMobile ? 16 : 14,
                  padding: "2px",
                  lineHeight: 1,
                  minWidth: "20px",
                  minHeight: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.2s ease",
                  ":hover": {
                    background: "#f5f5f5",
                    color: "#333",
                  },
                }}
                aria-label="Close popup"
              >
                ×
              </button>
            </div>

            {/* Smaller Image area */}
            {selected.image && (
              <div
                style={{ 
                  marginBottom: "8px", // Reduced spacing
                  overflow: "hidden", 
                  borderRadius: 6,
                  height: isMobile ? "100px" : "90px", // Much smaller images
                }}
              >
                <img
                  src={selected.image}
                  alt={`${selected.name} department`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 6,
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Compact info section */}
            <div 
              style={{ 
                fontSize: isMobile ? 11 : 12, // Smaller text
                color: "#666",
                lineHeight: isMobile ? "1.3" : "1.4",
                paddingBottom: "8px",
                borderBottom: "1px solid #f0f0f0",
                marginBottom: "8px",
              }}
            >
              <div style={{ fontWeight: 500, color: "#333", marginBottom: "2px" }}>
                ID: {selected.id}
              </div>
              {/* Add more compact info here if needed */}
            </div>

            {/* Compact close button */}
            <div style={{ 
              textAlign: "center",
              padding: "0",
            }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "#1e88e5",
                  color: "#fff",
                  border: "none",
                  padding: isMobile ? "8px 14px" : "6px 12px", // Smaller padding
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: isMobile ? 12 : 12,
                  fontWeight: 500,
                  width: "100%",
                  transition: "all 0.2s ease",
                  ":hover": {
                    background: "#1565c0",
                  },
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close popup on outside click (mobile only) */}
      {isMobile && selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "transparent",
            zIndex: 999,
          }}
          onClick={() => setSelected(null)}
        />
      )}
    </div>
  );
}