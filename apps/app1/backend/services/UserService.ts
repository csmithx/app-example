import {UserServiceInterface} from "../../../../interfaces/ServicesInterfaces";
import {UserInterface} from "../../../../interfaces/EntityInterfaces";
import {GetUserAction} from "../actions/GetUserAction";
import {UserRepository} from "../repositories/UserRepository";


// @TODO: The service should act as a facade for the actions, it should not contain any business logic

export class UserService implements UserServiceInterface {

    private usersRepository: UserRepository;

    constructor(usersRepository: UserRepository) {
        this.usersRepository = usersRepository;
    }

    getUser(userId: string): Promise<UserInterface | null> {
        return (new GetUserAction(userId, this.usersRepository)).execute();
    }
}