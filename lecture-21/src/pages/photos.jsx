import firstPhoto from "../pictures/2.jpg";
import secondPhoto from "../pictures/3.jpg";
import thirdPhoto from "../pictures/4.jpg";
import fourthPhoto from "../pictures/5.jpg";

export const PhotosPage = () => {
    return (
        <>
            <img src={firstPhoto} />
            <img src={secondPhoto} />
            <img src={thirdPhoto} />
            <img src={fourthPhoto} />
        </>
    )
}