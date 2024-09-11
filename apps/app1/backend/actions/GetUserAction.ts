import {ActionInterface} from "../../../../interfaces/ActionInterface";
import {UserInterface} from "../../../../interfaces/EntityInterfaces";
import {UserRepository} from "../repositories/UserRepository";

export class GetUserAction implements ActionInterface {

    private userUuid: string;
    private usersRepository: UserRepository;

    constructor(
        userUuid: string,
        usersRepository: UserRepository
    ) {
        this.usersRepository = usersRepository;
    }

    async execute(): Promise<UserInterface | null>{

        // @TODO The business logic should be here

        return this.usersRepository.getUser(this.userUuid);
    }
}