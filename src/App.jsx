import React from 'react'
import CampusMap from './CampusMap'

const App = () => {
  return (
    <>
      <CampusMap />
    </>
  )
}

export default App

// src/components/CampusMapEditor.jsx
// import React, { useRef, useState, useEffect } from "react";
// import mapSrc from "./assets/CampusMap.jpg"; // update path if needed

// const initialDepartments = [
//   { id: 1, name: "Forestry & NR", x: 18, y: 12 },
//   { id: 2, name: "Horticulture Dept", x: 22, y: 18 },
//   { id: 3, name: "Horticulture Dept B.Sc", x: 28, y: 20 },
//   { id: 4, name: "Environmental Sci", x: 36, y: 18 },
//   { id: 5, name: "Business Management", x: 42, y: 22 },
//   { id: 6, name: "Yoga, Biochemistry & Rural Tech", x: 48, y: 25 },
//   { id: 7, name: "Seed Sci", x: 52, y: 28 },
//   { id: 8, name: "Mathematics Dept", x: 56, y: 22 },
//   { id: 9, name: "Statistics", x: 60, y: 26 },
//   { id: 10, name: "Mechanical Engineering Workshop", x: 64, y: 30 },
//   { id: 11, name: "Zoology", x: 20, y: 32 },
//   { id: 12, name: "Botany", x: 25, y: 34 },
//   { id: 13, name: "Microbiology Wing-C", x: 30, y: 36 },
//   { id: 14, name: "Biotechnology Wing-C", x: 35, y: 38 },
//   { id: 15, name: "Remote Sensing and GIS Applications", x: 40, y: 40 },
//   { id: 16, name: "Physics", x: 45, y: 42 },
//   { id: 17, name: "Chemistry", x: 50, y: 44 },
//   { id: 18, name: "Geology", x: 55, y: 46 },
//   { id: 19, name: "Geography", x: 60, y: 48 },
//   { id: 20, name: "Anthropology", x: 65, y: 50 },
//   { id: 21, name: "History and Archaeology", x: 70, y: 52 },
//   { id: 22, name: "Mass Communication", x: 75, y: 54 },
//   { id: 23, name: "School of Commerce", x: 80, y: 56 },
//   { id: 24, name: "Astro Physics", x: 85, y: 58 },
//   { id: 25, name: "Engineering and Technology", x: 30, y: 70 },
//   { id: 26, name: "Computer Science Engineering", x: 36, y: 72 },
//   { id: 27, name: "Pharmaceutical Sciences", x: 42, y: 74 },
//   { id: 28, name: "Mountain, Tourism & Hospitality", x: 48, y: 76 },
//   { id: 29, name: "HAPRAC", x: 54, y: 78 },
//   { id: 30, name: "Biotechnology", x: 60, y: 80 },
//   { id: 31, name: "Gymnasium", x: 49.56, y: 57.3 },
//   { id: 32, name: "Museum", x: 51.21, y: 40.54 },
//   { id: 33, name: "Swami Manmathan Auditorium", x: 56.82, y: 27.8 },
//   { id: 34, name: "Library", x: 46.8, y: 32.09 },
//   { id: 35, name: "Horticulture Area", x: 27.96, y: 65.22 },
// ];

// export default function CampusMapEditor() {
//   const containerRef = useRef(null);
//   const imgRef = useRef(null);
//   const [departments, setDepartments] = useState(initialDepartments);
//   const [draggingId, setDraggingId] = useState(null);
//   const [mode, setMode] = useState("edit"); // "edit" or "preview"

//   // Helper to convert mouse/touch pos to percent coords relative to image
//   function clientToPercent(clientX, clientY) {
//     const img = imgRef.current;
//     if (!img) return { x: 0, y: 0 };
//     const rect = img.getBoundingClientRect();
//     let px = ((clientX - rect.left) / rect.width) * 100;
//     let py = ((clientY - rect.top) / rect.height) * 100;
//     px = Math.min(100, Math.max(0, px));
//     py = Math.min(100, Math.max(0, py));
//     return { x: px, y: py };
//   }

//   function onPointerDown(e, id) {
//     e.preventDefault();
//     setDraggingId(id);
//   }

//   function onPointerMove(e) {
//     if (draggingId == null) return;
//     let clientX = e.clientX;
//     let clientY = e.clientY;
//     // support touch
//     if (e.touches && e.touches[0]) {
//       clientX = e.touches[0].clientX;
//       clientY = e.touches[0].clientY;
//     }
//     const { x, y } = clientToPercent(clientX, clientY);
//     setDepartments((prev) =>
//       prev.map((d) =>
//         d.id === draggingId ? { ...d, x: +x.toFixed(2), y: +y.toFixed(2) } : d
//       )
//     );
//   }

//   function endDrag() {
//     setDraggingId(null);
//   }

//   useEffect(() => {
//     window.addEventListener("mouseup", endDrag);
//     window.addEventListener("touchend", endDrag);
//     window.addEventListener("mousemove", onPointerMove);
//     window.addEventListener("touchmove", onPointerMove, { passive: false });
//     return () => {
//       window.removeEventListener("mouseup", endDrag);
//       window.removeEventListener("touchend", endDrag);
//       window.removeEventListener("mousemove", onPointerMove);
//       window.removeEventListener("touchmove", onPointerMove);
//     };
//   }, [draggingId]);

