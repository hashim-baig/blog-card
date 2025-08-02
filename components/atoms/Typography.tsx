import React from 'react';

type TypographyProps = {
    text: string;
    heading?: boolean;
    description?: boolean;
};

const Typography: React.FC<TypographyProps> = ({ text, heading, description }) => {
    let className = '';

    if (heading) {
        className = 'text-lg text-neutral-900 font-bold my-1.5';
    } else if (description) {
        className = 'text-base text-neutral-600 font-semibold my-1.5';
    }

    return <span className={className}>{text}</span>;
};

export default Typography;
