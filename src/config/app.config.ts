interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Researcher'],
  customerRoles: ['3rd Party Vendor'],
  tenantRoles: ['Builder', 'Fielder', 'Researcher', 'Data Processor'],
  tenantName: 'Organization',
  applicationName: 'Srvy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Receive and complete surveys', 'View completed surveys'],
  ownerAbilities: [
    'Manage Organizations',
    'Invite Builders, Fielders, and Data Processors to Organization',
    'View analysis of survey data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0d198ecc-07b2-4bb0-9392-35dfb43b3097',
};
