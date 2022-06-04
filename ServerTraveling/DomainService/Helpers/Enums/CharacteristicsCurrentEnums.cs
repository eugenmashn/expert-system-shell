using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Helpers.Enums
{
    public enum PriceCharacteristics
    {
        Luxe,
        Medium,
        Budget
    }
    public enum LocalityCharacteristics
    {
        Mountains,
        Flate,
        Sea
    } 
    public enum AbroadCharacteristics
    {
        IsNotAbroad,
        IsAbroad
    }
    public enum CuisineCharacteristics
    {
        AsianCuisine,
        ItalianСuisine,
        UkrainianCuisine
    }
    public enum TransportCharacteristics
    {
        Aircraft,
        Car,
        Pedestrian
    }
    public enum AccessibilityCharacteristics
    {
        Light,
        Medium,
        Hard
    }
    public enum MonumentsCharacteristics
    {
        Alot,
        Medium,
        Scantily
    }
}
