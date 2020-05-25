import { Before } from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.visit('http://localhost:3000/')
})