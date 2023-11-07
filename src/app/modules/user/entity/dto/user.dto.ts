export interface UserDto {
  id: number;
  userInfo: UserData;
}

export interface UserData {
  name: string;
  surname: string;
  age: string;
  gender: string;
  country: string;
  address: string;
  nationality: string;
  zipCode: string;
  firstRegistration: Date;
}
