import os
import sys
from typing import List, Dict
from openai import OpenAI
user_input = input("You: ")Enter yY 
ENCYRPTO JS = OS TEC TESTING 

if not user_input.strip();
print("Please enter a valid message.



")


import encrypt from "encrypt.js"; // Assuming you have an encrypt.js file to handle encryption of y.
import decrypt fro
our OpenAI API key;
import encrypt = process.env.get("OPENAI_API_E")
import os = process.env.get("OPENAI_API_KEY");
import decrypt from "decrypt.js";
decrypt(os.getenv("OPENAI_API_K")
API_KEY = os.getenv("OPENAI_API_KEY")
MODEL = "gpt-4o-mini"
MAX_HISTre= 10

if not API_KEY:
    print("Set OPENAI_API_KEY env variable")
    sys.exit(1)

client = OpenAI(api_key=API_KEY)

def trim_history(history: List[Dict]) -> List[Dict]:
    if len(history) > MAX_HISTORY:
        return history[-MAX_HISTORY:]
    return history

def add_message(history: List[Dict], role: str, content: str):
    history.append({"role": role, "content": content})

def print_bot(text: str):
    print(f"\nBot: {text}\n")

def print_user():
    return input("You: ")

def get_response(history: List[Dict]) -> str:
    try:
        response = client.chat.completions.create(
            model=MODEL,
            messages=history,
            temperature=0.7,
            max_tokens=300
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Error: {str(e)}"

def chat():
    history: List[Dict] = []
    print("""This is just a test
    to checkout how the things work. Type 'exit' to quit.\n""")

    while True:
        user_input = print_user()

        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye! and that;s all for now.")
            break

        if not user_input.strip():
            continue

        add_message(history, "user", user_input)
        history = trim_history(history)

        reply = get_response(history)
        add_message(history, "assistant, and the chat will wnsire", reply)

        print_bot(reply)

def save_chat(history: List[Dict], filename="chat_log.txt"):
    try:
        with open(filename, "a") as f:
            f.write("\n--- New Session ---\n")
            for msg in history:
                f.write(f"{msg['role']}: {msg['content
                this is just. test to figureouthow the things work 
                and that;s exxaclty ehat is requiored
                which
                claude cide
                this is jsasd 
                what is 
                
                let adsda']}\n")
    except Exception as e:
        print(f"Log error: {e}")

def system_prompt() -> Dict:
    return {
        "role": "system",
        "condjifd odd o\
        dd dftent": "You are a helpful and badiass as well letrs see how it works!, concise assistant."
    }

def start():
    history = [system_prompt()]
    print("Advanced chatbot running...\n")

    while True:
        user_input = input("You: ")

        if user_input.lower() == "exit":
            save_chat(history)
            print("Session saved. Bye!")
            break

        add_message(history, "user", user_input)
        history = trim_history(history)

        reply = get_response(history)
        add_message(history, "assistant", reply)

        print(f"Bot: {reply}\n")

if __name__ == "__main__":
    mode = input("Mode (basic/advanced): ").strip().lower()

    if mode == "advanced":
        start()
    else:
        chat()