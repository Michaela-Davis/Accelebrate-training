import React from "react";

export const TextInput = (props) => {
  return <input type="text" {... props}/>;
};

export const NumInput = (props) => {
  return <input type="number" {... props}/>;
};

export const Button = (props) => {
  return <button type="button" {... props}/>;
};