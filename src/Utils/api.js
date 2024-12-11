export const BASE_URL = "https://city-uni-dpt-api.onrender.com/";

const handleResponse = async (response) => {
  try {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "An error occurred during the API call.");
    }
    return { data, status: response.status };
  } catch (error) {
    console.error("Error parsing response:", error);
    throw new Error("Failed to parse response from the server.");
  }
};    

const fetchApi = async (path, method, headers, body) => {
  try {
    
    const response = await fetch(BASE_URL + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    console.log("response: ", response.j);
    
    return handleResponse(response);
  } catch (error) {
    console.error("Error during fetchApi:", error);
    throw new Error("Failed to fetch from the API.");
  }
};

export const callPublicApi = async (path, method, body = {}) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (method) {
      case "GET":
        return await fetchApi(path, method, headers);
      case "POST":
        return await fetchApi(path, method, headers, body);
      default:
        throw new Error("Invalid method");
    }
  } catch (error) {
    console.error(`Error during ${method} API call:`, error);
    throw error;
  }
};

export const callPrivateApi = async (path, method, body = {}) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  };

  try {
    switch (method) {
      case "GET":
        return await fetchApi(path, method, headers);
      case "POST":
      case "UPDATE":
        return await fetchApi(path, method, headers, body);
      case "DELETE":
        return await fetchApi(path, method, headers);
      default:
        throw new Error("Invalid method");
    }
  } catch (error) {
    console.error(`Error during ${method} API call:`, error);
    return { error: error.message };
  }
};


