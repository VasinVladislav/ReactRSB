export default function Regions({ data, classes, activeTab, activeMenu, setSelectedCity }) {

    return (
        <>
            {/* Третий уровень */}
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", maxHeight: 400, margin: "0 auto" }}>
                {data[activeTab][activeMenu]?.map((group) => (
                    group.letter &&
                    <div key={group.letter} style={{ margin: 20 }}>
                        <p><strong>{group.letter}</strong></p>
                        <ul>
                            {group.items.map((item) => (
                                <li key={item.id} style={{ listStyleType: "none" }}>
                                    <button className={classes.navButton}
                                        onClick={() => setSelectedCity(item.text)}>
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}