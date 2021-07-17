require('jest-fetch-mock').enableMocks()
const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
const { System } = require('systemjs');
Enzyme.configure({ adapter: new Adapter() });
global.systemRegister = System.register;