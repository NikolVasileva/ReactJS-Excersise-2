export default function TestimonialItem({
    description,
    name,
    role
}) {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="team-item">
            <div className="team-content">
                <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                <p>{description}</p>
                <div className="user-image">
                    <img src="https://placehold.it/60x60" alt="" />
                </div>
                <div className="team-info">
                    <h3 className="user-name">{name}</h3>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    </div>
    )
}