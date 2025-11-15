describe('Login form', () => {
  beforeEach(() => {
    // Her testten önce login sayfasına git
    cy.visit('/login')
  })

  it('Başarılı form doldurulduğunda submit eder ve success sayfasını açar', () => {
    cy.get('input#email').type('valid@example.com')
    cy.get('input#password').type('StrongP@ssw0rd!')
    cy.get('input[type="checkbox"]').check()

    cy.get('button[type="submit"]').should('not.be.disabled').click()

    cy.url().should('include', '/success')
    cy.contains('Başarılı!').should('be.visible')
  })

  it('Email yanlış: 1 hata mesajı, doğru mesaj, buton disabled', () => {
    cy.get('input#email').type('invalid-email').blur()
    cy.get('input#password').type('StrongP@ssw0rd!')
    cy.get('input[type="checkbox"]').check()

    cy.get('small').contains('Geçerli bir e-posta girin').should('be.visible')
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('Email ve password yanlış: 2 hata mesajı ve password hata mesajı görünür', () => {
    cy.get('input#email').type('invalid-email').blur()
    cy.get('input#password').type('weak').blur()

    cy.get('small').contains('Geçerli bir e-posta girin').should('be.visible')
    cy.get('small')
      .contains('Şifre en az 8 karakter')
      .should('be.visible')

    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('Email ve password doğru ama kuralları kabul etmedim: buton disabled', () => {
    cy.get('input#email').type('valid@example.com')
    cy.get('input#password').type('StrongP@ssw0rd!')
    // checkbox işaretlenmiyor

    cy.get('button[type="submit"]').should('be.disabled')
    cy.get('small').contains('Kuralları kabul etmelisiniz').should('be.visible')
  })
})
    