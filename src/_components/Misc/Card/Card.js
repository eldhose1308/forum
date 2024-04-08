import React from "react";
import cva from "_utils/createVariantClassNames";

const cardVariants = cva(
    'card rounded-xl m-3',
    {
        variants: {
            variant: {
                default: 'bg-default',
                accent: 'bg-accent',
                secondary: 'bg-secondary',
                custom: 'bg-custom',
                destructive: 'bg-destructive',
            },
            size: {
                default: '',
                sm: 'max-w-sm',
                md: 'max-w-md',
                lg: 'max-w-lg',
            },
            border: {
                default: '',
                another: 'border border-another',
                ghost: ''
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            border: 'another',
        }
    }
)

const Card = ({ variant, size, border, className, children, ...props }) => {
    const classNames = cardVariants({
        variant, size, border,
        className,
    });

    return (
        <React.Fragment>
            <div className={classNames} { ...props }>
                {children}
            </div>
        </React.Fragment>
    )
}

const CardHeader = ({ className, children, ...props }) => {
    return (
        <div className="card-header flex flex-col p-6" {...props}>
            {children}                
        </div>
    )
}


const CardContent = ({ children,...props }) => {

    return (
        <div className="card-content flex flex-col p-6 pt-0" {...props}>
            {children}
        </div>
    )
}


const CardFooter = ({ className, children, ...props }) => {
    const classNames = `card-footer items-center p-3 pt-0 flex justify-between ${className}`

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    )
}


const CardTitle = ({ children, ...props }) => {
    return (
        <h3 className="text-default font-bold text-2xl tracking-tight" {...props}>
            {children}
        </h3>
    )
}

const CardDescription = ({ children, ...props}) => {

    return (
        <p className="text-sm text-secondary space-y-1" {...props}>
            {children}
        </p>
    )
}

export { 
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription 
};