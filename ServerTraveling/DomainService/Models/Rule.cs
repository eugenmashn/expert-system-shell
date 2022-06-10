using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Models
{
    public class Rule: Characteristic, BaseModel
    {
        [Key]
        public Guid Id { get; set; }
        public Guid LocationId { get; set; }
        public virtual Location Location { get; set; }
    }
}
