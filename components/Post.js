import { useParams ,useNavigate} from "react-router-dom";
export default function Post() {
  const params = useParams();
  const navigate=useNavigate();
  
  const Backup=()=>{
    // navigate("/Posts",{
    //   replace:true
    // });
    navigate(-1);

  }

  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
      <button type="button" onClick={Backup}>Go to Posts</button>
    </div>
  );
}