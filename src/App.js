import { useState } from "react";
import "./App.css";
import Bucketlist from "./components/Bucketlist/Bucketlist";
import Header from "./components/Header/Header";

const filters = ["all", "accomplished", "not-yet"];
function App() {
    const [filter, setFilter] = useState(filters[0]);
    const handleFilterChange = (value) => {
        setFilter(value);
    };
    return (
        <>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={handleFilterChange}
            />
            <Bucketlist filter={filter} />
        </>
    );
}

function handleFilterChange(filter) {
    setFilter(filter);
}

export default App;
