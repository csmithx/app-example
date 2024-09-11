import {SalesInterface, UserInterface} from "./EntityInterfaces";

export interface UserServiceInterface {
    getUser(userId: string): Promise<UserInterface | null>;
}

export interface SalesServiceInterface {
    getSale(): Promise<SalesInterface | null>;
}