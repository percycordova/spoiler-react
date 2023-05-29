import style from "component/Page_Home/PrintEdition/TabNavItem/TabNavItem.module.scss";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <button type="button" role="tab" onClick={handleClick} className={`flex-1 ${style["tab__nav"]} ${activeTab === id ? style["active"] : ""}`}>
            {title}
        </button>
    );
};
export { TabNavItem };
