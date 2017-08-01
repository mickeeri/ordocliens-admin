const baseUrl = 'http://localhost:3090/v1';

export async function fetchUsers() {
  const url = `${baseUrl}/users`;

  const response = await fetch(url);
  const parsedResponse = await response.json();

  console.log(parsedResponse);
}
