import styled from "styled-components";
import DogCard from "./DogCard.tsx";
import type { Dog } from "../type/types.ts";

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

export default function DogList({ dogData }: { dogData: Dog[] }) {
    return (
        <Grid>
            {dogData.map((d) => (
                <DogCard key={d.url} singleDog={d} />
            ))}
        </Grid>
    );
}