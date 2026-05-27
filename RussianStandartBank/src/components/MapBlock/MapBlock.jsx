import { useStyles } from './style';
import { useState } from 'react';
import MapBlockFilters from "./MapBlockComponents/MapBlockFilters.jsx"
import MapBlockContent from "./MapBlockComponents/MapBlockContent.jsx"

export default function MapBlock() {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('offices');

    return (
        <div id='map' className={classes.mapSection}>

            {/* 1. Слой с фильтрами */}
            <MapBlockFilters
                classes={classes}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* 2. Слой с картой */}
            <MapBlockContent
                classes={classes}
                activeTab={activeTab}
            />
        </div>
    );
};

