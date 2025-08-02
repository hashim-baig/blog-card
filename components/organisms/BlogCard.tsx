import React from 'react';
import Image from "next/image";
import CardBody from "@/components/molecules/CardBody";

const BlogCard: React.FC = ({}) => {
    return (
        <div className="w-[340px] h-[504px] mt-[120px] mb-[144px] flex flex-col bg-white rounded-md">
            <div className="">
                <Image
                    src={"/spacejoy.jpg"}
                    alt={"space-joy"}
                    width={340}
                    height={288}
                    className="h-[288px] rounded-t-md"
                />
            </div>
            <CardBody/>
        </div>
    )
}

export default BlogCard;