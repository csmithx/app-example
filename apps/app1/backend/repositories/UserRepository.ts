import {UserInterface} from "../../../../interfaces/EntityInterfaces";

export class UserRepository {
    async getUser(uuid: string): Promise<UserInterface | null> {

        // @TODO Only data retrieval/insert should be here, no business logic

        return {
            id: 'b69fcda3-2a33-4699-a04c-fd69f41b1614',
            name: 'John Doe',
            email: 'test@test.test'
        };
    }
}