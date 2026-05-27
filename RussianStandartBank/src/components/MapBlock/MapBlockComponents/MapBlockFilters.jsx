export default function MapBlockFilters({ classes, activeTab, setActiveTab }) {

    return (
        <>
            {/* 1. Слой с фильтрами */}
            <div className={classes.overlay}>
                <div className={classes.overlayMenu}>
                    {/* Левая часть */}
                    <div className={classes.leftSection}>
                        <h2 className={classes.title}>Офисы и банкоматы</h2>
                        <input id="suggest" className={classes.input} placeholder="Ваш адрес" />
                    </div>

                    {/* Правая часть с чекбоксами */}
                    <div className={classes.filtersGrid}>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Снятие наличных</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление карты</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление кредита</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Внесение наличных</label>
                    </div>

                    {/* Табы снизу */}
                    <div className={classes.tabSwitcher}>
                        <button className={`${classes.tab} ${activeTab === 'offices' ? classes.activeTab : ''}`} onClick={() => setActiveTab('offices')}>Офисы</button>
                        <button className={`${classes.tab} ${activeTab === 'atms' ? classes.activeTab : ''}`} onClick={() => setActiveTab('atms')}>Банкоматы</button>
                    </div>
                </div>
            </div>
        </>
    );
}