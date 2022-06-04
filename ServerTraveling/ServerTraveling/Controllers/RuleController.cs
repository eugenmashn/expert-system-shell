using DomainService.Models;
using DomainService.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ServerTraveling.Controllers
{
   
    public class RuleController : BaseController<Rule>
    {
        public RuleController(IGenericRepository<Rule> service) : base(service)
        {
        }
    }
}
