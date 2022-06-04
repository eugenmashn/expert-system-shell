using DomainService.Models;
using DomainService.Repository;
using DomainService.Repository.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ServerTraveling.Controllers
{
   
    public class RuleController : BaseController<Rule>
    {
        public RuleController(IRuleService service) : base(service)
        {
        }
    }
}
