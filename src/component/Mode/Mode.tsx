import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface SelectModeProp {
    onChangeMode?: Function,
    layout: string,
}

export class Mode extends React.Component {

    constructor(props: SelectModeProp) {
        super(props);
        this.state = {
            layout: props.layout,
            showMenu: false,
        };

        this.onChangeMode = this.onChangeMode.bind(this);
    }

    onChangeMode() {
        this.setState(prevState => ({
            // layout: this.state.layout
        }));
    }

    // componentDidMount() { }

    // componentWillUnmount() { }

    render() {
        const barsIcon: IconLookup = { prefix: 'fas', iconName: 'bars' }
        return (
            <div className="ChangeModeButton">
                <button className="btn" onClick={this.onClickIcon}>
                    <FontAwesomeIcon icon={barsIcon} />
                    {/* {this.state.layout} */}
                </button>
            </div>
        );
    }

    onClickIcon() {
        console.log(`Mode.onClickIcon()`);
        this.setState(prevState => ({
            showMenu: prevState.showMenu,
        }));
    }
}