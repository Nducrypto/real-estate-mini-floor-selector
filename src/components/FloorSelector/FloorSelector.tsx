import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tower } from "../../data/towers";
import "./floorSelector.css";

interface FloorSelectorProps {
  tower: Tower;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({ tower }) => {
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="floorSelectorContainer">
      <h2>{tower.name}</h2>
      <div className="floorsGrid">
        {tower.floors.map((floor) => (
          <motion.div
            key={floor.number}
            className={`${"floorCard"} ${
              hoveredFloor === floor.number ? "hovered" : ""
            }`}
            onClick={() => navigate(`/tower/${tower.id}/floor/${floor.number}`)}
            onMouseEnter={() => setHoveredFloor(floor.number)}
            onMouseLeave={() => setHoveredFloor(null)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Floor {floor.number}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloorSelector;
