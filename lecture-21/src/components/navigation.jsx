import {Link} from "react-router-dom";

const links = [
    {
        to: '/',
        exact: true,
        label: 'Home'
    },
    {
        to: '/publications',
        label: 'Publications'
    },
    {
        to: '/photos',
        label: "Photo's"
    },
    {
        to: '/contacts',
        label: 'Contacts'
    }
];

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation_menu">
            {links.map(link => (
                <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
)