import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile(): JwtPayload | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the JWT token
    }
    return null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
  }

  getToken(): string {
    // TODO: return the token
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
