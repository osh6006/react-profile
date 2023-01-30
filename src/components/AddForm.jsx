import React, { useState } from "react";

export const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 객체로 관리하기
  const [form, setForm] = useState({ name: "", email: "" });
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={e => {
          handleChange(e);
        }}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={form.email}
        onChange={e => {
          handleChange(e);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};
