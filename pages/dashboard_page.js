import {expect} from '@playwright/test'
class DashboardPage {
  constructor(page) {
    this.page = page;
    this.menu = "//img[@alt='menu']";
    this.heading="//h1[normalize-space()='Learn Automation Courses']"
    this.signout_button = "//button[normalize-space()='Sign out']";
  }

  async verify_logo_text(){

    const text= await this.page.locator(this.heading).textContent();
    console.log(text);
    
    
    await expect(this.page.locator(this.heading)).toHaveText("Learn Automation Courses")
  }

  async logout()
  {
      await this.page.click(this.menu)
      await this.page.click(this.signout_button)
  }
}

module.exports=DashboardPage;
