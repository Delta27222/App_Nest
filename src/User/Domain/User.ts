import { UserId } from 'src/Shared/value_objects/UserId';
import { Username } from './ValueObjects/UserName';
import { UserEmail } from './ValueObjects/UserEmail';
import { UserPassword } from './ValueObjects/UserPassword';

export class User {
  private id: UserId;
  private username: Username;
  private email: UserEmail;
  private password: UserPassword;

  constructor(
    id: UserId,
    username: Username,
    email: UserEmail,
    password: UserPassword,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public getId(): UserId {
    return this.id;
  }

  public getUsername(): Username {
    return this.username;
  }

  public getEmail(): UserEmail {
    return this.email;
  }

  public getPassword(): UserPassword {
    return this.password;
  }
}
