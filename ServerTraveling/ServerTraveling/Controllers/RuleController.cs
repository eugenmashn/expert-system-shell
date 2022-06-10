using DomainService.Models;
using DomainService.Repository;
using DomainService.Repository.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ServerTraveling.Controllers
{
   
    public class RuleController : BaseController<Rule>
    {
        private readonly ILocationService _locationService; 
        public RuleController(IRuleService service, ILocationService locationService) : base(service)
        {
            _locationService = locationService;
        }
         override async internal Task<Rule> toDomainModel(Rule webModel)
        {
            var rule = webModel;
            rule.Location = await _locationService.FindById(webModel.Location.Id);
            return rule;
        }
    }
}
