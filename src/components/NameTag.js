export default function NameTag(props) {
    return (
        <div className="name-tag">
            <h3 className="name-tag-title">hello</h3>
            <p className="name-tag-subtitle">my name is</p>
            <h2 className="name">{props.name}</h2>
        </div>
    )
}