import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { DELETE_PROJECT } from "../mutations/projectMutations"
//used to update the cache
import { GET_PROJECTS } from "../queries/projectQueries"
import { useMutation } from "@apollo/client"

export default function DeleteProjectButton({projectId}) {
    const navigate = useNavigate();

    const[DeleteProject] = useMutation(DELETE_PROJECT, {
        variables: {id: projectId},
        onCompleted: () => navigate('/'),
        refetchQueries: [{query: GET_PROJECTS }],
    });

    return <div className="d-flex mt-5 ms-auto">
    <button className="btn btn-danger m-2" onClick={DeleteProject}>
        <FaTrash className="icon"/> Delete Project
    </button>
    </div>
  
}
