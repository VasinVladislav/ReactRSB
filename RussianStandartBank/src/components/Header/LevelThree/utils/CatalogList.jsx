export default function CatalogList({ data, classes, activeTab, activeMenu }) {

    return (
        <>
            {/* Третий уровень */}
            <div className={classes.column}>
                {data[activeTab][activeMenu]?.map((item) => (
                    <button key={item.id} className={classes.navButton}
                        onClick={() => window.open(item.href, '_blank')}>
                        {item.text}
                    </button>
                ))}
            </div>
        </>
    );
}