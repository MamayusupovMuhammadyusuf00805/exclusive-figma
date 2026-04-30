export const baseUrl = "https://ecommercev01.pythonanywhere.com/";

export const getCategory = () => {
  return fetch(`${baseUrl}product/categories/`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const getProduct = () => {
  return fetch(`${baseUrl}product/list/`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const registerFunc = async (email, password, name) => {
  try {
    const raw = JSON.stringify({
      first_name: name,
      email_or_phone: email,
      password: password,
    });

    const response = await fetch(`${baseUrl}/user/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    });

    const result = await response.json();

    if (!response.ok) {
      return { error: true, message: result.message || "Xatolik yuz berdi" };
    }

    return result;
  } catch (error) {
    return { error: true, message: "Server bilan aloqa yo'q" };
  }
};

export const updateProfileFunc = async (token, profileData) => {
  try {
    const response = await fetch(`${baseUrl}/user/update-profile/`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    const result = await response.json();

    if (!response.ok) {
      return { error: true, message: result.message || "Yangilashda xatolik" };
    }

    return result;
  } catch (error) {
    return { error: true, message: "Server bilan aloqa yo'q" };
  }
};
