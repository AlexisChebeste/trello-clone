import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import WorkSelected from '../components/WorkSelected';

function Home() {

    const boards = [
        {
            id: 1,
            name: 'Tablero 1',
            description: 'Primera lista',
        },
        {
            id: 2,
            name: 'Tablero 2',
            description: 'Segunda lista',
        },
        {
            id: 3,
            name: 'Tablero 3',
            description: 'Tercera lista',
        },
        {
            id: 4,
            name: 'Tablero 4',
            description: 'Cuarta lista',
        },
    ]

    return (
        <main className="pt-20 md:pt-24 p-4 container  mx-auto">
            <div className="flex gap-x-7 w-full h-screen">
                <Aside />
                <div className="w-full ">
                    <WorkSelected />
                    <h2 className="mt-4 text-gray-900 font-semibold">Tus tableros</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        {boards.map(({id,name, description}) =>  {
                            return (
                                <Link to={`/${id}`} className="bg-blue-500 p-4 rounded-md shadow-md text-white hover:bg-blue-600 transition duration-300">
                                    <h3 className="text-lg font-semibold">{name}</h3>
                                    <p className="text-sm">{description}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default Home;