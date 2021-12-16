import React from "react";

export async function getDataAll() {
  const fetched_data = await fetch(
    "https://upwork-react-django.herokuapp.com/api/post/all"
  );
  const json_data = await fetched_data.json();
  return json_data;
}

export async function getDatabyId({ id }) {
  const res = await fetch(
    "https://upwork-react-django.herokuapp.com/api/post/data/" + id
  );
  console.log("printing id", id);
  const data = await res.json();
  return data;
}
