using System.Web.Http;
//using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;

namespace rehnzWebAPI
{
    //[Produces("application/json")]
    // [Route("api/[controller]")]
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

        // // GET: api/values
        //// [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(dt);
        }
        //
    }
}
