import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-white text-4xl mb-4">Requested page not found</h1>
            <Link to="/" className="text-white text-lg underline">
                Go back to Main Page
            </Link>
        </div>
    );
}