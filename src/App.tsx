import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { towers } from "./data/towers";
import TowersList from "./components/TowersList/TowersList";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import ApartmentDetail from "./components/ApartmentDetail/ApartmentDetail";
// import styles from "./App.module.css";
import "./App.css";
import UnitThumbnail from "./components/UnitThumbnail/UnitThumbnail";

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<TowersList towers={towers} />} />

            {towers.map((tower) => (
              <Route
                key={tower.id}
                path={`/tower/${tower.id}`}
                element={<FloorSelector tower={tower} />}
              />
            ))}

            {towers.map((tower) =>
              tower.floors.map((floor) => (
                <Route
                  key={`${tower.id}-${floor.number}`}
                  path={`/tower/${tower.id}/floor/${floor.number}`}
                  element={
                    <div className="unitsContainer">
                      <FloorSelector tower={tower} />
                      <h2>
                        {tower.name} - Floor {floor.number}
                      </h2>
                      <div className="unitsGrid">
                        {floor.units.map((unit) => (
                          <UnitThumbnail
                            key={unit.id}
                            unit={unit}
                            towerId={tower.id}
                            floorNumber={floor.number}
                          />
                        ))}
                      </div>
                    </div>
                  }
                />
              ))
            )}

            {towers.map((tower) =>
              tower.floors.flatMap((floor) =>
                floor.units.map((unit) => (
                  <Route
                    key={unit.id}
                    path={`/tower/${tower.id}/floor/${floor.number}/unit/${unit.id}`}
                    element={<ApartmentDetail unit={unit} />}
                  />
                ))
              )
            )}
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
