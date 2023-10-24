namespace FoodMineAccessControl.Models
{
  public class UserModel
  {
    public UserModel(string userName,string password,string email,string role,string surname)
    {
        this.UserName = userName;
      this.Password = password;
      this.Email = email;
        this.Role = role;
      this.Surname = surname;
    }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string Surname { get; set; }
  }
}
