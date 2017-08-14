import React from "react";
import ListItem from "./ListItem";

class ListBlock extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {items, title} = this.props;

        const listItems = items.map((item, i) => {
            const {id, content} = item;
            return <ListItem key={id} message={content}> </ListItem>
        });

        return (
            <div className="list-block">
                <div style={styles.titleHeader} className="right_box_top">{title}</div>
                <ul style={styles.listStyle} className="bulletList">
                    {listItems}
                </ul>
            </div>
        );
    }
}

const styles = {
    titleHeader : {
        textDecoration : 'underline'
    },
    listStyle : {

    }
}

export default ListBlock;