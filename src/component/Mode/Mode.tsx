import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SelectModeProp {
    onChangeMode?: Function
}

export class Mode extends React.Component {


    // onClick: Function;
    constructor(props: SelectModeProp) {
        super(props);
        // this.onClick = this.onClick.bind(this)
    };

    render() {
        const barsIcon: IconLookup = { prefix: 'fas', iconName: 'bars' }

        return <div className="ChangeModeButton">
            <button className="btn">
                <FontAwesomeIcon icon={barsIcon} />
            </button>
        </div>
        // return <button className="ChangeModeButton" onClick={this.onClick()}></button>
    };
}