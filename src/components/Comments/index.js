import UserInfo from "components/UserInfo";
function formatDate(date) {
    return date.toLocaleDateString();
}

export default function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}