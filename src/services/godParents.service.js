import FirebaseApp from "../firebaseApp";

const resource = process.env.REACT_APP_GOD_PARANTS;

const temporaryErrorHandling = () => {
  alert("🤕 " + "Desculpe, tivemos algum problema");
};

export const get = async () => {
  let data = [];

  try {
    const response = await FirebaseApp.db.collection(resource).get();
    response.forEach((res) => {
      data.push({ id: res.id, ...res.data() });
    });
  } catch (err) {
    return { error: err };
  }
  return data;
};

export const update = async ({ data, id }) => {
  try {
    return await FirebaseApp.db.collection(resource).doc(id).set(data);
  } catch (err) {
    temporaryErrorHandling();
  }
};
