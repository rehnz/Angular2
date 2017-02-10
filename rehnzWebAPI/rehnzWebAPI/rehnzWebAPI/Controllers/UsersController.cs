using System.Web.Http;
//using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
//using System.Web.Http.Cors;

namespace rehnzWebAPI.Controllers
{
    //[Produces("application/json")]
    //[Route("api/[controller]")]
   // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {

        public string Get(string userName, string userPassword)
        {
            DataTable dt = new DataTable();
            if (userName == null || userPassword == null)
            {
                return null;
            }
            else
            {                  
                dt = new DataTableGenerator().getDataTable(string.Format("Select * from Users WHERE username = '{0}' AND password = '{1}'", userName, userPassword));
            }
            return JsonConvert.SerializeObject(dt);
        }
        //
    }
}
