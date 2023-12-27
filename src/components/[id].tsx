import { useParams } from "react-router-dom";

export default function Slug() {
  const params = useParams();
  console.log(params);
  return <div></div>;
}
