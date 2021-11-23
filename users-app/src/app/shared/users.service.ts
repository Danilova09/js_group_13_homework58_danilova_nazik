import { User } from './user.model';

export class UsersService {
  users: User[] = [
    new User('Daisy', 'daisy@gmail.com', true, 'Admin'),
    new User('Joshua', 'Joshua@gmail.com', true, 'Admin'),
  ]
}



