export class User {
  constructor(
    public id: string,
    public email: string,
    public _token: string,
    public _tokenExpirationDate: number
  ) {}
}
