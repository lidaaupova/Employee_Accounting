import EmploeesListItem from "../emploees-list-item/emploees-list-item"; 

import './emploees-list.css';

const EmplooesList = ({data}) => {

    const elements = data.map((item) => {
        return (
            <EmploeesListItem {...item}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmplooesList;