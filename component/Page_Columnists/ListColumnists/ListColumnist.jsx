import { ColumnistCard } from "component/Page_Columnists/ColumnistCard/ColumnistCard";

const ListColumnist = ({ data, variant }) => {
    return (
        <>
            {data.map((columnist, index) => {
                return <ColumnistCard columnist={columnist[0]} variant={variant} key={index} />
            })}
        </>
    );
};

export { ListColumnist };
