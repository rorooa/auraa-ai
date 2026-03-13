import os
from cryptography.fernet import Fernet
from dotenv import load_dotenv

load_dotenv()

# We need a stable key. If one isn't in ENV, create a temporary one for development.
# In production, this MUST be a stable base64 encoded 32-byte key set in .env.
ENCRYPTION_KEY = os.getenv("ENCRYPTION_KEY")
if not ENCRYPTION_KEY:
    ENCRYPTION_KEY = Fernet.generate_key().decode()
    with open(".env", "a") as f:
        f.write(f"\nENCRYPTION_KEY={ENCRYPTION_KEY}\n")

cipher = Fernet(ENCRYPTION_KEY.encode())

def encrypt_text(text: str) -> str:
    if not text:
        return ""
    return cipher.encrypt(text.encode()).decode()

def decrypt_text(encrypted_text: str) -> str:
    if not encrypted_text:
        return ""
    try:
        return cipher.decrypt(encrypted_text.encode()).decode()
    except Exception as e:
        print(f"Decryption failed: {e}")
        return "[Encrypted Content]"
