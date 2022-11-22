import Avatar from "components/Avatar";

export default function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar author={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}