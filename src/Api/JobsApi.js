export const myPostedJobPromise = (email) => {
  return fetch(`http://localhost:5000/jobs/applications?email=${email}`).then((res) =>
    res.json()
  );
};
