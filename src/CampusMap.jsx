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
  const [hovered, setHovered] = useState(null); // for small hover label
  const [selected, setSelected] = useState(null); // for persistent popup

  // Function to calculate popup position
  const getPopupPosition = (dept) => {
    // Start with right-side positioning
    let top = dept.y;
    let left = dept.x;
    let transform = "translate(0%, -50%)"; // No left translation, just center vertically
    
    // If department is too close to right edge (within 300px), position on left
    const xPercent = parseFloat(dept.x);
    if (xPercent > 70) { // If more than 70% from left edge
      left = dept.x;
      transform = "translate(-100%, -50%)"; // Position to the left of marker
    }
    
    // If department is too close to top edge (within 200px), adjust vertical position
    const yPercent = parseFloat(dept.y);
    if (yPercent < 25) { // If less than 25% from top
      top = "0%";
      transform = transform.replace("-50%", "0%"); // Align to top instead of center
    }
    
    return { top, left, transform };
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1100,
        margin: "16px auto",
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
        }}
        draggable={false}
      />

      {/* Markers */}
      {departments.map((d) => (
        <div
          key={d.id}
          onMouseEnter={() => setHovered(d)}
          onMouseLeave={() =>
            setHovered((h) => (h && h.id === d.id ? null : h))
          }
          onClick={() => setSelected(d)}
          role="button"
          aria-label={`Open ${d.name}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setSelected(d);
          }}
          style={{
            position: "absolute",
            top: d.y,
            left: d.x,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#1e88e5",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 3,
              fontWeight: 700,
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              border: "2px solid #fff",
            }}
            title={d.name}
          >
            {d.id}
          </div>
        </div>
      ))}

      {/* Hover label (small) */}
      {hovered && !selected && (
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
          }}
        >
          {hovered.id}. {hovered.name}
        </div>
      )}

      {/* Persistent popup (on click) - Now positioned to the right */}
      {selected && (
        <div
          style={{
            position: "absolute",
            ...getPopupPosition(selected),
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            zIndex: 1000,
            minWidth: 280,
            maxWidth: 350,
            overflow: "hidden",
            // Add an arrow pointing to the marker
            "::after": {
              content: '""',
              position: "absolute",
              left: selected.x > "70%" ? "100%" : "0%",
              top: "50%",
              transform: "translate(0%, -50%)",
              width: 0,
              height: 0,
              border: "8px solid transparent",
              borderRightColor: selected.x > "70%" ? "#fff" : "transparent",
              borderLeftColor: selected.x > "70%" ? "transparent" : "#fff",
              zIndex: 1001,
            },
          }}
        >
          <div style={{ padding: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong style={{ fontSize: 15 }}>
                {selected.id}. {selected.name}
              </strong>
              <button
                onClick={() => setSelected(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: 14,
                }}
                aria-label="Close popup"
              >
                ✖
              </button>
            </div>

            {/* Image area - now active */}
            {selected.image && (
              <div
                style={{ marginTop: 12, overflow: "hidden", borderRadius: 6 }}
              >
                <img
                  src={selected.image}
                  alt={`${selected.name} department`}
                  style={{
                    width: "100%",
                    height: 140,
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

            <div style={{ marginTop: 12, fontSize: 13, color: "#333" }}>
              {/* You can add description or links here */}
              Department ID: {selected.id}
              <br />
            </div>

            <div style={{ marginTop: 12, textAlign: "right" }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "#1e88e5",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}