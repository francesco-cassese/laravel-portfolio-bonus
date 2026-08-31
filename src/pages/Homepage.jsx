import useFetch from "../hooks/useFetch"
import ProjectCard from "../components/ProjectCard"
import styles from "./Homepage.module.css"

function Homepage() {

    const { data, error, isLoading } = useFetch('/api/projects')

    return (
        <div className={styles.homepage}>
            <h1 className={styles.homepageTitle}>I miei progetti</h1>
            <p className={styles.homepageSubtitle}>Una selezione dei progetti realizzati durante il percorso della specializzazione in PHP/Laravel</p>

            {isLoading && <p>Caricamento in corso...</p>}
            {error && <p>Si è verificato un errore: {error}</p>}

            {!isLoading && !error && (
                <div className={styles.projectList}>
                    {data.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Homepage
