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

export interface EntryData extends Omit<Entry, "createdAt" | "position" | "user" | "userTags"> {
    userTags: { title: string }[]
}

export interface newEntryData extends Omit<EntryData, "_id"> { }

export interface UserTag {
    title: string;
    _id: string;
}
