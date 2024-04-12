type methodRequest = 'GET' | 'POST' | 'DELETE' | 'PUT';

export default class service {
  static async getData(
    url: string, 
    method: methodRequest = 'GET', 
    body: null | string = null, 
    headers = {'Content-Type': 'application/json'}) {
      try {
        const response = await fetch(url, {method, body, headers});

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch(e) {
        throw e;
      }
  }
}