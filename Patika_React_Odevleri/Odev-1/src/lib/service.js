import axios from "axios";

async function getData(user_id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: user_posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  return { user, user_posts };
}
export default getData;
