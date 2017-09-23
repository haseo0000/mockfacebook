function Auth(authService){
  this.authService = authService

  this.signInWithFacebook = (phone,password) => {
    return this.authService(phone, password)
  }
}

test('Mock with 1 should return 1', () => {
  const mockFn = jest.fn(1)
      .mockReturnValue(1)

  expect(mockFn(1)).toBe(1)
  expect(mockFn).toBeCalledWith(1)
})

test('Signin with valid credential should pass', () => {
const returnObject = {
  name: 'Nantapob',
  facebookId: '963852741',
  email: 'nantapob007@hotmail.com'
}

 const mockFacebook = jest.fn('0827144770','785429185')
    .mockReturnValue(returnObject)

    let app = new Auth(mockFacebook)
    let value = app.signInWithFacebook('0827144770','785429185')

    expect(value).toEqual(returnObject)
    expect(mockFacebook).toBeCalled()
    expect(mockFacebook).toBeCalledWith('0827144770','785429185')
})
