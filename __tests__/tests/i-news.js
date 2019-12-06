import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `https://uniqueayo1988.github.io/i-news/`

const headerTitle = Selector('.display-2')
const bodyTitle = Selector('.display-3')
const signup = Selector('.my-2.my-sm-0.mx-md-3')
const name = Selector('#name')
const email = Selector('#email')
const password = Selector('#password')
const signupBtn = Selector('.btn.btn-primary')
const linkTitle = Selector('.display-5.text-center')

test('Home Page', async t => {
  await t
    .expect(headerTitle.innerText).eql('iNEWS!')
  await t
    .expect(bodyTitle.innerText).eql('About iNews')
})

test('Signup', async t => {
  await t
    .click(signup)
    .typeText(name, 'test')
    .typeText(email, 'test@test.com')
    .typeText(password, 'test')
    .click(signupBtn)
    .expect(linkTitle.innerText).eql('Checkout links to latest happenings around you!')
})
