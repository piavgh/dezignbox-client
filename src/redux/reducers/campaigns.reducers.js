import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';

const initialState = {
    items: [],
    loading: false,
    error: null,
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
        case CampaignsActionTypes.FETCH_CAMPAIGNS_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CampaignsActionTypes.FETCH_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.campaigns
            };

        case CampaignsActionTypes.FETCH_CAMPAIGNS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
}
