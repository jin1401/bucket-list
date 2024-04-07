import { useState } from "react";
import "./App.css";
import Bucketlist from "./components/Bucketlist/Bucketlist";
import Header from "./components/Header/Header";
import DarkmodeProvider from "./Context/DarkmodeProvider";

const filters = ["all", "accomplished", "not-yet"];
function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <DarkmodeProvider>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={setFilter}
            />
            <Bucketlist filter={filter} />
        </DarkmodeProvider>
    );
}

export default App;
