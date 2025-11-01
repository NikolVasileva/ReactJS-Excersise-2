import BlogItem from "./BlogItem.jsx";

export default function Blog() {
    const blogItems = [
        {title: "Vivamus ac vehicula dui", description: "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.", buttonTitle: "Read More"},
        {title: "Phasellus convallis augue", description: "Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.", buttonTitle: "Read More"},
        {title: "Nam gravida purus non", description: "Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.", buttonTitle: "Read More"}
    ];
    return (
        <section className="section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Blog Entries</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogItems.map(item => <BlogItem title={item.title} description={item.description} buttonTitle={item.buttonTitle}/>)}
                </div>
            </div>
        </section>
    )
}