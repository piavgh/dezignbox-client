import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  detail: null,
  newCampaign: {
    title: '',
    description: '',
    status: true,
    imageUrl: '',
    canvasDataUrl: ''
  },
  createCampaignPending: false,
  createCampaignSuccess: false,
  createCampaignError: {},
  updateCampaignPending: false,
  updateCampaignSuccess: false,
  updateCampaignError: {}
};

export default function CampaignsReducers(state = initialState, action) {
  let newCampaign;
  let detail;
  switch (action.type) {
    case CampaignsActionTypes.UPDATE_CAMPAIGN_INFO:
      if (action.params.reduxField === 'newCampaign') {
        newCampaign = state.newCampaign;
        newCampaign[action.field] = action.value;

        return {
          ...state,
          newCampaign
        };
      } else if (action.params.reduxField === 'detail') {
        detail = state.detail;
        console.log(detail);
        detail[action.field] = action.value;

        return {
          ...state,
          detail
        };
      } else {
        break;
      }
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
        },
        createCampaignError: {}
      };
    case CampaignsActionTypes.CREATE_REJECTED:
      return {
        ...state,
        createCampaignPending: false,
        createCampaignError: action.payload
      };

    case CampaignsActionTypes.UPDATE_PENDING:
      return {
        ...state,
        updateCampaignPending: true
      };
    case CampaignsActionTypes.UPDATE_FULFILLED:
      return {
        ...state,
        updateCampaignPending: false,
        updateCampaignSuccess: true,
        updateCampaignError: {}
      };
    case CampaignsActionTypes.UPDATE_REJECTED:
      return {
        ...state,
        updateCampaignPending: false,
        updateCampaignError: action.payload
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

    case CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload.campaign
  };

    case CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        detail: null
      };

    default:
      return state;
  }
}
