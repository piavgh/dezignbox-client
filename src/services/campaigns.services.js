import BaseService from './base.service';

const campaignsRoutesPrefix = "/api/v1/campaigns";

const CampaignsService = {
  createCampaign: (ownerId, campaign) => {
    return BaseService.post(campaignsRoutesPrefix + '/', {
      title: campaign.title,
      description: campaign.description,
      active: campaign.status,
      owner: ownerId,
      canvasDataUrl: campaign.canvasDataUrl,
      originalImageUrl: campaign.imageUrl ? campaign.imageUrl : null,
      thumbnailImageUrl: campaign.imageUrl ? campaign.imageUrl : null
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  updateCampaign: (campaign) => {
    return BaseService.put(campaignsRoutesPrefix + '/' + campaign._id, {
      title: campaign.title,
      description: campaign.description,
      active: campaign.active,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  fetchCampaigns: (userId, page = 1) => {
    return BaseService.get(campaignsRoutesPrefix + '/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        userId: userId,
        page: page
      }
    });
  },

  fetchCampaignDetail: (id) => {
    return BaseService.get(campaignsRoutesPrefix + '/' + id, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  deleteCampaign: (id) => {
    return BaseService.delete(campaignsRoutesPrefix + '/' + id, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default CampaignsService;
