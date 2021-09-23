const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  it('Verify callback "test" return "TEST"', (done) => {
      uppercase('teste' , (str) => {
          try {
              expect(str).toBe('TESTE');
              done()
          } catch (error) {
              done(error)
          }
        });
  });
