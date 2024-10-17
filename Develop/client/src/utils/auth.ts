import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile(): JwtPayload | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the JWT token
    }
    return null;
  }

  loggedIn(): boolean {
    const token = this.getToken();
    // Check if token exists and is not expired
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload & { exp: number }>(token);
      if (decoded.exp) {
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return decoded.exp < currentTime; // Check if token has expired
      }
      return false; // If no expiration field, assume it's valid
    } catch (error) {
      console.error("Invalid token:", error);
      return true; // Treat invalid token as expired
    }
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
