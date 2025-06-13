import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./towerCard.css";

interface TowerCardProps {
  tower: {
    id: string;
    name: string;
    floors: { number: number }[];
  };
}

const TowerCard: React.FC<TowerCardProps> = ({ tower }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cardContainer"
    >
      <button
        onClick={() => navigate(`/tower/${tower.id}`)}
        className="cardLink"
      >
        <h2>{tower.name}</h2>
        <p>{tower.floors.length} floors</p>
      </button>
    </motion.div>
  );
};

export default TowerCard;
