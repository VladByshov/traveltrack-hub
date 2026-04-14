import Image from "next/image";
import banner from "@/public/banner.webp"

export default function BgImage () {
    return <Image src={banner} alt="Track image banner" width={1440} height={696}/>
}