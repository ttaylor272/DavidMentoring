import {  records } from "./records";
import SubjectView from "./SubjectView";
export default function App(): JSX.Element {
   const recordViews = records.map((record,idx)=>{
     return <SubjectView key={idx} record={record}/>
  })
  return (
    <>
      <h1>Hello</h1>
       {recordViews}
      <p>World</p>
    </>
  );
}
