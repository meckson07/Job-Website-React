import { Link } from "react-router-dom"

const HeroComponent=()=>{
    return(
    <div className="hero-component">
        <div className="display-intro">
            <h4>For Job Searchers</h4>
            <p>Find the job that isperfect for your skill</p>
            <button><Link className="link" to={"/"}>Browse Jobs</Link></button>
        </div>
        <div className="display-intro">
        <h4>For Job Providers</h4>
            <p>Lets find the perfect person for your job</p>
            <button><Link className="link" to={"/"}>Add Job</Link></button>
        </div>
    </div>
    )
}

export default HeroComponent