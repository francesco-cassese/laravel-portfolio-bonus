import { useParams, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ProjectCard from "../components/ProjectCard"
import styles from "./ProjectDetail.module.css"

function ProjectDetail() {

    const { id } = useParams()
    const { data: project, error, isLoading } = useFetch(`/api/projects/${id}`)

    return (
        <div className={styles.projectDetail}>
            <Link className={styles.projectDetailBack} to="/">Torna alla lista</Link>

            {isLoading && <p>Caricamento in corso...</p>}
            {error && <p>Si è verificato un errore: {error}</p>}

            {!isLoading && !error && project && (
                <ProjectCard project={project} detailed />
            )}
        </div>
    )
}

export default ProjectDetail
