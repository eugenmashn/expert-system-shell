import { AbroadCharacteristics, AccessibilityCharacteristics, CuisineCharacteristics, LocalityCharacteristics, MonumentsCharacteristics, PriceCharacteristics, TransportCharacteristics } from "../../../Enums/CharacteristicsEnums";
import { Characteristic } from "../../../Models/Characteristic";
import { SelectComponent } from "../../../shared/components/Select";
import { EnumHelpers } from "../../../shared/EnumHelpers";

export interface CharacteristicProps<T extends Characteristic> {
  change: <F extends keyof T >(name: F, value?: any) => void;
  value: T;
}


export function CharacteristicComponent<T extends Characteristic>({change,value,}: CharacteristicProps<T>) {
  return <div style={{ display: "flex", flexDirection: "column" }}>
      <SelectComponent
        label="Price"
        options={EnumHelpers.getNamesAndValues(PriceCharacteristics) }
        value={value.priceCharacteristic}
        onChange={e => change('priceCharacteristic', e.target.value)}
      />
      <SelectComponent
        label="Locality"
        options={EnumHelpers.getNamesAndValues(LocalityCharacteristics) }
        value={value.localityCharacteristic}
        onChange={e => change('localityCharacteristic', e.target.value)}
      />
      <SelectComponent
        label="Abroad"
        options={EnumHelpers.getNamesAndValues(AbroadCharacteristics) }
        value={value.abroadCharacteristic}
        onChange={e => change('abroadCharacteristic', e.target.value)}
      />
      <SelectComponent
        label="Cuisine"
        options={EnumHelpers.getNamesAndValues(CuisineCharacteristics) }
        value={value.cuisineCharacteristic}
        onChange={e => change('cuisineCharacteristic', e.target.value)}
      />
      <SelectComponent
        label="Transport"
        options={EnumHelpers.getNamesAndValues(TransportCharacteristics) }
        value={value.transportCharacteristics}
        onChange={e => change('transportCharacteristics', e.target.value)}
      />
      <SelectComponent
        label="Accessibility"
        options={EnumHelpers.getNamesAndValues(AccessibilityCharacteristics) }
        value={value.transportCharacteristics}
        onChange={e => change('accessibilityCharacteristic', e.target.value)}
      />
      <SelectComponent
        label="Accessibility"
        options={EnumHelpers.getNamesAndValues(MonumentsCharacteristics) }
        value={value.monumentsCharacteristic}
        onChange={e => change('monumentsCharacteristic', e.target.value)}
      />
  </div>;
}
