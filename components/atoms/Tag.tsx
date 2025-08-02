import React from 'react';

type TagProps = {
    text: string;
};

const Tag: React.FC<TagProps> = ({text}) => {
    return (
        <div className="border-br-success bg-bc-success-subtle border rounded-full w-fit px-2 text-success my-0.5">
            {text}
        </div>
    )
}

export default Tag;