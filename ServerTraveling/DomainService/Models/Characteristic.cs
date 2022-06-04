using DomainService.Helpers.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Models
{
    public class Characteristic
    {
        public PriceCharacteristics PriceCharacteristic { get; set; }
        public LocalityCharacteristics LocalityCharacteristic { get; set; }
        public AbroadCharacteristics AbroadCharacteristic { get; set; }
        public CuisineCharacteristics CuisineCharacteristic { get; set; }
        public TransportCharacteristics TransportCharacteristics { get; set; }
        public AccessibilityCharacteristics AccessibilityCharacteristic { get; set; }
        public MonumentsCharacteristics MonumentsCharacteristic { get; set; }
    }
}
