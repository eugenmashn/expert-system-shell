import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Outlet, useNavigate } from "react-router-dom";
import { AbroadCharacteristics, AccessibilityCharacteristics, CuisineCharacteristics, LocalityCharacteristics, PriceCharacteristics, TransportCharacteristics } from "../../Enums/CharacteristicsEnums";
import { TypeDetailPage } from "../../Enums/TypeDetailPageEnum";
import { LocationPlace } from "../../Models/Location";
import { Rule } from "../../Models/Rule";
import { apiRule } from "../../service/Api/injections";

export const RuleComponent = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
      editable: true,
      renderCell: (params) =>{
        return ((params.value) as LocationPlace)?.name ??'';
      }
    },
    {
      field: 'priceCharacteristic',
      headerName: 'Price',
      width: 150,
      editable: true,
      renderCell: (params) =>{
        return (PriceCharacteristics[(params.value)]);
      }
    },
    {
      field: 'localityCharacteristic',
      headerName: 'Locality',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (LocalityCharacteristics[(params.value)]);
      }
    },
    {
      field: 'abroadCharacteristic',
      headerName: 'Abroad',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (AbroadCharacteristics[(params.value)]);
      }
    },
    {
      field: 'cuisineCharacteristic',
      headerName: 'Cuisine',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (CuisineCharacteristics[(params.value)]);
      }
    },
    {
      field: 'transportCharacteristics',
      headerName: 'Transport',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (TransportCharacteristics[(params.value)]);
      }
    },
    {
      field: 'accessibilityCharacteristic',
      headerName: 'Accessibility',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (AccessibilityCharacteristics[(params.value)]);
      }
    },
    {
      field: 'monumentsCharacteristic',
      headerName: 'Monuments',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) =>{
        return (AccessibilityCharacteristics[(params.value)]);
      }
    },
  ];
  const navigate = useNavigate();
  const rows = apiRule.useGetAll.useQuery().data as Rule[] ?? [];
  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <Outlet></Outlet>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
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
      </div>
    </div>
  );
};
