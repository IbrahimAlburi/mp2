import { useEffect, useState } from 'react';
import DogList from "./components/DogList.tsx";
import type { Dog } from "./type/types.ts";

function App() {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const breed = "hound";
    const subBreed = "afghan";

    useEffect(() => {
        async function fetchDogs() {
            const response = await fetch(
                `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/12`
            );
            const data = await response.json();
            const formatted: Dog[] = data.message.map((url: string) => ({
                url,
                breed,
                subBreed,
            }));
            setDogs(formatted);
        }
        fetchDogs().catch((err) => console.error("Error:", err));
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dogs!!!</h1>
            {dogs.length > 0 ? <DogList dogData={dogs} /> : <p>Loading dogs...</p>}
        </div>
    );
}

export default App;