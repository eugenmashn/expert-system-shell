import { AbroadCharacteristics, AccessibilityCharacteristics, CuisineCharacteristics, LocalityCharacteristics, MonumentsCharacteristics, PriceCharacteristics, TransportCharacteristics } from "../Enums/CharacteristicsEnums"

export interface Characteristic
{
    priceCharacteristic: PriceCharacteristics,
    localityCharacteristic: LocalityCharacteristics,
    AbroadCharacteristic : AbroadCharacteristics,
    CuisineCharacteristic : CuisineCharacteristics
    TransportCharacteristics : TransportCharacteristics
    AccessibilityCharacteristic : AccessibilityCharacteristics
    MonumentsCharacteristic : MonumentsCharacteristics
}