//   function exportJSON() {
//     const data = departments.map((d) => ({
//       id: d.id,
//       name: d.name,
//       x: `${d.x}%`,
//       y: `${d.y}%`,
//     }));
//     const json = JSON.stringify(data, null, 2);
//     // copy to clipboard
//     if (navigator && navigator.clipboard) {
//       navigator.clipboard.writeText(json).catch(() => {});
//     }
//     // also trigger download
//     const blob = new Blob([json], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "departments_coordinates.json";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     alert("JSON copied to clipboard and downloaded.");
//   }

//   function resetPositions() {
//     if (!window.confirm("Reset positions to initial values?")) return;
//     setDepartments(initialDepartments);
//   }

//   return (
//     <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
//       <div style={{ display: "flex", gap: 12 }}>
//         <div style={{ flex: 1 }}>
//           <div
//             ref={containerRef}
//             style={{
//               position: "relative",
//               width: "100%",
//               maxWidth: 1200,
//               margin: "6px auto",
//               border: "1px solid #ddd",
//               borderRadius: 8,
//               overflow: "hidden",
//               background: "#f8f8f8",
//             }}
//           >
//             <img
//               ref={imgRef}
//               src={mapSrc}
//               alt="Campus map"
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "auto",
//                 userSelect: "none",
//                 touchAction: "none",
//               }}
//               draggable={false}
//             />

//             {/* Markers */}
//             {departments.map((d) => (
//               <div
//                 key={d.id}
//                 role="button"
//                 tabIndex={0}
//                 onMouseDown={(e) => onPointerDown(e, d.id)}
//                 onTouchStart={(e) => {
//                   e.preventDefault();
//                   onPointerDown(e.touches[0], d.id);
//                 }}
//                 title={`${d.id}. ${d.name}`}
//                 style={{
//                   position: "absolute",
//                   left: `${d.x}%`,
//                   top: `${d.y}%`,
//                   transform: "translate(-50%, -50%)",
//                   zIndex: draggingId === d.id ? 999 : 50,
//                   cursor: mode === "edit" ? "grab" : "default",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: "50%",
//                     background: "#1e88e5",
//                     color: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: 700,
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//                     border: "3px solid white",
//                     fontSize: 3,
//                     userSelect: "none",
//                   }}
//                 >
//                   {d.id}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             style={{
//               display: "flex",
//               gap: 8,
//               justifyContent: "center",
//               marginTop: 8,
//             }}
//           >
//             <button
//               onClick={() =>
//                 setMode((m) => (m === "edit" ? "preview" : "edit"))
//               }
//               style={{
//                 padding: "8px 12px",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               {mode === "edit" ? "Switch to Preview" : "Switch to Edit"}
//             </button>
//             <button
//               onClick={exportJSON}
//               style={{
//                 padding: "8px 12px",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               Export JSON
//             </button>
//             <button
//               onClick={resetPositions}
//               style={{
//                 padding: "8px 12px",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         {/* Right panel: list & manual edit */}
//         <div
//           style={{ width: 360, borderLeft: "1px solid #eee", paddingLeft: 12 }}
//         >
//           <h3 style={{ marginTop: 0 }}>Departments (drag on map or edit)</h3>
//           <div style={{ maxHeight: 640, overflow: "auto", paddingRight: 8 }}>
//             {departments.map((d) => (
//               <div
//                 key={d.id}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 8,
//                   padding: "8px 6px",
//                   borderBottom: "1px solid #f0f0f0",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 34,
//                     height: 34,
//                     borderRadius: "50%",
//                     background: "#1e88e5",
//                     color: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {d.id}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: 13, fontWeight: 700 }}>{d.name}</div>
//                   <div style={{ fontSize: 12, color: "#555" }}>
//                     x:{" "}
//                     <input
//                       value={d.x}
//                       onChange={(e) =>
//                         setDepartments((prev) =>
//                           prev.map((p) =>
//                             p.id === d.id
//                               ? {
//                                   ...p,
//                                   x: Math.max(
//                                     0,
//                                     Math.min(
//                                       100,
//                                       parseFloat(e.target.value || 0)
//                                     )
//                                   ),
//                                 }
//                               : p
//                           )
//                         )
//                       }
//                       style={{ width: 60, marginRight: 8 }}
//                     />{" "}
//                     y:{" "}
//                     <input
//                       value={d.y}
//                       onChange={(e) =>
//                         setDepartments((prev) =>
//                           prev.map((p) =>
//                             p.id === d.id
//                               ? {
//                                   ...p,
//                                   y: Math.max(
//                                     0,
//                                     Math.min(
//                                       100,
//                                       parseFloat(e.target.value || 0)
//                                     )
//                                   ),
//                                 }
//                               : p
//                           )
//                         )
//                       }
//                       style={{ width: 60 }}
//                     />
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => {
//                     // center this marker: (set to middle of image)
//                     setDepartments((prev) =>
//                       prev.map((p) =>
//                         p.id === d.id ? { ...p, x: 50, y: 50 } : p
//                       )
//                     );
//                   }}
//                   style={{ padding: "6px 8px", cursor: "pointer" }}
//                 >
//                   Center
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div style={{ marginTop: 12, fontSize: 13, color: "#444" }}>
//             Tip: drag each blue circle to precisely match the numbered label on
//             the map. When done, click <b>Export JSON</b>.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
