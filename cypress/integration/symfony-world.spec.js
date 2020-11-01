// describe = like a frame to structure your test fine, important for hooks
describe('Check symfony world site', () => {

    // Hook?
    beforeEach(() => {
        cy.visit('/');
    });

    // Actual test, see if my session can be found at the Schedule
    it('should find this session', function () {

        // I like to use these assertion to wait for changes in the UI
        // Here: that the site is fully loaded
        cy.get('nav a[href="/2020-world/schedule"]').should('be.visible');

        // Navigate to schedule
        cy.get('nav a[href="/2020-world/schedule"]').click();

        // Scroll to session and check its heading
        cy.get('#session-460').scrollIntoView();
        cy.get('#session-460').should('be.visible');
        cy.get('#session-460 h3').contains('Symfony meets Cypress');
    });
});