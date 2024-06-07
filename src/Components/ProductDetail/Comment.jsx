import StarRating from "../StarRating/StarRating";
import "./Comment.css";

const Comment = ({user, stars, text}) => {
    return ( 
        <div className="comment-card">
            <div className="comment-header">
                <p className="comment-username">{user}</p>
                <StarRating rating = {stars}/>
            </div>
            <p className="comment-text">{text}</p>
        </div>

    );
}
 
export default Comment;