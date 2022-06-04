using DomainService.Helpers.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Models
{
    public class Location: Characteristic, BaseModel
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string? PhotoBase64 { get; set; }
    }
}
