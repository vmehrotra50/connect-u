import secrets

class User:
    token = 0
    name = ""
    friends = []

    def __init__(self, token, name, friends):
        self.token = token
        self.name = name
        self.friends = friends

    @staticmethod
    def generateToken():
        return secrets.token_hex(16)