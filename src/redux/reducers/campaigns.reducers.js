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
  createCampaignSuccess: false,
  createCampaignError: {},
  updateCampaignSuccess: false,
  updateCampaignError: {},
  deleteCampaignSuccess: false,
  deleteCampaignError: {}
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
        loading: true
      };
    case CampaignsActionTypes.CREATE_FULFILLED:
      return {
        ...state,
        loading: false,
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
        loading: false,
        createCampaignError: action.payload
      };

    case CampaignsActionTypes.UPDATE_PENDING:
      return {
        ...state,
        loading: true
      };
    case CampaignsActionTypes.UPDATE_FULFILLED:
      return {
        ...state,
        loading: false,
        updateCampaignSuccess: true,
        updateCampaignError: {}
      };
    case CampaignsActionTypes.UPDATE_REJECTED:
      return {
        ...state,
        loading: false,
        updateCampaignError: action.payload
      };

    case CampaignsActionTypes.DELETE_PENDING:
      return {
        ...state,
        loading: true
      };
    case CampaignsActionTypes.DELETE_FULFILLED:
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => {
          return item._id !== action.payload.data.data._id
        }),
        loading: false,
        deleteCampaignSuccess: true,
        deleteCampaignError: {}
      };
    case CampaignsActionTypes.DELETE_REJECTED:
      return {
        ...state,
        loading: false,
        deleteCampaignError: action.payload
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
