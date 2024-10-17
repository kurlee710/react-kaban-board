import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed.");
    }

    const data = await response.json();
    console.log("Token:", data.token); // Handle the token (e.g., store it)
    return data.token;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export { login };
