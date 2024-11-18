declare class UserDto {
    readonly id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    birthdate: string;
    photoURL?: string;
    groups?: number[];
}
export declare class LoggedInUserDto {
    readonly access_token: string;
    readonly user: UserDto;
}
export {};
