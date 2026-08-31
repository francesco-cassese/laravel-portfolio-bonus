import { Link } from "react-router-dom"
import { BASE_URL } from "../services/api"
import styles from "./ProjectCard.module.css"

function ProjectCard({ project, detailed = false }) {

    const { id, title, description, image, repo_url, type, technologies } = project

    return (
        <article className={styles.projectCard}>
            <img
                className={styles.projectCardImage}
                src={`${BASE_URL}/storage/${image}`}
                alt={title}
            />
            <div className={styles.projectCardBody}>
                {type && <span className={styles.projectCardType}>{type.name}</span>}
                <h2 className={styles.projectCardTitle}>{title}</h2>
                <p className={styles.projectCardDescription}>{description}</p>
                {detailed && technologies && (
                    <ul className={styles.projectCardTechnologies}>
                        {technologies.map(technology => (
                            <li
                                key={technology.id}
                                className={styles.projectCardTechnology}
                                style={{ "--tech-color": technology.color }}
                            >
                                {technology.name}
                            </li>
                        ))}
                    </ul>
                )}
                {detailed ? (
                    <a
                        className={styles.projectCardLink}
                        href={repo_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Vedi repository
                    </a>
                ) : (
                    <Link className={styles.projectCardLink} to={`/projects/${id}`}>
                        Vedi dettagli
                    </Link>
                )}
            </div>
        </article>
    )
}

export default ProjectCard
