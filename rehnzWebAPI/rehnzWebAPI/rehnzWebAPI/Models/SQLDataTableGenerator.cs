using System.Data.SqlClient;
using System.Data;

    public class DataTableGenerator
    {

        // public string connectionString = "Data Source=REHNZ-PC;Initial Catalog=GolfHomie;Integrated Security=True";
        public string connectionStringTwo = @"Server=tcp:yo868e2fk4.database.windows.net,1433;Database=GolfHomieDB;
                                            User ID=rehnz@yo868e2fk4;Password=tigerdota1!;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;";
        public DataTable getDataTable(string queryStatement)
        {

            using (SqlConnection con = new SqlConnection(connectionStringTwo))
            {
                con.Open();
                using (SqlDataAdapter dataAdapter = new SqlDataAdapter(queryStatement, con))
                {
                    DataTable dt = new DataTable();

                    dataAdapter.Fill(dt);
                    return dt;
                }

            }

        }
    }



