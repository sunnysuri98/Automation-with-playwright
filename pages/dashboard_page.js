class DashboardPage {
  constructor(page) {
    this.page = page;
    this.menu = "//img[@alt='menu']";
    this.signout_button = "//button[normalize-space()='Sign out']";
  }


  async logout() {
    await this.page.click(this.menu);
    await this.page.click(this.signout_button);
  }
}

module.exports = DashboardPage;
