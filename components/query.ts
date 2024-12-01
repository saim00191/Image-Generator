import { QueryData } from "./types";

const query = async (data: QueryData) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/strangerzonehf/Flux-3DXL-Partfile-0004",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.blob();
    return URL.createObjectURL(result);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default query
