import { motion } from "framer-motion";
import { Unit } from "../../data/towers";
import "./ApartmentDetail.css";

interface ApartmentDetailProps {
  unit: Unit;
}

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({ unit }) => {
  return (
    <motion.div
      className="apartmentDetail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{unit.type} Apartment</h2>
      <div className="detailContent">
        <div className="detailImage">
          <img src={unit.layoutImage} alt={`${unit.type} layout`} />
        </div>
        <div className="detailInfo">
          <h3>Details</h3>
          <p>
            <strong>Area:</strong> {unit.area} sqm
          </p>
          <p>
            <strong>Rooms:</strong> {unit.rooms}
          </p>
          <p>
            <strong>Unit Type:</strong> {unit.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ApartmentDetail;
