import { useDispatch } from "react-redux";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
const count = 18;
const ReactionButtons = () => {

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
            >
                {emoji} {count}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons