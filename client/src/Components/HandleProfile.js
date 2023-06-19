import { useParams } from "react-router-dom";

const HandleProfile = () => {
    const { handle } = useParams();
    console.log(handle);

    return(
        <>Profile of the user clicked on</>
    )
};

export default HandleProfile;