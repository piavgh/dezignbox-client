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
            thumbnailImageUrl: campaign.imageUrl ? campaign.imageUrl : null,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
};

export default CampaignsService;
