import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PilihGenre() {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl font-bold mt-10 text-white">Genre</h1>

            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 p-4">
                <Link to="/genre/action" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Action</Link>
                <Link to="" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Adventure</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Animation</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Comedy</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Crime</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Documentary</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Family</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Fantasy</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">History</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Horror</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Mystery</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Reality</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Romance</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Science Fiction</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Talk</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Thriller</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">War</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">Western</Link>
                <Link to="#" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg">TV Movie</Link>
            </div>
        </div>
    );
}