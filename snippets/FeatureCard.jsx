// @ts-check

/**
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.title
 * @param {string} props.redirect
 * @param {string} props.description
 */
export const FeatureCard = ({ icon, title, redirect, description }) => (
    <div className="p-8 rounded-2xl feature-card shine-effect">
        <span className="w-14 h-14 bg-cyan-900 rounded-xl mb-6 flex items-center justify-center text-2xl">
            {icon}
        </span>
        <a href={redirect}>
            <h3 className="text-2xl font-bold text-gray-200 mb-4 underline">{title}</h3>
        </a>
        <p className="text-gray-300">{description}</p>
    </div>
);
