import FirebaseApp from "../firebaseApp";

export const get = async () => {
  const response = await FirebaseApp.db.collection("invite").get();
  let data = [];
  response.forEach((res) => {
    data.push({ id: res.id, ...res.data() });
  });
  return data;
};
