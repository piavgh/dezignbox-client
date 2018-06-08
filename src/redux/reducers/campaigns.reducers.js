import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';

const initialState = {
    campaigns: [],
    newCampaign: {
        title: '',
        description: '',
        status: true,
        imageUrl: '',
        canvasDataUrl: ''
    },
    createCampaignPending: false,
    createCampaignSuccess: false,
    createCampaignError: {}
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
        case CampaignsActionTypes.SAVE_IMAGE_URL:
            newCampaign = state.newCampaign;
            newCampaign.imageUrl = action.imageUrl;
            return {
                ...state,
                newCampaign
            };
        case CampaignsActionTypes.SAVE_CANVAS_DATA_URL:
            newCampaign = state.newCampaign;
            newCampaign.canvasDataUrl = action.canvasDataUrl;
            return {
                ...state,
                newCampaign
            };
        case CampaignsActionTypes.CREATE_PENDING:
            return {
                ...state,
                createCampaignPending: true
            };
        case CampaignsActionTypes.CREATE_FULFILLED:
            return {
                ...state,
                createCampaignPending: false,
                createCampaignSuccess: true,
                newCampaign: {
                    title: '',
                    description: '',
                    status: true,
                    imageUrl: '',
                    canvasDataUrl: ''
                }
            };
        case CampaignsActionTypes.CREATE_REJECTED:
            return {
                ...state,
                createCampaignPending: false,
                createCampaignError: action.payload
            };
        default:
            return state;
    }
}
