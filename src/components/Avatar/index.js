export default function Avatar(props) {
    return (
        <div className="Avatar">
            <img
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
        </div>
    );
}