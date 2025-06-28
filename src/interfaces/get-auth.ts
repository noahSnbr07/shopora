export default interface Auth {
    id: string;
    created: Date;
    updated: Date;
    identifier: string;
    name: string;
    source: string;
    profileId: string;
    iat: Date;
    aud: Date;
    exp: string;
    iss: string;
}