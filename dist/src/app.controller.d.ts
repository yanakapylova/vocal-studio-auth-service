import { SignInUserDto } from './dto/sign-in.dto';
import { AppService } from './app.service';
export declare class AppController {
    private authService;
    constructor(authService: AppService);
    handleSignIn(signInDto: SignInUserDto): Promise<any>;
}
