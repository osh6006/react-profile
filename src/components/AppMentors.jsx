import React, { useReducer, useState } from "react";
import personReducer from "../reducer/person-reducer";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const hadleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    const newMentors = [...person.mentors].map(el => {
      if (el.name === prev) {
        el.name = current;
      }
      return el;
    });
    setPerson(person => ({
      ...person,
      mentors: newMentors,
    }));
  };
  const hadleAdd = () => {
    const name = prompt(`이름을 추가하고 싶은가요?`);
    const title = prompt(`직업이 무엇인가요?`);
    const newMentors = [...person.mentors];
    newMentors.push({ name, title });
    setPerson(person => ({
      ...person,
      mentors: newMentors,
    }));
  };
  const hadleDelete = () => {
    const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    const newMentors = [...person.mentors];
    const DeleteArr = newMentors.filter(el => el.name !== name);
    setPerson(person => ({
      ...person,
      mentors: DeleteArr,
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={hadleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={hadleAdd}>멘토 추가하기</button>
      <button onClick={hadleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
