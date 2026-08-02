import PROJECTS from "../data/projects";

const Project = props => {
    // Equivalent to const title = this.props.project.title
    const { title, image, description, link, linkText } = props.project;

    return (
        <div style={{ display: 'inline-block', width: 200, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='Profile' style={{ width: 200, height: 120 }}/>
            <p>{description}</p>
            <a href={link}>{linkText}</a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => {
                    return (
                        <Project key={PROJECT.id} project={PROJECT} />
                    );
                })
            }
        </div>
    </div>
)

export default Projects;