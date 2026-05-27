import { YMaps } from '@pbe/react-yandex-maps';
import { useStyles } from './style';
import MapContent from './MapContent';


export default function MapBlock() {
    const classes = useStyles();

    return (
        <div id='map' className={classes.mapSection}>
            {/* Добавьте suggest_apikey в query */}
            <YMaps query={{
                apikey: '894225a5-b09a-4d9a-93ad-997f3702d947',
                load: 'suggest,search',
                suggest_apikey: '5cf44534-3f1f-4c9c-919c-8e139ad2c078'
            }}>
                <MapContent />
            </YMaps>
        </div>
    );
}


