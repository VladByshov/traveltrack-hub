"use client"
import css from "./CatalogClient.module.css";
import CampersCard from "@/components/CampersCard/CampersCard";
import {QueryKeyConstants} from "@/lib/constans/queryKeyConstants";
import {getAllCampers} from "@/lib/api/camperApi";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import Button from "@/components/Button/Button";

export default function CatalogClient() {

    const {
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        ...result
        } = useInfiniteQuery({
        queryKey: [QueryKeyConstants.Campers],
        queryFn: () => getAllCampers(),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // console.log(lastPage,allPages)
            return lastPage.pages + 1;
        },
    });

    console.log(result?.data?.pages?.flatMap((item, index)=> item.campers))

    return (
        <div className={css.container}>
            <ul className={css.camperList}>
                {result?.data?.pages?.map((item) => {
                    return item.campers.map((camper) => {
                        return <CampersCard camper={camper} key={camper.id}/>
                    })
                })}
            </ul>
            <Button className={css.loadMoreBtn} text={"Load More"} color={"white"}/>
        </div>
    );
}