using DomainService.Models;
using DomainService.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Repository.Service
{
    public class RuleService : GenericRepository<Rule>, IRuleService
    {
        public RuleService(DbContext context) : base(context)
        {
        }
    }
}
