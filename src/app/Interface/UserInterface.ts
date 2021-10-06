export interface User {
    uid: string;
    photoURL: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    providerId: string;
}

export interface UserAppSetting extends User {
    SelectedOrgAppKey: string;
    SelectedTeamId: string;
    AboutMe: string;
    AppTheme: string;
    GithubProfile: string;
    LinkedInProfile: string;
    DateOfJoining: string;
}

export interface MyOrganisationData {
    DefaultTeam: string;
    OrgAppKey: string;
    Teams: [];
    Uid: string;
    OrgDomain: string;
}

export const defaultUser = {
    uid: "defaultUser",
    photoURL: "../../../assets/defaultavatar.jpg",
    displayName: "Default User",
    email: "defaultUser@worktez.com",
    phoneNumber: null,
    providerId: "worktez",
    SelectedOrgAppKey: "",
    SelectedTeamId: "",
    AboutMe: "",
    AppTheme: "",
    GithubProfile: "",
    LinkedInProfile: "",
    DateOfJoining: "",
};
