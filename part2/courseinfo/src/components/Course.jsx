import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  return (
    <div>
      {course.map((e) => (
        <div key={e.id}>
          <Header course={e} />
          <Content parts={e.parts} />
          <Total parts={e.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
