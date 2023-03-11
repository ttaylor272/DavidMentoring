import { Subject } from "./records";

interface SubjectViewProps {
  record: Subject;
}
export default function SubjectView(props: SubjectViewProps): JSX.Element {
   const studentViews = props.record.students.map((student,idx) => {
    return <li key={idx}>{student}</li>;
  });
  return (
    <>
      <h2> {props.record.name}</h2>
      <p>Score: {props.record.score}</p>
      <ul>{studentViews}</ul>
    </>
  );
}
