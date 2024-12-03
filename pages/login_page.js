class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = "//input[@placeholder='Enter Email']";
    this.password = "//input[@placeholder='Enter Password']";
    this.login_button =
      "//form//button[normalize-space()='Sign in']";
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.login_button);
  }
}


module.exports=LoginPage;