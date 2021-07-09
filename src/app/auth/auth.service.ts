import { UserService } from './../user/user.service';
export class AuthService {
  private userService = new UserService();

  test(): string {
    return this.userService.getUser();
  }
}
