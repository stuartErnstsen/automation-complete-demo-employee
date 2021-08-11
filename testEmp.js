const { By } = require('selenium-webdriver');

const empList = require('./empList.js')

module.exports = async (driver, empIndex) => {

    await driver.findElement(By.xpath(`//li[text()="${empList[empIndex].name}"]`)).click()

    const name = await driver.findElement(By.name('nameEntry')).getAttribute('value')
    const phone = await driver.findElement(By.name('phoneEntry')).getAttribute('value')
    const title = await driver.findElement(By.name('titleEntry')).getAttribute('value')

    expect(name).toBe(empList[empIndex].name)


    console.log(name)


    console.log('I HIT OUR CUSTOM FUNCTION')
}