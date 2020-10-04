from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

english_bot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(english_bot)
trainer.train("chatterbot.corpus.english")

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
