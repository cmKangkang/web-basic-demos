import { IPill } from "../src/types";

function request(url: string, method: string) {
  return fetch(url, {
    method: method
  });
}

export async function get(url: string): Promise<Array<IPill>> {
  console.log("请求")
  try {
    let res = await request(url, 'get');
    let data = res.json();
    console.log(data);
    return data;
  } catch(err) {
    console.log(err);
  }
}