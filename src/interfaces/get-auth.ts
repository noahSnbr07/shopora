//returned object in getAuth()
export default interface Auth {
    id: string; //uuid
    created: Date;
    updated: Date;
    identifier: string; //dx-related
    name: string;
    source: string; //image url
    profileId: string; //uuid
    iat: Date;
    aud: Date;
    exp: string;
    iss: string;
}