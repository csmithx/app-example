import {SaleEntityInterface} from "../interfaces/EntityInterfaces";

export class SaleRepository {
    async getSale(): Promise<SaleEntityInterface | null> {

        // @TODO Only data retrieval/insert should be here, no business logic

        return {
            id: '4209392b-539a-4eab-befb-83255628f168',
            user_id: 'b69fcda3-2a33-4699-a04c-fd69f41b1614'
        };
    }
}