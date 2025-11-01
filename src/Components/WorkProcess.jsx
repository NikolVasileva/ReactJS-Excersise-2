import WorkProcessItem from "./WorkProcessItem.jsx";

export default function WorkProcess() {
    const workProccesItems = [
        { title: "Get Ideas", description: "Godard pabst prism fam cliche." },
        { title: "Sketch Up", description: "Godard pabst prism fam cliche." },
        { title: "Discuss", description: "Godard pabst prism fam cliche." },
        { title: "Revise", description: "Godard pabst prism fam cliche." },
        { title: "Approve", description: "Godard pabst prism fam cliche." },
        { title: "Launch", description: "Godard pabst prism fam cliche." },
    ]
    return (
        <section className="mini" id="work-process">
            <div className="mini-content">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="info">
                                <h1>Work Process</h1>
                                <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* With Array */}
                        {workProccesItems.map(item => <WorkProcessItem key={item.title} title={item.title} description={item.description} />)}

                        {/* Props */}
                        {/* <WorkProcessItem title="Get Ideas" description="Godard pabst prism fam cliche."/>

                        <WorkProcessItem title="Sketch Up" description="Godard pabst prism fam cliche."/>

                        <WorkProcessItem title="Discuss" description="Godard pabst prism fam cliche."/>

                        <WorkProcessItem title="Revise" description="Godard pabst prism fam cliche."/>

                        <WorkProcessItem title="Approve" description="Godard pabst prism fam cliche."/>

                        <WorkProcessItem title="Launch" description="Godard pabst prism fam cliche."/> */}
                    </div>
                </div>
            </div>
        </section>

    )
}