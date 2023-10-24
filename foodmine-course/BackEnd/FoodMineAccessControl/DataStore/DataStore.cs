using FoodMineAccessControl.Models;
using System.Reflection.Metadata.Ecma335;

namespace FoodMineAccessControl.DataStore
{
  public class DataStore
  {
    public static List<UserModel> Users()
    {
      return new List<UserModel> {
        new UserModel("Shankar","pass1","myselfshankarnaik@gmail.com","admin","Naik") ,
        new UserModel("Shiva","pass2","shiva@gmail.com","user","Naik") 
      };
    }
  }
}
