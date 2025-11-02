import BlockItemLeft from "./BlockItemLeft";
import BlockItemRight from "./BlockItemRight";

export default function Blocks() {
    return (
        <div>
            <BlockItemLeft
            img = {"assets/images/left-image.png"}
            title = {"Let’s discuss about you project"}
            description = {"Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."}
            />

            <BlockItemRight 
            img = {"assets/images/right-image.png"}
            title = {"We can help you to grow your business"}
            description = {"Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."}
            />
        </div>
    )
}