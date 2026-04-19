"use client"
import css from "./CatalogClient.module.css";
import CampersCard from "@/components/CampersCard/CampersCard";
import {QueryKeyConstants} from "@/lib/constans/queryKeyConstants";
import {getAllCampers} from "@/lib/api/camperApi";
import {useInfiniteQuery} from "@tanstack/react-query";
import Button from "@/components/Button/Button";
import { useSearchParams } from "next/navigation";
import { CampersParams } from "@/types/camper";

export default function CatalogClient() {

    const searchParams = useSearchParams();

    const filters: Partial<CampersParams> = {
        location: searchParams.get("location") || undefined,
        form: searchParams.get("form") as any || undefined,
        engine: searchParams.get("engine") as any || undefined,
        transmission: searchParams.get("transmission") as any || undefined,
    };

    const params: CampersParams = {
        page: 1,
        perPage: 4,
        ...filters,
    };

    const {
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        ...result
        } = useInfiniteQuery({
        queryKey: [QueryKeyConstants.Campers, filters],
        queryFn: ({ pageParam = 1 }) => getAllCampers({ ...params, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < lastPage.totalPages) {
                return allPages.length + 1;
            }
            return undefined;
        },
        refetchOnMount:false,
    });

    const campers = result?.data?.pages?.flatMap((item) => item.campers) || [];
    const hasFilters = Object.values(filters).some(v => v);


    console.log(result?.data?.pages?.flatMap((item)=> item.campers))

    return (
        <div className={css.container}>
            {campers.length > 0 ? (
                <ul className={css.camperList}>
                    {campers.map((camper) => (
                        <CampersCard camper={camper} key={camper.id}/>
                    ))}
                </ul>
            ) : !result.isLoading && hasFilters ? (
                <div className={css.noResults}>
                    <p>No campers found matching your criteria. Please try different filters.</p>
                </div>
            ) : null}
            {hasNextPage && campers.length > 0 && (
                <Button
                    className={css.loadMoreBtn}
                    text={isFetchingNextPage ? "Loading..." : "Load More"}
                    color={"white"}
                    onClick={() => fetchNextPage()}
                />
            )}
        </div>
    );
}