import deleteIcon from "../images/delete-icon.png";

export default function NameTag(props) {
    return (
        <div className="name-tag">
            <img onClick={() => props.deleteTag(props.id)} src={deleteIcon} alt="delete name tag" className="delete-name-tag" />
            <h3 className="name-tag-title">Hello</h3>
            <p className="name-tag-subtitle">my name is</p>
            <h2 className="name">{props.name}</h2>
        </div>
    )
}