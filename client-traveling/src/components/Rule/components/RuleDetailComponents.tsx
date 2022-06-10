import {
    Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Form } from "react-final-form";
import { useNavigate, useParams } from "react-router-dom";
import { LocationPlace } from "../../../Models/Location";
import { Rule } from "../../../Models/Rule";
import { apiLocation, apiRule } from "../../../service/Api/injections";
import { CharacteristicComponent } from "./CharacteristicComponent";

export const DetailRule = () => {
  const { id } = useParams();
  const [create] = apiRule.useCreate.useMutation();
  const initial = (apiRule.useGetById.useQuery(id as string, { skip: !id }).data as Rule) ?? {};
  const locations = apiLocation.useGetAll.useQuery().data as LocationPlace[];
  const navigate = useNavigate();
  function handleClose() {
    navigate("/rule");
  }
  function onSubmit(value: Rule) {
    create(value);
    navigate("/rule");
  }
  return (
    <Dialog open={true} fullWidth onClose={handleClose}>
      <DialogTitle>Location</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Form<Rule>
            onSubmit={onSubmit}
            initialValues={initial}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Autocomplete
                    id="combo-box"
                    options={locations}
                    getOptionLabel={i => i.name}
                    onChange={(e,val) => form.change('location',val!)}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} margin='normal' label="Location" />
                    )}
                  />
                  <CharacteristicComponent<Rule> change={form.change} value={values}/>
                </div>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
              </form>
            )}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
