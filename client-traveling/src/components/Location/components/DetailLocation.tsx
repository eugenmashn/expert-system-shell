import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import {  Form } from "react-final-form";
import { useNavigate, useParams } from "react-router-dom";
import { LocationPlace } from "../../../Models/Location";
import { apiLocation } from "../../../service/Api/injections";

export const DetailLocation = () => {
  const { id } = useParams();
  const [create] =  apiLocation.useCreate.useMutation();
  const initial = apiLocation.useGetById.useQuery(id as string, {skip: !id}).data as LocationPlace ?? {};
  const navigate = useNavigate();
  function handleClose() {
    navigate("/");
  }
  function onSubmit(value: LocationPlace) {
    create(value)
    navigate("/");
  }
  return (
    <Dialog open={true}  onClose={handleClose}>
      <DialogTitle>Location</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* <img
            src={`${item.img}?w=162&auto=format`}
            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
            style={{ maxWidth: 300 }}
          /> */}
          <Form<LocationPlace>
            onSubmit={onSubmit}
            initialValues={initial}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <img src={values.photoBase64} style={{ maxWidth: 300 }} />
                </div>
                <div style={{'display': 'flex', flexDirection: 'column'}}>
                  <TextField margin="normal" label="Name" name={"name"} value={values.name} onChange={e => form.change('name', e.target.value)} />
                  <TextField margin="normal" label="Image" name={"photoBase64"} value={values.photoBase64} onChange={e => form.change('photoBase64', e.target.value)}/>
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
