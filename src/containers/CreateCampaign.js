import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import DesignPage from './DesignPage';
import CampaignInfo from './CampaignInfo';

class CreateCampaign extends Component {

    render() {
        return <div>
            <h1>Start a Campaign</h1>
            <Switch>
                <Route path="/start-design/design" component={DesignPage}/>
                <Route path="/start-design/campaign-info" component={CampaignInfo}/>
            </Switch>
        </div>
    }
}

export default CreateCampaign;
