import { useGetAllLocationQuery } from "../../service/Api/CreateApi";

export const LocationComponent = () => {
    useGetAllLocationQuery();
    return(<div>Location</div>);
}