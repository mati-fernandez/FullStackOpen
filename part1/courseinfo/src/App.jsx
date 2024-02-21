/* Forma larga, antigua:
const Header = (props) => {
  return <h1>{props.course}</h1>
}
*/
const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}&nbsp;{exercises}
    </p>
  );
};

const Content = ({ content }) => {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } = content;
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content content={course.parts} />
      <Total total={course.parts[0].exercises} />
    </>
  );
};

export default App;
