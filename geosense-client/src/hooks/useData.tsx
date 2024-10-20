"use client";
import { Axios } from "axios";

export default function useData() {
  const axios = new Axios({ baseURL: "" });
  const getStates = async () => {
    const response = await axios.get("http://192.168.1.42:5000/states");
    return JSON.parse(response.data);
  };
  const getSectors = async () => {
    const response = await axios.get("http://192.168.1.42:5000/sectors");
    return JSON.parse(response.data);
  };
  const getDistricts = async (state: string) => {
    const response = await axios.get(
      `http://192.168.1.42:5000/states/${state}/districts`
    );
    return JSON.parse(response.data);
  };
  async function search(
    callback: (value: any) => void,
    state?: string,
    district?: string,
    sectors?: string[]
  ) {
    const params = new URLSearchParams();
    if (state) {
      params.set("state", state);
      if (district) params.set("district", district);
    }
    if (sectors) params.set("sectors", sectors.join(","));
    const response = await fetch(`http://192.168.1.42:5000/search?${params}`);
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = (await reader?.read())!;
      if (done) break;
      const decval = decoder.decode(value, { stream: true });
      callback(JSON.parse(decval));
    }
    callback({ type: "end" });
  }
  return { getStates, getDistricts, getSectors, search };
}
