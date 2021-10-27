
export interface NewsParam {

  // config

  category: string;
  onDateEvent: boolean;
  eventAt?: Date;
  onSite: boolean;
  onMail: boolean;
  onFacebook: boolean;
  mediumTypes: [string];

}
