import styled from "styled-components";
import type { Dog } from "../type/types.ts";

const Card = styled.div`
    border: 4px solid #a1887f;
    border-radius: 15px;
    padding: 5px;
    margin: 10px;
    width: 280px;
    background-color: #e48d66;
`;

const DogImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

export default function DogCard({ singleDog }: { singleDog: Dog }) {
    const filename = singleDog.url.split("/").pop();
    return (
        <Card>
            <DogImg src={singleDog.url} alt={`${singleDog.subBreed} ${singleDog.breed}`} />
            <p><strong>Breed:</strong> {singleDog.breed}</p>
            <p><strong>Sub-breed:</strong> {singleDog.subBreed}</p>
            <small>File: {filename}</small>
        </Card>
    );
}