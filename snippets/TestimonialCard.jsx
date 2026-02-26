// @ts-check

/**
 * @param {object} props
 * @param {string} props.author
 * @param {string} props.message
 * @param {string} props.position
 * @param {string} props.avatarUrl
 */
export const TestimonialCard = ({ author, message, position, avatarUrl }) => (
    <div className="flex flex-col p-8 gap-8 rounded-2xl feature-card shine-effect">
        <span className="text-lg">"{message}"</span>
        <div className="flex flex-row items-center">
            <img src={avatarUrl} alt={author} className="w-12 h-12 mr-4 rounded-full"/>
            <div className="flex flex-col">
                <span className="text-gray-200">{author}</span>
                <span className="text-sm text-gray-400">{position}</span>
            </div>
        </div>
    </div>
);
