// This interface is used between apps.
// This interface represents the processed data from the apps. It doesn't represent the database directly!

export interface UserInterface {
    id: string;
    name: string;
    email: string;
}

export interface SalesInterface {
    id: string;
    user: UserInterface;
}