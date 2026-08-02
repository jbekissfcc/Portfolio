import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
    const {link, image} = props.project;
    
    return (
        <div style={{ display: 'inline-block' }}>
            <a href={link} style={{ display: 'inline-block', width: 25, margin: 10}}>
                <img src={image} alt='Social media icon' style={{ width: '100%' }} />
            </a>
        </div>
    )
}

const SocialProfiles = () => (
    <div>
        <h3>Connect With Me</h3>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return (
                        <SocialProfile key={SOCIAL_PROFILE.id} project={SOCIAL_PROFILE} />
                    )
                })
            }
        </div>
    </div>
)

export default SocialProfiles;