using System.Web.Http;
//using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
//using System.Web.Http.Cors;

namespace rehnzWebAPI.Controllers
{
    //[Produces("application/json")]
    // [Route("api/[controller]")]
   // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {

        DataTable dt = new DataTableGenerator().getDataTable("Select * from Users");


        // private class User
        // {
        //     public string Id;
        //     public string Body;
        //     public string UpdatedOn;
        //     public string CreatedOn;
        //     public int UserId;
        // }

       
        //// [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(dt);
        }
        //
    }
}
