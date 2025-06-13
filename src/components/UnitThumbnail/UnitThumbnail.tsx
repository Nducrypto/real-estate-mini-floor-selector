import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Unit } from "../../data/towers";
import "./unitThumbnail.css";

interface UnitThumbnailProps {
  unit: Unit;
  towerId: string;
  floorNumber: number;
}

const UnitThumbnail: React.FC<UnitThumbnailProps> = ({
  unit,
  towerId,
  floorNumber,
}) => {
  return (
    <motion.div
      className="unitThumbnail"
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/tower/${towerId}/floor/${floorNumber}/unit/${unit.id}`}
        className="unitLink"
      >
        <img
          src={unit.layoutImage}
          alt={`${unit.type} layout`}
          className="unitImage"
        />
        <div className="unitInfo">
          <h4>{unit.type}</h4>
          <p>{unit.area} sqm</p>
          <p>
            {unit.rooms} {unit.rooms > 1 ? "rooms" : "room"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default UnitThumbnail;
