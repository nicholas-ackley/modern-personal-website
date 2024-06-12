import  { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return (
        <>
            <h1 onClick={handleNavigate}>Test Page</h1>
        </>
    )
}

export default Projects;