export default function WorkProcessItem({
    title,
    description
}) {
    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <a href="#" className="mini-box">
                <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                <strong>{title}</strong>
                <span>{description}</span>
            </a>
        </div>
    )
}

// // With props
// export default function WorkProcessItem(props) {
//     return (
//         <div className="col-lg-2 col-md-3 col-sm-6 col-6">
//             <a href="#" className="mini-box">
//                 <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
//                 <strong>{props.title}</strong>
//                 <span>{props.description}</span>
//             </a>
//         </div>
//     )
// }