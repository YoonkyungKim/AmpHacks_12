from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

english_bot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(english_bot)
trainer.train("Hello!",
        "Good to see you again!",
        "Hi there, how can I help?")
trainer.train("Thanks for choosing RBC!",
        "See you soon!",
        "Goodbye! Please check out RBC app for any other question!",
        "Enjoy your day!")
trainer.train( "At RBC, we commit to provide you with the lowest rates on the market and we make sure we accompany you throughout the process of purchasing your home.  For more information. To get started, please check out the Mortgage Affordability Calculator at https://www.rbcroyalbank.com/mortgages/tools/mortgage-affordability-calculator/index.html or visit your nearest RBC branch!")
trainer.train(Great decision! It's never too early to invest in your future. To get started, please call 1-800-769-2560 or visit https://www.rbcdirectinvesting.com/ for more information!",
        "Great decision! It's never too early to invest in your future. To get started, please call 1-800-769-2560 or visit your nearest branch for more information!")
trainer.train( "That's amazing! If you want to learn more, please check out the Financial Education feature on  the RBC Financial Literacy program, specifically designed to teach more in-depth about personal finance: https://ca.rbcwealthmanagement.com/web/mark.taylor/financial-literacy.")



@app.route("/")
def home():
    return render_template("index.html", token="Hello Flask+React")

@app.route("/chatbot")
def chatbot():
    return render_template("index.html")   

@app.route("/education")
def education():
    return render_template("index.html")     

@app.route("/get")
def get_bot_response():
    if request.method == 'GET':
        userText = request.args.get('msg')
        if userText:
            return str(english_bot.get_response(userText)) 
        return "No user text is given"  

# @app.route("/get")
# def get_bot_response():
#     if request.method == 'GET':
#         userText = request.args.get('msg')
#         if userText:
#             return render_template(
#                 "index.html",
#                 response= str(english_bot.get_response(userText)) 
#             )
#         return "No user text is given"  

if __name__ == "__main__":
    app.run(debug=True)
