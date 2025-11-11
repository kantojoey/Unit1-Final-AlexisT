const Card = ({children, className=""}) => {
    return (
        <div className={`card-default-styles ${className}`}>
            {children}
        </div>
    );
};

export default Card;
