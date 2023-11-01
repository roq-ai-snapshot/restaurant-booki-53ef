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
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menu items',
    'Make a reservation',
    'Edit personal information',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage menus',
    'Manage reservations',
    'Manage employee information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/63227e0b-378a-449f-b0aa-8b0fb02708aa',
};
