import AccentItem from "./AccentItem.jsx"

export default function Accents() {
    const accentItems = [
    {number: "126", title: "Projects"},
    {number: "63", title: "Happy Clients"},
    {number: "18", title: "Awards Wins"},
    {number: "27", title: "Countries"}
];
    return (
        <section className="counter">
            <div className="content">
                <div className="container">
                    <div className="row">
                        {accentItems.map(item => <AccentItem key={item.title} number={item.number} title={item.title}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}