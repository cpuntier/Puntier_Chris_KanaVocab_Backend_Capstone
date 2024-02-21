# KanaVoab Ver C Back End

Frontend Deployed Live Link: https://splendid-kheer-1d4f7c.netlify.app/
Backend Deployed Live Link :https://puntier-chris-kanavocab-backend-capstone.onrender.com/


---
### Steps to use
1. Clone repository
2. In the backend directory run an "npm i" command
3. Once all dependencies are installed run "npm run dev"

---
### Dependencies Used
- CORS
- dotenv
- express
- mongoose
---
##### This API is meant to support the front end side in providing data on Hiragana, Katakana, and user provided flashcard information.

There are three models associated with this API

# 1. Hiragana and Katakana
- Both models are identical and contain fields en_romaji, jp_kana, row, and column
- en_romaji and jp_kana are used in order to provide the translation data
- row and column are used for sorting the characters in their appropriate charts

# 2. Flashcard
- The flashcard model is used to provide data on the user generated flash cards
- Contains fields en_side, jp_side and group_name
- en_side should contain an english word and jp_side should contain the appropriate translation and vice versa.
- Group_name is used in order to categorize what other flashcards a flashcard should be grouped up with.

---
# Endpoints
 - each model has appropriate endpoints at "/hiragana", "/katakana", and "/flashcards"
 - Each of those endpoints have a get and post request at the "/ path that allows the user to get all available information and add new info respectfully
 - A delete route is also included at the "/:id" route where the id is provided into the endpoint
 - The flashcard model also has a "/groups" endpoint that provides data on all the distinct groups in the collection

