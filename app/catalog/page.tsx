import {getAllCampers} from "@/lib/api/camperApi";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {QueryKeyConstants} from "@/lib/constans/queryKeyConstants";
import CatalogClient from "@/components/CatalogClient/CatalogClient";


export default async function Catalog() {

    const queryClient = new QueryClient();

    // await queryClient.prefetchQuery({
    //     queryKey: [QueryKeyConstants.Campers],
    //     queryFn: ()=>getAllCampers(),
    // });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CatalogClient />
        </HydrationBoundary>
    );
}