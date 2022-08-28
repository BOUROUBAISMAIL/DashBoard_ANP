import './css/tab1.css';
import data from "../delai_attente_navire .json"
const Tab1=()=>{
    return(
        <table className='table  table-sm '>
            <thead><tr class="table-primary">
                <th>Date de mouvement</th>
                <th>Port</th>
                <th>Date de debut de mouvement </th>
                <th> Date de fin de mouvement</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(Data=>{
                        return(
                            <tr>
                                <td>{Data.ID_DATE_MOUVEMENT}</td>
                                <td>{Data.LIB_PORT}</td>
                                <td>{Data.DATE_DEBUT_MOUVEMENT}</td>
                                <td>{Data.DATE_FIN_MOUVEMENT}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}
export default Tab1;