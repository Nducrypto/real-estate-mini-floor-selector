import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tower } from "../../data/towers";
import "./towersList.css";

interface TowersListProps {
  towers: Tower[];
}

const TowersList: React.FC<TowersListProps> = ({ towers }) => {
  return (
    <div className="towersContainer">
      {towers.map((tower) => (
        <motion.div
          key={tower.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to={`/tower/${tower.id}`} className="towerCard">
            <img
              className="towerlist-img"
              src="https://plus.unsplash.com/premium_photo-1681158657553-00d53e170e39?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG93ZXJzfGVufDB8fDB8fHww"
            />
            <h2>{tower.name}</h2>
            <p>{tower.floors.length} floors</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default TowersList;
