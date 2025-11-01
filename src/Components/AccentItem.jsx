export default function AccentItem({
    number, 
    title}) {
    return(                        
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="count-item decoration-bottom">
            <strong>{number}</strong>
            <span>{title}</span>
        </div>
    </div>
    )
}