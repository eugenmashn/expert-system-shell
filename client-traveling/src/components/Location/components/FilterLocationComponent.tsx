import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Form } from "react-final-form";
import { Characteristic } from "../../../Models/Characteristic";
import { CharacteristicComponent } from "../../Rule/components/CharacteristicComponent";

export interface FilterLocationComponentProps {
    open: boolean;
    close: () => void;
    submit: (val: Characteristic) => void
}
export const FilterLocationComponent = ({open, close,submit}: FilterLocationComponentProps) => {
  return (
    <div>
      <Dialog open={open} fullWidth onClose={close}>
        <DialogTitle>Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* <img
            src={`${item.img}?w=162&auto=format`}
            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
            style={{ maxWidth: 300 }}
          /> */}
            <Form<Characteristic>
              onSubmit={submit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <CharacteristicComponent<Characteristic> change={form.change} value={values}/>
                  <Button onClick={close}>Cancel</Button>
                  <Button type="submit">Save</Button>
                </form>
              )}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
