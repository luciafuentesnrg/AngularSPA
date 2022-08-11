export interface User {
  nameid: number;
  email: string;
  family_name: string;
  given_name: string;
  Country: string;
  language: string;
  isAdmin: boolean;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}
