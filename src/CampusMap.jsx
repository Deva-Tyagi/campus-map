import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selected && !event.target.closest('.popup-container')) {
        setSelected(null);
      }
    };

    if (selected) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [selected]);

  // Function to calculate popup position
  const getPopupPosition = (dept) => {
    const xPercent = parseFloat(dept.x);
    const yPercent = parseFloat(dept.y);
    
    // On mobile: Center the popup both horizontally and vertically
    if (isMobile) {
      return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    }

    // Desktop positioning
    let top = dept.y;
    let left = dept.x;
    let transform = "translate(0%, -50%)"; // Right side positioning
    
    // If department is too close to right edge (within 30% of right side)
    if (xPercent > 70) {
      left = dept.x;
      transform = "translate(-100%, -50%)"; // Position to the left
    }
    
    // If department is too close to top edge (within 20% of top)
    if (yPercent < 25) {
      top = "0%";
      transform = transform.replace("-50%", "0%"); // Align to top
    }
    
    // If department is too close to bottom edge (within 20% of bottom)
    if (yPercent > 80) {
      top = "100%";
      transform = transform.replace("-50%", "0%"); // Align to bottom
    }

    return { top, left, transform };
  };

  // Mobile-friendly marker size
  const markerSize = isMobile ? 12 : 7;
  const fontSize = isMobile ? 6 : 3;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1100,
        margin: "16px auto",
        touchAction: "manipulation", // Improve mobile touch experience
      }}
    >
      {/* Map image (responsive) */}
      <img
        src={mapImage}
        alt="Campus Map"
        style={{
          width: "100%",
          height: "auto",
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
          onMouseEnter={!isMobile ? () => setHovered(d) : undefined}
          onMouseLeave={!isMobile ? () => setHovered((h) => (h && h.id === d.id ? null : h)) : undefined}
          onClick={() => setSelected(d)}
          onTouchStart={() => setSelected(d)} // Mobile touch support
          role="button"
          aria-label={`Open ${d.name}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setSelected(d);
          }}
          style={{
            position: "absolute",
            top: d.y,
            left: d.x,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 5,
            // Mobile: larger touch target
            ...(isMobile && {
              padding: 8, // Larger touch area
              borderRadius: 50,
            }),
          }}
        >
          <div
            style={{
              width: markerSize,
              height: markerSize,
              borderRadius: "50%",
              background: "#1e88e5",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: fontSize,
              fontWeight: 700,
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              border: "2px solid #fff",
              ...(isMobile && {
                width: 16,
                height: 16,
                fontSize: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }),
            }}
            title={d.name}
          >
            {d.id}
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
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "6px 8px",
            borderRadius: 6,
            fontSize: 13,
            zIndex: 20,
            whiteSpace: "nowrap",
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {hovered.id}. {hovered.name}
        </div>
      )}

      {/* Persistent popup (on click) */}
      {selected && (
        <div
          className="popup-container"
          style={{
            position: "absolute",
            ...getPopupPosition(selected),
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            zIndex: 1000,
            width: isMobile ? "90vw" : "auto",
            minWidth: isMobile ? "none" : 280,
            maxWidth: isMobile ? "90vw" : 350,
            maxHeight: isMobile ? "80vh" : "auto",
            overflow: "hidden",
            // Mobile: center and add backdrop
            ...(isMobile && {
              borderRadius: 16,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "80vh",
              width: "90vw",
              maxWidth: "400px",
            }),
          }}
        >
          {/* Mobile backdrop overlay */}
          {isMobile && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.5)",
                zIndex: -1,
              }}
            />
          )}
          
          <div style={{ padding: isMobile ? 16 : 12, maxHeight: "100%", overflowY: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <strong style={{ 
                fontSize: isMobile ? 18 : 15,
                fontWeight: 600,
                lineHeight: 1.4,
              }}>
                {selected.id}. {selected.name}
              </strong>
              <button
                onClick={() => setSelected(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: isMobile ? 20 : 14,
                  padding: 4,
                  minWidth: 32,
                  minHeight: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  ":hover": {
                    background: "rgba(0,0,0,0.1)",
                  },
                }}
                aria-label="Close popup"
              >
                ✖
              </button>
            </div>

            {/* Image area */}
            {selected.image && (
              <div
                style={{ 
                  marginBottom: 12, 
                  overflow: "hidden", 
                  borderRadius: 8,
                  ...(isMobile && { marginBottom: 16 })
                }}
              >
                <img
                  src={selected.image}
                  alt={`${selected.name} department`}
                  style={{
                    width: "100%",
                    height: isMobile ? 160 : 140,
                    objectFit: "cover",
                    borderRadius: 8,
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            <div style={{ 
              fontSize: isMobile ? 14 : 13, 
              color: "#333",
              lineHeight: 1.5,
              marginBottom: 16
            }}>
              Department ID: {selected.id}
              {isMobile && (
                <>
                  <br />
                  <small style={{ color: "#666", fontSize: 12 }}>
                    Tap outside to close
                  </small>
                </>
              )}
            </div>

            <div style={{ textAlign: "right" }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "#1e88e5",
                  color: "#fff",
                  border: "none",
                  padding: isMobile ? "12px 20px" : "6px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: isMobile ? 14 : 13,
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  minHeight: isMobile ? 44 : "auto", // iOS touch target minimum
                  ":hover": {
                    background: "#1565c0",
                    transform: "translateY(-1px)",
                  },
                  "@media (hover: none)": {
                    ":hover": {
                      background: "#1e88e5",
                      transform: "none",
                    },
                  },
                }}
              >
                {isMobile ? "Close" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile instructions overlay (first time only) */}
      {isMobile && !selected && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.85)",
            color: "white",
            padding: "20px",
            borderRadius: 12,
            textAlign: "center",
            maxWidth: "90vw",
            fontSize: 16,
            lineHeight: 1.4,
            zIndex: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", fontSize: 18 }}>🏫 Campus Map</h3>
          <p style={{ margin: "0 0 16px 0", fontSize: 14 }}>
            Tap on any numbered marker to see department details
          </p>
          <button
            onClick={() => {}}
            style={{
              background: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "8px 16px",
              borderRadius: 6,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Got it!
          </button>
        </div>
      )}
    </div>
  );
}