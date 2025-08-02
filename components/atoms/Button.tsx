import React, { ReactNode } from 'react';

type ButtonProps = {
    text: string;
    icon?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({text, icon}) => {
    return (
        <span className="text-base font-semibold text-brand my-4.5 flex items-center gap-1.5">
            {text}
            {icon}
        </span>
    )
}

export default Button;