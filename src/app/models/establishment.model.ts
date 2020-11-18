export interface Establishment {
    id: string,
    index: number,
    guid: string,
    picture: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    registered: string,
    latitude: string,
    longitude: string,
    bank?: string;
    account_type?: string;
    document?: string;
    agency?: string;
    account?: string;
    auto_withdraw?: string;
}