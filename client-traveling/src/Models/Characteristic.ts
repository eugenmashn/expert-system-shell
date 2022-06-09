import { AbroadCharacteristics, AccessibilityCharacteristics, CuisineCharacteristics, LocalityCharacteristics, MonumentsCharacteristics, PriceCharacteristics, TransportCharacteristics } from "../Enums/CharacteristicsEnums"

export interface Characteristic
{
    priceCharacteristic: PriceCharacteristics,
    localityCharacteristic: LocalityCharacteristics,
    abroadCharacteristic : AbroadCharacteristics,
    cuisineCharacteristic : CuisineCharacteristics
    transportCharacteristics : TransportCharacteristics
    accessibilityCharacteristic : AccessibilityCharacteristics
    monumentsCharacteristic : MonumentsCharacteristics
}