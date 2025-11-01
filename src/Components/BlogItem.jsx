export default function BlogItem({
    title,
    description,
    buttonTitle
}) {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="blog-post-thumb">
            <div className="img">
                <img src="assets/images/blog-item-01.png" alt="" />
            </div>
            <div className="blog-content">
                <h3>
                    <a href="#">{title}</a>
                </h3>
                <div className="text">
                    {description}
                </div>
                <a href="#" className="main-button">{buttonTitle}</a>
            </div>
        </div>
    </div>
    )
}