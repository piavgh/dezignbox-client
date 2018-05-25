import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';

const initialState = {
    campaigns: [],
    newCampaign: {
        title: '',
        description: '',
        status: false
    }
};

export default function CampaignsReducers(state = initialState, action) {
    switch (action.type) {
        case CampaignsActionTypes.UPDATE_CAMPAIGN_INFO:
            let newCampaign = state.newCampaign;
            newCampaign[action.field] = action.value;

            return {
                ...state,
                newCampaign
            };
        default:
            return state;
    }
}
