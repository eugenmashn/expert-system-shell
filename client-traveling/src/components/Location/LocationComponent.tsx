import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  SpeedDial,
  SpeedDialIcon,
} from "@mui/material";
import { LocationPlace } from "../../Models/Location";
import { apiLocation } from "../../service/Api/injections";
import InfoIcon from "@mui/icons-material/Info";
import { Outlet, useNavigate } from "react-router-dom";
import { TypeDetailPage } from "../../Enums/TypeDetailPageEnum";

export const LocationComponent = () => {
  const locations = apiLocation.useGetAll.useQuery().data as LocationPlace[];
  const navigate = useNavigate();
  return (
    <div> 
    
      <ImageList variant="masonry" cols={4} gap={4}>  
      <Outlet></Outlet>
        {locations?.map((item) => (
          <ImageListItem key={item?.photoBase64}>
            <img
              style={{ width: 400, height: 400 }}
              src={`${item?.photoBase64}`}
              alt={item?.name}
              title={item?.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              actionIcon={
                <IconButton
                  onClick={() => navigate(
                    {
                      pathname: `${TypeDetailPage.Edit}/${item.id}`,
                    })}
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          onClick={() => navigate(
              {
                pathname: `${TypeDetailPage.Create}`,
              })
          }
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        ></SpeedDial>
      </ImageList>
     
    </div>
  );
};
