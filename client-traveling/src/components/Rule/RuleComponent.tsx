import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
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
        return ((params.value) as LocationPlace).name;
      }
    },
    {
      field: 'priceCharacteristic',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'localityCharacteristic',
      headerName: 'Locality',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'abroadCharacteristic',
      headerName: 'Abroad',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'cuisineCharacteristic',
      headerName: 'Cuisine',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'transportCharacteristics',
      headerName: 'Transport',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'accessibilityCharacteristic',
      headerName: 'Accessibility',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'monumentsCharacteristic',
      headerName: 'Monuments',
      type: 'number',
      width: 110,
      editable: true,
    },
  ];
  
  const rows = apiRule.useGetAll.useQuery().data as Rule[] ?? [];
  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};
