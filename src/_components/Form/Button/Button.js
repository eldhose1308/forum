import React from 'react'

import cva from '_utils/createVariantClassNames';

// import { defaultProps } from './props/defaultProps';
// import { propTypes } from './props/propTypes';

import './Button.css'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap font-medium disabled-50',
    {
        variants: {
            variant: {
                default: 'btn bg-default text-custom',
                accent: 'btn bg-accent text-custom',
                secondary: 'btn bg-secondary text-default',
                custom: 'btn bg-custom text-default hover-accent hover-text-custom',
                destructive: 'btn bg-destructive',
                outline: 'btn bg-outline text-default border border-secondary',
                link: 'btn bg-transparent',
                ghost: 'bg-transparent text-default hover-accent hover-text-custom'
            },
            size: {
                default: "h-10 px-4 py-2",
                xs: "h-8 px-2 py-1",
                sm: "h-9 px-4 py-1",
                md: "h-10 px-4",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
            },
            width: {
                none: '',
                full: 'w-full'
            },
            rounded: {
                default: '',
                rounded: 'rounded-md'
            }
        },
        defaultVariants: {
            variant: '',
            size: 'md',
            width: 'full',
            rounded: 'rounded',
        }
    }
)

const Button = ({ variant, size, title, width, className, children, ...props }) => {
    
    const classNames = buttonVariants({
        variant, size, width,
        className,
    });

    return (
        <button
            className={classNames}
            {...props}
        >
            {children}
        </button>
    )
}

// Button.defaultProps = defaultProps
// Button.propTypes = propTypes;

export default React.memo(Button)