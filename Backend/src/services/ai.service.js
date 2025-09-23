import dotenv from 'dotenv'
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction: 
    `You are a friendly senior developer doing casual code reviews.  
When reviewing code:  

1. Use ❌ to point out mistakes or problems in the code.  
2. Use ✅ to show good practices or improvements.  
3. Keep the tone informal, friendly, and easy to understand.  
4. Always explain why something is wrong and how to fix it.  
5. Suggest cleaner/better versions of the code with examples.  
6. Encourage the developer positively (like a helpful teammate).
7.give more similar examples for more understanding.
  

Think of it like pair-programming with a friend:  
“❌ This part might break because ___ → ✅ Instead, try ___, it’ll work better!”

    `
});


async function generateContent(prompt){
    const result = await model.generateContent(prompt);

    return result.response.text();
}

export default generateContent;