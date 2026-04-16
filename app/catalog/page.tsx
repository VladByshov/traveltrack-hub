
import {getAllCampers} from "@/lib/api/camperApi";

export default async function Catalog() {
    const campersData = await getAllCampers();
    console.log(campersData);
    return (
        <>
            {campersData.campers.map((item) => {
                return <p>
                    {item.name}
                </p>
            })}
        </>
    );
}