import React from 'react';
import Button from "@/components/atoms/Button";
import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import { RiArrowRightLine } from "react-icons/ri";

const CardBody: React.FC = ({}) => {
    return (
        <div className="flex flex-col h-full px-4 py-6">
            <Tag
                text={"Interior"}
            />

            <Typography text={"Top 5 Living Room Inspirations"} heading/>

            <Typography text={"Curated vibrants colors for your living, make it pop & calm in the same time."} description/>
            <Button
                text={"Read more"}
                icon={<RiArrowRightLine className="font-semibold text-brand"/>}
            />
        </div>
    )
}

export default CardBody;