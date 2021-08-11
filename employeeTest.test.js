const { Capabilities, Builder } = require('selenium-webdriver')

require('chromedriver')

const testEmp = require('./testEmp.js')

const empList = require('./empList')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:3000')
})


afterAll(async () => {
    await driver.quit()
})


test('tester tester', async () => {
    console.log('I AM HERE!')

    for (let i in empList) {
        await testEmp(driver, i)
    }

    expect(1).toBe(1);
})