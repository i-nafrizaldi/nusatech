import { RandomUserResponse } from "@/types/randomUser.type";
import { appConfig } from "@/utils/config";

const { baseUrl } = appConfig;

export const getPeople = async (): Promise<RandomUserResponse> => {
  const res = await fetch(baseUrl, { next: { revalidate: 3600 } });

  return res.json();
};
