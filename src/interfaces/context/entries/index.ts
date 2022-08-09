export interface EntriesState {
    entries: Entry[];
    loading: boolean;
}

export interface Entry {
    _id: string;
    title: string;
    description: string;
    priority: string;
    userTags: UserTag[];
    createdAt: number;
    position: number;
    status: string;
    user: string;
}

export interface UserTag {
    title: string;
    _id: string;
}
