const express = require('express')
const cors = require('cors')
const bodayParser = require('body-parser')

// const client = new openai.Auth({ api_key: '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' });
// const openai = require('openai');
// const client = new openai({ apiKey: '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' });

const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({ apiKey: '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' })
const client = new OpenAIApi(config)

const app = express()
app.use(bodayParser.json())
app.use(cors())

const p1 = "I am a {{age}} year old {{gender}} from {{nationality}} with a income of {{currency}}{{income}} per {{income_frequency}} " +
    "and expenses of {{currency}}{{expense}} per {{expense_frequency}}. I am considering purchasing a {{buy}}," +
    "I have a saving of {{currency}}{{savings}}, which i can use for this purchase and I would like to know if it would be a wise decision or not." +
    "If yes, howmuch i can spend montly for it and its alied expenses? what could be my monthly loan payment i can afford for it? and what could be the price range for this i can look?" +
    "Suggest like a financial advisor with numbers to the best you can."
// const new_p1 = "I am a {{age}} year old {{gender}} from {{nationality}} with an income of {{currency}}{{income}} per {{income_frequency}} and"+
// " expenses of {{currency}}{{expense}} per {{expense_frequency}}. I am considering purchasing a {{buy}} with a budget of Rs2000000 from my savings. However, I also need to take into account other financial obligations, such as loans and debts. Based on my financial situation, can you advise me on whether this purchase is feasible and, if so, what would be a suitable monthly spending limit for the car and its associated expenses? What could be the monthly loan payment that I can afford for it, considering the loan term and interest rate? Also, please provide a recommended price range for the car based on my financial goals and priorities. Please provide your recommendations as a financial advisor, with detailed calculations and explanations
const p2 = "Let me share my expenses in detail." +
    "my housing expenses: {{currency}} {{housingExpenses}} per {{housingExpenses_frequency}}," +
    " Utilities: {{currency}} {{utilities}} per {{utilities_frequency}}," +
    " food: {{currency}} {{food}} per {{food_frequency}}," +
    " transportation: {{currency}} {{transportation}} per {{transportation_frequency}}," +
    " Child care: {{currency}} {{childCare}} per {{childCare_frequency}}," +
    " Education: {{currency}} {{education}} per {{education_frequency}}," +
    " Health Care: {{currency}} {{healthCare}} per {{healthCare_frequency}}," +
    " personal care: {{currency}} {{personalCare}} per {{personalCare_frequency}}," +
    " entertainment: {{currency}} {{entertainment}} per {{entertainment_frequency}}," +
    " Gifts and Donation: {{currency}} {{giftsAndDonations}} per {{giftsAndDonations_frequency}}" +
    " Saving: {{currency}} {{miscSavings}} per {{miscSavings_frequency}} and" +
    " Taxes {{currency}} {{taxes}} per {{taxes_frequency}}." +
    " As my personal AI financial advisor could you analyze my expenses and advise me how could i reframe my expenses" +
    " if you go for my {{buy}} purchase. Could you make me a budget with my expense, find out areas where i can reduce expense and include projected expense which may raise due to the purchase of {{buy}}"
app.post("/chatwithopenai", async (request, response) => {
    // console.log("prompt", prompt)
    try {
        const { page, taxes_frequency, taxes, miscSavings_frequency, miscSavings, giftsAndDonations_frequency, giftsAndDonations, entertainment_frequency, entertainment, personalCare_frequency, personalCare, healthCare_frequency, healthCare, education_frequency, education, childCare_frequency, childCare, transportation_frequency, transportation, food_frequency, food, utilities_frequency, utilities, housingExpenses, housingExpenses_frequency, age, gender, nationality, currency, income, income_frequency, expense, expense_frequency, buy, savings } = request.body
        const prompt2 = p2.replace(/{{currency}}/g, currency).replace(/{{housingExpenses}}/g, housingExpenses)
            .replace(/{{housingExpenses_frequency}}/g, housingExpenses_frequency).replace(/{{utilities}}/g, utilities)
            .replace(/{{utilities_frequency}}/g, utilities_frequency).replace(/{{food}}/g, food)
            .replace(/{{food_frequency}}/g, food_frequency).replace(/{{buy}}/g, buy)
            .replace(/{{transportation}}/g, transportation).replace(/{{transportation_frequency}}/g, transportation_frequency)
            .replace(/{{childCare}}/g, childCare).replace(/{{childCare_frequency}}/g, childCare_frequency)
            .replace(/{{education}}/g, education).replace(/{{education_frequency}}/g, education_frequency)
            .replace(/{{healthCare}}/g, healthCare).replace(/{{healthCare_frequency}}/g, healthCare_frequency)
            .replace(/{{personalCare}}/g, personalCare).replace(/{{personalCare_frequency}}/g, personalCare_frequency)
            .replace(/{{entertainment}}/g, entertainment).replace(/{{entertainment_frequency}}/g, entertainment_frequency)
            .replace(/{{giftsAndDonations}}/g, giftsAndDonations).replace(/{{giftsAndDonations_frequency}}/g, giftsAndDonations_frequency)
            .replace(/{{miscSavings}}/g, miscSavings).replace(/{{miscSavings_frequency}}/g, miscSavings_frequency)
            .replace(/{{taxes}}/g, taxes).replace(/{{taxes_frequency}}/g, taxes_frequency)

        const prompt1 = p1.replace(/{{age}}/g, age)
            .replace(/{{gender}}/g, gender)
            .replace(/{{nationality}}/g, nationality)
            .replace(/{{currency}}/g, currency)
            .replace(/{{income}}/g, income)
            .replace(/{{income_frequency}}/g, income_frequency)
            .replace(/{{expense}}/g, expense)
            .replace(/{{expense_frequency}}/g, expense_frequency)
            .replace(/{{buy}}/g, buy)
            .replace(/{{savings}}/g, savings)

        const prompt = {
            "page1": prompt1,
            "page2": prompt1 + " " + prompt2
        }

        console.log(prompt)
        client.createCompletion({
            prompt: prompt[page],
            model: 'text-davinci-003',
            max_tokens: 512,
            temperature: 0,
        }).then(res => {
            response.send(res.data.choices[0].text)
        }).catch(console.error);
    } catch (err) {
        console.log(err)
    }

})

const port = 8080

app.listen(port, () => { console.log(`Listening to port ${port}`) })