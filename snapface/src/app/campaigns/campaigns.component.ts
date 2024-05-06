import { Component, Input } from '@angular/core';
import { Campaigns } from './campaigns';
import { CAMPAIGNS } from './campaignList';
import { Calendar } from '../calendar/calendar';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
  @Input() selectedMonth: Calendar | null;
    campaignList: Campaigns[] = CAMPAIGNS;
    selectedCampaign: Campaigns | null;
    
   
     selectCampaign(cam : Campaigns) {
       console.log(`Vous avez cliqué sur ${cam.name}`);
     }
   
   
   
     filterCampaignsByMonth(month: Calendar | null): Campaigns[] {
      if (!month) return []; // Retourne un tableau vide si le mois sélectionné est null
  
      return this.campaignList.filter(campaign => {
        const campaignStartDate = new Date(campaign.startDate);
        const campaignEndDate = new Date(campaign.endDate);
  
        return (
          month.value >= campaignStartDate.getMonth() && 
          month.value <= campaignEndDate.getMonth()
        );
      });
    }
    
}
