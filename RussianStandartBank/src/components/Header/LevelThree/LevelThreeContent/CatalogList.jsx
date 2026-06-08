// Список с предложениями банка

export default function CatalogList({ data, classes, activeTab, activeMenu, setActiveMenu }) {

    return (
        <>
            {/* Третий уровень */}
            <div className={classes.column}>
                {data[activeTab][activeMenu]?.map((item) => (
                    <button key={item.id} className={classes.navButton}
                        onClick={() => (window.open(item.href, '_blank'), setActiveMenu(null))}>
                        {item.text}
                    </button>
                ))}
            </div>
        </>
    );
}